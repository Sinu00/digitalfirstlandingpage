import Link from "next/link";

export default function LargeFormatScanningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <img
            src="/printing-services/large-format-scanning.jpg"
            alt="Large Format Scanning"
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Large Format Scanning</h1>
          <p className="text-lg text-slate-700 mb-6">
            Digitize your oversized documents, blueprints, and artwork with our large format scanning services. We provide high-resolution, color-accurate scans for archiving, reproduction, or digital sharing, ensuring your originals are preserved and accessible.
          </p>
          <Link href="/printing-services" className="text-blue-700 hover:underline">← Back to Printing Services</Link>
        </div>
      </section>
    </div>
  );
} 