import Link from "next/link";
import Image from "next/image";

export default function CustomisedMugsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Image
            src="/printing-services/Customised-Mugs.jpg"
            alt="Customised Mugs"
            width={288}
            height={176}
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Customised Mugs</h1>
          <p className="text-lg text-slate-700 mb-6">
            Personalize your coffee breaks with our high-quality customised mugs. Add your logo, photo, or message to create memorable gifts, promotional items, or branded office essentials. Our durable printing ensures vibrant colors and long-lasting designs, perfect for daily use or special occasions.
          </p>
          <Link href="/printing-services" className="text-blue-700 hover:underline">← Back to Printing Services</Link>
        </div>
      </section>
    </div>
  );
} 