import type { Metadata } from 'next'
import LafueMetaRetargetingLP from '@/components/LafueMetaRetargetingLP'

export const metadata: Metadata = {
  title: 'Have Questions About Hair Restoration? | L.A. FUE Hair NYC',
  description: 'Precision hair restoration protects your donor area and plans for natural-looking results based on your hair loss pattern. See if you’re a candidate — confidential and obligation-free.',
  robots: 'noindex, nofollow',
  openGraph: { images: [{ url: 'https://hair.lafuehairnyc.com/og/m-meta-retargeting.webp', width: 1200, height: 630, alt: 'Hair restoration consultation at L.A. FUE Hair New York' }] },
  twitter: { card: 'summary_large_image', images: ['https://hair.lafuehairnyc.com/og/m-meta-retargeting.webp'] },
}

export default function MMetaRetargeting() {
  return <LafueMetaRetargetingLP />
}
