'use client'
import { Suspense } from 'react'
import GhlForm from './GhlForm'
import GclidCapture from './GclidCapture'

const STEEL = '#849ab9'
const DARK = '#2e2e2f'
const LIGHT_BLUE = '#a1b4ce'
const NAVY = '#2a548b'
const FOOTER_BG = '#373738'

const LOGO = 'https://lafuehairnyc.com/wp-content/uploads/2026/01/LAFUENYC-Logo-website-3-1.png'
const LOGO_WHITE = 'https://lafuehairnyc.com/wp-content/uploads/2026/01/Group-8.png'
const DR_PHOTO = 'https://lafuehairnyc.com/wp-content/uploads/2026/01/lafue-nyc-dr-anton-v4-831x1024-2-1.png'
const PHONE = '(516) 613-5827'
const PHONE_HREF = 'tel:+15166135827'
const ADDRESS = '400 Garden City Plaza, Suite 107, Garden City, NY 11530'

// --- SVG Icons ---

function IconInfo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="13" stroke="white" strokeWidth="2" />
      <line x1="14" y1="12" x2="14" y2="20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="14" cy="8.5" r="1.5" fill="white" />
    </svg>
  )
}

function IconChat() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M4 6h20v14H16l-4 4v-4H4V6z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
      <line x1="8" y1="11" x2="20" y2="11" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="16" x2="16" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function IconLeaf() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 4C14 4 6 8 6 16a8 8 0 0016 0c0-8-8-12-8-12z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
      <line x1="14" y1="24" x2="14" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function IconHeart() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 23S4 16 4 10a5 5 0 0110-1h0a5 5 0 0110 1c0 6-10 13-10 13z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  )
}

function IconBook() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="20" height="22" rx="2" stroke="white" strokeWidth="2" />
      <line x1="8" y1="10" x2="20" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="15" x2="20" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="20" x2="14" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function IconMedical() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="20" height="20" rx="3" stroke="white" strokeWidth="2" />
      <line x1="14" y1="9" x2="14" y2="19" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="9" y1="14" x2="19" y2="14" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

// --- Data ---

const FEATURES = [
  {
    icon: <IconInfo />,
    title: 'Information on How Hair Loss Can Vary',
    body: 'Educational content covering the different ways hair loss can present, including pattern, progression, and contributing factors commonly seen in patients.',
  },
  {
    icon: <IconChat />,
    title: 'Clear Communication at Every Step',
    body: 'Dr. Anton and his team are committed to answering your questions directly and making sure you understand the information being shared at every stage.',
  },
  {
    icon: <IconLeaf />,
    title: 'Conservative, Non-Invasive Focus',
    body: 'Educational discussions emphasize understanding hair loss first, before any decisions are made, supporting a thoughtful and informed approach to your care.',
  },
  {
    icon: <IconHeart />,
    title: 'Dedicated Patient Support',
    body: 'From your first inquiry through your educational review, our team provides attentive, personalized support to ensure you feel informed and comfortable.',
  },
  {
    icon: <IconBook />,
    title: 'Continued Access to Educational Resources',
    body: 'Patients receive access to physician-reviewed materials that can be revisited as questions arise and understanding develops over time.',
  },
  {
    icon: <IconMedical />,
    title: 'Information Informed by Medical Knowledge',
    body: 'All educational content is grounded in evidence-based medical understanding, reviewed by a board-certified physician with clinical experience in hair loss.',
  },
]

const STEPS = [
  {
    number: '01',
    title: 'Educational Information Review',
    body: 'Begin by reviewing general information about hair loss, including common patterns, contributing factors, and what the evaluation process typically involves.',
  },
  {
    number: '02',
    title: 'Overview of Common Hair Loss Patterns',
    body: 'Learn how hair loss is categorized and assessed by physicians, and what different presentations may suggest about the underlying causes.',
  },
  {
    number: '03',
    title: 'General Non-Surgical Educational Considerations',
    body: 'Explore information about non-surgical topics commonly discussed during hair loss consultations, giving you a foundation for informed conversations with your physician.',
  },
]

