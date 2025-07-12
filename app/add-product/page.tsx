"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation"; // Import useSearchParams
import Link from "next/link";
import {
  ArrowLeft,
  Search,
  AlertTriangle,
  CheckCircle,
  Sparkles,
  Camera,
  Package,
  Plus,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import BarcodeScanner from "@/components/barcode-scanner";
import type { BaseProduct, ProductVariant } from "@/types/product"; // Import new types
import {
  useInfiniteBaseProducts,
  useCreateBaseProduct,
  useCreateVariant,
  useBaseProduct,
} from "@/hooks/use-api";
import { LoadingSpinner } from "@/components/loading-spinner";

export default function AddProductPage() {
  const router = useRouter();
  const searchParams = useSearchParams(); // Hook to read URL query parameters

  // React Query hooks
  const { data: baseProductsData, isLoading: isLoadingBaseProducts } =
    useInfiniteBaseProducts({
      limit: 100, // Fetch a large number to have all products available for search
    });
  const createBaseProductMutation = useCreateBaseProduct();
  const createVariantMutation = useCreateVariant();

  // Form data for adding a new base product
  const [newBaseProductFormData, setNewBaseProductFormData] = useState({
    name: "",
    category: "",
    createdBy: "",
  });

  // Form data for adding a new variant
  const [newVariantFormData, setNewVariantFormData] = useState({
    variantName: "",
    unit: "",
    sizeValue: "", // Can be number or string
    barcode: "",
    createdBy: "", // For the variant creator, though base product creator is also stored
  });

  const [mode, setMode] = useState<"addBaseProduct" | "addVariant">(
    "addBaseProduct"
  );
  const [selectedBaseProduct, setSelectedBaseProduct] =
    useState<BaseProduct | null>(null);
  const [baseProductSearchResults, setBaseProductSearchResults] = useState<
    BaseProduct[]
  >([]);
  const [showBaseProductDuplicateWarning, setShowBaseProductDuplicateWarning] =
    useState(false);
  const [showBarcodeScanner, setShowBarcodeScanner] = useState(false);
  // Get baseProductId from URL if present
  const baseProductIdFromUrl = searchParams.get("baseProductId");
  const { data: baseProductFromUrl } = useBaseProduct(
    baseProductIdFromUrl || ""
  );
  const categories = [
    {
      value: "ဆန်နှင့် ကောက်ပဲသီးနှံများ",
      icon: "🌾",
      color: "from-amber-400 to-yellow-500",
    },
    {
      value: "ဟင်းသီးဟင်းရွက်များ",
      icon: "🥬",
      color: "from-green-400 to-emerald-500",
    },
    { value: "သစ်သီးများ", icon: "🍎", color: "from-red-400 to-pink-500" },
    {
      value: "အသားနှင့် ငါးများ",
      icon: "🐟",
      color: "from-blue-400 to-cyan-500",
    },
    { value: "ချက်ပြုတ်ဆီ", icon: "🫗", color: "from-yellow-400 to-orange-500" },
    {
      value: "အချိုရည်နှင့် ဖျော်ရည်များ",
      icon: "🥤",
      color: "from-blue-300 to-cyan-400",
    },
    {
      value: "မုန့်နှင့် သရေစာများ",
      icon: "🍪",
      color: "from-pink-300 to-rose-400",
    },
    {
      value: "နို့ထွက်ပစ္စည်းနှင့် ကြက်ဥများ",
      icon: "🥛",
      color: "from-stone-300 to-yellow-300",
    },
    {
      value: "အေးခဲအစားအစာများ",
      icon: "🧊",
      color: "from-sky-300 to-indigo-400",
    },
    {
      value: "ကိုယ်ပိုင်စောင့်ရှောက်မှု",
      icon: "🧴",
      color: "from-teal-300 to-emerald-400",
    },
    {
      value: "ကလေးပစ္စည်းများ",
      icon: "👶",
      color: "from-purple-200 to-pink-300",
    },
    {
      value: "အိမ်သုံးပစ္စည်းများ",
      icon: "🏠",
      color: "from-purple-400 to-violet-500",
    },
    { value: "လောင်စာဆီ", icon: "⛽", color: "from-gray-400 to-slate-500" },
    { value: "အခြားများ", icon: "📦", color: "from-indigo-400 to-blue-500" },
  ];

  const units = [
    "ကီလို",
    "ပိဿာ",
    "ပေါင်",
    "အိတ်",
    "ပုလင်း",
    "လီတာ",
    "ဂါလံ",
    "လုံး",
    "ထုပ်",
    "ဘူး",
    "ဗူး",
    "အတွဲ",
    "ခု",
    "မီလီလီတာ",
    "ဂရမ်",
  ];

  // Load saved user name
  useEffect(() => {
    const savedUserName = localStorage.getItem("userName");
    if (savedUserName) {
      setNewBaseProductFormData((prev) => ({
        ...prev,
        createdBy: savedUserName,
      }));
      setNewVariantFormData((prev) => ({ ...prev, createdBy: savedUserName }));
    }
  }, []);

  // Set selected base product from URL if available
  useEffect(() => {
    if (baseProductFromUrl && !selectedBaseProduct) {
      setSelectedBaseProduct(baseProductFromUrl);
      setMode("addVariant");
    }
  }, [baseProductFromUrl, selectedBaseProduct]);

  // Handle search for existing base products when adding a variant
  useEffect(() => {
    if (
      mode === "addVariant" &&
      !selectedBaseProduct &&
      newBaseProductFormData.name.trim().length > 2
    ) {
      // Get all base products from all pages
      const allBaseProducts =
        baseProductsData?.pages.flatMap((page) => page.data) || [];

      const results = allBaseProducts.filter((bp) =>
        bp.name
          .toLowerCase()
          .includes(newBaseProductFormData.name.toLowerCase())
      );
      setBaseProductSearchResults(results);
      setShowBaseProductDuplicateWarning(results.length > 0);
    } else {
      setBaseProductSearchResults([]);
      setShowBaseProductDuplicateWarning(false);
    }
  }, [
    newBaseProductFormData.name,
    baseProductsData,
    mode,
    selectedBaseProduct,
  ]);

  const handleAddBaseProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !newBaseProductFormData.name ||
      !newBaseProductFormData.category ||
      !newBaseProductFormData.createdBy
    ) {
      alert("ကျေးဇူးပြု၍ အားလုံးကို ဖြည့်ပါ");
      return;
    }

    localStorage.setItem("userName", newBaseProductFormData.createdBy.trim());

    try {
      // Create base product using mutation
      const newBaseProduct = await createBaseProductMutation.mutateAsync({
        name: newBaseProductFormData.name.trim(),
        category: newBaseProductFormData.category,
        createdBy: newBaseProductFormData.createdBy.trim(),
      });

      // Automatically create a default variant for the new base product
      // await createVariantMutation.mutateAsync({
      //   baseProductId: newBaseProduct.id,
      //   variantName: `${newBaseProduct.name} (Default)`,
      //   unit: "ခု",
      //   createdBy: newBaseProductFormData.createdBy.trim(),
      // });

      router.push(`/base-product/${newBaseProduct.id}`); // Navigate to the new base product's detail page
    } catch (error) {
      console.error("Error creating product:", error);
      alert("ကုန်ပစ္စည်း ဖန်တီးရာတွင် အမှားရှိသည်။ ထပ်စမ်းကြည့်ပါ။");
    }
  };

  const handleAddVariantSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !selectedBaseProduct ||
      !newVariantFormData.variantName ||
      !newVariantFormData.unit ||
      !newVariantFormData.createdBy
    ) {
      alert("ကျေးဇူးပြု၍ အားလုံးကို ဖြည့်ပါ");
      return;
    }

    localStorage.setItem("userName", newVariantFormData.createdBy.trim());

    try {
      // Create variant using mutation
      const newVariant = await createVariantMutation.mutateAsync({
        baseProductId: selectedBaseProduct.id,
        variantName: newVariantFormData.variantName.trim(),
        unit: newVariantFormData.unit,
        sizeValue: newVariantFormData.sizeValue
          ? Number.parseFloat(newVariantFormData.sizeValue)
          : undefined,
        barcode: newVariantFormData.barcode.trim() || undefined,
        createdBy: newVariantFormData.createdBy.trim(),
      });

      router.push(`/variant/${newVariant.id}`); // Navigate to the new variant's detail page
    } catch (error) {
      console.error("Error creating variant:", error);
      alert("အမျိုးအစား ဖန်တီးရာတွင် အမှားရှိသည်။ ထပ်စမ်းကြည့်ပါ။");
    }
  };

  const handleBarcodeDetected = (barcode: string) => {
    setNewVariantFormData((prev) => ({ ...prev, barcode }));
    setShowBarcodeScanner(false);
  };

  const selectedCategory = categories.find(
    (cat) => cat.value === newBaseProductFormData.category
  );

  // Show loading state while fetching base products
  if (isLoadingBaseProducts) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner size="lg" className="mx-auto mb-4" />
          <p className="text-gray-600">ဒေတာများ ဖွင့်နေသည်...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 p-2"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2">
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
                {mode === "addBaseProduct"
                  ? "ကုန်ပစ္စည်း အသစ်ထည့်ရန်"
                  : "အမျိုးအစား အသစ်ထည့်ရန်"}
              </h1>
              <p className="text-xs sm:text-sm text-primary-100">
                သင့်ရပ်ရွာကို စျေးနှုန်း ခြေရာခံရာတွင် ကူညီပါ
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-3 py-4 sm:px-4 sm:py-6">
        <Card className="max-w-2xl mx-auto glass-card shadow-2xl">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-lg sm:text-xl md:text-2xl gradient-text">
              {mode === "addBaseProduct"
                ? "ကုန်ပစ္စည်း အချက်အလက်များ"
                : "အမျိုးအစား အချက်အလက်များ"}
            </CardTitle>
            <p className="text-sm sm:text-base text-gray-600">
              {mode === "addBaseProduct"
                ? "လူထု စျေးနှုန်း ခြေရာခံရန် ကုန်ပစ္စည်း အသစ် ဖန်တီးပါ"
                : "ရှိပြီးသား ကုန်ပစ္စည်းအတွက် အမျိုးအစား အသစ် ထည့်ပါ"}
            </p>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="flex justify-center gap-4 mb-6">
              <Button
                variant={mode === "addBaseProduct" ? "default" : "outline"}
                onClick={() => {
                  setMode("addBaseProduct");
                  setSelectedBaseProduct(null);
                  setNewBaseProductFormData((prev) => ({ ...prev, name: "" })); // Clear search
                }}
                className={
                  mode === "addBaseProduct"
                    ? "bg-primary-500 hover:bg-primary-600 text-white"
                    : ""
                }
              >
                <Plus className="h-4 w-4 mr-2" /> ကုန်ပစ္စည်း အသစ်
              </Button>
              <Button
                variant={mode === "addVariant" ? "default" : "outline"}
                onClick={() => setMode("addVariant")}
                className={
                  mode === "addVariant"
                    ? "bg-primary-500 hover:bg-primary-600 text-white"
                    : ""
                }
              >
                <Package className="h-4 w-4 mr-2" /> အမျိုးအစား အသစ်
              </Button>
            </div>

            {mode === "addBaseProduct" && (
              <form
                onSubmit={handleAddBaseProductSubmit}
                className="space-y-4 sm:space-y-6"
              >
                {/* Product Name */}
                <div className="space-y-2 sm:space-y-3">
                  <Label
                    htmlFor="baseProductName"
                    className="text-sm sm:text-base font-semibold text-gray-700"
                  >
                    ကုန်ပစ္စည်း အမည် *
                  </Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    <Input
                      id="baseProductName"
                      placeholder="ဥပမာ - ရွှေဘိုဆန်၊ ကြက်သွန်နီ၊ ထန်းလျက်ဆီ"
                      value={newBaseProductFormData.name}
                      onChange={(e) =>
                        setNewBaseProductFormData({
                          ...newBaseProductFormData,
                          name: e.target.value,
                        })
                      }
                      className="pl-10 sm:pl-12 py-2 sm:py-3 text-sm sm:text-base border-2 rounded-xl focus:border-primary-400 focus:ring-2 sm:focus:ring-4 focus:ring-primary-100"
                    />
                  </div>
                  {showBaseProductDuplicateWarning && (
                    <Alert className="border-amber-200 bg-amber-50">
                      <AlertTriangle className="h-4 w-4 text-amber-600" />
                      <AlertDescription className="text-amber-800 text-sm">
                        <strong>ဆင်တူ ကုန်ပစ္စည်းများ တွေ့ရှိ!</strong>{" "}
                        သင့်ကုန်ပစ္စည်း ရှိပြီးသား ဖြစ်မဖြစ် စစ်ကြည့်ပါ:
                        <div className="mt-2 sm:mt-3 space-y-1 sm:space-y-2">
                          {baseProductSearchResults
                            .slice(0, 3)
                            .map((product) => (
                              <Link
                                key={product.id}
                                href={`/base-product/${product.id}`}
                              >
                                <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white rounded-lg border border-amber-200 hover:border-amber-300 transition-colors">
                                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                                  <div>
                                    <p className="font-medium text-gray-800 text-sm sm:text-base">
                                      {product.name}
                                    </p>
                                    <p className="text-xs sm:text-sm text-gray-500">
                                      {product.category}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            ))}
                        </div>
                      </AlertDescription>
                    </Alert>
                  )}
                </div>

                {/* Category */}
                <div className="space-y-2 sm:space-y-3">
                  <Label
                    htmlFor="category"
                    className="text-sm sm:text-base font-semibold text-gray-700"
                  >
                    အမျိုးအစား *
                  </Label>
                  <Select
                    value={newBaseProductFormData.category}
                    onValueChange={(value) =>
                      setNewBaseProductFormData({
                        ...newBaseProductFormData,
                        category: value,
                      })
                    }
                  >
                    <SelectTrigger className="py-2 sm:py-3 text-sm sm:text-base border-2 rounded-xl focus:border-primary-400">
                      <SelectValue placeholder="အမျိုးအစား ရွေးပါ" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem
                          key={category.value}
                          value={category.value}
                          className="py-2 sm:py-3"
                        >
                          <div className="flex items-center gap-2 sm:gap-3">
                            <span className="text-base sm:text-lg">
                              {category.icon}
                            </span>
                            <span className="font-medium text-sm sm:text-base">
                              {category.value}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {selectedCategory && (
                    <div
                      className={`p-3 sm:p-4 rounded-xl bg-gradient-to-r ${selectedCategory.color} text-white`}
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-lg sm:text-2xl">
                          {selectedCategory.icon}
                        </span>
                        <div>
                          <p className="font-semibold text-sm sm:text-base">
                            {selectedCategory.value}
                          </p>
                          <p className="text-xs sm:text-sm opacity-90">
                            စျေးနှုန်း ခြေရာခံရန် ကောင်းမွန်သော ရွေးချယ်မှု!
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Creator Name */}
                <div className="space-y-2 sm:space-y-3">
                  <Label
                    htmlFor="createdByBase"
                    className="text-sm sm:text-base font-semibold text-gray-700"
                  >
                    သင့်အမည် *
                  </Label>
                  <Input
                    id="createdByBase"
                    placeholder="သင့်အမည် ရိုက်ထည့်ပါ"
                    value={newBaseProductFormData.createdBy}
                    onChange={(e) =>
                      setNewBaseProductFormData({
                        ...newBaseProductFormData,
                        createdBy: e.target.value,
                      })
                    }
                    className="py-2 sm:py-3 text-sm sm:text-base border-2 rounded-xl focus:border-primary-400 focus:ring-2 sm:focus:ring-4 focus:ring-primary-100"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={createBaseProductMutation.isPending}
                  className="w-full py-3 sm:py-4 text-sm sm:text-base font-semibold bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 shadow-lg rounded-xl disabled:opacity-50"
                >
                  {createBaseProductMutation.isPending ? (
                    <>
                      <LoadingSpinner size="sm" className="mr-2" />
                      ဖန်တီးနေသည်...
                    </>
                  ) : (
                    "ကုန်ပစ္စည်း ဖန်တီးရန်"
                  )}
                </Button>
              </form>
            )}

            {mode === "addVariant" && (
              <form
                onSubmit={handleAddVariantSubmit}
                className="space-y-4 sm:space-y-6"
              >
                {/* Select Base Product */}
                <div className="space-y-2 sm:space-y-3">
                  <Label
                    htmlFor="selectBaseProduct"
                    className="text-sm sm:text-base font-semibold text-gray-700"
                  >
                    ကုန်ပစ္စည်း ရွေးပါ *
                  </Label>
                  {selectedBaseProduct ? (
                    <div className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <div className="flex items-center gap-3">
                        <Package className="h-5 w-5 text-primary-500" />
                        <div>
                          <p className="font-semibold text-gray-800 text-sm sm:text-base">
                            {selectedBaseProduct.name}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-500">
                            {selectedBaseProduct.category}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedBaseProduct(null)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                        <Input
                          id="searchBaseProduct"
                          placeholder="ရှိပြီးသား ကုန်ပစ္စည်း ရှာပါ..."
                          value={newBaseProductFormData.name} // Re-using this for search input
                          onChange={(e) =>
                            setNewBaseProductFormData({
                              ...newBaseProductFormData,
                              name: e.target.value,
                            })
                          }
                          className="pl-10 sm:pl-12 py-2 sm:py-3 text-sm sm:text-base border-2 rounded-xl focus:border-primary-400 focus:ring-2 sm:focus:ring-4 focus:ring-primary-100"
                        />
                      </div>
                      {baseProductSearchResults.length > 0 && (
                        <div className="mt-2 space-y-1">
                          {baseProductSearchResults
                            .slice(0, 5)
                            .map((product) => (
                              <Button
                                key={product.id}
                                variant="ghost"
                                className="w-full justify-start text-left py-2 px-3 text-sm sm:text-base hover:bg-gray-100"
                                onClick={() => {
                                  setSelectedBaseProduct(product);
                                  setNewBaseProductFormData((prev) => ({
                                    ...prev,
                                    name: "",
                                  })); // Clear search input
                                  setBaseProductSearchResults([]);
                                }}
                              >
                                <Package className="h-4 w-4 mr-2 text-gray-500" />
                                {product.name} ({product.category})
                              </Button>
                            ))}
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Variant Name */}
                <div className="space-y-2 sm:space-y-3">
                  <Label
                    htmlFor="variantName"
                    className="text-sm sm:text-base font-semibold text-gray-700"
                  >
                    အမျိုးအစား အမည် *
                  </Label>
                  <Input
                    id="variantName"
                    placeholder="ဥပမာ - 300ml ပုလင်း၊ 5kg အိတ်၊ 100g ထုပ်"
                    value={newVariantFormData.variantName}
                    onChange={(e) =>
                      setNewVariantFormData({
                        ...newVariantFormData,
                        variantName: e.target.value,
                      })
                    }
                    className="py-2 sm:py-3 text-sm sm:text-base border-2 rounded-xl focus:border-primary-400 focus:ring-2 sm:focus:ring-4 focus:ring-primary-100"
                  />
                  <p className="text-xs sm:text-sm text-gray-500">
                    ဤကုန်ပစ္စည်း၏ သီးခြားပုံစံကို ဖော်ပြပါ (ဥပမာ- အရွယ်အစား၊
                    ထုပ်ပိုးမှု)
                  </p>
                </div>

                {/* Unit */}
                <div className="space-y-2 sm:space-y-3">
                  <Label
                    htmlFor="unit"
                    className="text-sm sm:text-base font-semibold text-gray-700"
                  >
                    တိုင်းတာမှု ယူနစ် *
                  </Label>
                  <Select
                    value={newVariantFormData.unit}
                    onValueChange={(value) =>
                      setNewVariantFormData({
                        ...newVariantFormData,
                        unit: value,
                      })
                    }
                  >
                    <SelectTrigger className="py-2 sm:py-3 text-sm sm:text-base border-2 rounded-xl focus:border-primary-400">
                      <SelectValue placeholder="ဤအမျိုးအစားကို ဘယ်လို ရောင်းသလဲ?" />
                    </SelectTrigger>
                    <SelectContent>
                      {units.map((unit) => (
                        <SelectItem key={unit} value={unit} className="py-2">
                          <span className="font-medium text-sm sm:text-base">
                            {unit}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Size Value (Optional) */}
                <div className="space-y-2 sm:space-y-3">
                  <Label
                    htmlFor="sizeValue"
                    className="text-sm sm:text-base font-semibold text-gray-700"
                  >
                    ပမာဏ/အရွယ်အစား (ရွေးချယ်ခွင့်ရှိ)
                  </Label>
                  <Input
                    id="sizeValue"
                    type="number"
                    placeholder="ဥပမာ - 300 (မီလီလီတာအတွက်), 5 (ကီလိုအတွက်)"
                    value={newVariantFormData.sizeValue}
                    onChange={(e) =>
                      setNewVariantFormData({
                        ...newVariantFormData,
                        sizeValue: e.target.value,
                      })
                    }
                    className="py-2 sm:py-3 text-sm sm:text-base border-2 rounded-xl focus:border-primary-400 focus:ring-2 sm:focus:ring-4 focus:ring-primary-100"
                  />
                  <p className="text-xs sm:text-sm text-gray-500">
                    ယူနစ်နှင့် ကိုက်ညီသော အရေအတွက် သို့မဟုတ် အရွယ်အစားကို ထည့်ပါ
                  </p>
                </div>

                {/* Barcode Field */}
                <div className="space-y-2 sm:space-y-3">
                  <Label
                    htmlFor="barcode"
                    className="text-sm sm:text-base font-semibold text-gray-700"
                  >
                    ဘားကုဒ် (ရွေးချယ်ခွင့်ရှိ)
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="barcode"
                      placeholder="ဘားကုဒ် ရိုက်ထည့်ပါ သို့မဟုတ် စကင်န်ဖတ်ပါ"
                      value={newVariantFormData.barcode}
                      onChange={(e) =>
                        setNewVariantFormData({
                          ...newVariantFormData,
                          barcode: e.target.value,
                        })
                      }
                      className="flex-1 py-2 sm:py-3 text-sm sm:text-base border-2 rounded-xl focus:border-primary-400 focus:ring-2 sm:focus:ring-4 focus:ring-primary-100"
                    />
                    <Button
                      type="button"
                      onClick={() => setShowBarcodeScanner(true)}
                      className="px-3 sm:px-4 py-2 sm:py-3 bg-secondary-500 hover:bg-secondary-600 text-white rounded-xl"
                    >
                      <Camera className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500">
                    စက်မှုလုပ်ငန်း ကုန်ပစ္စည်းများအတွက် ဘားကုဒ် ထည့်ပါ
                  </p>
                </div>

                {/* Creator Name */}
                <div className="space-y-2 sm:space-y-3">
                  <Label
                    htmlFor="createdByVariant"
                    className="text-sm sm:text-base font-semibold text-gray-700"
                  >
                    သင့်အမည် *
                  </Label>
                  <Input
                    id="createdByVariant"
                    placeholder="သင့်အမည် ရိုက်ထည့်ပါ"
                    value={newVariantFormData.createdBy}
                    onChange={(e) =>
                      setNewVariantFormData({
                        ...newVariantFormData,
                        createdBy: e.target.value,
                      })
                    }
                    className="py-2 sm:py-3 text-sm sm:text-base border-2 rounded-xl focus:border-primary-400 focus:ring-2 sm:focus:ring-4 focus:ring-primary-100"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={
                    !selectedBaseProduct || createVariantMutation.isPending
                  }
                  className="w-full py-3 sm:py-4 text-sm sm:text-base font-semibold bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 shadow-lg rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {createVariantMutation.isPending ? (
                    <>
                      <LoadingSpinner size="sm" className="mr-2" />
                      ဖန်တီးနေသည်...
                    </>
                  ) : (
                    "အမျိုးအစား ဖန်တီးရန်"
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
        {showBarcodeScanner && (
          <BarcodeScanner
            onDetected={handleBarcodeDetected}
            onClose={() => setShowBarcodeScanner(false)}
          />
        )}
      </main>
    </div>
  );
}
