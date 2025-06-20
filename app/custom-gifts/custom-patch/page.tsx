import Link from "next/link";

export default function CustomPatchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <img
            src="/custom-gifts/custom-patch.jpg"
            alt="Custom Patch"
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
          />
          <h1 className="text-4xl font-serif font-bold mb-4">Custom Patch</h1>
          <p className="text-lg text-slate-700 mb-6">
            Design your own custom embroidered patches for uniforms, clubs, events, or branding. Our patches are durable, vibrant, and can be tailored to any shape or size, making them perfect for personal or professional use.
          </p>
          <Link href="/custom-gifts" className="text-blue-700 hover:underline">← Back to Custom Gifts</Link>
        </div>
      </section>
    </div>
  );
} 