const COMMITMENT = [
  {
    heading: 'Medical Expertise',
    points: [
      'Comprehensive information about hair loss patterns',
      'Educational discussions led by a board-certified physician',
      'Topics commonly discussed during hair loss evaluations',
      'Discussion of factors that may influence hair loss',
    ],
  },
  {
    heading: 'Safety & Standards',
    points: [
      'Evidence-based approaches to patient education',
      'Clean, professional clinical environment',
      'General topics commonly discussed in physician settings',
      'Adherence to recognized medical and ethical guidelines',
    ],
  },
  {
    heading: 'Patient-First Care',
    points: [
      'Honest, straightforward educational information',
      'Content addressing your most common questions',
      'Access to physician-reviewed educational materials',
      'Focus on long-term hair health understanding',
    ],
  },
]

const REVIEWS = [
  {
    name: 'John M.',
    stars: 5,
    text: 'After my first consultation, I felt informed and supported by Dr. Anton and the team. The staff was friendly, attentive, and made me feel comfortable from the moment I arrived.',
  },
  {
    name: 'Joseph N.',
    stars: 5,
    text: 'From the first consultation, I was impressed by the professionalism of the office and staff. Dr. Anton took the time to explain hair loss concerns clearly and answered my questions thoughtfully. The experience was comfortable and informative.',
  },
  {
    name: 'Sarah M.',
    stars: 5,
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

// --- Sub-components ---

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: '#f5a623', fontSize: 18 }}>&#9733;</span>
      ))}
    </div>
  )
}

// --- Props ---

interface LafueLPProps {
  heroFormId: string
  bottomFormId: string
}

// --- Component ---

