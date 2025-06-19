import Link from "next/link";

export default function PassportSizePhotoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <img
            src="/printing-services/passport-size-photo.jpg"
            alt="Passport Size Photo"
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Passport Size Photo</h1>
          <p className="text-lg text-slate-700 mb-6">
            Get professional passport size photos that meet all country specifications. Our studio ensures proper lighting, background, and size for official documents, visas, and IDs. Fast service and expert staff guarantee you leave with compliant, high-quality photos every time.
          </p>
          <Link href="/printing-services" className="text-blue-700 hover:underline">← Back to Printing Services</Link>
        </div>
      </section>
    </div>
  );
} 