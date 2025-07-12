import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Filter parameters
    const variantIds = searchParams.get("variantIds")?.split(",") || undefined;
    const baseProductId = searchParams.get("baseProductId") || undefined;

    // Build the query based on provided filters
    let query: any;

    if (baseProductId) {
      // If baseProductId is provided, get latest price reports for all variants of this base product
      query = prisma.$queryRaw`
        WITH RankedReports AS (
          SELECT 
            pr.*,
            ROW_NUMBER() OVER (PARTITION BY pr."variantId" ORDER BY pr."reportedAt" DESC) as rn
          FROM "PriceReport" pr
          JOIN "ProductVariant" pv ON pr."variantId" = pv.id
          WHERE pv."baseProductId" = ${baseProductId}
        )
        SELECT * FROM RankedReports WHERE rn = 1
      `;
    } else if (variantIds && variantIds.length > 0) {
      // If specific variantIds are provided
      query = prisma.$queryRaw`
        WITH RankedReports AS (
          SELECT 
            pr.*,
            ROW_NUMBER() OVER (PARTITION BY pr."variantId" ORDER BY pr."reportedAt" DESC) as rn
          FROM "PriceReport" pr
          WHERE pr."variantId" IN (${variantIds.join(",")})
        )
        SELECT * FROM RankedReports WHERE rn = 1
      `;
    } else {
      // If no filters, get latest price report for all variants
      query = prisma.$queryRaw`
        WITH RankedReports AS (
          SELECT 
            pr.*,
            ROW_NUMBER() OVER (PARTITION BY pr."variantId" ORDER BY pr."reportedAt" DESC) as rn
          FROM "PriceReport" pr
        )
        SELECT * FROM RankedReports WHERE rn = 1
      `;
    }

    const latestReports = await query;

    // Convert BigInt values to strings before JSON serialization
    const serializedReports = latestReports.map((report: any) => {
      const serialized = { ...report };
      // Convert any BigInt properties to strings
      for (const [key, value] of Object.entries(serialized)) {
        if (typeof value === "bigint") {
          serialized[key] = value.toString();
        }
      }
      return serialized;
    });

    return NextResponse.json({
      data: serializedReports,
    });
  } catch (error) {
    console.error("Error fetching latest price reports:", error);
    return NextResponse.json(
      { error: "Failed to fetch latest price reports" },
      { status: 500 }
    );
  }
}
