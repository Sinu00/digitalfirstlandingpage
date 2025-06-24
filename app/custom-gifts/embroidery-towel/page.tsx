import Link from "next/link";
import Image from "next/image";

export default function EmbroideryTowelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Image
            src="/custom-gifts/Embroidery-Towel.jpg"
            alt="Embroidery Towel"
            width={288}
            height={176}
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Embroidery Towel</h1>
          <p className="text-lg text-slate-700 mb-6">
            Add a personal touch to your towels with custom embroidery. Ideal for gifts, hotels, or spas, our embroidery towels combine luxury and durability for a truly special experience.
          </p>
          <Link href="/custom-gifts" className="text-blue-700 hover:underline">← Back to Custom Gifts</Link>
        </div>
      </section>
    </div>
  );
} 