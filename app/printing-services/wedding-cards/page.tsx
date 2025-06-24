import Link from "next/link";
import Image from "next/image";

export default function WeddingCardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Image
            src="/printing-services/wedding-cards.jpg"
            alt="Wedding Cards"
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
            width={288}
            height={176}
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Wedding Cards</h1>
          <p className="text-lg text-slate-700 mb-6">
            Announce your special day with beautifully designed wedding cards. Choose from elegant templates or create a custom design that reflects your unique style. Our premium printing and finishing options ensure your invitations are as memorable as your celebration.
          </p>
          <Link href="/printing-services" className="text-blue-700 hover:underline">← Back to Printing Services</Link>
        </div>
      </section>
    </div>
  );
} 