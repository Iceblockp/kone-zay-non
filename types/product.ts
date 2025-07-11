// types/product.ts
export interface BaseProduct {
  id: string // Unique ID for the base product (e.g., "Coca-Cola")
  name: string // e.g., "Coca-Cola", "Myaing Myanmar Rice"
  category: string // e.g., "အချိုရည်နှင့် ဖျော်ရည်များ"
  createdBy: string
  createdAt: string
}

export interface ProductVariant {
  id: string // Unique ID for this specific variant (e.g., "Coca-Cola 300ml Bottle")
  baseProductId: string // Links to the BaseProduct
  variantName: string // e.g., "300ml Bottle", "5kg Bag"
  unit: string // e.g., "မီလီလီတာ", "ကီလို"
  sizeValue?: number // e.g., 300, 5 (for 5kg)
  barcode?: string // Unique barcode for this variant
}

export interface PriceReport {
  id: string
  variantId: string // Now links to ProductVariant
  price: number
  location: string
  reportedBy: string
  reportedAt: string
  note?: string
}
