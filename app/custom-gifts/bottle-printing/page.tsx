import Link from "next/link";
import Image from "next/image";

export default function BottlePrintingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Image
            src="/custom-gifts/Bottle-Printing.jpg"
            alt="Bottle Printing"
            width={288}
            height={176}
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Bottle Printing</h1>
          <p className="text-lg text-slate-700 mb-6">
            Personalize bottles for gifts, events, or promotions with our high-quality bottle printing service. Choose from a variety of styles and colors to make your brand or message stand out.
          </p>
          <Link href="/custom-gifts" className="text-blue-700 hover:underline">← Back to Custom Gifts</Link>
        </div>
      </section>
    </div>
  );
} 