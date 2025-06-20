import Link from "next/link";

export default function CeramicPlatesEngravingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <img
            src="/custom-gifts/ceramic-plates-engraving.jpg"
            alt="Ceramic Plates Engraving"
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Ceramic Plates Engraving</h1>
          <p className="text-lg text-slate-700 mb-6">
            Add a timeless touch to your ceramics with custom engraving. Our engraved ceramic plates make memorable gifts or awards, combining artistry and durability.
          </p>
          <Link href="/custom-gifts" className="text-blue-700 hover:underline">← Back to Custom Gifts</Link>
        </div>
      </section>
    </div>
  );
} 