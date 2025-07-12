"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Edit,
  Trash2,
  Image,
  Search,
  Plus,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { BaseProduct, ProductVariant } from "@/types/product";
import {
  useBaseProducts,
  useDeleteBaseProduct,
  useDeleteVariant,
} from "@/hooks/use-api";
import { LoadingSpinner } from "@/components/loading-spinner";

export default function AdminProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBaseProducts, setFilteredBaseProducts] = useState<
    BaseProduct[]
  >([]);
  const [expandedProducts, setExpandedProducts] = useState<Set<string>>(
    new Set()
  );

  // Fetch data using API hooks
  const { data: baseProductsData, isLoading: isLoadingBaseProducts } =
    useBaseProducts();
  // Removed the useVariants hook as we'll fetch variants per base product
  const deleteBaseProductMutation = useDeleteBaseProduct();
  const deleteVariantMutation = useDeleteVariant();

  // Extract the actual data arrays from the API responses
  const baseProducts = baseProductsData?.data || [];

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredBaseProducts(baseProducts);
    } else {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();

      // Filter base products by name
      const baseProductMatches = baseProducts.filter(
        (baseProduct) =>
          baseProduct.name.toLowerCase().includes(lowerCaseSearchTerm) ||
          baseProduct.category.toLowerCase().includes(lowerCaseSearchTerm)
      );

      setFilteredBaseProducts(baseProductMatches);
    }
  }, [searchTerm, baseProducts]);

  const toggleProductExpansion = (productId: string) => {
    setExpandedProducts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const handleDeleteBaseProduct = async (baseProductId: string) => {
    if (
      window.confirm(
        "ဤကုန်ပစ္စည်းနှင့် ၎င်း၏အမျိုးအစားများအားလုံးကို ဖျက်မှာသေချာပါသလား?"
      )
    ) {
      try {
        await deleteBaseProductMutation.mutateAsync(baseProductId);
        // The query invalidation in the mutation will automatically update the UI
      } catch (error) {
        console.error("Error deleting base product:", error);
        alert("ကုန်ပစ္စည်းဖျက်ရာတွင် အမှားရှိနေပါသည်။");
      }
    }
  };

  const handleDeleteVariant = async (variantId: string) => {
    if (window.confirm("ဤအမျိုးအစားကို ဖျက်မှာသေချာပါသလား?")) {
      try {
        await deleteVariantMutation.mutateAsync(variantId);
        // The query invalidation in the mutation will automatically update the UI
      } catch (error) {
        console.error("Error deleting variant:", error);
        alert("အမျိုးအစားဖျက်ရာတွင် အမှားရှိနေပါသည်။");
      }
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "ဆန်နှင့် ကောက်ပဲသီးနှံများ":
        "bg-amber-100 text-amber-800 border-amber-200",
      ဟင်းသီးဟင်းရွက်များ: "bg-green-100 text-green-800 border-green-200",
      သစ်သီးများ: "bg-orange-100 text-orange-800 border-orange-200",
      "အသားနှင့် ငါးများ": "bg-red-100 text-red-800 border-red-200",
      ချက်ပြုတ်ဆီ: "bg-yellow-100 text-yellow-800 border-yellow-200",
      "အချိုရည်နှင့် ဖျော်ရည်များ": "bg-blue-100 text-blue-800 border-blue-200",
      "မုန့်နှင့် သရေစာများ": "bg-pink-100 text-pink-800 border-pink-200",
      "နို့ထွက်ပစ္စည်းနှင့် ကြက်ဥများ":
        "bg-stone-100 text-stone-800 border-stone-200",
      အေးခဲအစားအစာများ: "bg-sky-100 text-sky-800 border-sky-200",
      ကိုယ်ပိုင်စောင့်ရှောက်မှု: "bg-teal-100 text-teal-800 border-teal-200",
      ကလေးပစ္စည်းများ: "bg-purple-100 text-purple-800 border-purple-200",
      အိမ်သုံးပစ္စည်းများ: "bg-blue-100 text-blue-800 border-blue-200", // Re-using blue for household
      လောင်စာဆီ: "bg-gray-100 text-gray-800 border-gray-200",
      အခြားများ: "bg-purple-100 text-purple-800 border-purple-200",
    };
    return (
      colors[category as keyof typeof colors] ||
      "bg-gray-100 text-gray-800 border-gray-200"
    );
  };

  // Show loading state while data is being fetched
  if (isLoadingBaseProducts) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-500 to-purple-500 text-white">
        <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-3">
              <Link href="/">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20 p-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <h1 className="text-lg sm:text-xl font-bold">
                Admin - ကုန်ပစ္စည်းများ စီမံခန့်ခွဲမှု
              </h1>
            </div>
            <Link href="/add-product">
              <Button
                size="sm"
                className="bg-white text-gray-800 hover:bg-gray-100 shadow-lg gap-1 sm:gap-2 text-xs sm:text-sm px-3 sm:px-4"
              >
                <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                ကုန်ပစ္စည်း အသစ်ထည့်
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-3 py-4 sm:px-4 sm:py-6 space-y-4 sm:space-y-6">
        {/* Search Section */}
        <div className="relative max-w-2xl mx-auto">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              <Input
                placeholder="ကုန်ပစ္စည်းများ ရှာရန်..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 text-sm sm:text-base border-2 border-gray-200 rounded-xl sm:rounded-2xl shadow-lg focus:border-primary-400 focus:ring-2 sm:focus:ring-4 focus:ring-primary-100 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Products List */}
        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold">ကုန်ပစ္စည်းများ</h2>

          {filteredBaseProducts.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">ကုန်ပစ္စည်းများ မရှိသေးပါ</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {filteredBaseProducts.map((baseProduct) => {
                const isExpanded = expandedProducts.has(baseProduct.id);
                return (
                  <div key={baseProduct.id} className="space-y-2">
                    <Card className="overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex-1">
                              <div
                                className="flex items-center cursor-pointer"
                                onClick={() =>
                                  toggleProductExpansion(baseProduct.id)
                                }
                              >
                                {isExpanded ? (
                                  <ChevronDown className="h-4 w-4 mr-2 text-gray-500" />
                                ) : (
                                  <ChevronRight className="h-4 w-4 mr-2 text-gray-500" />
                                )}
                                <h3 className="text-lg font-semibold">
                                  {baseProduct.name}
                                </h3>
                              </div>
                              <Badge
                                className={`${getCategoryColor(
                                  baseProduct.category
                                )} mt-1 ml-6`}
                              >
                                {baseProduct.category}
                              </Badge>
                            </div>
                            <div className="flex gap-2">
                              <Link
                                href={`/admin/products/edit-base/${baseProduct.id}`}
                              >
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="h-8 w-8 p-0"
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </Link>
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                                onClick={() =>
                                  handleDeleteBaseProduct(baseProduct.id)
                                }
                                disabled={deleteBaseProductMutation.isPending}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>

                          <div className="ml-6 text-sm text-gray-500 mt-2 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Link
                                href={`/admin/products/add-image/${baseProduct.id}`}
                              >
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="h-8 gap-1"
                                >
                                  <Image className="h-3.5 w-3.5" />
                                  ပုံထည့်ရန်
                                </Button>
                              </Link>
                              <Link href={`/base-product/${baseProduct.id}`}>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-8"
                                >
                                  ကြည့်ရှုရန်
                                </Button>
                              </Link>
                            </div>
                            <Link
                              href={`/add-product?baseProductId=${baseProduct.id}`}
                            >
                              <Button
                                size="sm"
                                className="h-8 gap-1 bg-primary-100 text-primary-700 hover:bg-primary-200"
                              >
                                <Plus className="h-3.5 w-3.5" />
                                အမျိုးအစား အသစ်ထည့်
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Variants for this base product */}
                    {isExpanded && (
                      <div className="pl-6 space-y-2">
                        {baseProduct.variants &&
                        baseProduct.variants.length > 0 ? (
                          baseProduct.variants.map(
                            (variant: ProductVariant) => (
                              <Card
                                key={variant.id}
                                className="overflow-hidden border border-gray-200 shadow-sm hover:shadow transition-shadow"
                              >
                                <CardContent className="p-0">
                                  <div className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                      <div>
                                        <h3 className="text-base font-medium">
                                          {variant.variantName}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                          {variant.sizeValue} {variant.unit}
                                        </p>
                                        {variant.barcode && (
                                          <p className="text-xs text-gray-500 mt-1">
                                            Barcode: {variant.barcode}
                                          </p>
                                        )}
                                      </div>
                                      <div className="flex gap-2">
                                        <Link
                                          href={`/admin/products/edit-variant/${variant.id}`}
                                        >
                                          <Button
                                            size="sm"
                                            variant="outline"
                                            className="h-7 w-7 p-0"
                                          >
                                            <Edit className="h-3.5 w-3.5" />
                                          </Button>
                                        </Link>
                                        <Button
                                          size="sm"
                                          variant="outline"
                                          className="h-7 w-7 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                                          onClick={() =>
                                            handleDeleteVariant(variant.id)
                                          }
                                          disabled={
                                            deleteVariantMutation.isPending
                                          }
                                        >
                                          <Trash2 className="h-3.5 w-3.5" />
                                        </Button>
                                      </div>
                                    </div>

                                    <div className="mt-2 flex flex-wrap gap-2">
                                      <Link
                                        href={`/admin/products/add-image/${variant.baseProductId}?variantId=${variant.id}`}
                                      >
                                        <Button
                                          size="sm"
                                          variant="outline"
                                          className="h-7 gap-1 text-xs"
                                        >
                                          <Image className="h-3 w-3" />
                                          ပုံထည့်ရန်
                                        </Button>
                                      </Link>
                                      <Link href={`/variant/${variant.id}`}>
                                        <Button
                                          size="sm"
                                          variant="ghost"
                                          className="h-7 text-xs"
                                        >
                                          ကြည့်ရှုရန်
                                        </Button>
                                      </Link>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            )
                          )
                        ) : (
                          <div className="text-center py-4 bg-gray-50 rounded-lg">
                            <p className="text-gray-500 text-sm">
                              အမျိုးအစားများ မရှိသေးပါ
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
