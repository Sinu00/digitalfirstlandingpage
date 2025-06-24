import Link from "next/link";
import Image from "next/image";

export default function SpotUVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Image
            src="/printing-services/Spot-UV.jpg"
            alt="Spot UV"
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
            width={288}
            height={176}
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Spot UV</h1>
          <p className="text-lg text-slate-700 mb-6">
            Make your prints pop with Spot UV coating. This special finish applies a glossy, raised effect to selected areas of your design, such as logos or images, creating contrast and visual interest. Ideal for business cards, brochures, and invitations that demand attention.
          </p>
          <Link href="/printing-services" className="text-blue-700 hover:underline">← Back to Printing Services</Link>
        </div>
      </section>
    </div>
  );
} 