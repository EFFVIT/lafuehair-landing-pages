import type { Metadata } from 'next'
import LafueLPV2 from '@/components/LafueLPV2'

export const metadata: Metadata = {
  openGraph: { images: [{ url: "https://hair.lafuehairnyc.com/og/c-evaluation.webp", width: 1200, height: 630, alt: "Dr. Anton Georgiev of L.A. FUE Hair, New York City" }] },
  twitter: { card: "summary_large_image", images: ["https://hair.lafuehairnyc.com/og/c-evaluation.webp"] },
  title: 'Hair Loss Educational Information | L.A. FUE Hair NYC',
  robots: 'noindex, nofollow',
}

export default function EvaluationPage() {
  return (
    <LafueLPV2
      heroFormId="FBArZQM26K9JBzzAmmjJ"
      bottomFormId="7w8zla8FIE2qhMqwp1NQ"
    />
  )
}
