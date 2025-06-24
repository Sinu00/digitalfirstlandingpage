import Link from "next/link";
import Image from "next/image";

export default function CustomRibbonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Image
            src="/custom-gifts/Custom-Ribbon.jpg"
            alt="Custom Ribbon"
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
            width={288}
            height={176}
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Custom Ribbon</h1>
          <p className="text-lg text-slate-700 mb-6">
            Add a special touch to gifts, events, or branding with custom printed ribbons. Choose your color, width, and message for a unique finishing detail.
          </p>
          <Link href="/custom-gifts" className="text-blue-700 hover:underline">← Back to Custom Gifts</Link>
        </div>
      </section>
    </div>
  );
} 