import Link from "next/link";
import Image from "next/image";

export default function ThermalEmbossingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Image
            src="/printing-services/thermal-embossing.jpg"
            alt="Thermal Embossing"
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
            width={288}
            height={176}
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Thermal Embossing</h1>
          <p className="text-lg text-slate-700 mb-6">
            Give your prints a premium, tactile feel with thermal embossing. This process creates raised, textured elements on your cards, invitations, or packaging, adding depth and elegance. Perfect for brands that want to make a memorable impression with every touch.
          </p>
          <Link href="/printing-services" className="text-blue-700 hover:underline">← Back to Printing Services</Link>
        </div>
      </section>
    </div>
  );
} 