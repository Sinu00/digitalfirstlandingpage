import Link from "next/link"
import Image from "next/image"
import { Clock, Award, Shield, FileText } from "lucide-react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function PackagingAndPrintingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">Packaging & Printing</h1>
            <p className="text-lg text-blue-100 max-w-2xl leading-relaxed mb-6">
              Elevate your brand with our comprehensive packaging and printing solutions. From custom boxes and bags to premium labels and wraps, we deliver quality, creativity, and fast turnaround for every business need.
            </p>
            <Link href="/contact" className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors mt-4">
              Get a Quote
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/printing-services/Papper-Bags.jpg"
              alt="Packaging and Printing"
              width={400}
              height={300}
              className="rounded-lg shadow-lg border border-slate-100 bg-slate-100 object-cover w-80 h-56"
              priority
            />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Complete Packaging Solutions</h2>
          <p className="text-lg text-slate-600 mb-8">
            We offer a full spectrum of packaging and printing services for retail, corporate, and promotional needs. Whether you need eco-friendly paper bags, custom-printed boxes, branded labels, or luxury packaging, our team ensures your products stand out with style and durability.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col items-center">
              <Image src="/printing-services/Papper-Bags.jpg" alt="Paper Bags" width={120} height={80} className="rounded mb-4 object-cover" />
              <h3 className="font-bold text-lg mb-2">Custom Paper Bags</h3>
              <p className="text-slate-600 text-sm">Eco-friendly, fully customizable, and perfect for retail or events.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col items-center">
              <Image src="/printing-services/Flex-Printing.jpg" alt="Boxes & Cartons" width={120} height={80} className="rounded mb-4 object-cover" />
              <h3 className="font-bold text-lg mb-2">Boxes & Cartons</h3>
              <p className="text-slate-600 text-sm">Sturdy, branded packaging for products, gifts, and shipping.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col items-center">
              <Image src="/printing-services/foiling.jpg" alt="Labels & Stickers" width={120} height={80} className="rounded mb-4 object-cover" />
              <h3 className="font-bold text-lg mb-2">Labels & Stickers</h3>
              <p className="text-slate-600 text-sm">Premium labels and stickers for branding, safety, and promotions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Why Choose Our Packaging & Printing?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We combine innovative design, quality materials, and advanced printing technology to deliver packaging that impresses and protects.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Fast Turnaround</h3>
              <p className="text-slate-600 text-sm">Quick production and delivery for urgent projects.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Premium Quality</h3>
              <p className="text-slate-600 text-sm">Top-grade materials and print for a professional finish.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-purple-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Secure & Durable</h3>
              <p className="text-slate-600 text-sm">Packaging that protects your products and your brand.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-emerald-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Custom Design</h3>
              <p className="text-slate-600 text-sm">Tailored solutions to match your unique requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">Ready to Upgrade Your Packaging?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how our packaging and printing solutions can help your business grow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
              Get Started
            </Link>
            <Link href="/locations" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
              Find Location
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
} 