export default function LafueLP({ heroFormId, bottomFormId }: LafueLPProps) {
  return (
    <>
      <Suspense fallback={null}>
        <GclidCapture />
      </Suspense>

      {/* ===== HEADER ===== */}
      <header style={{ background: DARK, padding: '16px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img src={LOGO_WHITE} alt="LA FUE Hair" style={{ height: 52, width: 'auto', display: 'block' }} />
        <a
          href={PHONE_HREF}
          style={{
            background: STEEL,
            color: '#fff',
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 500,
            fontSize: 16,
            padding: '12px 28px',
            borderRadius: 15,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          {PHONE}
        </a>
      </header>

      {/* ===== HERO ===== */}
      <section style={{ background: DARK }}>
        <div className="hero-grid">
          {/* Left: Headline + info */}
          <div
            style={{
              padding: '64px 48px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 24,
            }}
          >
            <span
              style={{
                display: 'inline-block',
                background: STEEL,
                color: '#fff',
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '6px 16px',
                borderRadius: 4,
                alignSelf: 'flex-start',
              }}
            >
              Educational Hair Loss Information
            </span>

            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontSize: 40,
                lineHeight: 1.2,
                color: '#ffffff',
              }}
            >
              Get the Hair Loss Information You Have Been Looking For
            </h1>

            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 400,
                fontSize: 18,
                lineHeight: 1.7,
                color: '#c8d4e3',
              }}
            >
              Connect with Dr. Anton - a board-certified physician providing educational
              information and medical evaluation for patients experiencing hair loss
              on Long Island and in Manhattan.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, color: '#a1b4ce' }}>
                <strong style={{ color: '#fff' }}>Address:</strong> {ADDRESS}
              </p>
              <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, color: '#a1b4ce' }}>
                <strong style={{ color: '#fff' }}>Phone:</strong>{' '}
                <a href={PHONE_HREF} style={{ color: LIGHT_BLUE, textDecoration: 'none' }}>{PHONE}</a>
              </p>
            </div>

            <a
              href={PHONE_HREF}
              style={{
                display: 'inline-block',
                alignSelf: 'flex-start',
                border: '2px solid ' + STEEL,
                color: LIGHT_BLUE,
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 500,
                fontSize: 16,
                padding: '12px 28px',
                borderRadius: 15,
                textDecoration: 'none',
              }}
            >
              Learn About Hair Loss
            </a>
          </div>

          {/* Right: Form card */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '48px 40px',
            }}
          >
            <div
              style={{
                background: '#ffffff',
                borderRadius: 12,
                padding: '32px 28px',
                width: '100%',
                maxWidth: 460,
                boxShadow: '0 8px 40px rgba(0,0,0,0.35)',
              }}
            >
              <h2
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: 22,
                  color: NAVY,
                  marginBottom: 8,
                  textAlign: 'center',
                }}
              >
                Request Educational Information
              </h2>
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: 14,
                  color: '#666',
                  textAlign: 'center',
                  marginBottom: 20,
                }}
              >
                A member of our team will follow up with educational resources.
              </p>
              <GhlForm formId={heroFormId} height={560} formName="LAFUE Hero Form" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== STEPS ===== */}
      <section style={{ background: STEEL, padding: '72px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: DARK,
              textAlign: 'center',
              marginBottom: 12,
            }}
          >
            How It Works
          </p>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: 36,
              color: '#ffffff',
              textAlign: 'center',
              marginBottom: 48,
            }}
          >
            From Questions to a Clear Plan
          </h2>
          <div className="steps-grid">
            {STEPS.map((step) => (
              <div
                key={step.number}
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  borderRadius: 10,
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 700,
                    fontSize: 42,
                    color: 'rgba(255,255,255,0.25)',
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </span>
                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    fontSize: 20,
                    color: '#ffffff',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: 'rgba(255,255,255,0.85)',
                  }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURE CARDS ===== */}
      <section style={{ background: DARK, padding: '80px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: LIGHT_BLUE,
              textAlign: 'center',
              marginBottom: 12,
            }}
          >
            Why Patients Choose Us
          </p>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: 36,
              color: '#ffffff',
              textAlign: 'center',
              marginBottom: 48,
            }}
          >
            Built for Patients Who Want Real Answers
          </h2>
          <div className="features-grid">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                style={{
                  background: '#3a3b3c',
                  borderRadius: 10,
                  padding: '32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: STEEL,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {f.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    fontSize: 17,
                    color: '#ffffff',
                    lineHeight: 1.35,
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: 'rgba(255,255,255,0.75)',
                  }}
                >
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DOCTOR BIO ===== */}
      <section style={{ background: '#ffffff', padding: '80px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="two-col">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={DR_PHOTO}
                alt="Dr. Anton - Hair Loss Physician"
                style={{
                  width: '100%',
                  maxWidth: 380,
                  borderRadius: 10,
                  objectFit: 'cover',
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: STEEL,
                }}
              >
                Meet Your Physician
              </p>
              <h2
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: 34,
                  color: NAVY,
                  lineHeight: 1.25,
                }}
              >
                Dr. Anton
              </h2>
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: '#444',
                }}
              >
                Dr. Anton is a licensed physician with a clinical focus on the evaluation
                and management of hair loss conditions, including alopecia. His practice
                emphasizes patient education, medical assessment, and ongoing care for
                individuals experiencing hair loss.
              </p>
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: '#444',
                }}
              >
                Dr. Anton earned a Bachelor of Science in Chemistry, with a minor in
                Biology, from Truman State University and received his Doctor of
                Osteopathic Medicine from Kirksville College of Osteopathic Medicine.
                He completed advanced postgraduate medical training in general surgery
                and has extensive experience overseeing patient care in clinical settings.
              </p>
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: '#444',
                }}
              >
                Dr. Anton is board certified and maintains active medical licensure.
                He currently provides hair loss-related medical care at clinical
                locations on Long Island and in Manhattan. He is a member of the
                American Osteopathic Association and the American Medical Association.
              </p>
              <a
                href={PHONE_HREF}
                style={{
                  display: 'inline-block',
                  alignSelf: 'flex-start',
                  background: NAVY,
                  color: '#fff',
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  padding: '13px 30px',
                  borderRadius: 15,
                  textDecoration: 'none',
                }}
              >
                Request Educational Information
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMMITMENT ===== */}
      <section style={{ background: LIGHT_BLUE, padding: '80px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: 36,
              color: DARK,
              textAlign: 'center',
              marginBottom: 48,
            }}
          >
            Our Commitment to Patients
          </h2>
          <div className="three-col">
            {COMMITMENT.map((col) => (
              <div
                key={col.heading}
                style={{
                  background: '#ffffff',
                  borderRadius: 10,
                  padding: '32px 28px',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    fontSize: 20,
                    color: NAVY,
                    marginBottom: 20,
                    paddingBottom: 14,
                    borderBottom: '2px solid ' + STEEL,
                  }}
                >
                  {col.heading}
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {col.points.map((pt) => (
                    <li
                      key={pt}
                      style={{
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: 15,
                        lineHeight: 1.6,
                        color: '#444',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 10,
                      }}
                    >
                      <span style={{ color: STEEL, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>&#10003;</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section style={{ background: DARK, padding: '80px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: LIGHT_BLUE,
              textAlign: 'center',
              marginBottom: 12,
            }}
          >
            Patient Experiences
          </p>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: 36,
              color: '#ffffff',
              textAlign: 'center',
              marginBottom: 48,
            }}
          >
            What Patients Are Saying
          </h2>
          <div className="reviews-grid">
            {REVIEWS.map((r) => (
              <div
                key={r.name}
                style={{
                  background: '#3a3b3c',
                  borderRadius: 10,
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                }}
              >
                <StarRating count={r.stars} />
                <p
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: 15,
                    lineHeight: 1.75,
                    color: 'rgba(255,255,255,0.85)',
                    flex: 1,
                  }}
                >
                  &ldquo;{r.text}&rdquo;
                </p>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    fontSize: 14,
                    color: LIGHT_BLUE,
                  }}
                >
                  - {r.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section style={{ background: '#ffffff', padding: '80px 48px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: STEEL,
              textAlign: 'center',
              marginBottom: 12,
            }}
          >
            Common Questions
          </p>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: 34,
              color: NAVY,
              textAlign: 'center',
              marginBottom: 48,
            }}
          >
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {FAQS.map((faq) => (
              <div
                key={faq.q}
                style={{
                  borderBottom: '1px solid #e0e0e0',
                  paddingBottom: 24,
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    fontSize: 18,
                    color: NAVY,
                    marginBottom: 12,
                  }}
                >
                  {faq.q}
                </h3>
                <p
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: '#555',
                  }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER FORM ===== */}
      <section style={{ background: DARK, padding: '80px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="map-form-grid">
            {/* Left: Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28, justifyContent: 'center' }}>
              <img src={LOGO_WHITE} alt="LA FUE Hair" style={{ height: 56, width: 'auto' }} />
              <div>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    fontSize: 22,
                    color: '#ffffff',
                    marginBottom: 20,
                  }}
                >
                  Have Questions? We Are Here to Help.
                </p>
                <p
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: '#c8d4e3',
                    marginBottom: 24,
                  }}
                >
                  Complete the form and a member of our team will reach out with
                  educational information tailored to your questions about hair loss.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span style={{ color: STEEL, fontSize: 20, marginTop: 2 }}>&#128205;</span>
                  <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, color: '#c8d4e3', lineHeight: 1.6 }}>
                    {ADDRESS}
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ color: STEEL, fontSize: 20 }}>&#128222;</span>
                  <a
                    href={PHONE_HREF}
                    style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 16, color: LIGHT_BLUE, textDecoration: 'none', fontWeight: 600 }}
                  >
                    {PHONE}
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: 12,
                padding: '36px 28px',
              }}
            >
              <h3
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: 22,
                  color: NAVY,
                  marginBottom: 6,
                  textAlign: 'center',
                }}
              >
                Request Educational Information
              </h3>
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: 14,
                  color: '#666',
                  textAlign: 'center',
                  marginBottom: 16,
                }}
              >
                Our team typically responds within one business day.
              </p>
              <GhlForm formId={bottomFormId} height={560} formName="LAFUE Footer Form" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{ background: FOOTER_BG, padding: '24px 48px' }}>
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: '#888' }}>
            &copy; 2025 LA FUE Hair. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="/privacy-policy" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: '#888', textDecoration: 'none' }}>
              Privacy Policy
            </a>
            <a href="/cookie-policy" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: '#888', textDecoration: 'none' }}>
              Cookie Policy
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
