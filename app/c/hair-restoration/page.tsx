import type { Metadata } from 'next'
import LafueLPV2 from '@/components/LafueLPV2'

export const metadata: Metadata = {
  openGraph: { images: [{ url: "https://hair.lafuehairnyc.com/og/c-hair-restoration.webp", width: 1200, height: 630, alt: "Modern FUE hair restoration in New York City" }] },
  twitter: { card: "summary_large_image", images: ["https://hair.lafuehairnyc.com/og/c-hair-restoration.webp"] },
  title: 'Hair Loss Educational Information | L.A. FUE Hair NYC',
  robots: 'noindex, nofollow',
}

/* LocalBusiness/MedicalClinic/Organization schema for the page-audit finding.
   Every field mirrors what this page already shows visitors (footer NAP,
   doctor bio, page copy) — nothing here appears only in the markup. No
   priceRange (the $188/mo figure is a financing payment, not a service
   price), no openingHours (not shown on this page), no aggregateRating (no
   review count/average is shown on this page). */
const BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['MedicalClinic', 'MedicalBusiness', 'LocalBusiness', 'Organization'],
  '@id': 'https://hair.lafuehairnyc.com/c/hair-restoration#business',
  name: 'L.A. FUE Hair NYC',
  url: 'https://hair.lafuehairnyc.com/c/hair-restoration',
  image: 'https://hair.lafuehairnyc.com/og/c-hair-restoration.webp',
  telephone: '+15166135827',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '400 Garden City Plaza, Suite 107',
    addressLocality: 'Garden City',
    addressRegion: 'NY',
    postalCode: '11530',
    addressCountry: 'US',
  },
  areaServed: ['Long Island, NY', 'Manhattan, New York, NY'],
  sameAs: ['https://lafuehairnyc.com'],
  employee: {
    '@type': 'Person',
    name: 'Dr. Anton',
    jobTitle: 'Physician',
    honorificSuffix: 'DO',
  },
  knowsAbout: ['Hair loss', 'Alopecia', 'Non-surgical hair loss management education'],
  description: 'Educational information about hair loss and non-surgical hair restoration options, reviewed by a licensed physician.',
} as const

export default function HairRestorationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BUSINESS_SCHEMA) }}
      />
      <LafueLPV2
        heroFormId="FBArZQM26K9JBzzAmmjJ"
        bottomFormId="7w8zla8FIE2qhMqwp1NQ"
      />
    </>
  )
}
