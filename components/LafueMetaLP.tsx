'use client'
import { Suspense } from 'react'
import GhlForm from './GhlForm'
import GclidCapture from './GclidCapture'

// Verbatim recreation of start.lafuehairnyc.com/meta/ (paid-social consult LP)
// on the EFFVIT Next.js fleet. Copy is reproduced as-is per Joe's directive
// (Meta ad-policy softening waived). The ONE carve-out kept is HIPAA: NO browser
// Meta Pixel (fbq) on this health-intent form page — attribution rides
// server-side CAPI. fbclid + gclid + UTM ride through GhlForm.

// ── LAFUE brand tokens (locked; from globals.css + /c/ LP components) ─────────
const DARK_NAV = '#2e2e2f'
const NAVY = '#2a548b'
const STEEL = '#849ab9'
const HEADING = '#1a1a1a'
const BODY = '#4b5563'
const LIGHT_BG = '#f0f4f8'
const CARD_BG = '#f9fafb'
const CARD_BORDER = '#e5e7eb'
const WHITE = '#ffffff'

const PHONE = '(516) 614-3950'
const PHONE_HREF = 'tel:5166143950'
const EMAIL = 'info@lafuehairnyc.com'
const LOGO = '/img/m/logo-lafue.webp'

const HERO_FORM_ID = 'DEi1SGsb9d6gV1A5LX7D'
const BOTTOM_FORM_ID = 'rbB2kiQGWXb1acxrPzXU'

const RESULTS = ['/img/m/result-1.webp', '/img/m/result-2.webp', '/img/m/result-3.webp']

function Check({ bg = NAVY }: { bg?: string }) {
  return (
    <span style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, background: bg, borderRadius: '50%' }}>
      <svg width="11" height="9" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 1L5 9L1 5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

