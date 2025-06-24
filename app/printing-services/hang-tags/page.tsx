import Link from "next/link";
import Image from "next/image";

export default function HangTagsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Image
            src="/printing-services/Hang-Tags.jpg"
            alt="Hang Tags"
            width={288}
            height={176}
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Hang Tags</h1>
          <p className="text-lg text-slate-700 mb-6">
            Add a professional touch to your products with custom hang tags. Ideal for clothing, gifts, and retail items, our hang tags can be printed in various shapes, sizes, and finishes to showcase your brand, pricing, or care instructions.
          </p>
          <Link href="/printing-services" className="text-blue-700 hover:underline">← Back to Printing Services</Link>
        </div>
      </section>
    </div>
  );
} 