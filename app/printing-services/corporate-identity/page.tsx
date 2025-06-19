import Link from "next/link";

export default function CorporateIdentityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <img
            src="/printing-services/corporate-identity.jpg"
            alt="Corporate Identity"
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Corporate Identity</h1>
          <p className="text-lg text-slate-700 mb-6">
            Establish a strong and cohesive brand presence with our Corporate Identity solutions. From business cards and letterheads to branded envelopes and folders, we ensure your company's image is professional, consistent, and memorable across all touchpoints. Our design and print experts work with you to create materials that reflect your brand values and leave a lasting impression.
          </p>
          <Link href="/printing-services" className="text-blue-700 hover:underline">← Back to Printing Services</Link>
        </div>
      </section>
    </div>
  );
} 