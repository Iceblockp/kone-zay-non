import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Pagination parameters
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;
    
    // Filter parameters
    const variantId = searchParams.get("variantId") || undefined;
    const location = searchParams.get("location") || undefined;
    const minPrice = searchParams.get("minPrice") ? parseFloat(searchParams.get("minPrice")!) : undefined;
    const maxPrice = searchParams.get("maxPrice") ? parseFloat(searchParams.get("maxPrice")!) : undefined;
    
    // Date range parameters
    const startDate = searchParams.get("startDate") ? new Date(searchParams.get("startDate")!) : undefined;
    const endDate = searchParams.get("endDate") ? new Date(searchParams.get("endDate")!) : undefined;
    
    // Build where clause for filtering
    const where: any = {};
    
    if (variantId) {
      where.variantId = variantId;
    }
    
    if (location) {
      where.location = { contains: location, mode: "insensitive" };
    }
    
    // Price range filter
    if (minPrice !== undefined || maxPrice !== undefined) {
      where.price = {};
      if (minPrice !== undefined) {
        where.price.gte = minPrice;
      }
      if (maxPrice !== undefined) {
        where.price.lte = maxPrice;
      }
    }
    
    // Date range filter
    if (startDate || endDate) {
      where.reportedAt = {};
      if (startDate) {
        where.reportedAt.gte = startDate;
      }
      if (endDate) {
        where.reportedAt.lte = endDate;
      }
    }
    
    // Count total matching records for pagination info
    const total = await prisma.priceReport.count({ where });
    
    // Fetch data with pagination and filtering
    const priceReports = await prisma.priceReport.findMany({
      where,
      include: { 
        variant: {
          include: {
            baseProduct: true
          }
        } 
      },
      skip,
      take: limit,
      orderBy: { reportedAt: "desc" },
    });
    
    // Return data with pagination metadata
    return NextResponse.json({
      data: priceReports,
      meta: {
        total,
        page,
        limit,
        pageCount: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching price reports:", error);
    return NextResponse.json(
      { error: "Failed to fetch price reports" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const priceReport = await prisma.priceReport.create({
      data: json,
      include: { 
        variant: {
          include: {
            baseProduct: true
          }
        } 
      },
    });
    return NextResponse.json(priceReport, { status: 201 });
  } catch (error) {
    console.error("Error creating price report:", error);
    return NextResponse.json(
      { error: "Failed to create price report" },
      { status: 500 }
    );
  }
}