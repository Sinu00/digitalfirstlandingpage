import Link from "next/link";
import Image from "next/image";

export default function FoilingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Image
            src="/printing-services/foiling.jpg"
            alt="Foiling"
            width={288}
            height={176}
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Foiling</h1>
          <p className="text-lg text-slate-700 mb-6">
            Add a touch of luxury and sophistication to your prints with our foiling services. Choose from gold, silver, or colored foils to highlight logos, text, or design elements on business cards, invitations, certificates, and more. Foiling creates a stunning, tactile effect that elevates your brand.
          </p>
          <Link href="/printing-services" className="text-blue-700 hover:underline">← Back to Printing Services</Link>
        </div>
      </section>
    </div>
  );
} 