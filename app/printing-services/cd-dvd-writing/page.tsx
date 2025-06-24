import Link from "next/link";
import Image from "next/image";

export default function CDDVDWritingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Image
            src="/printing-services/cd-dvd-writing.jpg"
            alt="CD - DVD Writing"
            width={288}
            height={176}
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
          />
          <h1 className="text-4xl font-serif font-bold mb-4">CD - DVD Writing</h1>
          <p className="text-lg text-slate-700 mb-6">
            Safely store, duplicate, or distribute your digital files with our CD and DVD writing services. We offer fast, reliable burning and labeling for presentations, music, videos, or data backups, ensuring your content is professionally packaged and easy to share.
          </p>
          <Link href="/printing-services" className="text-blue-700 hover:underline">← Back to Printing Services</Link>
        </div>
      </section>
    </div>
  );
}
