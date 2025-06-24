import Link from "next/link";
import Image from "next/image";

export default function CustomisedCalendarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Image
            src="/printing-services/Customised-Calendar.jpg"
            alt="Customised Calendar"
            width={288}
            height={176}
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Customised Calendar</h1>
          <p className="text-lg text-slate-700 mb-6">
            Stay organized and promote your brand all year long with customised calendars. Choose from wall, desk, or pocket formats, and personalize with your photos, logo, or special dates. Our calendars are perfect for corporate gifts, marketing, or personal use.
          </p>
          <Link href="/printing-services" className="text-blue-700 hover:underline">← Back to Printing Services</Link>
        </div>
      </section>
    </div>
  );
} 