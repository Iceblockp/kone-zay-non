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
import type { BaseProduct, ProductVariant } from "@/types/product";

export default function EditVariantPage() {
  const params = useParams();
  const router = useRouter();
  const variantId = params.id as string;

  const [baseProducts, setBaseProducts] = useState<BaseProduct[]>([]);
  const [productVariants, setProductVariants] = useState<ProductVariant[]>([]);
  const [baseProduct, setBaseProduct] = useState<BaseProduct | null>(null);

  const [formData, setFormData] = useState({
    variantName: "",
    unit: "",
    sizeValue: "",
    barcode: "",
    imageUrl: "", // New field for image URL
  });

  const units = [
    "ကီလို",
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

  useEffect(() => {
    const savedBaseProducts = localStorage.getItem("baseProducts");
    const savedProductVariants = localStorage.getItem("productVariants");

    if (savedBaseProducts && savedProductVariants) {
      const parsedBaseProducts: BaseProduct[] = JSON.parse(savedBaseProducts);
      const parsedProductVariants: ProductVariant[] =
        JSON.parse(savedProductVariants);

      setBaseProducts(parsedBaseProducts);
      setProductVariants(parsedProductVariants);

      const variant = parsedProductVariants.find((v) => v.id === variantId);
      if (variant) {
        const relatedBaseProduct = parsedBaseProducts.find(
          (bp) => bp.id === variant.baseProductId
        );
        setBaseProduct(relatedBaseProduct || null);

        // Check if there's an imageUrl in localStorage
        const productImages = localStorage.getItem("productImages");
        let imageUrl = "";
        if (productImages) {
          const parsedImages = JSON.parse(productImages);
          if (parsedImages[variantId]) {
            imageUrl = parsedImages[variantId];
          }
        }

        setFormData({
          variantName: variant.variantName,
          unit: variant.unit,
          sizeValue: variant.sizeValue?.toString() || "",
          barcode: variant.barcode || "",
          imageUrl: imageUrl,
        });
      } else {
        router.push("/admin/products");
      }
    }
  }, [variantId, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.variantName || !formData.unit) {
      alert("ကျေးဇူးပြု၍ အမည်နှင့် ယူနစ်ကို ဖြည့်ပါ");
      return;
    }

    const updatedProductVariants = productVariants.map((v) => {
      if (v.id === variantId) {
        return {
          ...v,
          variantName: formData.variantName.trim(),
          unit: formData.unit,
          sizeValue: formData.sizeValue
            ? Number.parseFloat(formData.sizeValue)
            : undefined,
          barcode: formData.barcode.trim() || undefined,
        };
      }
      return v;
    });

    // Save the updated variants
    localStorage.setItem(
      "productVariants",
      JSON.stringify(updatedProductVariants)
    );

    // Save the image URL if provided
    if (formData.imageUrl) {
      const productImages = localStorage.getItem("productImages") || "{}";
      const parsedImages = JSON.parse(productImages);
      parsedImages[variantId] = formData.imageUrl.trim();
      localStorage.setItem("productImages", JSON.stringify(parsedImages));
    }

    router.push("/admin/products");
  };

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
              အမျိုးအစား ပြင်ဆင်ရန်
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-3 py-4 sm:px-4 sm:py-6 max-w-md">
        <Card className="border-2 border-gray-100 shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-xl">
              {baseProduct?.name} - အမျိုးအစား ပြင်ဆင်ရန်
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="variantName">အမျိုးအစား အမည်</Label>
                <Input
                  id="variantName"
                  placeholder="ဥပမာ - 1 ကီလို အိတ်၊ 500ml ဘူး"
                  value={formData.variantName}
                  onChange={(e) =>
                    setFormData({ ...formData, variantName: e.target.value })
                  }
                  className="border-2 focus:ring-2 focus:ring-primary-100"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="sizeValue">ပမာဏ</Label>
                  <Input
                    id="sizeValue"
                    type="number"
                    placeholder="ဥပမာ - 1, 500, 1000"
                    value={formData.sizeValue}
                    onChange={(e) =>
                      setFormData({ ...formData, sizeValue: e.target.value })
                    }
                    className="border-2 focus:ring-2 focus:ring-primary-100"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="unit">ယူနစ်</Label>
                  <Select
                    value={formData.unit}
                    onValueChange={(value) =>
                      setFormData({ ...formData, unit: value })
                    }
                  >
                    <SelectTrigger className="border-2 focus:ring-2 focus:ring-primary-100">
                      <SelectValue placeholder="ယူနစ် ရွေးပါ" />
                    </SelectTrigger>
                    <SelectContent>
                      {units.map((unit) => (
                        <SelectItem key={unit} value={unit}>
                          {unit}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="barcode">Barcode (ရှိလျှင်)</Label>
                <Input
                  id="barcode"
                  placeholder="ဥပမာ - 8801234567890"
                  value={formData.barcode}
                  onChange={(e) =>
                    setFormData({ ...formData, barcode: e.target.value })
                  }
                  className="border-2 focus:ring-2 focus:ring-primary-100"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="imageUrl">ပုံ URL (ရှိလျှင်)</Label>
                <Input
                  id="imageUrl"
                  placeholder="https://example.com/image.jpg"
                  value={formData.imageUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, imageUrl: e.target.value })
                  }
                  className="border-2 focus:ring-2 focus:ring-primary-100"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                <Save className="h-4 w-4 mr-2" />
                သိမ်းဆည်းမည်
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
