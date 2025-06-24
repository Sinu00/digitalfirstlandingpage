import Link from "next/link";
import Image from "next/image"; 

export default function PapperBagsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Image
            src="/printing-services/papper-bags.jpg"
            alt="Papper Bags"
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
            width={288}
            height={176}
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Papper Bags</h1>
          <p className="text-lg text-slate-700 mb-6">
            Promote your brand and go eco-friendly with custom printed paper bags. Perfect for retail, events, and giveaways, our paper bags are available in various sizes and can be personalized with your logo, artwork, or message for a professional, sustainable touch.
          </p>
          <Link href="/printing-services" className="text-blue-700 hover:underline">← Back to Printing Services</Link>
        </div>
      </section>
    </div>
  );
} 