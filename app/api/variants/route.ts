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
    const baseProductId = searchParams.get("baseProductId") || undefined;
    const barcode = searchParams.get("barcode") || undefined;

    // Build where clause for filtering
    const where: any = {};

    if (search) {
      where.OR = [{ variantName: { contains: search, mode: "insensitive" } }];
    }

    if (baseProductId) {
      where.baseProductId = baseProductId;
    }

    if (barcode) {
      where.barcode = barcode;
    }

    // Count total matching records for pagination info
    const total = await prisma.productVariant.count({ where });

    // Fetch data with pagination and filtering
    const variants = await prisma.productVariant.findMany({
      where,
      include: {
        baseProduct: true,
        priceReports: {
          orderBy: { reportedAt: "desc" },
          take: 1,
        },
      },
      skip,
      take: limit,
      orderBy: { variantName: "asc" },
    });

    // Return data with pagination metadata
    return NextResponse.json({
      data: variants,
      meta: {
        total,
        page,
        limit,
        pageCount: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching variants:", error);
    return NextResponse.json(
      { error: "Failed to fetch variants" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const json = await request.json();
    console.log("here");
    const variant = await prisma.productVariant.create({
      data: json,
      include: { baseProduct: true },
    });
    console.log("here two");
    return NextResponse.json(variant, { status: 201 });
  } catch (error) {
    console.error("Error creating variant:", error);
    return NextResponse.json(
      { error: "Failed to create variant" },
      { status: 500 }
    );
  }
}
