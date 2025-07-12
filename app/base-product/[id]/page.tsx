"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Plus,
  Package,
  Clock,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { BaseProduct, ProductVariant, PriceReport } from "@/types/product";
import {
  useBaseProduct,
  useVariants,
  // Remove this import
  // useLatestPriceReports,
} from "@/hooks/use-api";

export default function BaseProductPage() {
  const params = useParams();
  const router = useRouter();
  const baseProductId = params.id as string;

  // API ခေါ်ယူမှုများ
  const { data: baseProductData, isLoading: isLoadingBaseProduct } =
    useBaseProduct(baseProductId);
  const { data: variantsData, isLoading: isLoadingVariants } = useVariants({
    baseProductId,
  });
  // Replace the current price reports fetching
  // const { data: priceReportsData, isLoading: isLoadingPriceReports } =
  //   useLatestPriceReports({ baseProductId });

  // Update the useEffect
  // useEffect(() => {
  //   if (baseProductData) {
  //     setBaseProduct(baseProductData);
  //   }

  //   if (variantsData) {
  //     setProductVariants(variantsData.data || []);
  //   }

  //   if (priceReportsData) {
  //     // Now priceReportsData.data contains only the latest price report for each variant
  //     setPriceReports(priceReportsData.data || []);
  //   }
  // }, [baseProductData, variantsData, priceReportsData]);

  // Replace the getLatestPriceForVariant function with this simpler version
  // const getLatestPriceForVariant = (variantId: string) => {
  //   return (
  //     priceReports.find((report) => report.variantId === variantId) || null
  //   );
  // };

  // ဒေတာများကို state တွင် သိမ်းဆည်းခြင်း
  const [baseProduct, setBaseProduct] = useState<BaseProduct | null>(null);
  const [productVariants, setProductVariants] = useState<ProductVariant[]>([]);
  const [priceReports, setPriceReports] = useState<PriceReport[]>([]);

  // API မှ ရရှိသော ဒေတာများကို state သို့ ပြောင်းလဲခြင်း
  useEffect(() => {
    if (baseProductData) {
      setBaseProduct(baseProductData);
    }

    if (variantsData) {
      setProductVariants(variantsData.data || []);

      // Extract latest price reports from variants
      const latestReports = variantsData.data
        ?.map((variant) => variant.priceReports?.[0])
        .filter((report) => report) as PriceReport[];

      setPriceReports(latestReports || []);
    }
  }, [baseProductData, variantsData]);

  // Replace the getLatestPriceForVariant function with this simpler version
  const getLatestPriceForVariant = (variantId: string) => {
    return (
      priceReports.find((report) => report.variantId === variantId) || null
    );
  };

  // ပုံရိပ်ရယူခြင်း function ကို localStorage မှ API သို့ ပြောင်းလဲရန် လိုအပ်ပါသည်
  // ယာယီအားဖြင့် localStorage ကို ဆက်လက်အသုံးပြုထားပါသည်
  // Update the getProductImage function to use API data instead of localStorage
  const getProductImage = (id: string) => {
    // For base product, use its imageUrl directly
    if (id === baseProductId && baseProduct) {
      return baseProduct.imageUrl || null;
    }
    return null;
  };

  // const getLatestPriceForVariant = (variantId: string) => {
  //   const variantReports = priceReports
  //     .filter((report) => report.variantId === variantId)
  //     .sort(
  //       (a, b) =>
  //         new Date(b.reportedAt).getTime() - new Date(a.reportedAt).getTime()
  //     );
  //   return variantReports[0] || null;
  // };

  const getCategoryColor = (category: string) => {
    const colors = {
      "ဆန်နှင့် ကောက်ပဲသီးနှံများ": "from-amber-400 to-yellow-500",
      ဟင်းသီးဟင်းရွက်များ: "from-green-400 to-emerald-500",
      သစ်သီးများ: "from-red-400 to-pink-500",
      "အသားနှင့် ငါးများ": "from-blue-400 to-cyan-500",
      ချက်ပြုတ်ဆီ: "from-yellow-400 to-orange-500",
      "အချိုရည်နှင့် ဖျော်ရည်များ": "from-blue-300 to-cyan-400",
      "မုန့်နှင့် သရေစာများ": "from-pink-300 to-rose-400",
      "နို့ထွက်ပစ္စည်းနှင့် ကြက်ဥများ": "from-stone-300 to-yellow-300",
      အေးခဲအစားအစာများ: "from-sky-300 to-indigo-400",
      ကိုယ်ပိုင်စောင့်ရှောက်မှု: "from-teal-300 to-emerald-400",
      ကလေးပစ္စည်းများ: "from-purple-200 to-pink-300",
      အိမ်သုံးပစ္စည်းများ: "from-purple-400 to-violet-500",
      လောင်စာဆီ: "from-gray-400 to-slate-500",
      အခြားများ: "from-indigo-400 to-blue-500",
    };
    return (
      colors[category as keyof typeof colors] || "from-gray-400 to-slate-500"
    );
  };

  // Loading state ကို စစ်ဆေးခြင်း - remove priceReports loading check
  if (isLoadingBaseProduct || isLoadingVariants) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="glass-card max-w-md w-full">
          <CardContent className="p-6 sm:p-8 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center animate-pulse">
              <Package className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              ဒေတာများ ရယူနေပါသည်
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              ခဏစောင့်ပါ...
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // ကုန်ပစ္စည်း မတွေ့ရှိပါက
  if (!baseProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="glass-card max-w-md w-full">
          <CardContent className="p-6 sm:p-8 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center">
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-red-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              ကုန်ပစ္စည်း မတွေ့ပါ
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              သင်ရှာနေသော ကုန်ပစ္စည်း မရှိပါ။
            </p>
            <Link href="/">
              <Button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-sm sm:text-base">
                မူလစာမျက်နှာ
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header
        className={`bg-gradient-to-r ${getCategoryColor(
          baseProduct.category
        )} text-white`}
      >
        <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6">
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 p-2"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div className="flex-1">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                {baseProduct.name}
              </h1>
              <div className="flex items-center gap-2 sm:gap-3 mt-1 sm:mt-2">
                <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-xs sm:text-sm">
                  {baseProduct.category}
                </Badge>
                <span className="text-white/90 text-xs sm:text-sm">
                  {productVariants.length} အမျိုးအစား
                </span>
              </div>
            </div>
            <Link href={`/add-product?baseProductId=${baseProductId}`}>
              <Button
                size="sm"
                className="bg-white text-gray-800 hover:bg-gray-100 shadow-lg gap-1 sm:gap-2 text-xs sm:text-sm px-3 sm:px-4"
              >
                <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                အမျိုးအစား အသစ်ထည့်
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Product Image */}
      {getProductImage(baseProductId) && (
        <div className="container mx-auto px-3 py-2 sm:px-4 sm:py-3">
          <div className="aspect-video max-h-64 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
            <img
              src={getProductImage(baseProductId) || undefined}
              alt={baseProduct.name}
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.jpg";
              }}
            />
          </div>
        </div>
      )}

      <main className="container mx-auto px-3 py-4 sm:px-4 sm:py-6 space-y-4 sm:space-y-6">
        {/* Base Product Info */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="gradient-text text-base sm:text-lg md:text-xl">
              ကုန်ပစ္စည်း အချက်အလက်
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium text-sm sm:text-base">
                  ဖန်တီးသူ:
                </span>
                <span className="font-semibold text-gray-800 text-sm sm:text-base">
                  {baseProduct.createdBy}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium text-sm sm:text-base">
                  ဖန်တီးသည့်ရက်:
                </span>
                <span className="font-semibold text-gray-800 text-sm sm:text-base">
                  {new Date(baseProduct.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium text-sm sm:text-base">
                  စုစုပေါင်း အမျိုးအစားများ:
                </span>
                <Badge className="bg-primary-100 text-primary-700 font-bold text-xs sm:text-sm">
                  {productVariants.length}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Product Variants List */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold gradient-text">
            အမျိုးအစားများ
          </h2>
          {productVariants.length === 0 ? (
            <Card className="glass-card">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center">
                  <Package className="h-8 w-8 sm:h-10 sm:w-10 text-primary-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  အမျိုးအစား မရှိသေးပါ
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-md mx-auto">
                  ဤကုန်ပစ္စည်းအတွက် ပထမဆုံး အမျိုးအစားကို ထည့်သွင်းပါ။
                </p>
                <Link href={`/add-product?baseProductId=${baseProductId}`}>
                  <Button className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 shadow-lg text-sm sm:text-base">
                    အမျိုးအစား အသစ်ထည့်ရန်
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-3 sm:gap-4">
              {productVariants.map((variant, index) => {
                const latestPrice = getLatestPriceForVariant(variant.id);
                return (
                  <Link key={variant.id} href={`/variant/${variant.id}`}>
                    <Card
                      className="glass-card floating-card group animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardContent className="p-4 sm:p-6">
                        <div className=" flex flex-col sm:flex-row gap-4 ">
                          {/* Add image display if available */}
                          {variant.imageUrl && (
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0 flex items-center justify-center">
                              <img
                                src={variant.imageUrl}
                                alt={variant.variantName}
                                className="max-w-full max-h-full object-contain"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = "/placeholder.jpg";
                                }}
                              />
                            </div>
                          )}
                          <div className="flex flex-1 justify-between items-start gap-3 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-base sm:text-lg md:text-xl text-gray-800 mb-2 group-hover:text-primary-600 transition-colors truncate">
                                {variant.variantName}
                              </h3>
                              <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
                                <Badge
                                  className={`${getCategoryColor(
                                    baseProduct.category
                                  )} border font-medium text-xs sm:text-sm`}
                                >
                                  {baseProduct.category}
                                </Badge>
                                <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                  {variant.unit}
                                  {variant.sizeValue
                                    ? ` (${variant.sizeValue})`
                                    : ""}
                                </span>
                              </div>
                              {variant.barcode && (
                                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                                  <Package className="h-3 w-3" />
                                  <span>ဘားကုဒ်: {variant.barcode}</span>
                                </div>
                              )}
                            </div>
                            <div className="text-right flex-shrink-0">
                              {latestPrice ? (
                                <div className="space-y-1 sm:space-y-2">
                                  <p className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                                    {latestPrice.price.toLocaleString()} ကျပ်
                                  </p>
                                  <div className="space-y-1">
                                    <div className="flex items-center gap-1 text-xs text-gray-500">
                                      <MapPin className="h-3 w-3" />
                                      <span className="truncate max-w-20 sm:max-w-24">
                                        {latestPrice.location}
                                      </span>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-gray-500">
                                      <Clock className="h-3 w-3" />
                                      <span>
                                        {new Date(
                                          latestPrice.reportedAt
                                        ).toLocaleDateString()}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className="text-center">
                                  <p className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
                                    စျေးနှုန်း မရှိသေးပါ
                                  </p>
                                  <Badge
                                    variant="outline"
                                    className="text-xs border-dashed"
                                  >
                                    ပထမဆုံး သတင်းပို့ပါ
                                  </Badge>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
