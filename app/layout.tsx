import Script from 'next/script'
import DniSwap from '@/components/DniSwap'
import GaTag from '@/components/GaTag'
import Fab from '@/components/fab/Fab'
import './globals.css'

export const metadata = {
  openGraph: {
    images: [{ url: 'https://lafuehairnyc.com/wp-content/uploads/2026/01/LAFUENYC-Logo-website-3-1.png', width: 1200, height: 630, alt: 'LA FUE Hair - Hair Loss Education' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        </head>
      <body>
          <GaTag />
        <Fab client="lafue" />
        <DniSwap />
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="66840f5c1123b1637a9a8ba7"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  )
}
