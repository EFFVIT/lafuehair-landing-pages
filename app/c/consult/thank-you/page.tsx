import type { Metadata } from 'next'
import Wordmark from '@/components/consult/Wordmark'
import GaTag from '@/components/consult/GaTag'
import BookingSummary from '@/components/consult/BookingSummary'
import { CONSULT } from '@/lib/consult.config'
import '../consult.css'
import '../theme.css'
import './thanks.css'

/* ============================================================================
   CONSULT CONFIRMATION — SHARED ENGINE. IDENTICAL IN EVERY LP-FLEET REPO.

   HARD: no Meta pixel on this page, ever. Post-conversion is when the health
   fact becomes certain — this is the worst page for a pixel, not the safest,
   and CAPI does not launder it (H-32). GaTag stays off unless that client's
   config carries a named override.
   ========================================================================== */

export const metadata: Metadata = {
  title: `You're booked | ${CONSULT.practice}`,
  robots: { index: false, follow: false },
}

export default function ThankYou() {
  return (
    <div id="consult">
      <GaTag />

      <header className="masthead">
        {/* No link to the main site: /c/ pages must not send paid traffic off the funnel. */}
        <div className="mark">
          <Wordmark className="wordmark" />
        </div>
        <div className="mast-meta">
          <a className="tel" href={`tel:${CONSULT.phoneRaw}`}>{CONSULT.phoneDisplay}</a>
        </div>
      </header>

      <main className="thanks">
        <section className="thanks-head">
          <h1 className="statement">You&apos;re booked.</h1>
          <BookingSummary address={CONSULT.address} city={CONSULT.city} />
        </section>

        {/* ---------------------------------------------------------------
            WHAT TO EXPECT and TESTIMONIALS: NOT RENDERED.

            Both wait on the practice: a description of the consultation in
            its own words, and real, release-covered patient testimonials.
            The "awaiting" notices were visible to patients, so the sections
            are left out until the copy exists (86bcxnkhh).

            No "while you wait" blog feed either: it linked the practice's main
            site, and /c/ pages must not send paid traffic off the funnel.
            --------------------------------------------------------------- */}

        <div className="callnote">
          <p>Need to change it, or have a question first?</p>
          <a href={`tel:${CONSULT.phoneRaw}`}>
            <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M5.2 2.6 7 6l-1.7 1.6a10 10 0 0 0 5.1 5.1L12 11l3.4 1.8v3a1.6 1.6 0 0 1-1.8 1.6C7.3 16.9 1.1 10.7.6 4.4A1.6 1.6 0 0 1 2.2 2.6h3Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            {CONSULT.phoneDisplay}
          </a>
        </div>
      </main>

      <footer className="consult-footer">
        <p className="cf-name">{CONSULT.practice}</p>
        <p className="cf-line">{CONSULT.address}, {CONSULT.city} &nbsp;·&nbsp; <a href={`tel:${CONSULT.phoneRaw}`}>{CONSULT.phoneDisplay}</a></p>
        {/* Optional per client; absent on single-office configs. */}
        {(CONSULT as { otherOffices?: readonly { address: string; city: string }[] }).otherOffices?.map((o) => (
          <p className="cf-line" key={o.address}>{o.address}, {o.city}</p>
        ))}
        <p className="cf-disc">
          Individual results vary. This content is for educational purposes only and is not medical
          advice. Consult a qualified physician before pursuing any medical procedure.
        </p>
        <nav className="cf-links">
          <span>© {new Date().getFullYear()} {CONSULT.practice}</span>
          <a href={CONSULT.privacyUrl}>Privacy Policy</a>
          <a href={CONSULT.cookieUrl}>Cookie Policy</a>
          {CONSULT.termsUrl && <a href={CONSULT.termsUrl}>Terms of Service</a>}
        </nav>
      </footer>
    </div>
  )
}
