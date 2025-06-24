import Link from "next/link";
import Image from "next/image";

export default function BusinessCardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Image
            src="/printing-services/Business-Cards.jpg"
            alt="Business Cards"
            width={288}
            height={176}
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Business Cards</h1>
          <p className="text-lg text-slate-700 mb-6">
            Business Cards Printing in Ajman, UAE was never so easy. Just walk-in to any one of our print centers in UAE and walk away with stunning quality business cards in minutes. You can also have an option of uploading the files for business card through the file upload section in our website. DESCO Printing offers you a wide range of Business Cards Printing and finishing options. The business cards can be printed either on Digital Printing or on Offset Printing. In Digital Printing option business card can be delivered within 30 minutes; We can print the business cards on single or both sides. It is always advisable to opt for Digital Printing when volume is low whereas Offset Printing is best and economical when you have to print in large volumes.
          </p>
          <Link href="/printing-services" className="text-blue-700 hover:underline">← Back to Printing Services</Link>
        </div>
      </section>
    </div>
  );
} 