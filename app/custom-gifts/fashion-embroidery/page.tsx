import Link from "next/link";
import Image from "next/image";

export default function FashionEmbroideryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Image
            src="/custom-gifts/fashion-embroidery.jpg"
            alt="Fashion Embroidery"
            width={288}
            height={176}
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Fashion Embroidery</h1>
          <p className="text-lg text-slate-700 mb-6">
            Add a unique touch to your garments with our fashion embroidery services. From bold patterns to subtle accents, we bring your creative vision to life with precision and style.
          </p>
          <Link href="/custom-gifts" className="text-blue-700 hover:underline">← Back to Custom Gifts</Link>
        </div>
      </section>
    </div>
  );
} 