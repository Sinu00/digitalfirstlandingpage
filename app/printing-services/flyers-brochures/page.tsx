import Link from "next/link";
import Image from "next/image";

export default function FlyersBrochuresPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Image
            src="/printing-services/Flyers-Brochures.jpg"
            alt="Flyers & Brochures"
            width={288}
            height={176}
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Flyers & Brochures</h1>
          <p className="text-lg text-slate-700 mb-6">
            Promote your business, events, or special offers with eye-catching flyers and brochures. We offer a variety of paper stocks, finishes, and folding options to help you communicate your message effectively. Whether you need a small batch for a local event or a large run for a major campaign, our high-quality printing ensures your materials stand out.
          </p>
          <Link href="/printing-services" className="text-blue-700 hover:underline">← Back to Printing Services</Link>
        </div>
      </section>
    </div>
  );
} 