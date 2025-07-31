import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Digital First Printing & Packaging | Ajman, UAE",
  description: "Contact Digital First Printing & Packaging in Industrial Area 2, Ajman, UAE. Get quotes, support, and expert consultation for all your printing and design needs. Available 24/7.",
  keywords: [
    "contact digital first",
    "printing contact",
    "ajman printing",
    "UAE printing services",
    "digital first contact",
    "printing quote",
    "design consultation",
    "24/7 printing support"
  ],
  authors: [{ name: "Digital First Printing & Packaging" }],
  creator: "Digital First Printing & Packaging",
  publisher: "Digital First Printing & Packaging",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://digitalfirst.com"),
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Digital First Printing & Packaging | Ajman, UAE",
    description: "Contact Digital First Printing & Packaging in Industrial Area 2, Ajman, UAE. Get quotes, support, and expert consultation for all your printing and design needs. Available 24/7.",
    url: "https://digitalfirst.com/contact",
    siteName: "Digital First Printing & Packaging",
    images: [
      {
        url: "/digitalfirstlogo.jpg",
        width: 400,
        height: 400,
        alt: "Digital First Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Digital First Printing & Packaging | Ajman, UAE",
    description: "Contact Digital First Printing & Packaging in Industrial Area 2, Ajman, UAE. Get quotes, support, and expert consultation for all your printing and design needs. Available 24/7.",
    images: ["/digitalfirstlogo.jpg"],
    creator: "@digitalfirst",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
} 