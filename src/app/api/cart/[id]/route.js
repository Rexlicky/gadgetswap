import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(request, context) {
  try {
    const { id } = await context.params;
    const { quantity } = await request.json();

    const cart = await prisma.cart.update({
      where: {
        id,
      },
      data: {
        quantity,
      },
    });

    return NextResponse.json(cart);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Gagal update quantity cart" },
      { status: 500 },
    );
  }
}

export async function DELETE(request, context) {
  try {
    const { id } = await context.params;

    await prisma.cart.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Gagal menghapus item",
      },
      {
        status: 500,
      },
    );
  }
}