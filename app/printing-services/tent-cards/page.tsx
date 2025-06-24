import Link from "next/link";
import Image from "next/image";

export default function TentCardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Image
            src="/printing-services/tent-cards.jpg"
            alt="Tent Cards"
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
            width={288}
            height={176}
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Tent Cards</h1>
          <p className="text-lg text-slate-700 mb-6">
            Display information, promotions, or branding on tables and counters with custom tent cards. Ideal for restaurants, events, and conferences, our tent cards are printed on sturdy stock and can be customized with your design, logo, or message for maximum visibility.
          </p>
          <Link href="/printing-services" className="text-blue-700 hover:underline">← Back to Printing Services</Link>
        </div>
      </section>
    </div>
  );
} 