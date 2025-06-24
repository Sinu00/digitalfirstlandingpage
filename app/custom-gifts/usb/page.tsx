import Link from "next/link";
import Image from "next/image";

export default function USBPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Image
            src="/custom-gifts/usb.jpg"
            alt="USB"
            width={288}
            height={176}
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
          />
          <h1 className="text-4xl font-serif font-bold mb-4">USB</h1>
          <p className="text-lg text-slate-700 mb-6">
            Promote your brand or event with custom USB drives. Available in various shapes and capacities, our USBs can be printed or engraved with your logo for a practical and memorable gift.
          </p>
          <Link href="/custom-gifts" className="text-blue-700 hover:underline">← Back to Custom Gifts</Link>
        </div>
      </section>
    </div>
  );
} 