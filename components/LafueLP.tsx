'use client'
import { Suspense, useState } from 'react'
import GhlForm from './GhlForm'
import GclidCapture from './GclidCapture'

const STEEL      = '#849ab9'
const STEEL_PANEL = '#b8c9da'
const DARK       = '#343434'
const DARK_CARD  = '#3c3c3e'
const NAVY       = '#2a548b'
const MIST       = '#a1b4ce'

const LOGO_WHITE = 'https://lafuehairnyc.com/wp-content/uploads/2026/01/Group-8.png'
const DR_PHOTO   = 'https://lafuehairnyc.com/wp-content/uploads/2026/01/lafue-nyc-dr-anton-v4-831x1024-2-1.png'
const PHONE      = '(516) 613-5827'
const PHONE_HREF = 'tel:+15166135827'
const ADDRESS    = '400 Garden City Plaza, Suite 107, Garden City, NY 11530'

// ── SVG icons ──────────────────────────────────────────────────

function IconCheckDark() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <circle cx="18" cy="18" r="17" fill={DARK} />
      <path d="M10 18l6 6 10-12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconCheckSmall() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill={STEEL} />
      <path d="M5.5 10l3.5 3.5 6-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconCheckTiny() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M1.5 5l2.5 2.5 5-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconCalendarCheck() {
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" aria-hidden="true">
      <rect x="10" y="16" width="68" height="62" rx="6" fill="#1a1a1a" />
      <rect x="10" y="16" width="68" height="20" rx="6" fill="#333" />
      <line x1="26" y1="8" x2="26" y2="26" stroke="#1a1a1a" strokeWidth="5.5" strokeLinecap="round" />
      <line x1="62" y1="8" x2="62" y2="26" stroke="#1a1a1a" strokeWidth="5.5" strokeLinecap="round" />
      <rect x="20" y="44" width="13" height="11" rx="2" fill="white" opacity=".7" />
      <rect x="38" y="44" width="13" height="11" rx="2" fill="white" opacity=".7" />
      <rect x="56" y="44" width="13" height="11" rx="2" fill="white" opacity=".7" />
      <rect x="20" y="61" width="13" height="11" rx="2" fill="white" opacity=".7" />
      <rect x="38" y="61" width="13" height="11" rx="2" fill="white" opacity=".7" />
      <circle cx="68" cy="70" r="13" fill="#1a1a1a" />
      <path d="M61 70l5.5 5.5 9-11" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconPersonCheck() {
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" aria-hidden="true">
      <circle cx="42" cy="24" r="17" fill="#1a1a1a" />
      <path d="M8 74c0-18.8 15.2-34 34-34s34 15.2 34 34" fill="#1a1a1a" />
      <circle cx="68" cy="70" r="13" fill="#1a1a1a" stroke="white" strokeWidth="2" />
      <path d="M61 70l5.5 5.5 9-11" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconPersonStar() {
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" aria-hidden="true">
      <circle cx="40" cy="22" r="16" fill="#1a1a1a" />
      <path d="M6 70c0-17.7 14.3-32 32-32" fill="#1a1a1a" />
      <path d="M38 70c0-17.7 14.3-32 32-32" fill="#1a1a1a" />
      <circle cx="70" cy="66" r="14" fill="#1a1a1a" />
      <path d="M70 58l2.2 6.7h7l-5.7 4.1 2.2 6.7-5.7-4.1-5.7 4.1 2.2-6.7-5.7-4.1h7z" fill="white" />
    </svg>
  )
}

