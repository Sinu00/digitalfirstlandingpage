import Link from "next/link";

export default function FlexPrintingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <img
            src="/printing-services/flex-printing.jpg"
            alt="Flex Printing"
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Flex Printing</h1>
          <p className="text-lg text-slate-700 mb-6">
            Create vibrant banners, hoardings, and displays with our flex printing services. Perfect for indoor and outdoor advertising, flex prints are durable, weather-resistant, and available in a range of sizes. Get your message noticed with high-impact visuals and crisp detail.
          </p>
          <Link href="/printing-services" className="text-blue-700 hover:underline">← Back to Printing Services</Link>
        </div>
      </section>
    </div>
  );
} 