import Link from "next/link";

export default function RubberStampPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <img
            src="/printing-services/rubber-stamp.jpg"
            alt="Rubber Stamp"
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Rubber Stamp</h1>
          <p className="text-lg text-slate-700 mb-6">
            Make your mark with custom rubber stamps for business or personal use. Choose from self-inking, pre-inked, or traditional rubber stamps in various sizes and shapes. Perfect for office branding, document authentication, or creative projects, our stamps deliver crisp, clear impressions every time.
          </p>
          <Link href="/printing-services" className="text-blue-700 hover:underline">← Back to Printing Services</Link>
        </div>
      </section>
    </div>
  );
} 