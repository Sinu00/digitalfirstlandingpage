import Link from "next/link";
import Image from "next/image";

export default function PrintingOnGiftItemsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Image
            src="/printing-services/Printing-on-Gift-items.jpg"
            alt="Printing on Gift Items"
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
            width={288}
            height={176}
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Printing on Gift Items</h1>
          <p className="text-lg text-slate-700 mb-6">
            Transform ordinary gifts into cherished keepsakes with our gift item printing services. From mugs and keychains to t-shirts and photo frames, we personalize a wide range of products with your design, logo, or message. Perfect for corporate giveaways, special occasions, or personal surprises.
          </p>
          <Link href="/printing-services" className="text-blue-700 hover:underline">← Back to Printing Services</Link>
        </div>
      </section>
    </div>
  );
} 