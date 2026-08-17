/* ============================================================================
   CONSULT FUNNEL — CLIENT CONFIG: L.A. FUE Hair New York

   THIS IS THE ONLY FILE IN THE CONSULT SURFACE THAT DIFFERS PER CLIENT.
   lib/consult.ts, the three API routes, ConsultFunnel, Wordmark, GaTag,
   BookingSummary, both pages and consult.css are byte-identical across every
   repo on the fleet. If you are about to edit one of those for this client,
   the value belongs here instead.

   Every fact below was read from a live system on 2026-08-17, not typed from a
   document. Provenance is on each line. HARD, paid for on RHRLI: a GHL location
   record can be WRONG — its address said Jericho when the practice is in
   Woodbury — so where the practice's own schema.org markup disagrees with GHL,
   schema.org wins.

   NOTE FOR THIS CLIENT:
   CALENDAR MISMATCH: this sub-account has only FOUR calendars and no 60min consult pair. Using 'Consultation Request' (30min) for in-person and 'Virtual Consultation' (30min) for virtual. NOTE it also carries TWO calendars both named 'Virtual Consultation' (DtNWDd66ywzw7CPf1b54 and Wvqqu0SnrN8yjNKVIo0k) — the duplicate should be resolved by the practice. NO TERMS PAGE: consent omits the Terms clause.
   ========================================================================== */

export const CONSULT = {
  clientId: 'lafue',
  practice: 'L.A. FUE Hair New York',

  /* GoHighLevel sub-account. The container must carry GHL_PIT_ey93pB0AJ7nj8UBn867M
     or every booking call 500s while the page still renders. */
  locationId: 'ey93pB0AJ7nj8UBn867M',
  timezone: 'America/New_York',

  /* Verified live on 2026-08-17 by reading this sub-account's /calendars/ and
     confirming both return free slots. These already existed; nothing was
     created in the client's account. */
  calendars: {
    'in-person': 'gIHLwWN3YD557MwKkj58',
    virtual: 'DtNWDd66ywzw7CPf1b54',
  },

  /* Read from the calendar's own slotDuration — never asserted. Saying "one
     hour" over a calendar that books 30 minutes is a promise the system of
     record does not keep. */
  durationMinutes: 30,
  durationLabel: '30 minutes',

  address: '400 Garden City Plaza, Suite 107',
  city: 'Garden City, NY 11530',
  officeShort: 'Garden City',
  inPersonWhere: 'At the Garden City office, 400 Garden City Plaza, Suite 107.',
  openDays: 'Times shown are the practice’s published availability',
  hoursLine: 'Only times the practice has actually published are shown.',

  /* DNI pool default. DniSwap rewrites ONLY the digits it owns, so this must be
     the app's DEFAULT_DIGITS — putting the practice's static GHL line here
     instead means the swap never fires and every call arrives unattributed. */
  phoneDisplay: '(516) 613-5827',
  phoneRaw: '+15166135827',
  phonePlaceholder: '(516) 555-0142',

  siteUrl: 'https://lafuehairnyc.com',
  privacyUrl: '/privacy-policy',
  cookieUrl: '/cookie-policy',
  /* null means NO REACHABLE TERMS PAGE for this practice. The consent notice
     omits the Terms clause rather than linking to a 404, and the footer omits
     the link. A terms page on this subdomain is wanted before ads point here. */
  termsUrl: null,
  /* null means the feed could not be read. The confirmation page renders no
     "while you wait" section at all rather than inventing one. */
  postsApi: 'https://lafuehairnyc.com/wp-json/wp/v2/posts?per_page=3&_fields=id,link,date,title',

  headline: 'Book your consultation.',
  subhead: '30 minutes with L.A. FUE Hair New York, in person in Garden City or by video. Choose a time below and it is confirmed on the practice calendar straight away.',
  metaDescription: 'Book a 30 minutes consultation with L.A. FUE Hair New York. In person in Garden City or by video.',

  /* EMPTY BY DESIGN, awaiting the practice's own photographs.
     No before/after and no identifiable patient — before/after imagery is a
     Meta Account Quality suspension risk across this whole fleet. A stock photo
     of a clinic that is not theirs is a misrepresentation, and a sibling
     client's photo is worse. An empty array renders no photo block at all.
     Add as: ['file-basename', 'alt text'] with the file at public/consult/. */
  photos: [] as [string, string][],

  wordmarkSrc: '/logo-lafue.png',
  wordmarkText: null as string | null,

  /* NO browser analytics or advertising tag on this page. This is not a
     preference: the page collects a Norwood/Ludwig selection and prior-procedure
     answer, which is health-intent input in a form, and H-26 / §6 failure mode 7
     make a tag here non-waivable at the skill layer. Server-side delivery does
     not launder it (H-32). Set this ONLY on Joe's explicit, recorded direction
     for this specific client — RHRLI's is the only such override on the fleet. */
  ga4Id: null as string | null,

  consentVersion: '2026-08-17-v1',
} as const

/* Attribution write-through to the CRM.

   HARD (H-41): match on fieldKey, never on the display name. Names drift per
   sub-account while fieldKey stays byte-identical; matching on names is what
   made 11 of 28 custom values unreachable across the whole fleet.

   EMPTY, DELIBERATELY. On 2026-08-17 this sub-account's PIT answered
   401 "The token is not authorized for this scope" on
   GET /locations/ey93pB0AJ7nj8UBn867M/customFields, retried with backoff, from both
   token files. So the map could not be seeded from the live API, and it is left
   empty rather than guessed: a PUT with a key that does not resolve returns
   200 succeeded and silently discards the value, which reads as working.

   writeCustomFields() therefore returns {written: 0, reason} — a reported
   no-op, never a silent one. The click id is still captured on the page and
   still posted to /api/consult/book; it just cannot be written onto the contact
   record until the PIT gains the scope. RHRLI's PIT already has it, which is
   the proof this is a per-token gap and not a platform limit.

   TO FIX: mint a PIT for this sub-account with locations/customFields readonly,
   then regenerate this map FROM THE API — never by copying RHRLI's. */
export const CONSULT_FIELD_MAP: Record<string, string> = {}
