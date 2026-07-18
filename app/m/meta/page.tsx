import type { Metadata } from 'next'
import LafueMetaLP from '@/components/LafueMetaLP'

export const metadata: Metadata = {
  title: 'See If Hair Restoration Is Right For You | L.A. FUE Hair NYC',
  description: 'A private, personalized consultation to evaluate your hair loss, treatment options, and expected results — guided by the L.A. FUE Hair medical team in New York. Not a sales appointment.',
  robots: 'noindex, nofollow',
  openGraph: { images: [{ url: 'https://hair.lafuehairnyc.com/og/m-meta.webp', width: 1200, height: 630, alt: 'Hair restoration consultation at L.A. FUE Hair New York' }] },
  twitter: { card: 'summary_large_image', images: ['https://hair.lafuehairnyc.com/og/m-meta.webp'] },
}

export default function MMeta() {
  return <LafueMetaLP />
}
