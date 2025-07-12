"use client";

import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import Link from "next/link";
import {
  Search,
  Plus,
  MapPin,
  Clock,
  Users,
  Package,
  Camera,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BarcodeScanner from "@/components/barcode-scanner";
import { useHomeData } from "@/hooks/use-home-data";
import { LoadingSpinner } from "@/components/loading-spinner";
import { useStatistics } from "@/hooks/use-statistics";

export default function HomePage() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchInputValue, 500); // 500ms debounce delay
  const [showBarcodeScanner, setShowBarcodeScanner] = useState(false);

  // Use our custom hook for data fetching and management with debounced search term
  const {
    baseProducts,
    productVariants,
    priceReports,
    filteredBaseProducts,
    getLatestPriceForBaseProduct,
    getRecentBaseProducts,
    isLoading,
    isError,
    loadMoreBaseProducts,
  } = useHomeData(debouncedSearchTerm);

  // Fetch statistics for accurate counts
  const { data: statistics, isLoading: isLoadingStats } = useStatistics();

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
      အသုံးအဆောင်များ: "bg-teal-100 text-teal-800 border-teal-200",
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

  const handleBarcodeDetected = (barcode: string) => {
    setSearchInputValue(barcode); // Set search input value to the detected barcode
    setShowBarcodeScanner(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <header className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500">
        {/* background dot pattern */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%23ffffff" fillOpacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
          }}
        />
        <div className="relative container mx-auto px-3 py-4 sm:px-4 sm:py-6">
          <div className="text-center text-white">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-accent-300" />
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
                ရန်ကုန် စျေးနှုန်း ခြေရာခံ
              </h1>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-primary-100 mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
              ရန်ကုန်မြို့တစ်ဝှမ်းရှိ ကုန်စျေးနှုန်းများကို လူထုအားဖြင့်
              စောင့်ကြည့်ပြီး ပိုမိုကောင်းမွန်သော ဈေးဝယ်ဆုံးဖြတ်ချက်များ
              ချမှတ်နိုင်ရန်၊ ဂျင်းမမိစေရန်။
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link href="/add-product">
                <Button
                  size="sm"
                  className="bg-white text-primary-600 hover:bg-primary-50 shadow-lg gap-2 px-4 sm:px-6 text-sm sm:text-base"
                >
                  <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                  ကုန်ပစ္စည်း ထည့်ရန်
                </Button>
              </Link>
              {/* <div className="flex items-center gap-2 text-primary-100">
                <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm">
                  {baseProducts.length + 150} ယောက် ပါဝင်ပြီး
                </span>
              </div> */}
            </div>
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
                placeholder="အချိုရည်၊ ကုန်ပစ္စည်း၊ ဘားကုဒ် စသည်တို့ကို ရှာပါ..."
                value={searchInputValue}
                onChange={(e) => setSearchInputValue(e.target.value)}
                className="pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 text-sm sm:text-base border-2 border-gray-200 rounded-xl sm:rounded-2xl shadow-lg focus:border-primary-400 focus:ring-2 sm:focus:ring-4 focus:ring-primary-100 transition-all"
              />
            </div>
            <Button
              onClick={() => setShowBarcodeScanner(true)}
              className="px-3 sm:px-4 py-3 sm:py-4 bg-secondary-500 hover:bg-secondary-600 text-white rounded-xl sm:rounded-2xl shadow-lg"
            >
              <Camera className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          <Card className="glass-card floating-card border-l-2 sm:border-l-4 border-l-primary-400">
            <CardContent className="p-3 sm:p-4">
              <div className="text-center">
                <p className="text-lg sm:text-2xl md:text-3xl font-bold text-primary-600">
                  {isLoadingStats ? (
                    <span className="text-gray-400">...</span>
                  ) : (
                    statistics?.baseProductCount
                  )}
                </p>
                <p className="text-xs sm:text-sm font-medium text-gray-600">
                  ကုန်ပစ္စည်းများ
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card floating-card border-l-2 sm:border-l-4 border-l-secondary-400">
            <CardContent className="p-3 sm:p-4">
              <div className="text-center">
                <p className="text-lg sm:text-2xl md:text-3xl font-bold text-secondary-600">
                  {isLoadingStats ? (
                    <span className="text-gray-400">...</span>
                  ) : (
                    statistics?.variantCount
                  )}
                </p>
                <p className="text-xs sm:text-sm font-medium text-gray-600">
                  အမျိုးအစားများ
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card floating-card border-l-2 sm:border-l-4 border-l-success-400">
            <CardContent className="p-3 sm:p-4">
              <div className="text-center">
                <p className="text-lg sm:text-2xl md:text-3xl font-bold text-success-600">
                  {isLoadingStats ? (
                    <span className="text-gray-400">...</span>
                  ) : (
                    statistics?.priceReportCount
                  )}
                </p>
                <p className="text-xs sm:text-sm font-medium text-gray-600">
                  တင်ပြမှုများ
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Base Products Section */}
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold gradient-text">
              {debouncedSearchTerm
                ? `ရှာဖွေမှု ရလဒ်များ (${filteredBaseProducts.length})`
                : "လတ်တလော ကုန်ပစ္စည်းများ"}
            </h2>
            {!debouncedSearchTerm && (
              <Link href="/add-product">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1 sm:gap-2 border-primary-200 text-primary-600 hover:bg-primary-50 bg-transparent text-xs sm:text-sm px-2 sm:px-3"
                >
                  <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                  အသစ်ထည့်
                </Button>
              </Link>
            )}
          </div>

          {isLoading ? (
            <div className="flex justify-center py-12">
              <LoadingSpinner size="lg" />
            </div>
          ) : isError ? (
            <Card className="glass-card">
              <CardContent className="p-6 sm:p-8 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  အချက်အလက်များ ရယူရာတွင် အမှားရှိနေပါသည်
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  ကျေးဇူးပြု၍ နောက်မှ ထပ်မံကြိုးစားကြည့်ပါ
                </p>
                <Button onClick={() => window.location.reload()}>
                  ပြန်လည်စမ်းသပ်ကြည့်ရန်
                </Button>
              </CardContent>
            </Card>
          ) : filteredBaseProducts.length === 0 ? (
            <Card className="glass-card">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center">
                  <Search className="h-8 w-8 sm:h-10 sm:w-10 text-primary-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {debouncedSearchTerm
                    ? "ကုန်ပစ္စည်း မတွေ့ပါ"
                    : "ကုန်ပစ္စည်း မရှိသေးပါ"}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-md mx-auto">
                  {debouncedSearchTerm
                    ? "အခြား စကားလုံးများဖြင့် ရှာကြည့်ပါ သို့မဟုတ် ကိုယ်တိုင် ထည့်ပါ။"
                    : "ပထမဆုံး ကုန်ပစ္စည်း ထည့်ပြီး သင့်ရပ်ရွာကို စျေးနှုန်း ခြေရာခံရာတွင် ကူညီပါ။"}
                </p>
                <Link href="/add-product">
                  <Button className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 shadow-lg text-sm sm:text-base">
                    ပထမဆုံး ကုန်ပစ္စည်း ထည့်ရန်
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-3 sm:gap-4">
              {(debouncedSearchTerm
                ? filteredBaseProducts
                : getRecentBaseProducts()
              ).map((baseProduct, index) => {
                const latestPriceReport = getLatestPriceForBaseProduct(
                  baseProduct.id
                );
                const latestVariant = latestPriceReport
                  ? productVariants.find(
                      (v) => v.id === latestPriceReport.variantId
                    )
                  : null;

                return (
                  <Link
                    key={baseProduct.id}
                    href={`/base-product/${baseProduct.id}`}
                  >
                    <Card
                      className="glass-card floating-card group animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardContent className="p-4 sm:p-6">
                        <div className=" flex flex-col sm:flex-row gap-4 ">
                          {/* Add image display if available */}
                          {baseProduct.imageUrl && (
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0 flex items-center justify-center">
                              <img
                                src={baseProduct.imageUrl}
                                alt={baseProduct.name}
                                className="max-w-full max-h-full object-contain"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = "/placeholder.jpg";
                                }}
                              />
                            </div>
                          )}
                          <div className="flex flex-1 justify-between items-start gap-3 sm:gap-4">
                            <div
                              className={`flex-1 min-w-0 ${
                                baseProduct.imageUrl ? "" : "flex-1"
                              }`}
                            >
                              <h3 className="font-bold text-base sm:text-lg md:text-xl text-gray-800 mb-2 group-hover:text-primary-600 transition-colors truncate">
                                {baseProduct.name}
                              </h3>
                              <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
                                <Badge
                                  className={`${getCategoryColor(
                                    baseProduct.category
                                  )} border font-medium text-xs sm:text-sm`}
                                >
                                  {baseProduct.category}
                                </Badge>
                                <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full flex items-center gap-1">
                                  <Package className="h-3 w-3" />
                                  {
                                    productVariants.filter(
                                      (v) => v.baseProductId === baseProduct.id
                                    ).length
                                  }{" "}
                                  အမျိုးအစား
                                </span>
                              </div>
                              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                                <Users className="h-3 w-3" />
                                <span>
                                  {baseProduct.createdBy} မှ ထည့်သွင်း
                                </span>
                              </div>
                            </div>
                            <div className="text-right flex-shrink-0">
                              {latestPriceReport ? (
                                <div className="space-y-1 sm:space-y-2">
                                  <p className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                                    {latestPriceReport.price.toLocaleString()}{" "}
                                    ကျပ်
                                  </p>
                                  <div className="space-y-1">
                                    <div className="flex items-center gap-1 text-xs text-gray-500">
                                      <MapPin className="h-3 w-3" />
                                      <span className="truncate max-w-20 sm:max-w-24">
                                        {latestPriceReport.location}
                                      </span>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-gray-500">
                                      <Clock className="h-3 w-3" />
                                      <span>
                                        {new Date(
                                          latestPriceReport.reportedAt
                                        ).toLocaleDateString()}
                                      </span>
                                    </div>
                                    {latestVariant && (
                                      <div className="flex items-center gap-1 text-xs text-gray-500">
                                        <Package className="h-3 w-3" />
                                        <span className="truncate max-w-20 sm:max-w-24">
                                          {latestVariant.variantName}
                                        </span>
                                      </div>
                                    )}
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