export default function LafueMetaLP() {
  return (
    <>
      <Suspense fallback={null}><GclidCapture /></Suspense>

      {/* Nav */}
      <header style={{ background: DARK_NAV, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 32px', position: 'sticky', top: 0, zIndex: 100 }}>
        <img src={LOGO} alt="L.A. FUE Hair New York" style={{ height: 48, width: 'auto' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <a href={PHONE_HREF} style={{ color: '#fff', fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>{PHONE}</a>
          <a href="#hero-form" style={{ background: NAVY, color: '#fff', fontWeight: 700, borderRadius: 40, padding: '12px 22px', textDecoration: 'none', letterSpacing: '0.04em', fontSize: 13, whiteSpace: 'nowrap' }}>BOOK A CONSULT</a>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: WHITE, padding: '56px 24px 48px' }}>
        <div className="two-col" style={{ maxWidth: 1200, margin: '0 auto', alignItems: 'start', gap: 48 }}>
          <div>
            <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(28px, 3.6vw, 44px)', fontWeight: 800, color: HEADING, lineHeight: 1.18, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
              See If Hair Restoration Is Right For You&mdash;Before You Commit To Surgery
            </h1>
            <p style={{ fontSize: 17, color: BODY, margin: '0 0 28px', lineHeight: 1.65 }}>
              A private, personalized consultation to evaluate your hair loss, treatment options, and expected results &mdash; guided by experienced medical professionals.
            </p>
            <a href="#hero-form" style={{ display: 'inline-block', background: NAVY, color: '#fff', padding: '15px 30px', borderRadius: 40, fontSize: 14, fontWeight: 700, textDecoration: 'none', marginBottom: 32 }}>BOOK A CONSULT</a>
            <div className="features-grid" style={{ gap: 16 }}>
              {['Real procedures', 'Personalized care', 'Real patients', 'Performed in-clinic'].map(label => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Check />
                  <span style={{ fontSize: 14, color: BODY, fontWeight: 500 }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form card + before/after results */}
          <div>
            <div id="hero-form" style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}`, borderRadius: 16, padding: 24, marginBottom: 24 }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: HEADING, margin: '0 0 4px' }}>Book A Consult</p>
              <p style={{ fontSize: 13, color: BODY, margin: '0 0 14px' }}>Every treatment plan is customized&mdash;no templates, no shortcuts.</p>
              <GhlForm formId={HERO_FORM_ID} height={440} formName="LAFUE Meta Hero" />
            </div>
            <div style={{ display: 'grid', gap: 12 }}>
              {RESULTS.map((src, i) => (
                <img key={src} src={src} alt={`Actual patient results ${i + 1}`} style={{ width: '100%', borderRadius: 14, display: 'block' }} loading="lazy" />
              ))}
              <p style={{ textAlign: 'center', fontSize: 12, color: '#99a1af', margin: 0 }}>Individual results vary</p>
            </div>
          </div>
        </div>
      </section>

      {/* This Is Not a Sales Appointment */}
      <section style={{ background: LIGHT_BG, padding: '64px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800, color: HEADING, margin: '0 0 12px', letterSpacing: '-0.02em' }}>
            This Is Not a Sales Appointment
          </h2>
          <p style={{ fontSize: 16, color: BODY, margin: '0 auto 36px', maxWidth: 640, lineHeight: 1.7 }}>
            A comprehensive medical consultation focused on your health, eligibility, and long-term success.
          </p>
          <div className="two-col" style={{ gap: 20, textAlign: 'left' }}>
            {[
              ['Medical Eligibility', 'Determine whether you’re medically eligible'],
              ['Review Options', 'Review surgical and non-surgical options'],
              ['Realistic Outcomes', 'Understand realistic outcomes and timelines'],
              ['Safety & Planning', 'Discuss recovery, safety, and long-term planning'],
            ].map(([t, d]) => (
              <div key={t} style={{ display: 'flex', gap: 14, background: WHITE, border: `1px solid ${CARD_BORDER}`, borderRadius: 12, padding: '20px 22px' }}>
                <Check />
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: HEADING, margin: '0 0 4px' }}>{t}</h3>
                  <p style={{ fontSize: 14, color: BODY, margin: 0, lineHeight: 1.6 }}>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Permanent */}
      <section style={{ background: WHITE, padding: '64px 24px' }}>
        <div className="two-col" style={{ maxWidth: 1080, margin: '0 auto', gap: 48, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800, color: HEADING, margin: '0 0 20px', lineHeight: 1.25, letterSpacing: '-0.02em' }}>
              Hair Restoration Is Permanent&mdash;Mistakes Are, Too
            </h2>
            <p style={{ fontSize: 16, color: BODY, margin: '0 0 16px', lineHeight: 1.75 }}>
              Hair restoration isn&rsquo;t cosmetic filler. It&rsquo;s a permanent medical procedure that requires careful planning and skilled execution.
            </p>
            <p style={{ fontSize: 16, color: HEADING, fontWeight: 600, margin: 0, lineHeight: 1.75 }}>
              This consultation exists to help you avoid rushed decisions, over-harvesting, and unnatural results &mdash; and to determine whether treatment makes sense for you at all.
            </p>
          </div>
          <img src="/img/m/hero-consult.webp" alt="Hair restoration consultation" style={{ width: '100%', borderRadius: 16, display: 'block' }} loading="lazy" />
        </div>
      </section>

      {/* How It Works */}
      <section style={{ background: LIGHT_BG, padding: '64px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800, color: HEADING, textAlign: 'center', margin: '0 0 44px', letterSpacing: '-0.02em' }}>
            How It Works
          </h2>
          <div className="three-col" style={{ marginBottom: 36 }}>
            {[
              ['1', 'Request a Consultation', 'Submit a short, private form.'],
              ['2', 'Speak With a Patient Advisor', 'Review your goals and next steps.'],
              ['3', 'In-Clinic Evaluation', 'Confirm candidacy and personalized options.'],
            ].map(([n, t, d]) => (
              <div key={n} style={{ textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, margin: '0 auto 16px', borderRadius: '50%', background: NAVY, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 800 }}>{n}</div>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: HEADING, margin: '0 0 8px' }}>{t}</h3>
                <p style={{ fontSize: 15, color: BODY, margin: 0, lineHeight: 1.55 }}>{d}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="#final-form" style={{ display: 'inline-block', background: NAVY, color: '#fff', padding: '15px 32px', borderRadius: 40, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>See If I&rsquo;m a Candidate</a>
          </div>
        </div>
      </section>

      {/* Incentive */}
      <section style={{ background: NAVY, padding: '48px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(20px, 2.6vw, 28px)', fontWeight: 800, color: '#fff', margin: '0 0 12px' }}>
            Limited Consultation Incentive Available
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.88)', margin: 0, lineHeight: 1.7 }}>
            Qualified candidates may be eligible for preferred pricing during their consultation.
          </p>
        </div>
      </section>

      {/* Final CTA + form */}
      <section style={{ background: WHITE, padding: '64px 24px' }}>
        <div className="two-col" style={{ maxWidth: 1080, margin: '0 auto', gap: 48, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(26px, 3.2vw, 38px)', fontWeight: 800, color: HEADING, margin: '0 0 24px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              If You&rsquo;re Going To Do This, Do It Informed
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href={PHONE_HREF} style={{ color: HEADING, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>{PHONE}</a>
              <a href={`mailto:${EMAIL}`} style={{ color: HEADING, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>{EMAIL}</a>
              <span style={{ color: BODY, fontSize: 15 }}>400 Garden City Plaza, Suite 107, Garden City, NY 11530</span>
              <span style={{ color: BODY, fontSize: 15 }}>65 W 36th St., 10th Floor, New York, NY 10018</span>
            </div>
          </div>
          <div id="final-form" style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}`, borderRadius: 16, padding: 24 }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: HEADING, margin: '0 0 12px' }}>Check My Eligibility</p>
            <GhlForm formId={BOTTOM_FORM_ID} height={460} formName="LAFUE Meta Bottom" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: DARK_NAV, color: 'rgba(255,255,255,0.72)', padding: '40px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginBottom: 20 }}>
            <a href="/privacy-policy" style={{ color: 'rgba(255,255,255,0.72)', fontSize: 13, textDecoration: 'none' }}>Privacy Policy</a>
            <a href="/cookie-policy" style={{ color: 'rgba(255,255,255,0.72)', fontSize: 13, textDecoration: 'none' }}>Cookie Policy</a>
            <a href="/terms-of-service" style={{ color: 'rgba(255,255,255,0.72)', fontSize: 13, textDecoration: 'none' }}>Terms of Service</a>
          </div>
          <p style={{ fontSize: 12, lineHeight: 1.7, margin: '0 0 16px' }}>
            <strong style={{ color: '#fff' }}>Medical Disclaimer:</strong> This website provides general information about hair restoration procedures. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Individual results may vary. Not all candidates are eligible for treatment. A medical consultation is required to determine candidacy.
          </p>
          <p style={{ fontSize: 12, margin: 0 }}>&copy; 2025 L.A. FUE Hair. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