function IconDocumentCheck() {
  return (
    <svg width="96" height="96" viewBox="0 0 96 96" fill="none" aria-hidden="true">
      <rect x="18" y="8" width="52" height="68" rx="5" fill={STEEL} />
      <rect x="26" y="22" width="36" height="5" rx="2.5" fill="white" opacity=".7" />
      <rect x="26" y="34" width="36" height="5" rx="2.5" fill="white" opacity=".7" />
      <rect x="26" y="46" width="36" height="5" rx="2.5" fill="white" opacity=".7" />
      <rect x="26" y="58" width="22" height="5" rx="2.5" fill="white" opacity=".7" />
      <circle cx="64" cy="78" r="18" fill="#1a1a1a" />
      <path d="M54 78l7.5 7.5 13-16" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconPersonMedal() {
  return (
    <svg width="96" height="96" viewBox="0 0 96 96" fill="none" aria-hidden="true">
      <circle cx="48" cy="26" r="17" fill={STEEL} />
      <path d="M14 68c0-18.8 15.2-34 34-34s34 15.2 34 34" fill={STEEL} />
      <circle cx="48" cy="60" r="20" fill={STEEL} />
      <circle cx="48" cy="60" r="13" fill="#1a1a1a" />
      <path d="M42 60l4.5 4.5 8.5-9" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconPersonGear() {
  return (
    <svg width="96" height="96" viewBox="0 0 96 96" fill="none" aria-hidden="true">
      <circle cx="48" cy="24" r="17" fill="#1a1a1a" />
      <path d="M14 66c0-18.8 15.2-34 34-34s34 15.2 34 34" fill="#1a1a1a" />
      <circle cx="74" cy="72" r="18" fill={STEEL} />
      <circle cx="74" cy="72" r="7" fill="white" />
      <circle cx="74" cy="72" r="3.5" fill={STEEL} />
      <rect x="72" y="52" width="4" height="8" rx="2" fill="white" />
      <rect x="72" y="84" width="4" height="8" rx="2" fill="white" />
      <rect x="52" y="70" width="8" height="4" rx="2" fill="white" />
      <rect x="84" y="70" width="8" height="4" rx="2" fill="white" />
    </svg>
  )
}

// ── Data ───────────────────────────────────────────────────────

const STEPS = [
  { label: 'Educational Information Review',              Icon: IconCalendarCheck },
  { label: 'Overview of common hair loss patterns',       Icon: IconPersonCheck  },
  { label: 'General non-surgical educational considerations', Icon: IconPersonStar },
]

const FEATURES = [
  'Information discussing how hair loss can vary',
  'Clear Communication at Every Step',
  'Conservative, Non-Invasive Focus',
  'Dedicated Patient Support',
  'Continued access to educational resources',
  'Information informed by medical knowledge',
]

const COMMITMENT: Array<{
  heading: string
  Icon: () => React.JSX.Element
  points: Array<{ bold: string; rest: string }>
}> = [
  {
    heading: 'Medical Expertise',
    Icon: IconPersonGear,
    points: [
      { bold: 'Comprehensive information',  rest: ' about hair loss patterns' },
      { bold: 'Educational discussions',    rest: ' based on common questions' },
      { bold: 'Topics commonly discussed',  rest: ' in hair loss education' },
      { bold: 'Discussion of factors',      rest: ' that may influence hair loss' },
    ],
  },
  {
    heading: 'Safety & Standards',
    Icon: IconDocumentCheck,
    points: [
      { bold: 'Evidence-based approaches',        rest: ' reviewed by licensed medical providers' },
      { bold: 'Clean, professional clinical environment', rest: ' with medical-grade protocols' },
      { bold: 'General topics',                   rest: ' commonly discussed during visits' },
    ],
  },
  {
    heading: 'Patient-First Care',
    Icon: IconPersonMedal,
    points: [
      { bold: 'Honest information',              rest: ' shared for educational purposes only' },
      { bold: 'Educational information',          rest: ' addressing common questions and concerns' },
      { bold: 'Access to physician-reviewed',     rest: ' educational information' },
      { bold: 'Focus on long-term hair health',   rest: '' },
    ],
  },
]

const REVIEWS = [
  {
    name: 'John M.',
    text: 'After my first consultation, I felt informed and supported by Dr. Anton and the team. The staff was friendly, attentive, and made me feel comfortable from the moment I arrived.',
  },
  {
    name: 'Joseph N.',
    text: 'From the first consultation, I was impressed by the professionalism of the office and staff. Dr. Anton took the time to explain hair loss concerns clearly and answered my questions thoughtfully. The experience was comfortable and informative.',
  },
  {
    name: 'Sarah M.',
    text: 'I had a great experience meeting Dr. Anton and his staff during my consultation. I learned a lot about hair loss prevention and appreciated how clearly everything was explained. The team was welcoming and professional.',
  },
]

const FAQS = [
  {
    q: 'What topics are commonly discussed when learning about hair loss?',
    a: 'Educational discussions often include general information about hair growth cycles, common causes of hair thinning, and factors that may influence hair loss. These conversations are intended to help individuals better understand the topic and ask informed questions.',
  },
  {
    q: 'How long does it take to review educational information about hair loss?',
    a: 'Reviewing educational materials can vary depending on the individual and the topics being explored. Many people take time to read through information at their own pace and revisit sections as needed.',
  },
  {
    q: 'Will the information be tailored to my questions?',
    a: 'Educational information is designed to address common questions and concerns related to hair loss. While the content is informational in nature, individuals are encouraged to focus on the topics most relevant to their interests and understanding.',
  },
  {
    q: 'How do I get started with a hair loss educational review?',
    a: 'You can request educational information by completing the form on this page. A member of our team will follow up to share relevant resources and answer any initial questions you may have.',
  },
]

// ── Sub-components ─────────────────────────────────────────────

function Stars() {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {[0,1,2,3,4].map(i => (
        <span key={i} style={{ color: '#f5c518', fontSize: 18 }}>&#9733;</span>
      ))}
    </div>
  )
}

function BtnSteelFill({ href, children }: { href?: string; children: React.ReactNode }) {
  const style: React.CSSProperties = {
    display: 'inline-block',
    background: STEEL,
    color: '#fff',
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 500,
    fontSize: 13,
    letterSpacing: '0.09em',
    textTransform: 'uppercase' as const,
    padding: '15px 36px',
    borderRadius: 50,
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
  }
  if (href) return <a href={href} style={style}>{children}</a>
  return <button style={style}>{children}</button>
}

function BtnOutlineWhite({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={PHONE_HREF}
      style={{
        display: 'inline-block',
        background: 'transparent',
        border: '2px solid rgba(255,255,255,.5)',
        color: '#fff',
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 500,
        fontSize: 13,
        letterSpacing: '0.09em',
        textTransform: 'uppercase',
        padding: '13px 32px',
        borderRadius: 50,
        textDecoration: 'none',
      }}
    >
      {children}
    </a>
  )
}

// ── Props ───────────────────────────────────────────────────────

interface LafueLPProps {
  heroFormId: string
  bottomFormId: string
}

// ── Component ───────────────────────────────────────────────────

export default function LafueLP({ heroFormId, bottomFormId }: LafueLPProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <Suspense fallback={null}>
        <GclidCapture />
      </Suspense>

      {/* ===== NAV ===== */}
      <header style={{
        background: DARK,
        padding: '0 40px',
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        zIndex: 10,
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
          <img src={LOGO_WHITE} alt="LA FUE Hair" style={{ height: 44, width: 'auto' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <a
            href={PHONE_HREF}
            style={{
              padding: '10px 18px',
              border: `1.5px solid ${STEEL}`,
              borderRadius: 6,
              color: '#fff',
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 500,
              fontSize: 12,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Learn About Hair Loss
          </a>
          <a
            href={PHONE_HREF}
            style={{
              padding: '10px 20px',
              background: STEEL,
              borderRadius: 6,
              color: '#fff',
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 500,
              fontSize: 12,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            {PHONE}
          </a>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Background: warm doctor office gradient (placeholder until real photo is added) */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(108deg, #3a3020 0%, #4a3c28 18%, #5c4e38 32%, #6b5e48 50%, #9a8c7c 70%, #c4b8a8 100%)',
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(20,16,10,.55) 0%, rgba(20,16,10,.2) 55%, rgba(20,16,10,0) 70%)',
        }} />
        {/* Right steel panel */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '42%',
          background: STEEL_PANEL,
          opacity: 0.92,
        }} />

        <div className="hero-grid" style={{ position: 'relative', zIndex: 2 }}>
          {/* Text — lower-left of photo area */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '0 56px 64px 48px',
            gap: 14,
          }}>
            <h1 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: 46,
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: '#fff',
              textShadow: '0 2px 16px rgba(0,0,0,.5)',
              maxWidth: 560,
            }}>
              An Educational Overview of Hair Thinning &amp; Hair Loss
            </h1>
            <p style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: 18,
              color: 'rgba(255,255,255,.88)',
              textShadow: '0 1px 8px rgba(0,0,0,.4)',
              maxWidth: 480,
            }}>
              Educational information explaining common hair loss patterns
            </p>
            <a
              href={PHONE_HREF}
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: 16,
                fontWeight: 600,
                color: 'rgba(255,255,255,.9)',
                textDecoration: 'underline',
                textUnderlineOffset: 3,
                textShadow: '0 1px 8px rgba(0,0,0,.4)',
                alignSelf: 'flex-start',
              }}
            >
              Start With Educational Information
            </a>
          </div>

          {/* Form card */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '40px 40px 0',
          }}>
            <div style={{
              background: '#fff',
              borderRadius: 8,
              padding: '28px 28px 24px',
              width: '100%',
              maxWidth: 420,
              boxShadow: '0 4px 24px rgba(0,0,0,.18)',
            }}>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: 18,
                color: '#1a1a1a',
                textAlign: 'center',
                marginBottom: 20,
              }}>
                Start With Educational Information
              </p>
              <GhlForm formId={heroFormId} height={520} formName="LAFUE Hero Form" />
            </div>
            {/* Patient-centered badge */}
            <div style={{
              width: '100%',
              maxWidth: 420,
              marginTop: 18,
              display: 'flex',
              alignItems: 'flex-start',
              gap: 12,
              padding: '0 4px',
            }}>
              <div style={{ display: 'flex', gap: 2, flexShrink: 0 }}>
                {[0,1,2,3,4].map(i => (
                  <span key={i} style={{ color: '#f5c518', fontSize: 18 }}>&#9733;</span>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13, color: '#1a1a1a' }}>
                  Patient-Centered Care
                </span>
                <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 12, color: '#555', lineHeight: 1.4 }}>
                  Patients appreciate our personalized, doctor-led approach.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STEPS ===== */}
      <section style={{ background: '#fff', padding: '80px 48px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: 38,
            letterSpacing: '-0.02em',
            color: '#1a1a1a',
            marginBottom: 10,
          }}>
            From Questions to a Clear Plan
          </h2>
          <p style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 18,
            color: '#555',
            marginBottom: 56,
          }}>
            It&#8217;s simpler than you think, and it all starts with a conversation.
          </p>
          <div className="steps-grid" style={{ gap: 0 }}>
            {STEPS.map((step, i) => (
              <div
                key={step.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 20,
                  padding: '0 32px',
                  textAlign: 'left',
                  borderLeft: i > 0 ? '1px solid #e8ecf0' : undefined,
                }}
              >
                <div style={{ flexShrink: 0 }}>
                  <step.Icon />
                </div>
                <span style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: 17,
                  color: '#1a1a1a',
                  lineHeight: 1.35,
                }}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>
          <p style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 15,
            color: '#999',
            marginTop: 48,
            textAlign: 'center',
          }}>
            No pressure. No sales pitch. Just answers.
          </p>
        </div>
      </section>

      {/* No-Sales block (same white bg) */}
      <div style={{ background: '#fff', padding: '64px 48px 80px', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 800,
          fontSize: 44,
          letterSpacing: '-0.025em',
          color: '#1a1a1a',
          marginBottom: 12,
        }}>
          No Sales. Just Educational Information.
        </h2>
        <p style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: 18,
          color: '#555',
          marginBottom: 32,
        }}>
          Focused on education, clarity, and patient confidence.
        </p>
        <BtnSteelFill href={PHONE_HREF}>Request Educational Information</BtnSteelFill>
        <p style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: 14,
          color: '#999',
          marginTop: 14,
        }}>
          Fast. Private. No obligation.
        </p>
      </div>

      {/* ===== FEATURES ===== */}
      <section style={{ background: DARK, padding: '80px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: 36,
            color: '#fff',
            letterSpacing: '-0.02em',
          }}>
            Built for Patients Who Want Real Answers
          </h2>
          <div style={{ width: 60, height: 2, background: 'rgba(255,255,255,.3)', margin: '16px auto 20px' }} />
          <p style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 17,
            color: 'rgba(255,255,255,.7)',
            marginBottom: 48,
          }}>
            Real care. Real support. Real patient-first focus.
          </p>
          <div className="features-grid" style={{ marginBottom: 48 }}>
            {FEATURES.map(label => (
              <div
                key={label}
                style={{
                  background: '#fff',
                  borderRadius: 12,
                  padding: '36px 24px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 18,
                }}
              >
                <div style={{
                  width: 72,
                  height: 72,
                  borderRadius: '50%',
                  background: STEEL,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <IconCheckDark />
                </div>
                <span style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: 15,
                  color: '#1a1a1a',
                  textAlign: 'center',
                  lineHeight: 1.4,
                }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
            <a
              href={PHONE_HREF}
              style={{
                background: '#fff',
                color: '#1a1a1a',
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 500,
                fontSize: 12,
                letterSpacing: '0.09em',
                textTransform: 'uppercase',
                padding: '14px 28px',
                borderRadius: 50,
                textDecoration: 'none',
              }}
            >
              Learn About Hair Loss
            </a>
            <BtnOutlineWhite>Request Educational Information</BtnOutlineWhite>
          </div>
        </div>
      </section>

      {/* ===== DOCTOR BIO ===== */}
      <section style={{ background: DARK, padding: '80px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="two-col" style={{ gap: 64, alignItems: 'flex-start' }}>
            <img
              src={DR_PHOTO}
              alt="Dr. Anton - Hair Loss Physician"
              style={{ width: '100%', borderRadius: 8, objectFit: 'cover' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, paddingTop: 8 }}>
              <h2 style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: 36,
                color: '#fff',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
              }}>
                Guided by Medical Expertise
              </h2>
              <p style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: 15,
                color: 'rgba(255,255,255,.5)',
                lineHeight: 1.55,
              }}>
                Feedback collected from educational discussions and shared information.
              </p>
              {([
                'Dr. Anton is a licensed physician with a clinical focus on the evaluation and management of hair loss conditions, including alopecia. His practice emphasizes patient education, medical assessment, and ongoing care for individuals experiencing hair loss.',
                'Dr. Anton earned a Bachelor of Science in Chemistry, with a minor in Biology, from Truman State University and received his Doctor of Osteopathic Medicine from Kirksville College of Osteopathic Medicine. He completed advanced postgraduate medical training in general surgery and has extensive experience overseeing patient care in clinical settings.',
                'Dr. Anton is board certified and maintains active medical licensure. He currently provides hair loss-related medical care at clinical locations on Long Island and in Manhattan.',
                'His work follows recognized medical standards, applicable regulations, and ethical guidelines related to hair loss evaluation and non-surgical management. He is a member of national professional organizations, including the American Osteopathic Association and the American Medical Association.',
              ] as string[]).map((para, i) => (
                <p key={i} style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: 15,
                  lineHeight: 1.78,
                  color: 'rgba(255,255,255,.78)',
                }}>
                  {para}
                </p>
              ))}
              <a
                href={PHONE_HREF}
                style={{
                  display: 'inline-block',
                  alignSelf: 'flex-start',
                  background: STEEL,
                  color: '#fff',
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 500,
                  fontSize: 12,
                  letterSpacing: '0.09em',
                  textTransform: 'uppercase',
                  padding: '13px 26px',
                  borderRadius: 6,
                  textDecoration: 'none',
                  marginTop: 8,
                }}
              >
                Learn More About Hair Loss
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section style={{ background: '#fff', padding: '80px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: 38,
            letterSpacing: '-0.02em',
            color: '#1a1a1a',
            marginBottom: 8,
          }}>
            Patient Feedback
          </h2>
          <p style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 15,
            color: '#888',
            maxWidth: 640,
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Feedback may be collected to improve educational communication. Individual experiences vary.
          </p>
          <div style={{ width: 50, height: 3, background: NAVY, margin: '20px auto 40px', borderRadius: 2 }} />
          <div className="reviews-grid">
            {REVIEWS.map(r => (
              <div
                key={r.name}
                style={{ borderRadius: 10, overflow: 'hidden', display: 'flex', flexDirection: 'column', textAlign: 'left' }}
              >
                {/* Dark top */}
                <div style={{
                  background: DARK_CARD,
                  padding: '32px 28px 24px',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                }}>
                  <div style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: 42,
                    lineHeight: 1,
                    color: 'rgba(255,255,255,.5)',
                    marginTop: -8,
                  }}>
                    &#8220;
                  </div>
                  <p style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: 14,
                    lineHeight: 1.75,
                    color: 'rgba(255,255,255,.82)',
                    flex: 1,
                  }}>
                    {r.text}
                  </p>
                  <a
                    href={PHONE_HREF}
                    style={{
                      display: 'inline-block',
                      border: '1.5px solid rgba(255,255,255,.4)',
                      color: '#fff',
                      fontFamily: "'Roboto', sans-serif",
                      fontWeight: 500,
                      fontSize: 11,
                      letterSpacing: '0.07em',
                      textTransform: 'uppercase',
                      padding: '8px 18px',
                      borderRadius: 50,
                      textDecoration: 'none',
                      alignSelf: 'flex-start',
                    }}
                  >
                    Read More
                  </a>
                </div>
                {/* Steel blue bottom */}
                <div style={{
                  background: MIST,
                  padding: '18px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 6,
                }}>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 15, color: '#1a1a1a' }}>
                    {r.name}
                  </span>
                  <Stars />
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <BtnSteelFill href={PHONE_HREF}>Request Information</BtnSteelFill>
          </div>
        </div>
      </section>

      {/* ===== FINANCING ===== */}
      <section className="financing-grid">
        {/* Left: light steel panel */}
        <div style={{
          background: STEEL_PANEL,
          padding: '60px 56px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          justifyContent: 'center',
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(255,255,255,.55)',
            borderRadius: 20,
            padding: '5px 14px 5px 10px',
            alignSelf: 'flex-start',
          }}>
            <div style={{
              width: 16,
              height: 16,
              borderRadius: '50%',
              background: NAVY,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <IconCheckTiny />
            </div>
            <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 12, fontWeight: 700, color: '#2a3a50' }}>
              Patient-First Approach
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            fontSize: 38,
            letterSpacing: '-0.02em',
            color: '#1a1a1a',
            lineHeight: 1.15,
          }}>
            Accessible Hair Loss Care
          </h2>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 16, color: '#445', marginBottom: 4 }}>
            Options designed with patients in mind
          </p>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: '#445', fontWeight: 500 }}>
            As low as
          </p>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6 }}>
            <span style={{
              fontFamily: "'Lato', sans-serif",
              fontWeight: 900,
              fontSize: 68,
              color: '#1a1a1a',
              lineHeight: 1,
              letterSpacing: '-0.04em',
            }}>
              $188
            </span>
            <span style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: 26,
              color: '#1a1a1a',
              paddingBottom: 8,
            }}>
              /mo
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 4 }}>
            <div style={{ width: 4, height: 20, background: NAVY, borderRadius: 2, flexShrink: 0 }} />
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 700, color: '#1a1a1a' }}>
              Fast, simple payment plans
            </span>
          </div>
          <p style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 11,
            lineHeight: 1.65,
            color: '#556',
            marginTop: 4,
          }}>
            The above payment was calculated at 21.90% APR over 60 months. This purchase would have a total cost of $11,453. A down payment in the amount of monthly payment amount is due at the time of purchase. Payment amount rounded up to nearest whole number. 0% APR and other promotional rates subject to eligibility. Payment options through Cherry Technologies, Inc. are issued by the following lending partners: withcherry.com/lending-partners. See withcherry.com/terms for details.
          </p>
        </div>
        {/* Right: dark panel */}
        <div style={{
          background: 'linear-gradient(135deg, #3a4050 0%, #2a3040 35%, #1e2535 70%, #151c2a 100%)',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          padding: 28,
        }}>
          <div style={{
            background: 'rgba(255,255,255,.12)',
            border: '1.5px solid rgba(255,255,255,.3)',
            borderRadius: 20,
            padding: '8px 18px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
          }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ccc88' }} />
            <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, fontWeight: 700, color: '#fff' }}>
              Available Now
            </span>
          </div>
        </div>
      </section>

      {/* ===== COMMITMENT ===== */}
      <section style={{ background: '#fff', padding: '80px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: 38,
            letterSpacing: '-0.02em',
            color: '#1a1a1a',
            marginBottom: 10,
          }}>
            Our Commitment to Patients
          </h2>
          <p style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 17,
            color: '#777',
            marginBottom: 56,
          }}>
            Real capabilities. Real safety. Real patient-first care.
          </p>
          <div className="three-col" style={{ textAlign: 'left' }}>
            {COMMITMENT.map(col => (
              <div key={col.heading} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <col.Icon />
                </div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 800,
                  fontSize: 24,
                  color: NAVY,
                  letterSpacing: '-0.01em',
                  textAlign: 'center',
                }}>
                  {col.heading}
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {col.points.map((pt, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 10,
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: 15,
                        lineHeight: 1.55,
                        color: '#444',
                      }}
                    >
                      <div style={{ flexShrink: 0, marginTop: 1 }}>
                        <IconCheckSmall />
                      </div>
                      <span>
                        <strong>{pt.bold}</strong>{pt.rest}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section style={{ background: '#fff', padding: '80px 48px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 36 }}>
            <h2 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              fontSize: 38,
              letterSpacing: '-0.025em',
              color: '#1a1a1a',
            }}>
              Answers Before You Decide
            </h2>
            <button
              onClick={() => setOpenFaq(null)}
              style={{
                background: 'none',
                border: 'none',
                fontFamily: "'Open Sans', sans-serif",
                fontSize: 14,
                color: '#777',
                textDecoration: 'underline',
                cursor: 'pointer',
                paddingTop: 8,
                flexShrink: 0,
              }}
            >
              Expand All
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {FAQS.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    background: STEEL,
                    border: 'none',
                    borderRadius: 50,
                    padding: '18px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 24,
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    color: '#1a1a1a',
                    lineHeight: 1.35,
                  }}>
                    {faq.q}
                  </span>
                  <span style={{
                    fontSize: 24,
                    fontWeight: 300,
                    color: '#1a1a1a',
                    flexShrink: 0,
                    lineHeight: 1,
                    transform: openFaq === i ? 'rotate(45deg)' : 'none',
                    transition: 'transform 0.2s',
                    display: 'inline-block',
                  }}>
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '16px 28px 4px' }}>
                    <p style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: 15,
                      lineHeight: 1.75,
                      color: '#555',
                    }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER FORM ===== */}
      <section style={{ background: '#2b2b2c', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 560 }}>
        {/* Left: map placeholder + address */}
        <div style={{
          background: 'linear-gradient(145deg, #3a4550 0%, #2e3a44 40%, #243038 100%)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}>
          {/* Grid lines */}
          <div style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.14,
            backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ padding: '28px 32px 0' }}>
              <a
                href="https://maps.google.com/?q=400+Garden+City+Plaza+Garden+City+NY"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: '#fff',
                  color: '#1a1a1a',
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 500,
                  fontSize: 12,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '11px 20px',
                  borderRadius: 6,
                  textDecoration: 'none',
                }}
              >
                Visit Our Practice
              </a>
            </div>
            <div style={{ flex: 1 }} />
            <div style={{
              padding: '28px 32px',
              background: 'rgba(0,0,0,.3)',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontFamily: "'Open Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,.8)' }}>
                <span>&#128205;</span>
                <span>{ADDRESS}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ color: 'rgba(255,255,255,.7)' }}>&#128222;</span>
                <a href={PHONE_HREF} style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,.8)', textDecoration: 'none', fontWeight: 600 }}>
                  {PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: dark form */}
        <div style={{ padding: '40px 44px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <GhlForm formId={bottomFormId} height={620} formName="LAFUE Footer Form" />
        </div>
      </section>

      {/* ===== FOOTER BAR ===== */}
      <footer style={{
        background: '#222',
        padding: '18px 48px',
        textAlign: 'center',
        fontFamily: "'Open Sans', sans-serif",
        fontSize: 12,
        color: '#666',
        letterSpacing: '0.05em',
      }}>
        &copy; 2026 L.A.FUE Hair &bull;{' '}
        <a href="/privacy-policy" style={{ color: '#666', textDecoration: 'underline' }}>PRIVACY POLICY</a>
        {' '}&bull;{' '}
        <a href="/cookie-policy" style={{ color: '#666', textDecoration: 'underline' }}>Cookie Policy</a>
      </footer>
    </>
  )
}
