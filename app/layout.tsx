import { metadata } from './metadata'
import './globals.css'
import WhatsAppButton from '../components/WhatsAppButton'

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
