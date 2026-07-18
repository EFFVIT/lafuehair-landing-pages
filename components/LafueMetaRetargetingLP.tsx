'use client'
import { Suspense } from 'react'
import GhlForm from './GhlForm'
import GclidCapture from './GclidCapture'

// Verbatim recreation of start.lafuehairnyc.com/meta-retargeting/ (paid-social
// retargeting LP) on the EFFVIT Next.js fleet. Copy reproduced as-is per Joe's
// directive. HIPAA carve-out kept: NO browser Meta Pixel (fbq) on this
// health-intent form page. fbclid + gclid + UTM ride through GhlForm.

const DARK_NAV = '#2e2e2f'
const NAVY = '#2a548b'
const STEEL = '#849ab9'
const HEADING = '#1a1a1a'
const BODY = '#4b5563'
const LIGHT_BG = '#f0f4f8'
const CARD_BG = '#f9fafb'
const CARD_BORDER = '#e5e7eb'
const WHITE = '#ffffff'
const STAR = '#f5c518'

const PHONE = '(516) 614-3950'
const PHONE_HREF = 'tel:5166143950'
const EMAIL = 'info@lafuehairnyc.com'
const LOGO = '/img/m/logo-lafue.webp'

const HERO_FORM_ID = 'bS8ZKV9n7UhBn98WoZmK'
const BOTTOM_FORM_ID = 'orLh20UypiN83lDapIIJ'

function Check({ bg = NAVY }: { bg?: string }) {
  return (
    <span style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, background: bg, borderRadius: '50%' }}>
      <svg width="11" height="9" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 1L5 9L1 5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

function XMark() {
  return (
    <span style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, background: '#c0392b', borderRadius: '50%' }}>
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L11 11M11 1L1 11" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </span>
  )
}

