"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, MapPin, DollarSign, User, FileText, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Product {
  id: string
  name: string
  category: string
  unit: string
  createdBy: string
  createdAt: string
}

interface PriceReport {
  id: string
  productId: string
  price: number
  location: string
  reportedBy: string
  reportedAt: string
  note?: string
}

export default function AddPricePage() {
  const params = useParams()
  const router = useRouter()
  const productId = params.id as string

  const [product, setProduct] = useState<Product | null>(null)
  const [formData, setFormData] = useState({
    price: "",
    location: "",
    reportedBy: "",
    note: "",
  })

  useEffect(() => {
    const savedProducts = localStorage.getItem("products")
    if (savedProducts) {
      const products: Product[] = JSON.parse(savedProducts)
      const foundProduct = products.find((p) => p.id === productId)
      setProduct(foundProduct || null)
    }
  }, [productId])

  // Add this useEffect after existing useEffect to load saved user name
  useEffect(() => {
    const savedUserName = localStorage.getItem("userName")
    if (savedUserName) {
      setFormData((prev) => ({ ...prev, reportedBy: savedUserName }))
    }
  }, [])

  // Update handleSubmit to save user name
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.price || !formData.location || !formData.reportedBy) {
      alert("ကျေးဇူးပြု၍ လိုအပ်သော အကွက်များကို ဖြည့်ပါ")
      return
    }

    const price = Number.parseFloat(formData.price)
    if (isNaN(price) || price <= 0) {
      alert("ကျေးဇူးပြု၍ မှန်ကန်သော စျေးနှုန်း ရိုက်ထည့်ပါ")
      return
    }

    // Save user name to localStorage
    localStorage.setItem("userName", formData.reportedBy.trim())

    const newPriceReport: PriceReport = {
      id: Date.now().toString(),
      productId: productId,
      price: price,
      location: formData.location.trim(),
      reportedBy: formData.reportedBy.trim(),
      reportedAt: new Date().toISOString(),
      note: formData.note.trim() || undefined,
    }

    const savedPriceReports = localStorage.getItem("priceReports")
    const priceReports: PriceReport[] = savedPriceReports ? JSON.parse(savedPriceReports) : []
    const updatedPriceReports = [...priceReports, newPriceReport]

    localStorage.setItem("priceReports", JSON.stringify(updatedPriceReports))

    router.push(`/product/${productId}`)
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="glass-card max-w-md w-full">
          <CardContent className="p-6 sm:p-8 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center">
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-red-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">ကုန်ပစ္စည်း မတွေ့ပါ</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">သင်စျေးနှုန်း သတင်းပို့လိုသော ကုန်ပစ္စည်း မရှိပါ။</p>
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

  const getCategoryColor = (category: string) => {
    const colors = {
      "ဆန်နှင့် ကောက်ပဲသီးနှံများ": "from-amber-400 to-yellow-500",
      ဟင်းသီးဟင်းရွက်များ: "from-green-400 to-emerald-500",
      သစ်သီးများ: "from-red-400 to-pink-500",
      "အသားနှင့် ငါးများ": "from-blue-400 to-cyan-500",
      ချက်ပြုတ်ဆီ: "from-yellow-400 to-orange-500",
      လောင်စာဆီ: "from-gray-400 to-slate-500",
      အိမ်သုံးပစ္စည်းများ: "from-purple-400 to-violet-500",
      အခြားများ: "from-indigo-400 to-blue-500",
    }
    return colors[category as keyof typeof colors] || "from-gray-400 to-slate-500"
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className={`bg-gradient-to-r ${getCategoryColor(product.category)} text-white`}>
        <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link href={`/product/${productId}`}>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-2">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2">
                <DollarSign className="h-5 w-5 sm:h-6 sm:w-6" />
                စျေးနှုန်း သတင်းပို့ရန်
              </h1>
              <p className="text-xs sm:text-sm text-white/90">
                {product.name} ({product.unit} တစ်ခုလျှင်)
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-3 py-4 sm:px-4 sm:py-6">
        <Card className="max-w-2xl mx-auto glass-card shadow-2xl">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-lg sm:text-xl md:text-2xl gradient-text">စျေးနှုန်း အချက်အလက်</CardTitle>
            <p className="text-sm sm:text-base text-gray-600">လက်ရှi စျေးနှုန်း ဒေတာဖြင့် သင့်ရပ်ရွာကို ကူညီပါ</p>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Price */}
              <div className="space-y-2 sm:space-y-3">
                <Label
                  htmlFor="price"
                  className="text-sm sm:text-base font-semibold text-gray-700 flex items-center gap-2"
                >
                  <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500" />
                  စျေးနှုန်း (ကျပ်) *
                </Label>
                <div className="relative">
                  <Input
                    id="price"
                    type="number"
                    placeholder="ဥပမာ - 1500"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    min="0"
                    step="0.01"
                    className="text-lg sm:text-xl md:text-2xl py-3 sm:py-4 px-3 sm:px-4 border-2 rounded-xl focus:border-primary-400 focus:ring-2 sm:focus:ring-4 focus:ring-primary-100 text-center font-bold"
                  />
                  <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-medium text-sm sm:text-base">
                    ကျပ်
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 text-center">
                  ဤကုန်ပစ္စည်းအတွက် သင်ပေးခဲ့သော သို့မဟုတ် တွေ့ရှိခဲ့သော စျေးနှုန်းကို ရိုက်ထည့်ပါ
                </p>
              </div>

              {/* Location */}
              <div className="space-y-2 sm:space-y-3">
                <Label
                  htmlFor="location"
                  className="text-sm sm:text-base font-semibold text-gray-700 flex items-center gap-2"
                >
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-success-500" />
                  နေရာ *
                </Label>
                <Input
                  id="location"
                  placeholder="ဥပမာ - ရန်ကုန် ဗဟိုဈေး၊ မန္တလေး မြို့လယ်၊ ပုဂံ မြို့နယ်"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="py-2 sm:py-3 text-sm sm:text-base border-2 rounded-xl focus:border-primary-400 focus:ring-2 sm:focus:ring-4 focus:ring-primary-100"
                />
                <p className="text-xs sm:text-sm text-gray-500">ဈေး၊ ဆိုင်၊ သို့မဟုတ် ဧရိယာ အကြောင်း တိကျစွာ ဖော်ပြပါ</p>
              </div>

              {/* Reporter Name */}
              <div className="space-y-2 sm:space-y-3">
                <Label
                  htmlFor="reportedBy"
                  className="text-sm sm:text-base font-semibold text-gray-700 flex items-center gap-2"
                >
                  <User className="h-4 w-4 sm:h-5 sm:w-5 text-info-500" />
                  သင့်အမည် *
                </Label>
                <Input
                  id="reportedBy"
                  placeholder="သင့်အမည် ရိုက်ထည့်ပါ"
                  value={formData.reportedBy}
                  onChange={(e) => setFormData({ ...formData, reportedBy: e.target.value })}
                  className="py-2 sm:py-3 text-sm sm:text-base border-2 rounded-xl focus:border-primary-400 focus:ring-2 sm:focus:ring-4 focus:ring-primary-100"
                />
                <p className="text-xs sm:text-sm text-gray-500">သင့်အမည်သည် လူထုတွင် ယုံကြည်မှု တည်ဆောက်ရာတွင် ကူညီပါသည်</p>
              </div>

              {/* Note */}
              <div className="space-y-2 sm:space-y-3">
                <Label
                  htmlFor="note"
                  className="text-sm sm:text-base font-semibold text-gray-700 flex items-center gap-2"
                >
                  <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-secondary-500" />
                  နောက်ထပ် မှတ်ချက်များ (ရွေးချယ်ခွင့်ရှိ)
                </Label>
                <Textarea
                  id="note"
                  placeholder="ဥပမာ - လက်ကားစျေး၊ လမ်းဘေး ရောင်းသူမှ၊ အစုလိုက် ဝယ်ယူမှု လျှော့စျေး၊ အရည်အသွေး မှတ်ချက်များ"
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  rows={3}
                  className="border-2 rounded-xl focus:border-primary-400 focus:ring-2 sm:focus:ring-4 focus:ring-primary-100 resize-none text-sm sm:text-base"
                />
                <p className="text-xs sm:text-sm text-gray-500">အခြား ဝယ်သူများကို ကူညီနိုင်သော အပိုအချက်အလက်များ မျှဝေပါ</p>
              </div>

              {/* Submit Button */}
              <div className="pt-2 sm:pt-4">
                <Button
                  type="submit"
                  className="w-full py-3 sm:py-4 text-sm sm:text-base font-semibold bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 shadow-lg rounded-xl transform transition-all duration-200 hover:scale-105"
                >
                  <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  စျေးနှုန်း သတင်းပို့ရန်
                </Button>
                <p className="text-center text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3">
                  သင့်ရပ်ရွာကို ပိုမိုကောင်းမွန်သော ဆုံးဖြတ်ချက်များ ချမှတ်ရာတွင် ကူညီပေးသည့်အတွက် ကျေးဇူးတင်ပါသည်!
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
