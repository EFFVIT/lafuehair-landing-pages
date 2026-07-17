import type { Metadata } from 'next'
import LafueLP from '@/components/LafueLP'

export const metadata: Metadata = {
  openGraph: { images: [{ url: "https://hair.lafuehairnyc.com/og/hair-loss.webp", width: 1200, height: 630, alt: "Understanding hair loss, physician-reviewed education from L.A. FUE Hair NYC" }] },
  twitter: { card: "summary_large_image", images: ["https://hair.lafuehairnyc.com/og/hair-loss.webp"] },
  title: 'Hair Loss Educational Information | LA FUE Hair',
  robots: 'noindex, nofollow',
}

export default function HairLossPage() {
  return (
    <LafueLP
      heroFormId="FBArZQM26K9JBzzAmmjJ"
      bottomFormId="7w8zla8FIE2qhMqwp1NQ"
    />
  )
}
