import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET semua cart
export async function GET() {
  const cart = await prisma.cart.findMany({
    include: {
      product: true,
    },
  });

  return NextResponse.json(cart);
}

// POST tambah cart
export async function POST(request) {
  try {
    const { productId } = await request.json();

    const existing = await prisma.cart.findFirst({
      where: {
        productId,
      },
    });

    if (existing) {
      const updated = await prisma.cart.update({
        where: {
          id: existing.id,
        },
        data: {
          quantity: existing.quantity + 1,
        },
      });

      return NextResponse.json(updated);
    }

    const cart = await prisma.cart.create({
      data: {
        productId,
      },
    });

    return NextResponse.json(cart);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Gagal menambahkan cart" },
      { status: 500 },
    );
  }
}
