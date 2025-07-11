"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Plus, MapPin, Clock, User, TrendingUp, BarChart3, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from "recharts"
import type { BaseProduct, ProductVariant, PriceReport } from "@/types/product" // Import new types

export default function VariantPage() {
  const params = useParams()
  const router = useRouter()
  const variantId = params.id as string

  const [baseProduct, setBaseProduct] = useState<BaseProduct | null>(null)
  const [productVariant, setProductVariant] = useState<ProductVariant | null>(null)
  const [priceReports, setPriceReports] = useState<PriceReport[]>([])
  const [variantPrices, setVariantPrices] = useState<PriceReport[]>([])

  useEffect(() => {
    const savedBaseProducts = localStorage.getItem("baseProducts")
    const savedProductVariants = localStorage.getItem("productVariants")
    const savedPriceReports = localStorage.getItem("priceReports")

    if (savedProductVariants) {
      const allProductVariants: ProductVariant[] = JSON.parse(savedProductVariants)
      const foundVariant = allProductVariants.find((v) => v.id === variantId)
      setProductVariant(foundVariant || null)

      if (foundVariant && savedBaseProducts) {
        const allBaseProducts: BaseProduct[] = JSON.parse(savedBaseProducts)
        const foundBaseProduct = allBaseProducts.find((bp) => bp.id === foundVariant.baseProductId)
        setBaseProduct(foundBaseProduct || null)
      }
    }

    if (savedPriceReports) {
      const reports: PriceReport[] = JSON.parse(savedPriceReports)
      setPriceReports(reports)
      const variantReports = reports
        .filter((report) => report.variantId === variantId)
        .sort((a, b) => new Date(b.reportedAt).getTime() - new Date(a.reportedAt).getTime())
      setVariantPrices(variantReports)
    }
  }, [variantId])

  if (!productVariant || !baseProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="glass-card max-w-md w-full">
          <CardContent className="p-6 sm:p-8 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center">
              <Target className="h-6 w-6 sm:h-8 sm:w-8 text-red-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">အမျိုးအစား မတွေ့ပါ</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">သင်ရှာနေသော အမျိုးအစား မရှိပါ။</p>
            <Link href="/">
              <Button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-sm sm:text-base">
                မူလစာမျက်နှာ
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  const chartData = variantPrices
    .slice(0, 10)
    .reverse()
    .map((report, index) => ({
      date: new Date(report.reportedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      price: report.price,
      location: report.location,
    }))

  const averagePrice =
    variantPrices.length > 0
      ? Math.round(variantPrices.reduce((sum, report) => sum + report.price, 0) / variantPrices.length)
      : 0

  const latestPrice = variantPrices[0]
  const minPrice = variantPrices.length > 0 ? Math.min(...variantPrices.map((p) => p.price)) : 0
  const maxPrice = variantPrices.length > 0 ? Math.max(...variantPrices.map((p) => p.price)) : 0

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
    }
    return colors[category as keyof typeof colors] || "from-gray-400 to-slate-500"
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className={`bg-gradient-to-r ${getCategoryColor(baseProduct.category)} text-white`}>
        <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6">
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <Link href={`/base-product/${baseProduct.id}`}>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-2">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div className="flex-1">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">{productVariant.variantName}</h1>
              <div className="flex items-center gap-2 sm:gap-3 mt-1 sm:mt-2">
                <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-xs sm:text-sm">
                  {baseProduct.name}
                </Badge>
                <span className="text-white/90 text-xs sm:text-sm">
                  {productVariant.unit}
                  {productVariant.sizeValue ? ` (${productVariant.sizeValue})` : ""}
                </span>
              </div>
            </div>
            <Link href={`/variant/${variantId}/add-price`}>
              <Button
                size="sm"
                className="bg-white text-gray-800 hover:bg-gray-100 shadow-lg gap-1 sm:gap-2 text-xs sm:text-sm px-3 sm:px-4"
              >
                <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                စျေးနှုန်း သတင်းပို့
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-3 py-4 sm:px-4 sm:py-6 space-y-4 sm:space-y-6">
        {/* Price Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
          <Card className="glass-card floating-card border-l-2 sm:border-l-4 border-l-primary-400">
            <CardContent className="p-3 sm:p-4">
              <div className="text-center">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary-600">
                  {latestPrice ? `${latestPrice.price.toLocaleString()}` : "—"}
                </p>
                <p className="text-xs font-medium text-gray-600 mb-1">နောက်ဆုံး စျေးနှုန်း</p>
                {latestPrice && <p className="text-xs text-gray-500 truncate">{latestPrice.location}</p>}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card floating-card border-l-2 sm:border-l-4 border-l-secondary-400">
            <CardContent className="p-3 sm:p-4">
              <div className="text-center">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-secondary-600">
                  {averagePrice > 0 ? averagePrice.toLocaleString() : "—"}
                </p>
                <p className="text-xs font-medium text-gray-600 mb-1">ပျမ်းမျှ</p>
                <p className="text-xs text-gray-500">{variantPrices.length} သတင်း</p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card floating-card border-l-2 sm:border-l-4 border-l-success-400">
            <CardContent className="p-3 sm:p-4">
              <div className="text-center">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-success-600">
                  {minPrice > 0 ? minPrice.toLocaleString() : "—"}
                </p>
                <p className="text-xs font-medium text-gray-600 mb-1">အနိမ့်ဆုံး</p>
                <p className="text-xs text-gray-500">အကောင်းဆုံး</p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card floating-card border-l-2 sm:border-l-4 border-l-red-400">
            <CardContent className="p-3 sm:p-4">
              <div className="text-center">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-red-600">
                  {maxPrice > 0 ? maxPrice.toLocaleString() : "—"}
                </p>
                <p className="text-xs font-medium text-gray-600 mb-1">အမြင့်ဆုံး</p>
                <p className="text-xs text-gray-500">အကြီးဆုံး</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Price Chart */}
        {chartData.length > 1 && (
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 sm:gap-3">
                <div className="p-1 sm:p-2 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg">
                  <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold gradient-text">စျေးနှုန်း လမ်းကြောင်း</h3>
                  <p className="text-xs sm:text-sm text-gray-600">လတ်တလော စျေးနှုန်း ပြောင်းလဲမှုများ</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  price: {
                    label: "စျေးနှုန်း (ကျပ်)",
                    color: "hsl(var(--primary))",
                  },
                }}
                className="h-[200px] sm:h-[250px] md:h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#E63946" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#E63946" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="date" fontSize={10} tickLine={false} axisLine={false} tick={{ fill: "#6B7280" }} />
                    <YAxis
                      fontSize={10}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `${value}`}
                      tick={{ fill: "#6B7280" }}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="price" stroke="#E63946" strokeWidth={2} fill="url(#colorPrice)" />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        )}

        {/* Recent Price Reports */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 sm:gap-3">
              <div className="p-1 sm:p-2 bg-gradient-to-br from-info-100 to-success-100 rounded-lg">
                <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-info-600" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold gradient-text">လတ်တလော သတင်းများ</h3>
                <p className="text-xs sm:text-sm text-gray-600">လူထု စျေးနှုန်း အပ်ဒိတ်များ</p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {variantPrices.length === 0 ? (
              <div className="text-center py-8 sm:py-12">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center">
                  <Plus className="h-8 w-8 sm:h-10 sm:w-10 text-primary-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">စျေးနှုန်း သတင်း မရှိသေးပါ</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-md mx-auto">
                  ဤအမျိုးအစား၏ လက်ရှိ စျေးနှုန်းကို သတင်းပို့ပြီး သင့်ရပ်ရွာကို ကူညီပါ။
                </p>
                <Link href={`/variant/${variantId}/add-price`}>
                  <Button className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 shadow-lg text-sm sm:text-base">
                    ပထမဆုံး စျေးနှုန်း သတင်းပို့ရန်
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-3 sm:space-y-4">
                {variantPrices.slice(0, 10).map((report, index) => (
                  <div
                    key={report.id}
                    className="border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-between items-start gap-3 sm:gap-4">
                      <div className="flex-1">
                        <p className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent mb-2 sm:mb-3">
                          {report.price.toLocaleString()} ကျပ်
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-success-500" />
                            <span className="font-medium">{report.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <User className="h-3 w-3 sm:h-4 sm:w-4 text-info-500" />
                            <span>{report.reportedBy}</span>
                          </div>
                        </div>
                        {report.note && (
                          <div className="mt-2 sm:mt-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                            <p className="text-xs sm:text-sm text-gray-700 italic">"{report.note}"</p>
                          </div>
                        )}
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500 mb-1">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>{new Date(report.reportedAt).toLocaleDateString()}</span>
                        </div>
                        <p className="text-xs text-gray-400">{new Date(report.reportedAt).toLocaleTimeString()}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Variant Info */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="gradient-text text-base sm:text-lg md:text-xl">အမျိုးအစား အချက်အလက်</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium text-sm sm:text-base">ကုန်ပစ္စည်း:</span>
                <span className="font-semibold text-gray-800 text-sm sm:text-base">{baseProduct.name}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium text-sm sm:text-base">ဖန်တီးသူ:</span>
                <span className="font-semibold text-gray-800 text-sm sm:text-base">{baseProduct.createdBy}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium text-sm sm:text-base">ဖန်တီးသည့်ရက်:</span>
                <span className="font-semibold text-gray-800 text-sm sm:text-base">
                  {new Date(baseProduct.createdAt).toLocaleDateString()}
                </span>
              </div>
              {productVariant.barcode && (
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600 font-medium text-sm sm:text-base">ဘားကုဒ်:</span>
                  <span className="font-mono text-gray-800 text-sm sm:text-base bg-gray-100 px-2 py-1 rounded">
                    {productVariant.barcode}
                  </span>
                </div>
              )}
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium text-sm sm:text-base">စုစုပေါင်း သတင်းများ:</span>
                <Badge className="bg-primary-100 text-primary-700 font-bold text-xs sm:text-sm">
                  {variantPrices.length}
                </Badge>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium text-sm sm:text-base">နေရာများ:</span>
                <Badge className="bg-success-100 text-success-700 font-bold text-xs sm:text-sm">
                  {new Set(variantPrices.map((p) => p.location)).size}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
