import Link from "next/link";
import Image from "next/image";

export default function BookMarksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Image
            src="/printing-services/book-marks.jpg"
            alt="Book Marks"
            width={288}
            height={176}
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Book Marks</h1>
          <p className="text-lg text-slate-700 mb-6">
            Create memorable giveaways or personal keepsakes with custom printed bookmarks. Perfect for schools, libraries, events, or promotional campaigns, our bookmarks can be personalized with your artwork, logo, or message and are printed on durable, high-quality stock.
          </p>
          <Link href="/printing-services" className="text-blue-700 hover:underline">← Back to Printing Services</Link>
        </div>
      </section>
    </div>
  );
} 