import Link from "next/link";

export default function ProductBreadcrumb({ productName }) {
  return (
    <div className="mb-8 flex items-center gap-2 text-sm text-white/50">
      <Link href="/" className="transition hover:text-cyan-400">
        Beranda
      </Link>

      <span>/</span>

      <Link href="/marketplace" className="transition hover:text-cyan-400">
        Marketplace
      </Link>

      <span>/</span>

      <span className="text-white">{productName}</span>
    </div>
  );
}