function StarRow() {
  return (
    <div style={{ display: 'flex', gap: 3, marginBottom: 12 }}>
      {[0, 1, 2, 3, 4].map(i => <span key={i} style={{ fontSize: 16, color: STAR, lineHeight: 1 }}>&#9733;</span>)}
    </div>
  )
}

const CtaBtn = ({ children, href = '#hero-form' }: { children: React.ReactNode; href?: string }) => (
  <a href={href} style={{ display: 'inline-block', background: NAVY, color: '#fff', padding: '15px 30px', borderRadius: 40, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>{children}</a>
)

const H2 = ({ children, color = HEADING }: { children: React.ReactNode; color?: string }) => (
  <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800, color, margin: '0 0 20px', lineHeight: 1.22, letterSpacing: '-0.02em' }}>{children}</h2>
)

export default function LafueMetaRetargetingLP() {
  return (
    <>
      <Suspense fallback={null}><GclidCapture /></Suspense>

      {/* Nav */}
      <header style={{ background: DARK_NAV, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 32px', position: 'sticky', top: 0, zIndex: 100 }}>
        <img src={LOGO} alt="L.A. FUE Hair New York" style={{ height: 48, width: 'auto' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <a href={PHONE_HREF} style={{ color: '#fff', fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>{PHONE}</a>
          <a href="#hero-form" style={{ background: NAVY, color: '#fff', fontWeight: 700, borderRadius: 40, padding: '12px 22px', textDecoration: 'none', letterSpacing: '0.04em', fontSize: 13, whiteSpace: 'nowrap' }}>SEE IF I&rsquo;M A CANDIDATE</a>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: WHITE, padding: '56px 24px 48px' }}>
        <div className="two-col" style={{ maxWidth: 1200, margin: '0 auto', alignItems: 'start', gap: 48 }}>
          <div>
            <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(28px, 3.6vw, 44px)', fontWeight: 800, color: HEADING, lineHeight: 1.18, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
              Have Questions About Your Hair Restoration Options? Clarity Is 60 Seconds Away.
            </h1>
            <p style={{ fontSize: 17, color: BODY, margin: '0 0 24px', lineHeight: 1.65 }}>
              Precision hair restoration protects your donor area and plans for natural-looking results&mdash;based on your hair loss pattern.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, alignItems: 'center' }}>
              <img src="/img/m/rt-hero.webp" alt="Hair restoration candidate" style={{ width: '100%', borderRadius: 14, display: 'block' }} />
              <img src="/img/m/badge.webp" alt="Before and after hair restoration results" style={{ width: '100%', borderRadius: 14, display: 'block' }} />
            </div>
          </div>
          <div id="hero-form" style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}`, borderRadius: 16, padding: 24 }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: HEADING, margin: '0 0 12px' }}>See If I&rsquo;m A Candidate</p>
            <GhlForm formId={HERO_FORM_ID} height={460} formName="LAFUE Meta RT Hero" />
          </div>
        </div>
      </section>

      {/* Are You a Candidate */}
      <section style={{ background: LIGHT_BG, padding: '64px 24px' }}>
        <div className="two-col" style={{ maxWidth: 1080, margin: '0 auto', gap: 48, alignItems: 'center' }}>
          <img src="/img/m/candidate.webp" alt="Patient consultation for hair restoration candidacy" style={{ width: '100%', borderRadius: 16, display: 'block' }} loading="lazy" />
          <div>
            <H2>Are You A Candidate For Hair Restoration?</H2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24 }}>
              {[
                'Your specific type of hair loss will be diagnosed',
                'The extent of your current hair loss',
                'The amount and quality of your donor hair region',
              ].map(t => (
                <div key={t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <Check />
                  <span style={{ fontSize: 16, color: BODY, lineHeight: 1.5 }}>{t}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 16, color: HEADING, fontWeight: 600, margin: '0 0 24px', lineHeight: 1.6 }}>
              Hair restoration isn&rsquo;t for everyone&mdash;your candidacy determines the best method.
            </p>
            <CtaBtn>See If I&rsquo;m A Candidate</CtaBtn>
          </div>
        </div>
      </section>

      {/* Hair Loss Doesn't Pause */}
      <section style={{ background: WHITE, padding: '64px 24px' }}>
        <div className="two-col" style={{ maxWidth: 1080, margin: '0 auto', gap: 48, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: STEEL, margin: '0 0 10px' }}>
              If You&rsquo;ve Been Waiting To &ldquo;Think About It&rdquo; &mdash; This Is Why
            </p>
            <H2>Hair Loss Doesn&rsquo;t Pause While You Decide</H2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24 }}>
              {[
                'Donor Hair Quality decreases with age',
                'Earlier treatment = more natural, lasting results',
                'Waiting narrows what’s still possible',
              ].map(t => (
                <div key={t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <Check />
                  <span style={{ fontSize: 16, color: BODY, lineHeight: 1.5 }}>{t}</span>
                </div>
              ))}
            </div>
            <CtaBtn>See If I&rsquo;m A Candidate</CtaBtn>
          </div>
          <img src="/img/m/decision.webp" alt="Hair restoration patient" style={{ width: '100%', borderRadius: 16, display: 'block' }} loading="lazy" />
        </div>
      </section>

      {/* Shaving / Downtime */}
      <section style={{ background: LIGHT_BG, padding: '64px 24px' }}>
        <div className="two-col" style={{ maxWidth: 1080, margin: '0 auto', gap: 48, alignItems: 'center' }}>
          <img src="/img/m/shaving.webp" alt="Hairline planning before hair restoration" style={{ width: '100%', borderRadius: 16, display: 'block' }} loading="lazy" />
          <div>
            <H2>Concerned About Shaving Or Downtime?</H2>
            <p style={{ fontSize: 16, color: HEADING, fontWeight: 600, margin: '0 0 18px' }}>Not every procedure requires full shaving</p>
            <p style={{ fontSize: 15, color: BODY, margin: '0 0 8px', fontWeight: 600 }}>Modern techniques prioritize:</p>
            <ul style={{ margin: '0 0 20px', paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Precise graft selection consistency (when appropriate)',
                'Donor preservation-focused planning',
                'Natural growth pattern placement strategy',
              ].map(t => (
                <li key={t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 15, color: BODY, lineHeight: 1.5 }}>
                  <Check /> <span>{t}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: 15, color: BODY, margin: '0 0 8px', fontWeight: 600 }}>Consultation determines:</p>
            <ul style={{ margin: '0 0 20px', paddingLeft: 20, color: BODY, fontSize: 15, lineHeight: 1.7 }}>
              <li>Technique</li>
              <li>Shaving requirements</li>
              <li>Expected outcome</li>
            </ul>
            <p style={{ fontSize: 15, color: BODY, margin: '0 0 24px', lineHeight: 1.65 }}>
              Your consultation determines the best type of hair restoration procedure for your needs and whether a hybrid approach where a surgical procedure is paired with a non-surgical treatment, all designed specifically for your hair loss pattern.
            </p>
            <CtaBtn>Find Out What Applies To Me</CtaBtn>
          </div>
        </div>
      </section>

      {/* Cost objection */}
      <section style={{ background: WHITE, padding: '64px 24px' }}>
        <div className="two-col" style={{ maxWidth: 1080, margin: '0 auto', gap: 48, alignItems: 'center' }}>
          <div>
            <H2>&ldquo;Isn&rsquo;t It Cheaper Somewhere Else?&rdquo;</H2>
            <p style={{ fontSize: 16, color: HEADING, fontWeight: 600, margin: '0 0 18px' }}>Hair restoration is not a commodity</p>
            <p style={{ fontSize: 15, color: BODY, margin: '0 0 8px', fontWeight: 600 }}>Cost Reflects:</p>
            <ul style={{ margin: '0 0 20px', paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {["Surgeon’s experience", 'Technique selection (FUE vs FUT)', 'Planning and long-term outcome'].map(t => (
                <li key={t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 15, color: BODY, lineHeight: 1.5 }}>
                  <Check /> <span>{t}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: 16, color: HEADING, fontWeight: 700, margin: 0, lineHeight: 1.6 }}>
              One procedure done right &gt; multiple corrections later
            </p>
          </div>
          <img src="/img/m/cost.webp" alt="The real cost is choosing wrong, not choosing carefully" style={{ width: '100%', borderRadius: 16, display: 'block' }} loading="lazy" />
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: LIGHT_BG, padding: '64px 24px' }}>
        <div style={{ maxWidth: 1150, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 40 }}>
            <img src="/img/m/patient.webp" alt="Hair restoration patient" style={{ width: 84, height: 84, borderRadius: '50%', objectFit: 'cover', marginBottom: 18 }} loading="lazy" />
            <H2>Real Patients. Real Experiences.</H2>
            <p style={{ fontSize: 16, color: BODY, margin: 0 }}>Verified patient experiences shared after their visit.</p>
          </div>
          <div className="three-col">
            {[
              ['I was really impressed by the entire LA FUE Hair New York team. Thank you, Dr. Anton, for making me feel so comfortable and relaxed on my BIG DAY, and btw, my new hairline ROCKS.', 'Kev A.'],
              ['I have to admit, Dr. Anton is one of the most caring and knowledgeable physicians I have met. From the moment I had my initial consultation, I was amazed by the level of detail when explaining my hair loss, to the meticulous and detail-oriented approach he used. I can’t thank you enough for making the whole experience so special.', 'John M.'],
              ['Truly amazing experience. Dr. Anton really connected with me and formulated a very thorough, personalized plan for my hair loss problem. His attention to details and his artistic skills are unmatched.', 'Zoro H.'],
            ].map(([quote, name]) => (
              <div key={name} style={{ background: WHITE, border: `1px solid ${CARD_BORDER}`, borderRadius: 16, padding: 28 }}>
                <StarRow />
                <p style={{ fontSize: 15, color: BODY, lineHeight: 1.65, margin: '0 0 16px' }}>&ldquo;{quote}&rdquo;</p>
                <p style={{ fontSize: 15, fontWeight: 700, color: HEADING, margin: 0 }}>{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is This Treatment For You */}
      <section style={{ background: WHITE, padding: '64px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <H2>Is This Treatment For You?</H2>
            <p style={{ fontSize: 16, color: BODY, margin: 0 }}>See if you&rsquo;re a strong candidate before booking a consult</p>
          </div>
          <div className="two-col" style={{ gap: 24 }}>
            <div style={{ background: '#eef5ee', border: '1px solid #cfe3cf', borderRadius: 16, padding: 28 }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: HEADING, margin: '0 0 18px' }}>Best For</h3>
              {['Early to moderate hair loss', 'Want natural density', 'Prefer physician planning'].map(t => (
                <div key={t} style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
                  <Check bg="#3a8a3a" />
                  <span style={{ fontSize: 15, color: BODY }}>{t}</span>
                </div>
              ))}
            </div>
            <div style={{ background: '#fbeeee', border: '1px solid #eccfcf', borderRadius: 16, padding: 28 }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: HEADING, margin: '0 0 18px' }}>Not ideal if:</h3>
              {['Seeking the cheapest option', 'Expect guaranteed density', 'Unwilling to follow long-term plan'].map(t => (
                <div key={t} style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
                  <XMark />
                  <span style={{ fontSize: 15, color: BODY }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <p style={{ fontSize: 16, color: HEADING, fontWeight: 600, margin: '0 0 16px' }}>Still have questions about your candidacy?</p>
            <CtaBtn>Check Candidacy &rarr;</CtaBtn>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section style={{ background: LIGHT_BG, padding: '64px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <H2>What Happens Next</H2>
          <div className="three-col" style={{ marginTop: 36 }}>
            {[
              ['1', 'Review your hair loss pattern + donor supply'],
              ['2', 'Confirm the treatment method, alone or hybrid, for your needs'],
              ['3', 'Leave with a realistic plan + timeline (no commitment)'],
            ].map(([n, t]) => (
              <div key={n} style={{ background: WHITE, border: `1px solid ${CARD_BORDER}`, borderRadius: 16, padding: 28 }}>
                <div style={{ width: 48, height: 48, marginBottom: 16, borderRadius: '50%', background: NAVY, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 800 }}>{n}</div>
                <p style={{ fontSize: 16, color: BODY, margin: 0, lineHeight: 1.55 }}>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Decision */}
      <section style={{ background: WHITE, padding: '64px 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <H2>Hair Restoration Is A Medical Decision</H2>
          <p style={{ fontSize: 15, color: BODY, margin: '0 0 12px', fontWeight: 600 }}>Results depend on:</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto 28px', maxWidth: 560, textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              'Proper diagnosis',
              'Long-term planning',
              'Ethical candidacy screening',
              'Not everyone is an ideal candidate',
              'Consultation exists to protect the patient first',
            ].map(t => (
              <li key={t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 16, color: BODY, lineHeight: 1.5 }}>
                <Check /> <span>{t}</span>
              </li>
            ))}
          </ul>
          <CtaBtn>See If I&rsquo;m A Candidate</CtaBtn>
          <p style={{ fontSize: 14, color: STEEL, margin: '18px 0 0', fontWeight: 600 }}>Your consultation is confidential and obligation-free</p>
        </div>
      </section>

      {/* Final CTA + form */}
      <section style={{ background: LIGHT_BG, padding: '64px 24px' }}>
        <div className="two-col" style={{ maxWidth: 1080, margin: '0 auto', gap: 48, alignItems: 'center' }}>
          <div>
            <H2>Hair Loss Doesn&rsquo;t Wait&mdash;And Neither Should Your Options.</H2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 24 }}>
              {['Donor supply is finite', 'Earlier planning can improve natural coverage strategy', 'A consult clarifies what’s realistic now'].map(t => (
                <div key={t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <Check />
                  <span style={{ fontSize: 16, color: BODY, lineHeight: 1.5 }}>{t}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href={PHONE_HREF} style={{ color: HEADING, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>{PHONE}</a>
              <a href={`mailto:${EMAIL}`} style={{ color: HEADING, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>{EMAIL}</a>
              <span style={{ color: BODY, fontSize: 15 }}>400 Garden City Plaza, Suite 107, Garden City, NY 11530</span>
              <span style={{ color: BODY, fontSize: 15 }}>65 W 36th St., 10th Floor, New York, NY 10018</span>
            </div>
          </div>
          <div id="final-form" style={{ background: WHITE, border: `1px solid ${CARD_BORDER}`, borderRadius: 16, padding: 24 }}>
            <p style={{ fontSize: 15, fontWeight: 700, color: HEADING, margin: '0 0 4px' }}>Schedule Your Consultation</p>
            <p style={{ fontSize: 13, color: BODY, margin: '0 0 12px' }}>Confidential &bull; No obligation &bull; Personalized</p>
            <GhlForm formId={BOTTOM_FORM_ID} height={460} formName="LAFUE Meta RT Bottom" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: DARK_NAV, color: 'rgba(255,255,255,0.72)', padding: '40px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginBottom: 20 }}>
            <a href="/privacy-policy" style={{ color: 'rgba(255,255,255,0.72)', fontSize: 13, textDecoration: 'none' }}>Privacy Policy</a>
            <a href="/cookie-policy" style={{ color: 'rgba(255,255,255,0.72)', fontSize: 13, textDecoration: 'none' }}>Cookie Policy</a>
          </div>
          <p style={{ fontSize: 12, lineHeight: 1.7, margin: '0 0 16px' }}>
            <strong style={{ color: '#fff' }}>Medical Disclaimer:</strong> This website provides general information about hair restoration procedures. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Individual results may vary. Not all candidates are eligible for treatment. A medical consultation is required to determine candidacy.
          </p>
          <p style={{ fontSize: 12, margin: 0 }}>&copy; 2026 L.A.FUE Hair. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
