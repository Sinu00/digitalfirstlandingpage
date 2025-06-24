import Link from "next/link";
import Image from "next/image";

export default function BindingServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Image
            src="/printing-services/Binding-Services.jpg"
            alt="Binding Services"
            width={288}
            height={176}
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Binding Services</h1>
          <p className="text-lg text-slate-700 mb-6">
            Keep your documents organized and professional with our comprehensive binding services. We offer spiral, comb, wire, and perfect binding for reports, presentations, manuals, and more. Our finishing options ensure durability and a polished look, making your documents easy to use and impressive to present.
          </p>
          <Link href="/printing-services" className="text-blue-700 hover:underline">← Back to Printing Services</Link>
        </div>
      </section>
    </div>
  );
} 