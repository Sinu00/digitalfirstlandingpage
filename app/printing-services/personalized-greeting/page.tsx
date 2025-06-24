import Link from "next/link";
import Image from "next/image";

export default function PersonalizedGreetingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Image
            src="/printing-services/Personalized-Greeting.jpg"
            alt="Personalized Greeting"
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
            width={288}
            height={176}
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Personalized Greeting</h1>
          <p className="text-lg text-slate-700 mb-6">
            Send heartfelt messages with our personalized greeting cards. Perfect for holidays, birthdays, or special occasions, our cards can be customized with your photos, artwork, or text. High-quality printing and premium paper make every greeting memorable.
          </p>
          <Link href="/printing-services" className="text-blue-700 hover:underline">← Back to Printing Services</Link>
        </div>
      </section>
    </div>
  );
} 