import Link from "next/link";

export default function PhotocopyServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <img
            src="/printing-services/photocopy-services.jpg"
            alt="Photocopy Services"
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Photocopy Services</h1>
          <p className="text-lg text-slate-700 mb-6">
            Fast, reliable photocopying for all your document needs. We handle everything from single pages to bulk jobs, offering black & white or color copies with crisp clarity. Confidentiality and quality are guaranteed for business, academic, or personal use.
          </p>
          <Link href="/printing-services" className="text-blue-700 hover:underline">← Back to Printing Services</Link>
        </div>
      </section>
    </div>
  );
} 