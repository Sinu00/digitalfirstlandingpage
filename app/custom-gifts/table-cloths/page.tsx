import Link from "next/link";
import Image from "next/image";

export default function TableClothsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Image
            src="/custom-gifts/Table-Cloths.jpg"
            alt="Table Cloths"
            width={288}
            height={176}
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Table Cloths</h1>
          <p className="text-lg text-slate-700 mb-6">
            Dress up your dining or event tables with custom table cloths. Available in various sizes and fabrics, our table cloths can be printed or embroidered to match your theme or brand.
          </p>
          <Link href="/custom-gifts" className="text-blue-700 hover:underline">← Back to Custom Gifts</Link>
        </div>
      </section>
    </div>
  );
} 