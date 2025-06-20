import Link from "next/link";

export default function HoodiePrintingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center py-16">
      <div className="max-w-2xl w-full mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
        <img
          src="/custom-gifts/hoodie-printing.jpg"
          alt="Hoodie Printing"
          className="mx-auto mb-8 rounded-xl shadow w-full max-w-md h-64 object-contain bg-slate-100"
          width={400}
          height={256}
        />
        <h1 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Hoodie Printing</h1>
        <p className="text-lg text-slate-600 mb-8">
          Personalize your hoodies with custom prints that last. Our hoodie printing service uses advanced techniques to ensure your designs are bold, durable, and comfortable to wear. Ideal for groups, brands, or unique gifts.
        </p>
        <Link href="/custom-gifts" className="text-blue-700 hover:underline font-medium">&larr; Back to Custom Gifts</Link>
      </div>
    </div>
  );
} 