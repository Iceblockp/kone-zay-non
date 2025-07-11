// lib/data-migration.ts
import type { BaseProduct, ProductVariant, PriceReport } from "@/types/product"

interface OldProduct {
  id: string
  name: string
  category: string
  unit: string
  createdBy: string
  createdAt: string
  barcode?: string
}

export function migrateLocalStorageData() {
  const oldProductsJson = localStorage.getItem("products")
  const priceReportsJson = localStorage.getItem("priceReports")

  // Check if migration is needed (if old 'products' exist but new 'baseProducts' don't)
  if (oldProductsJson && !localStorage.getItem("baseProducts")) {
    console.log("Migrating old product data to new base product and variant structure...")

    const oldProducts: OldProduct[] = JSON.parse(oldProductsJson)
    const newBaseProducts: BaseProduct[] = []
    const newProductVariants: ProductVariant[] = []
    const updatedPriceReports: PriceReport[] = priceReportsJson ? JSON.parse(priceReportsJson) : []

    oldProducts.forEach((oldProduct) => {
      // Create a BaseProduct from the old product
      const baseProduct: BaseProduct = {
        id: oldProduct.id, // Use old product ID as base product ID for simplicity
        name: oldProduct.name, // Old product name becomes base product name
        category: oldProduct.category,
        createdBy: oldProduct.createdBy,
        createdAt: oldProduct.createdAt,
      }
      newBaseProducts.push(baseProduct)

      // Create a ProductVariant from the old product
      const productVariant: ProductVariant = {
        id: oldProduct.id, // Old product ID becomes variant ID
        baseProductId: baseProduct.id,
        variantName: `${oldProduct.name} (${oldProduct.unit})`, // Create a descriptive variant name
        unit: oldProduct.unit,
        barcode: oldProduct.barcode,
      }
      newProductVariants.push(productVariant)

      // Price reports already link to the old product ID, which is now the variant ID, so no change needed here
    })

    // Save new data to localStorage
    localStorage.setItem("baseProducts", JSON.stringify(newBaseProducts))
    localStorage.setItem("productVariants", JSON.stringify(newProductVariants))
    localStorage.setItem("priceReports", JSON.stringify(updatedPriceReports)) // Ensure price reports are saved back

    // Remove old 'products' key
    localStorage.removeItem("products")
    console.log("Migration complete!")
  } else {
    console.log("No migration needed or already migrated.")
  }
}
