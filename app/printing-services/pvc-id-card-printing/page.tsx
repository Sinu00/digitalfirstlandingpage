import Link from "next/link";
import Image from "next/image";

export default function PVCIDCardPrintingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Image
            src="/printing-services/pvc-id-card-printing.jpg"
            alt="PVC ID Card Printing"
            className="mx-auto rounded-lg mb-8 w-72 h-44 object-cover"
            width={288}
            height={176}
          />
          <h1 className="text-4xl font-serif font-bold mb-4">PVC ID Card Printing</h1>
          <p className="text-lg text-slate-700 mb-6">
            Secure and professional identification with our PVC ID card printing services. We produce durable, high-quality cards for employees, students, or members, with options for barcodes, magnetic stripes, and custom designs to suit your organization&apos;s needs.
          </p>
          <Link href="/printing-services" className="text-blue-700 hover:underline">← Back to Printing Services</Link>
        </div>
      </section>
    </div>
  );
} 