import Link from "next/link";

export default function AutocadPlottingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <img
            src="/printing-services/autocad-plotting.jpg"
            alt="Autocad Plotting"
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Autocad Plotting</h1>
          <p className="text-lg text-slate-700 mb-6">
            Print your architectural and engineering drawings with precision using our AutoCAD plotting services. We handle large-format plans, blueprints, and technical drawings with accurate scaling and crisp detail, ensuring your designs are presented professionally.
          </p>
          <Link href="/printing-services" className="text-blue-700 hover:underline">← Back to Printing Services</Link>
        </div>
      </section>
    </div>
  );
} 