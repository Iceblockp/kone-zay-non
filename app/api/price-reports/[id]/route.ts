import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const priceReport = await prisma.priceReport.findUnique({
      where: { id: params.id },
      include: { 
        variant: {
          include: {
            baseProduct: true
          }
        } 
      },
    });

    if (!priceReport) {
      return NextResponse.json(
        { error: "Price report not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(priceReport);
  } catch (error) {
    console.error("Error fetching price report:", error);
    return NextResponse.json(
      { error: "Failed to fetch price report" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const json = await request.json();
    const priceReport = await prisma.priceReport.update({
      where: { id: params.id },
      data: json,
      include: { 
        variant: {
          include: {
            baseProduct: true
          }
        } 
      },
    });
    return NextResponse.json(priceReport);
  } catch (error) {
    console.error("Error updating price report:", error);
    return NextResponse.json(
      { error: "Failed to update price report" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.priceReport.delete({
      where: { id: params.id },
    });
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Error deleting price report:", error);
    return NextResponse.json(
      { error: "Failed to delete price report" },
      { status: 500 }
    );
  }
}