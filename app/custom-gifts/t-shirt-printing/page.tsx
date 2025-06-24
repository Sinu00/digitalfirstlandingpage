import Link from "next/link";
import Image from "next/image";

export default function TShirtPrintingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center py-16">
      <div className="max-w-2xl w-full mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
        <Image
          src="/custom-gifts/t-shirt-printing.jpg"
          alt="T Shirt Printing"
          className="mx-auto mb-8 rounded-xl shadow w-full max-w-md h-64 object-contain bg-slate-100"
          width={400}
          height={256}
        />
        <h1 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">T Shirt Printing</h1>
        <p className="text-lg text-slate-600 mb-8">
          Create custom t-shirts with vibrant, long-lasting prints. Perfect for events, teams, or personal style, our t-shirt printing service delivers high-quality results on premium fabrics. Choose from a variety of colors and sizes to make your design stand out.
        </p>
        <Link href="/custom-gifts" className="text-blue-700 hover:underline font-medium">&larr; Back to Custom Gifts</Link>
      </div>
    </div>
  );
} 