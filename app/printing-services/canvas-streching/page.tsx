import Link from "next/link";
import Image from "next/image";

export default function CanvasStrechingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Image
            src="/printing-services/canvas-streching.jpg"
            alt="Canvas & Streching"
            width={288}
            height={176}
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Canvas & Streching</h1>
          <p className="text-lg text-slate-700 mb-6">
            Turn your photos and artwork into stunning wall displays with our canvas printing and stretching services. We use high-quality materials and professional techniques to ensure your canvas prints are vibrant, durable, and ready to hang in your home or office.
          </p>
          <Link href="/printing-services" className="text-blue-700 hover:underline">← Back to Printing Services</Link>
        </div>
      </section>
    </div>
  );
} 