import Link from "next/link";
import Image from "next/image";

export default function FoamBoardMountingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Image
            src="/printing-services/Foam-Board-Mounting.jpg"
            alt="Foam Board Mounting"
            width={288}
            height={176}
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Foam Board Mounting</h1>
          <p className="text-lg text-slate-700 mb-6">
            Display your prints with style and stability using our foam board mounting service. Ideal for presentations, exhibitions, and signage, foam board provides a lightweight yet sturdy backing for posters, photos, and graphics. Choose from various thicknesses and finishes for a professional look.
          </p>
          <Link href="/printing-services" className="text-blue-700 hover:underline">← Back to Printing Services</Link>
        </div>
      </section>
    </div>
  );
} 