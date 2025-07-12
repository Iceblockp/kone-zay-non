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
import { useVariant, useBaseProduct, useUpdateVariant } from "@/hooks/use-api";
import { LoadingSpinner } from "@/components/loading-spinner";

export default function EditVariantPage() {
  const params = useParams();
  const router = useRouter();
  const variantId = params.id as string;

  const { data: variantData, isLoading: isLoadingVariant } =
    useVariant(variantId);
  const updateVariantMutation = useUpdateVariant();

  const [baseProductId, setBaseProductId] = useState<string>("");
  const { data: baseProductData, isLoading: isLoadingBaseProduct } =
    useBaseProduct(baseProductId);

  const [formData, setFormData] = useState<{
    variantName: string | null;
    unit: string | null;
    sizeValue: string | null;
    barcode: string | null;
    imageUrl: string | null;
  }>({
    variantName: null,
    unit: null,
    sizeValue: null,
    barcode: null,
    imageUrl: null,
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
    if (
      variantData &&
      (formData.variantName === null ||
        formData.unit === null ||
        formData.sizeValue === null ||
        formData.barcode === null ||
        formData.imageUrl === null)
    ) {
      const variant = variantData;
      setBaseProductId(variant.baseProductId);

      setFormData({
        variantName: variant.variantName,
        unit: variant.unit,
        sizeValue: variant.sizeValue?.toString() || "",
        barcode: variant.barcode || "",
        imageUrl: variant.imageUrl || "", // Get imageUrl directly from API data
      });
    }
  }, [variantData, variantId, formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.variantName || !formData.unit) {
      alert("ကျေးဇူးပြု၍ အမည်နှင့် ယူနစ်ကို ဖြည့်ပါ");
      return;
    }

    try {
      // Update the variant via API including imageUrl
      await updateVariantMutation.mutateAsync({
        id: variantId,
        data: {
          variantName: formData.variantName.trim(),
          unit: formData.unit,
          sizeValue: formData.sizeValue
            ? Number.parseFloat(formData.sizeValue)
            : undefined,
          barcode: formData.barcode?.trim() || undefined,
          imageUrl: formData.imageUrl?.trim() || undefined, // Include imageUrl in the API update
        },
      });

      router.push("/admin/products");
    } catch (error) {
      console.error("Error updating variant:", error);
      alert("အမျိုးအစားပြင်ဆင်ရာတွင် အမှားရှိနေပါသည်။");
    }
  };

  const isLoading = isLoadingVariant || (baseProductId && isLoadingBaseProduct);

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
              အမျိုးအစား ပြင်ဆင်ရန်
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-3 py-4 sm:px-4 sm:py-6 max-w-md">
        <Card className="border-2 border-gray-100 shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-xl">
              {baseProductData?.name} - အမျိုးအစား ပြင်ဆင်ရန်
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="variantName">အမျိုးအစား အမည်</Label>
                <Input
                  id="variantName"
                  placeholder="ဥပမာ - 1 ကီလို အိတ်၊ 500ml ဘူး"
                  value={formData.variantName || ""}
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
                    value={formData.sizeValue || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, sizeValue: e.target.value })
                    }
                    className="border-2 focus:ring-2 focus:ring-primary-100"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="unit">ယူနစ်</Label>
                  <Select
                    value={formData.unit || ""}
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
                  value={formData.barcode || ""}
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
                  value={formData.imageUrl || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, imageUrl: e.target.value })
                  }
                  className="border-2 focus:ring-2 focus:ring-primary-100"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                disabled={updateVariantMutation.isPending}
              >
                {updateVariantMutation.isPending ? (
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
