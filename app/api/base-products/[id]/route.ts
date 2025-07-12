// app/api/base-products/[id]/route.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const baseProduct = await prisma.baseProduct.findUnique({
      where: { id: params.id },
      include: { variants: true },
    });

    if (!baseProduct) {
      return NextResponse.json(
        { error: "Base product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(baseProduct);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch base product" },
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
    const baseProduct = await prisma.baseProduct.update({
      where: { id: params.id },
      data: json,
    });
    return NextResponse.json(baseProduct);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update base product" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.baseProduct.delete({
      where: { id: params.id },
    });
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete base product" },
      { status: 500 }
    );
  }
}
