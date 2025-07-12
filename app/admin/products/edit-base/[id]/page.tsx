"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
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
import type { BaseProduct } from "@/types/product";
import { useBaseProduct, useUpdateBaseProduct } from "@/hooks/use-api";
import { LoadingSpinner } from "@/components/loading-spinner";

export default function EditBaseProductPage() {
  const params = useParams();
  const router = useRouter();
  const baseProductId = params.id as string;

  const { data: baseProductData, isLoading } = useBaseProduct(baseProductId);
  const updateBaseProductMutation = useUpdateBaseProduct();

  // Initial state ကို null အဖြစ် သတ်မှတ်ပါ
  const [formData, setFormData] = useState<{
    name: string | null;
    category: string | null;
    imageUrl: string | null;
  }>({ name: null, category: null, imageUrl: null });

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

  console.log("sss", baseProductData);
  console.log("ssss", formData);

  useEffect(() => {
    // baseProductData ရှိတဲ့အခါမှ formData ကို update လုပ်ပါ
    if (
      baseProductData &&
      (formData.name === null ||
        formData.category === null ||
        formData.imageUrl === null)
    ) {
      setFormData({
        name: baseProductData.name,
        category: baseProductData.category,
        imageUrl: baseProductData.imageUrl || "",
      });
    }
  }, [baseProductData, formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.category) {
      alert("ကျေးဇူးပြု၍ အားလုံးကို ဖြည့်ပါ");
      return;
    }

    try {
      // Update the base product via API including the imageUrl
      await updateBaseProductMutation.mutateAsync({
        id: baseProductId,
        data: {
          name: formData.name.trim(),
          category: formData.category,
          imageUrl: formData.imageUrl?.trim() || null,
        },
      });

      router.push("/admin/products");
    } catch (error) {
      console.error("Error updating base product:", error);
      alert("ကုန်ပစ္စည်းပြင်ဆင်ရာတွင် အမှားရှိနေပါသည်။");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="/admin/products">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 p-2"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-lg sm:text-xl font-bold">
              ကုန်ပစ္စည်း ပြင်ဆင်ရန်
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-3 py-4 sm:px-4 sm:py-6 max-w-md">
        <Card className="border-2 border-gray-100 shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-xl">
              ကုန်ပစ္စည်း အချက်အလက်များ ပြင်ဆင်ရန်
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">ကုန်ပစ္စည်း အမည်</Label>
                <Input
                  id="name"
                  placeholder="ဥပမာ - ဆန်၊ ဆီ၊ ဆား"
                  value={formData.name || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="border-2 focus:ring-2 focus:ring-primary-100"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">အမျိုးအစား</Label>
                <Select
                  value={formData.category || ""}
                  onValueChange={(value) =>
                    setFormData({ ...formData, category: value })
                  }
                >
                  <SelectTrigger className="border-2 focus:ring-2 focus:ring-primary-100">
                    <SelectValue placeholder="အမျိုးအစား ရွေးပါ" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        <div className="flex items-center gap-2">
                          <span>{category.icon}</span>
                          <span>{category.value}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="imageUrl">ပုံ URL (ရှိလျှင်)</Label>
                <Input
                  id="imageUrl"
                  placeholder="https://example.com/image.jpg"
                  value={formData.imageUrl || undefined}
                  onChange={(e) =>
                    setFormData({ ...formData, imageUrl: e.target.value })
                  }
                  className="border-2 focus:ring-2 focus:ring-primary-100"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                disabled={updateBaseProductMutation.isPending}
              >
                {updateBaseProductMutation.isPending ? (
                  <LoadingSpinner size="sm" className="mr-2" />
                ) : (
                  <Save className="h-4 w-4 mr-2" />
                )}
                သိမ်းဆည်းမည်
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
