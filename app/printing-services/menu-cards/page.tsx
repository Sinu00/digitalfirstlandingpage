import Link from "next/link";

export default function MenuCardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <img
            src="/printing-services/menu-cards.jpg"
            alt="Menu Cards"
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Menu Cards</h1>
          <p className="text-lg text-slate-700 mb-6">
            Present your food and beverage offerings in style with our custom menu card printing. Choose from a variety of sizes, finishes, and paper stocks to match your brand and ambiance. Our high-quality prints ensure your menu is both durable and visually appealing for your customers.
          </p>
          <Link href="/printing-services" className="text-blue-700 hover:underline">← Back to Printing Services</Link>
        </div>
      </section>
    </div>
  );
} 