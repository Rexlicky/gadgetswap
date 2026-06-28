import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// Ambil semua wishlist
export async function GET() {
  const wishlist = await prisma.wishlist.findMany({
    include: {
      product: true,
    },
  });

  return NextResponse.json(wishlist);
}

// Tambah wishlist
export async function POST(request) {
  try {
    const { productId } = await request.json();

    const wishlist = await prisma.wishlist.create({
      data: {
        productId,
      },
    });

    return NextResponse.json(wishlist);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Gagal menambahkan wishlist" },
      { status: 500 },
    );
  }
}
