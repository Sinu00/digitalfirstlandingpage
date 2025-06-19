import Link from "next/link";

export default function LargeFormatPrintingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <img
            src="/printing-services/large-format-printing.jpg"
            alt="Large Format Printing"
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Large Format Printing</h1>
          <p className="text-lg text-slate-700 mb-6">
            Make a big impact with our large format printing services. From banners and posters to signage and exhibition graphics, we deliver vibrant, high-resolution prints on a variety of materials. Ideal for events, retail displays, and outdoor advertising that demands attention.
          </p>
          <Link href="/printing-services" className="text-blue-700 hover:underline">← Back to Printing Services</Link>
        </div>
      </section>
    </div>
  );
} 