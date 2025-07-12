import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Get total count of base products
    const baseProductCount = await prisma.baseProduct.count();

    // Get total count of product variants
    const variantCount = await prisma.productVariant.count();

    // Get unique locations count from price reports
    const priceReportCount = await prisma.priceReport.count();

    return NextResponse.json(
      {
        baseProductCount,
        variantCount,
        priceReportCount,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching statistics:", error);
    return NextResponse.json(
      { error: "Failed to fetch statistics" },
      { status: 500 }
    );
  }
}
