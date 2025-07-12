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
import {
  useBaseProduct,
  useVariant,
  useUpdateBaseProduct,
  useUpdateVariant,
} from "@/hooks/use-api";
import { LoadingSpinner } from "@/components/loading-spinner";

export default function AddImagePage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const baseProductId = params.id as string;
  const variantId = searchParams.get("variantId");

  const { data: baseProductData, isLoading: isLoadingBaseProduct } =
    useBaseProduct(baseProductId);
  const { data: variantData, isLoading: isLoadingVariant } = useVariant(
    variantId || ""
  );

  const updateBaseProductMutation = useUpdateBaseProduct();
  const updateVariantMutation = useUpdateVariant();

  const [imageUrl, setImageUrl] = useState("");
  const [currentImageUrl, setCurrentImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Set current image URL from API data instead of localStorage
    if (variantId && variantData?.imageUrl) {
      setImageUrl(variantData.imageUrl);
      setCurrentImageUrl(variantData.imageUrl);
    } else if (baseProductData?.imageUrl) {
      setImageUrl(baseProductData.imageUrl);
      setCurrentImageUrl(baseProductData.imageUrl);
    }
  }, [baseProductData, variantData, baseProductId, variantId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!imageUrl.trim()) {
      alert("ကျေးဇူးပြု၍ ပုံ URL ထည့်ပါ");
      setIsSubmitting(false);
      return;
    }

    try {
      // Update the imageUrl in the database instead of localStorage
      if (variantId) {
        await updateVariantMutation.mutateAsync({
          id: variantId,
          data: { imageUrl: imageUrl.trim() },
        });
      } else {
        await updateBaseProductMutation.mutateAsync({
          id: baseProductId,
          data: { imageUrl: imageUrl.trim() },
        });
      }

      router.push("/admin/products");
    } catch (error) {
      console.error("Error saving image URL:", error);
      alert("ပုံ URL သိမ်းဆည်းရာတွင် အမှားရှိနေပါသည်။");
      setIsSubmitting(false);
    }
  };

  const isLoading = isLoadingBaseProduct || (variantId && isLoadingVariant);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  const baseProduct = baseProductData;
  const variant = variantData;
  const displayName = variant ? variant.variantName : baseProduct?.name;

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
              {displayName} - ပုံထည့်ရန်
            </CardTitle>
          </CardHeader>
          <CardContent>
            {currentImageUrl && (
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">လက်ရှိပုံ:</p>
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src={currentImageUrl}
                    alt={displayName}
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
                disabled={isSubmitting}
              >
                {isSubmitting ? (
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
