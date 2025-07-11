"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { BaseProduct, ProductVariant } from "@/types/product";

export default function AddImagePage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const baseProductId = params.id as string;
  const variantId = searchParams.get("variantId");

  const [baseProduct, setBaseProduct] = useState<BaseProduct | null>(null);
  const [variant, setVariant] = useState<ProductVariant | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [currentImageUrl, setCurrentImageUrl] = useState("");

  useEffect(() => {
    const savedBaseProducts = localStorage.getItem("baseProducts");
    const savedProductVariants = localStorage.getItem("productVariants");
    const productImages = localStorage.getItem("productImages");

    if (savedBaseProducts) {
      const parsedBaseProducts: BaseProduct[] = JSON.parse(savedBaseProducts);
      const foundBaseProduct = parsedBaseProducts.find(
        (bp) => bp.id === baseProductId
      );
      setBaseProduct(foundBaseProduct || null);
    }

    if (variantId && savedProductVariants) {
      const parsedProductVariants: ProductVariant[] =
        JSON.parse(savedProductVariants);
      const foundVariant = parsedProductVariants.find(
        (v) => v.id === variantId
      );
      setVariant(foundVariant || null);
    }

    if (productImages) {
      const parsedImages = JSON.parse(productImages);
      const targetId = variantId || baseProductId;
      if (parsedImages[targetId]) {
        setImageUrl(parsedImages[targetId]);
        setCurrentImageUrl(parsedImages[targetId]);
      }
    }
  }, [baseProductId, variantId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!imageUrl.trim()) {
      alert("ကျေးဇူးပြု၍ ပုံ URL ထည့်ပါ");
      return;
    }

    // Save the image URL
    const productImages = localStorage.getItem("productImages") || "{}";
    const parsedImages = JSON.parse(productImages);
    const targetId = variantId || baseProductId;
    parsedImages[targetId] = imageUrl.trim();
    localStorage.setItem("productImages", JSON.stringify(parsedImages));

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
            <h1 className="text-lg sm:text-xl font-bold">ပုံထည့်ရန်</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-3 py-4 sm:px-4 sm:py-6 max-w-md">
        <Card className="border-2 border-gray-100 shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-xl">
              {variant ? variant.variantName : baseProduct?.name} - ပုံထည့်ရန်
            </CardTitle>
          </CardHeader>
          <CardContent>
            {currentImageUrl && (
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">လက်ရှိပုံ:</p>
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src={currentImageUrl}
                    alt={variant ? variant.variantName : baseProduct?.name}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.jpg";
                    }}
                  />
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="imageUrl">ပုံ URL</Label>
                <Input
                  id="imageUrl"
                  placeholder="https://example.com/image.jpg"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="border-2 focus:ring-2 focus:ring-primary-100"
                />
                <p className="text-xs text-gray-500">
                  ပုံ URL ကို ထည့်သွင်းပါ။ ပုံသည် အများသုံးစွဲနိုင်သော URL
                  ဖြစ်ရပါမည်။
                </p>
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
