// app/api/base-products/route.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Pagination parameters
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    // Search and filter parameters
    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || undefined;

    // Build where clause for filtering
    const where: any = {};

    if (search) {
      where.OR = [{ name: { contains: search, mode: "insensitive" } }];
    }

    if (category) {
      where.category = category;
    }

    // Count total matching records for pagination info
    const total = await prisma.baseProduct.count({ where });

    // Fetch data with pagination and filtering
    const baseProducts = await prisma.baseProduct.findMany({
      where,
      include: {
        variants: {
          select: {
            id: true,
            variantName: true,
            unit: true,
            sizeValue: true,
            barcode: true,
            imageUrl: true,
            baseProductId: true,
            // Include the latest price report for each variant
            priceReports: {
              orderBy: { reportedAt: "desc" },
              take: 1,
              select: {
                id: true,
                price: true,
                location: true,
                reportedAt: true,
                reportedBy: true,
              },
            },
          },
        },
      },
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
    });

    // Transform the data to flatten the price reports array
    const transformedBaseProducts = baseProducts.map((product) => ({
      ...product,
      variants: product.variants.map((variant) => ({
        ...variant,
        latestPriceReport: variant.priceReports[0] || null,
        priceReports: undefined, // Remove the priceReports array
      })),
    }));

    // Return data with pagination metadata
    return NextResponse.json({
      data: transformedBaseProducts,
      meta: {
        total,
        page,
        limit,
        pageCount: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching base products:", error);
    return NextResponse.json(
      { error: "Failed to fetch base products" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const baseProduct = await prisma.baseProduct.create({
      data: json,
      include: { variants: true },
    });
    return NextResponse.json(baseProduct, { status: 201 });
  } catch (error) {
    console.error("Error creating base product:", error);
    return NextResponse.json(
      { error: "Failed to create base product" },
      { status: 500 }
    );
  }
}
