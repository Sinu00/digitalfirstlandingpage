import Link from "next/link";

export default function MugPrintingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <img
            src="/custom-gifts/mug-printing.jpg"
            alt="Mug Printing"
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Mug Printing</h1>
          <p className="text-lg text-slate-700 mb-6">
            Design your own mugs with custom prints for gifts, promotions, or personal use. Our mug printing service ensures crisp, vibrant images that are dishwasher and microwave safe. Make every sip special with a personalized mug.
          </p>
          <Link href="/custom-gifts" className="text-blue-700 hover:underline">← Back to Custom Gifts</Link>
        </div>
      </section>
    </div>
  );
} 