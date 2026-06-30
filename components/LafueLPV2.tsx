'use client'
import { Suspense, useState } from 'react'
import GhlForm from './GhlForm'
import GclidCapture from './GclidCapture'

// ── DESIGN TOKENS ──────────────────────────────────────────────────────────
const DARK_NAV    = '#2e2e2f'
const DARK        = '#343434'
const DARK_CARD   = '#3c3c3e'
const STEEL       = '#849ab9'
const STEEL_PANEL = '#b8c9da'
const NAVY        = '#2a548b'
const MIST        = '#a1b4ce'
const WHITE       = '#ffffff'

const DR_PHOTO = '/dr-anton.png'

// ── SUB-COMPONENTS ─────────────────────────────────────────────────────────

function StarRow({ color = '#f5c518', size = 18 }: { color?: string; size?: number }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {[0, 1, 2, 3, 4].map(i => (
        <span key={i} style={{ fontSize: size, color, lineHeight: 1 }}>&#9733;</span>
      ))}
    </div>
  )
}

// ── FAQ ACCORDION ──────────────────────────────────────────────────────────
const FAQ_ITEMS = [
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
]

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <section style={{ background: WHITE, padding: '80px 48px', borderTop: '1px solid #eee' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 40, letterSpacing: '-0.025em', color: '#1a1a1a', marginBottom: 36 }}>
          Answers Before You Decide
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} style={{ borderRadius: 50, overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    background: STEEL,
                    border: 'none',
                    padding: '18px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 24,
                    cursor: 'pointer',
                    textAlign: 'left' as const,
                    borderRadius: isOpen ? '50px 50px 0 0' : 50,
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{ fontSize: 17, fontWeight: 600, color: '#1a1a1a', lineHeight: 1.35 }}>{item.q}</span>
                  <span style={{ fontSize: 24, fontWeight: 300, color: '#1a1a1a', flexShrink: 0, lineHeight: 1 }}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div style={{ background: '#f0f4f8', padding: '20px 28px 24px', borderRadius: '0 0 50px 50px' }}>
                    <p style={{ fontSize: 15, lineHeight: 1.7, color: '#444', margin: 0 }}>{item.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ── PROPS ──────────────────────────────────────────────────────────────────
interface Props {
  heroFormId?: string
  bottomFormId?: string
}

export default function LafueLPV2({
  heroFormId = 'FBArZQM26K9JBzzAmmjJ',
  bottomFormId = '7w8zla8FIE2qhMqwp1NQ',
}: Props) {
  return (
    <div style={{ fontFamily: "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif", color: '#111' }}>
      <Suspense fallback={null}><GclidCapture /></Suspense>

      {/* ── NAV ──────────────────────────────────────────────────────────── */}
      <nav style={{
        background: DARK_NAV,
        height: 164,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 56px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <img
          src="/logo-lafue.png"
          alt="L.A. FUE Hair New York"
          style={{ height: 84, width: 'auto', display: 'block' }}
        />
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <a
            href="#"
            style={{
              background: STEEL,
              color: '#000',
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 500,
              fontSize: 18,
              textTransform: 'uppercase' as const,
              borderRadius: 15,
              padding: '12px 28px',
              textDecoration: 'none',
              letterSpacing: '0.03em',
              whiteSpace: 'nowrap' as const,
            }}
          >
            Learn About Hair Loss
          </a>
          <a
            href="tel:+15166135827"
            style={{
              background: WHITE,
              color: '#000',
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 500,
              fontSize: 18,
              textTransform: 'uppercase' as const,
              borderRadius: 15,
              padding: '12px 28px',
              textDecoration: 'none',
              letterSpacing: '0.03em',
              whiteSpace: 'nowrap' as const,
            }}
          >
            (516) 613-5827
          </a>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', background: STEEL, minHeight: 680, overflow: 'hidden', display: 'flex' }}>
        {/* Background photo — left 61% */}
        <div style={{ position: 'absolute', left: 0, top: 0, width: '61%', height: '100%' }}>
          <img
            src="/hero-bg.jpg"
            alt=""
            aria-hidden="true"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 33%, rgba(0,0,0,0.96) 95%), linear-gradient(90deg, rgba(0,0,0,0.07) 0%, rgba(0,0,0,0.07) 100%)',
          }} />
        </div>

        {/* Content row */}
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', width: '100%', alignItems: 'stretch' }}>
          {/* Left col — text anchored to bottom */}
          <div style={{ width: '61%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '64px 56px' }}>
            <h1 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: 47,
              color: WHITE,
              lineHeight: 1.18,
              marginBottom: 16,
              letterSpacing: '-0.01em',
            }}>
              An Educational Overview<br />of Hair Thinning &amp; Hair Loss
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.82)', marginBottom: 28, maxWidth: 480, lineHeight: 1.6 }}>
              Educational information explaining common hair loss patterns
            </p>
            <a
              href="#"
              style={{
                display: 'inline-block',
                alignSelf: 'flex-start',
                background: STEEL,
                color: WHITE,
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 800,
                fontSize: 12,
                textTransform: 'uppercase' as const,
                letterSpacing: '0.1em',
                borderRadius: 50,
                padding: '16px 36px',
                textDecoration: 'none',
              }}
            >
              Start With Educational Information
            </a>
          </div>

          {/* Right col — form card */}
          <div style={{ width: '39%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px 40px 48px 20px' }}>
            <div style={{
              background: WHITE,
              borderRadius: 8,
              padding: '32px 28px 28px',
              width: '100%',
              maxWidth: 520,
              boxShadow: '10px 10px 10.1px rgba(0,0,0,0.32)',
            }}>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: 17,
                color: '#1a1a1a',
                marginBottom: 20,
                textAlign: 'center',
                lineHeight: 1.3,
              }}>
                Start With Educational Information
              </p>
              <GhlForm formId={heroFormId} height={400} formName="Banner Form - Hair Loss" />
              <div style={{
                marginTop: 16,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '12px 14px',
                background: '#f5f5f5',
                borderRadius: 8,
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <StarRow color="#f5c518" size={16} />
                  <div style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 500, fontSize: 14, color: '#000', lineHeight: 1.2 }}>
                    Patient-Centered Care
                  </div>
                  <div style={{ fontSize: 11, color: '#555', lineHeight: 1.4 }}>
                    Patients appreciate our personalized, doctor-led approach.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STEPS ────────────────────────────────────────────────────────── */}
      <section style={{ background: WHITE, padding: '80px 48px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            fontSize: 40,
            color: '#1a1a1a',
            letterSpacing: '-0.02em',
            marginBottom: 10,
          }}>
            From Questions to a Clear Plan
          </h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 56 }}>
            It&apos;s simpler than you think, and it all starts with a conversation.
          </p>

          {/* Horizontal step items, no gap, dividers via border */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0 }}>
            {/* Step 1: calendar + check */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '0 32px', textAlign: 'left' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="106" height="119" viewBox="0 0 106 119" fill="none" style={{ flexShrink: 0 }}>
                <g clipPath="url(#clip0_6004_39)">
                  <path d="M90.9953 75.52C94.906 76.8872 98.3159 79.3037 100.899 82.4312C104.086 86.2969 106 91.2427 106 96.6294C106 102.016 104.161 106.784 101.081 110.612C96.9643 115.726 90.6454 119 83.5479 119C77.2119 119 71.4865 116.385 67.4078 112.178C65.4799 110.195 63.9156 107.854 62.8316 105.267C61.7167 102.607 61.0992 99.6919 61.0992 96.6294C61.0992 85.1348 69.8056 75.6567 81.0128 74.4023C81.843 74.3101 82.6903 74.2588 83.5513 74.2588C86.1653 74.2588 88.6661 74.6997 90.9988 75.52H90.9953Z" fill="#2E2E2F"/>
                  <path d="M57.0479 83.9009C57.8197 83.9009 58.4818 84.3999 58.7219 85.0938C57.0719 88.5938 56.156 92.5005 56.156 96.6226H47.8201C46.8458 96.6226 46.0534 95.8364 46.0534 94.8623V85.668C46.0534 84.6973 46.8424 83.9043 47.8201 83.9043H57.0479V83.9009Z" fill="#2E2E2F"/>
                  <path d="M41.3297 85.6646V94.8589C41.3297 95.8296 40.5407 96.6191 39.5596 96.6191H30.3352C29.361 96.6191 28.5651 95.833 28.5651 94.8589V85.6646C28.5651 84.6938 29.361 83.9009 30.3352 83.9009H39.5596C40.5407 83.9009 41.3297 84.6938 41.3297 85.6646Z" fill="#2E2E2F"/>
                  <path d="M23.8414 85.6646V94.8589C23.8414 95.8296 23.0524 96.6191 22.0748 96.6191H12.8469C11.8727 96.6191 11.0803 95.833 11.0803 94.8589V85.6646C11.0803 84.6938 11.8693 83.9009 12.8469 83.9009H22.0748C23.049 83.9009 23.8414 84.6938 23.8414 85.6646Z" fill="#2E2E2F"/>
                  <path d="M81.0231 69.4497V66.0112C81.0231 65.0405 81.8121 64.251 82.7898 64.251H92.0176C92.9919 64.251 93.7877 65.0371 93.7877 66.0112V71.3057C90.6283 70.0342 87.167 69.3335 83.5479 69.3335C82.6937 69.3335 81.8533 69.3745 81.0197 69.4497H81.0231Z" fill="#2E2E2F"/>
                  <path d="M76.2994 66.0112V70.3008C71.8742 71.5039 67.9017 73.7905 64.6703 76.853C64.0082 76.6035 63.5314 75.9609 63.5314 75.209V66.0146C63.5314 65.0439 64.3272 64.2544 65.3015 64.2544H74.5259C75.507 64.2544 76.296 65.0405 76.296 66.0146L76.2994 66.0112Z" fill="#2E2E2F"/>
                  <path d="M58.818 66.0112V75.2056C58.818 76.1763 58.0221 76.9692 57.0479 76.9692H47.8201C46.8458 76.9692 46.0534 76.1763 46.0534 75.2056V66.0112C46.0534 65.0405 46.8424 64.251 47.8201 64.251H57.0479C58.0221 64.251 58.818 65.0371 58.818 66.0112Z" fill="#2E2E2F"/>
                  <path d="M41.3297 66.0112V75.2056C41.3297 76.1763 40.5407 76.9692 39.5596 76.9692H30.3352C29.361 76.9692 28.5651 76.1763 28.5651 75.2056V66.0112C28.5651 65.0405 29.361 64.251 30.3352 64.251H39.5596C40.5407 64.251 41.3297 65.0371 41.3297 66.0112Z" fill="#2E2E2F"/>
                  <path d="M22.0748 64.251H12.8469C11.8712 64.251 11.0803 65.0391 11.0803 66.0112V75.209C11.0803 76.1811 11.8712 76.9692 12.8469 76.9692H22.0748C23.0505 76.9692 23.8414 76.1811 23.8414 75.209V66.0112C23.8414 65.0391 23.0505 64.251 22.0748 64.251Z" fill="#2E2E2F"/>
                  <path d="M93.7877 46.3647V55.5557C93.7877 56.5264 92.9918 57.3193 92.0176 57.3193H82.7898C81.8155 57.3193 81.0231 56.5264 81.0231 55.5557V46.3647C81.0231 45.3872 81.8121 44.6011 82.7898 44.6011H92.0176C92.9918 44.6011 93.7877 45.3872 93.7877 46.3647Z" fill="#2E2E2F"/>
                  <path d="M76.2994 46.3647V55.5557C76.2994 56.5264 75.5104 57.3193 74.5293 57.3193H65.3049C64.3307 57.3193 63.5348 56.5264 63.5348 55.5557V46.3647C63.5348 45.3872 64.3307 44.6011 65.3049 44.6011H74.5293C75.5104 44.6011 76.2994 45.3872 76.2994 46.3647Z" fill="#2E2E2F"/>
                  <path d="M58.818 46.3647V55.5557C58.818 56.5264 58.0221 57.3193 57.0479 57.3193H47.8201C46.8458 57.3193 46.0534 56.5264 46.0534 55.5557V46.3647C46.0534 45.3872 46.8424 44.6011 47.8201 44.6011H57.0479C58.0221 44.6011 58.818 45.3872 58.818 46.3647Z" fill="#2E2E2F"/>
                  <path d="M41.3297 46.3647V55.5557C41.3297 56.5264 40.5407 57.3193 39.5596 57.3193H30.3352C29.361 57.3193 28.5651 56.5264 28.5651 55.5557V46.3647C28.5651 45.3872 29.361 44.6011 30.3352 44.6011H39.5596C40.5407 44.6011 41.3297 45.3872 41.3297 46.3647Z" fill="#2E2E2F"/>
                  <path d="M23.8414 46.3647V55.5557C23.8414 56.5264 23.0524 57.3193 22.0748 57.3193H12.8469C11.8727 57.3193 11.0803 56.5264 11.0803 55.5557V46.3647C11.0803 45.3872 11.8693 44.6011 12.8469 44.6011H22.0748C23.049 44.6011 23.8414 45.3872 23.8414 46.3647Z" fill="#2E2E2F"/>
                  <path d="M85.6165 5.33545V9.50195H74.9067V5.33545C74.9067 2.38574 77.3045 0 80.2616 0C81.7435 0 83.0779 0.594727 84.0487 1.56201C85.0196 2.5293 85.6165 3.85889 85.6165 5.33545Z" fill="#2E2E2F"/>
                  <path d="M85.6165 9.50195V18.71C85.6165 21.6563 83.2186 24.0454 80.2616 24.0454C77.3045 24.0454 74.9067 21.6563 74.9067 18.71V9.50195H85.6165Z" fill="#2E2E2F"/>
                  <path d="M30.3009 5.33545V9.50195H19.5911V5.33545C19.5911 2.38574 21.989 0 24.946 0C26.428 0 27.7624 0.594727 28.7332 1.56201C29.704 2.5293 30.3009 3.85889 30.3009 5.33545Z" fill="#2E2E2F"/>
                  <path d="M30.3009 9.50195V18.71C30.3009 21.6563 27.903 24.0454 24.946 24.0454C21.989 24.0454 19.5911 21.6563 19.5911 18.71V9.50195H30.3009Z" fill="#2E2E2F"/>
                  <path d="M57.3601 104.675C58.0702 106.965 59.0684 109.125 60.3171 111.111H10.7509C4.81631 111.111 0 106.312 0 100.399V20.207C0 14.2939 4.81631 9.50195 10.7509 9.50195H14.9429V18.71C14.9429 24.2061 19.4265 28.6768 24.946 28.6768C30.4656 28.6768 34.9491 24.2095 34.9491 18.71V9.50195H70.2619V18.71C70.2619 24.2061 74.7523 28.6768 80.265 28.6768C85.7777 28.6768 90.2681 24.2095 90.2681 18.71V9.50195H94.4601C100.395 9.50195 105.211 14.2939 105.211 20.207V79.9053C103.636 77.8853 101.784 76.0908 99.712 74.5801V36.5415H5.50583V97.4736C5.50583 101.449 8.74071 104.672 12.7303 104.672H57.3601V104.675Z" fill="#2E2E2F"/>
                  <path d="M82.1037 108.24C81.4176 108.24 80.7556 107.994 80.2307 107.546L69.5106 98.3042C68.3168 97.2754 68.1865 95.4741 69.219 94.2846C70.255 93.0918 72.0594 92.9653 73.2532 93.9941L81.6886 101.264L93.4515 86.1225C94.4189 84.8784 96.2165 84.6494 97.4651 85.6132C98.7138 86.5771 98.9436 88.3681 97.9763 89.6123L84.3644 107.133C83.8841 107.751 83.1671 108.148 82.385 108.227C82.289 108.237 82.1963 108.24 82.1003 108.24H82.1037Z" fill="#E7F1F9"/>
                </g>
                <defs><clipPath id="clip0_6004_39"><rect width="106" height="119" fill="white"/></clipPath></defs>
              </svg>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 18, color: '#1a1a1a', lineHeight: 1.3 }}>Educational Information Review</span>
            </div>

            {/* Step 2: person + check */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '0 32px', textAlign: 'left', borderLeft: '1px solid #e8ecf0' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="124" height="125" viewBox="0 0 124 125" fill="none" style={{ flexShrink: 0 }}>
                <path d="M101.963 80.3571C102.982 80.3571 103.981 80.4419 104.967 80.5655C99.5599 74.5818 94.1157 74.122 92.4764 73.741C87.4207 72.5654 81.2926 73.0654 78.0276 72.0565C77.6436 75.2366 68.321 85.6964 62.2124 92.2559L59.5623 82.125C61.554 80.9643 61.9874 78.3928 61.9874 76.2544H51.9464C51.9464 78.375 52.3753 80.9181 54.3265 82.0967L51.7214 92.2544C45.6098 85.6934 36.2902 75.2336 35.9062 72.0565C32.6397 73.0699 26.5161 72.5699 21.4574 73.744C18.8867 74.3348 6.95148 75.0922 0.491927 97.1503C-0.383944 100.147 -0.0764894 103.394 1.3483 106.067C6.64552 115.994 34.4739 119.049 56.9706 119.048C65.1294 119.048 73.9841 118.641 82.2149 117.658C79.5423 113.821 77.9661 109.174 77.9661 104.167C77.9661 91.0387 88.733 80.3571 101.964 80.3571H101.963Z" fill="#2E2E2F"/>
                <path d="M30.387 48.5848C32.7657 54.939 36.5331 61.1086 41.1945 65.6265C43.8311 68.183 46.7526 70.2068 49.8692 71.433C52.0124 72.2753 54.2455 72.7411 56.5417 72.7411C58.8379 72.7411 61.0725 72.2753 63.2142 71.433C66.4373 70.1637 69.4593 68.0431 72.1649 65.3571C76.7108 60.8542 80.3837 54.7798 82.7189 48.5327C84.5141 48.0089 86.3933 44.6726 87.1612 40.4107C87.9921 35.7887 87.2062 31.7559 85.4095 31.0818C85.4725 29.9539 85.5145 28.8125 85.5115 27.6428C85.468 10.8824 75.5649 1.13987 59.9492 0.101184C46.3342 -0.805066 36.0772 4.56249 31.4054 13.4836C29.8321 16.4851 28.9353 20.2396 28.5903 24.3199C28.0684 26.4449 27.7579 28.6518 27.7579 30.9345H27.8089C27.8089 30.9524 27.8044 30.9687 27.8044 30.9881C27.7699 30.9925 27.7384 30.994 27.7039 31C25.7137 31.3437 24.8064 35.5595 25.6807 40.4152C26.4801 44.8765 28.5093 48.3274 30.384 48.5878L30.387 48.5848Z" fill="#2E2E2F"/>
                <path d="M108.252 84.1746C111.882 85.4478 115.048 87.6982 117.445 90.6108C120.404 94.2108 122.181 98.8168 122.181 103.833C122.181 108.85 120.474 113.29 117.614 116.855C113.793 121.617 107.927 124.667 101.339 124.667C95.4571 124.667 90.1424 122.232 86.3561 118.313C84.5665 116.467 83.1144 114.287 82.1081 111.877C81.0732 109.401 80.5 106.685 80.5 103.833C80.5 93.1286 88.582 84.3019 98.9855 83.1337C99.7561 83.0477 100.543 83 101.342 83C103.768 83 106.09 83.4106 108.255 84.1746H108.252Z" fill="#2E2E2F"/>
                <path d="M99.7436 114.833C99.1251 114.833 98.5282 114.613 98.0551 114.211L88.3908 105.92C87.3146 104.997 87.1971 103.381 88.128 102.314C89.0619 101.244 90.6886 101.13 91.7648 102.053L99.3694 108.575L109.974 94.9919C110.846 93.8758 112.466 93.6704 113.592 94.535C114.718 95.3997 114.925 97.0064 114.053 98.1225L101.782 113.84C101.349 114.395 100.702 114.751 99.9972 114.821C99.9106 114.83 99.8271 114.833 99.7405 114.833H99.7436Z" fill="#E7F1F9"/>
              </svg>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 18, color: '#1a1a1a', lineHeight: 1.3 }}>Overview of common hair loss patterns</span>
            </div>

            {/* Step 3: person + star */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '0 32px', textAlign: 'left', borderLeft: '1px solid #e8ecf0' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="133" height="139" viewBox="0 0 133 139" fill="none" style={{ flexShrink: 0 }}>
                <g clipPath="url(#clip0_6004_63)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M110.071 93.3247C122.735 93.3247 133 103.552 133 116.162C133 128.773 122.735 139 110.071 139C97.4076 139 87.1426 128.776 87.1426 116.162C87.1426 103.549 97.4076 93.3247 110.071 93.3247ZM37.262 80.4141C7.4524 93.7734 2.73658 92.29 1.49217 108.369C0.247756 124.452 0 131.874 0 131.874H90.2987C86.8442 127.564 84.7776 122.107 84.7776 116.162C84.7776 104.284 93.0324 94.3258 104.139 91.6674C98.866 88.9249 90.828 85.9412 78.4937 80.4113L77.5899 80.3131L67.3221 116.039L61.4858 103.047V91.4319H62.474C63.9014 91.4319 65.0698 90.2709 65.0698 88.8464V84.8279C65.0698 83.4062 63.9014 82.2424 62.474 82.2424H53.3689C51.9415 82.2424 50.7731 83.4034 50.7731 84.8279V88.8464C50.7731 90.2681 51.9387 91.4319 53.3689 91.4319H54.2699V103.047L48.4307 116.039L38.1629 80.3131L37.2591 80.4113L37.262 80.4141ZM36.8791 6.12724C35.0913 4.09137 33.3288 2.0555 31.5608 0H59.0504C68.7298 0 71.1116 2.4509 76.2751 9.76713L76.368 9.90734H76.3736H76.3793H76.6524H76.6693L76.9452 9.91295H76.9593C88.8741 10.3841 87.0075 28.6873 86.0756 36.4409C87.7986 36.8391 88.539 38.1151 88.3842 39.8341C88.0745 43.2468 87.5931 46.2137 86.9089 48.8861C84.7439 57.3661 80.2955 63.1372 74.4507 69.5365C64.5855 81.8358 48.8108 82.7191 38.6105 67.9745C34.9364 62.6661 27.881 52.5092 27.881 45.6528C27.881 43.3422 28.2217 40.5856 29.3422 38.4852C27.6164 33.0731 26.8928 26.6906 27.6361 21.0513C28.6496 13.4042 31.2116 10.9169 36.8791 6.12444V6.12724Z" fill="#2E2E2F"/>
                  <ellipse cx="110.484" cy="116.698" rx="22.5157" ry="22.3022" fill="#2E2E2F"/>
                  <path d="M110.484 104.769L113.188 113.011H121.938L114.859 118.106L117.563 126.349L110.484 121.254L103.405 126.349L106.109 118.106L99.0304 113.011H107.78L110.484 104.769Z" fill="#E7F1F9"/>
                </g>
                <defs><clipPath id="clip0_6004_63"><rect width="133" height="139" fill="white"/></clipPath></defs>
              </svg>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 18, color: '#1a1a1a', lineHeight: 1.3 }}>General non-surgical educational considerations</span>
            </div>
          </div>

          <p style={{ fontSize: 15, color: '#999', marginTop: 48, textAlign: 'center' }}>
            No pressure. No sales pitch. Just answers.
          </p>
        </div>
      </section>

      {/* ── NO-SALES BLOCK ───────────────────────────────────────────────── */}
      <div style={{ padding: '64px 48px 80px', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 800,
          fontSize: 46,
          color: '#1a1a1a',
          letterSpacing: '-0.025em',
          marginBottom: 12,
        }}>
          No Sales. Just Educational Information.
        </h2>
        <p style={{ fontSize: 18, color: '#555', marginBottom: 32, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
          Focused on education, clarity, and patient confidence.
        </p>
        <button style={{
          background: STEEL,
          color: WHITE,
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 800,
          fontSize: 12,
          textTransform: 'uppercase' as const,
          letterSpacing: '0.1em',
          borderRadius: 50,
          padding: '16px 36px',
          border: 'none',
          cursor: 'pointer',
          display: 'inline-block',
        }}>
          Request Educational Information
        </button>
        <p style={{ fontSize: 14, color: '#999', marginTop: 14 }}>Fast. Private. No obligation.</p>
      </div>

      {/* ── FEATURES ─────────────────────────────────────────────────────── */}
      <section style={{ background: DARK, padding: '80px 48px' }}>
        <h2 style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 800,
          fontSize: 38,
          color: WHITE,
          textAlign: 'center',
          letterSpacing: '-0.02em',
          marginBottom: 10,
        }}>
          Built for Patients Who Want Real Answers
        </h2>
        <div style={{ width: 60, height: 2, background: 'rgba(255,255,255,.3)', margin: '16px auto 20px' }} />
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,.7)', textAlign: 'center', marginTop: 4, marginBottom: 48 }}>
          Real care. Real support. Real patient-first focus.
        </p>

        <div className="features-grid" style={{ maxWidth: 1100, margin: '0 auto 48px', gap: 18 }}>
          {[
            ['Information discussing', 'how hair loss can vary'],
            ['Clear Communication', 'at Every Step'],
            ['Conservative,', 'Non-Invasive Focus'],
            ['Dedicated Patient', 'Support'],
            ['Continued access to', 'educational resources'],
            ['Information informed', 'by medical knowledge'],
          ].map(([line1, line2], i) => (
            <div key={i} style={{
              background: WHITE,
              borderRadius: 12,
              padding: '36px 24px 28px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 18,
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
                <path d="M0 48C0 21.4903 21.4903 0 48 0C74.5097 0 96 21.4903 96 48C96 74.5097 74.5097 96 48 96C21.4903 96 0 74.5097 0 48Z" fill="#A1B4CE"/>
                <g clipPath={`url(#clip_feat_${i})`}>
                  <mask id={`mask_feat_${i}`} style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="16" y="17" width="64" height="62">
                    <path d="M80 17.1428H16V78.8571H80V17.1428Z" fill="white"/>
                  </mask>
                  <g mask={`url(#mask_feat_${i})`}>
                    <path d="M80 47.9996C80 44.718 75.9513 42.123 74.9949 39.1616C74.007 36.0927 75.735 31.6031 73.8898 29.0472C72.0249 26.468 67.2403 26.745 64.6802 24.8673C62.1442 23.0085 60.9368 18.3272 57.8896 17.3299C54.9521 16.3694 51.2568 19.4099 47.9994 19.4099C44.7422 19.4099 41.0479 16.3694 38.1104 17.3299C35.0642 18.3272 33.8568 23.0085 31.3218 24.8673C28.7597 26.7461 23.975 26.468 22.1101 29.0472C20.2651 31.6021 21.993 36.0949 21.0052 39.1616C20.0487 42.123 16 44.718 16 47.9996C16 51.2812 20.0487 53.8751 21.0052 56.8377C21.993 59.9065 20.2651 64.396 22.1101 66.952C23.975 69.5311 28.7597 69.2542 31.3218 71.1319C33.8568 72.9907 35.0642 77.6719 38.1104 78.6693C41.0479 79.6298 44.7453 76.5893 48.0006 76.5893C51.2558 76.5893 54.9533 79.6308 57.8906 78.6693C60.9368 77.6719 62.1442 72.9907 64.6813 71.1319C67.2414 69.2531 72.0261 69.5311 73.891 66.952C75.736 64.3971 74.008 59.9044 74.9959 56.8377C75.9513 53.8762 80 51.2822 80 47.9996ZM64.4911 41.8587L46.2683 60.2171C45.4342 61.0575 44.3417 61.4767 43.2514 61.4767C42.1611 61.4767 41.0666 61.0575 40.2325 60.2171L31.5089 51.4286C29.8426 49.7499 29.8426 47.0296 31.5089 45.3509C33.1752 43.6723 35.8775 43.6723 37.5438 45.3509L43.2504 51.1001L58.4552 35.7799C60.1215 34.1013 62.8248 34.1013 64.4901 35.7799C66.1563 37.4587 66.1563 40.1789 64.4901 41.8576L64.4911 41.8587Z" fill="#2E2E2F"/>
                  </g>
                </g>
                <defs><clipPath id={`clip_feat_${i}`}><rect width="64" height="64" fill="white" transform="translate(16 16)"/></clipPath></defs>
              </svg>
              <span style={{ fontWeight: 700, fontSize: 16, color: '#1a1a1a', lineHeight: 1.35, textAlign: 'center' }}>
                {line1}<br />{line2}
              </span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 48 }}>
          <a href="#" style={{
            background: WHITE,
            color: '#1a1a1a',
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 800,
            fontSize: 12,
            textTransform: 'uppercase' as const,
            letterSpacing: '0.09em',
            borderRadius: 50,
            padding: '14px 28px',
            textDecoration: 'none',
          }}>
            Learn About Hair Loss
          </a>
          <a href="#" style={{
            border: '2px solid rgba(255,255,255,0.55)',
            color: WHITE,
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 800,
            fontSize: 12,
            textTransform: 'uppercase' as const,
            letterSpacing: '0.09em',
            borderRadius: 50,
            padding: '14px 28px',
            textDecoration: 'none',
          }}>
            Request Educational Information
          </a>
        </div>
      </section>

      {/* ── DOCTOR BIO ───────────────────────────────────────────────────── */}
      <section style={{ background: WHITE, padding: '80px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 64, alignItems: 'flex-start', maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ background: '#2E2E2F', paddingTop: 80, display: 'flex', alignItems: 'flex-end' }}>
            <img src={DR_PHOTO} alt="Dr. Anton" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, paddingTop: 8 }}>
            <h2 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              fontSize: 38,
              color: '#1a1a1a',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
            }}>
              Guided by Medical Expertise
            </h2>
            <p style={{ fontSize: 16, color: '#888', lineHeight: 1.5 }}>
              Feedback collected from educational discussions and shared information.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.78, color: '#444' }}>
              Dr. Anton is a licensed physician with a clinical focus on the evaluation and management of hair loss conditions, including alopecia. His practice emphasizes patient education, medical assessment, and ongoing care for individuals experiencing hair loss.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.78, color: '#444' }}>
              Dr. Anton earned a Bachelor of Science in Chemistry, with a minor in Biology, from Truman State University and received his Doctor of Osteopathic Medicine from Kirksville College of Osteopathic Medicine. He completed advanced postgraduate medical training in general surgery and has extensive experience overseeing patient care in clinical settings.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.78, color: '#444' }}>
              Dr. Anton is board certified and maintains active medical licensure. He currently provides hair loss-related medical care at clinical locations on Long Island and in Manhattan.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.78, color: '#444' }}>
              His work follows recognized medical standards, applicable regulations, and ethical guidelines related to hair loss evaluation and non-surgical management. He is a member of national professional organizations, including the American Osteopathic Association and the American Medical Association.
            </p>
            <a href="#" style={{
              display: 'inline-block',
              alignSelf: 'flex-start',
              background: STEEL,
              color: WHITE,
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 800,
              fontSize: 12,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.09em',
              borderRadius: 6,
              padding: '14px 28px',
              textDecoration: 'none',
              marginTop: 8,
            }}>
              Learn About Hair Loss
            </a>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────────────────── */}
      <section style={{ background: WHITE, padding: '80px 48px', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 800,
          fontSize: 40,
          color: '#1a1a1a',
          letterSpacing: '-0.02em',
          marginBottom: 8,
        }}>
          Patient Feedback
        </h2>
        <p style={{ fontSize: 15, color: '#888', maxWidth: 640, margin: '0 auto', lineHeight: 1.6 }}>
          Feedback may be collected to improve educational communication. Individual experiences vary.
        </p>
        <div style={{ width: 50, height: 3, background: NAVY, margin: '20px auto 40px', borderRadius: 2 }} />

        <div className="reviews-grid" style={{ maxWidth: 1100, margin: '0 auto 40px', gap: 20 }}>
          {[
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
          ].map((review, i) => (
            <div key={i} style={{ borderRadius: 10, overflow: 'hidden', display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <div style={{ background: DARK_CARD, padding: '32px 28px 24px', flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ fontSize: 42, lineHeight: 1, color: 'rgba(255,255,255,0.55)', fontFamily: 'Georgia, serif', marginTop: -8 }}>&#8220;</div>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,0.82)', flex: 1 }}>{review.text}</p>
              </div>
              <div style={{ background: MIST, padding: '18px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a' }}>{review.name}</span>
                <StarRow />
              </div>
            </div>
          ))}
        </div>

        <a href="#" style={{
          display: 'inline-block',
          background: STEEL,
          color: WHITE,
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 800,
          fontSize: 12,
          textTransform: 'uppercase' as const,
          letterSpacing: '0.09em',
          borderRadius: 6,
          padding: '15px 36px',
          textDecoration: 'none',
        }}>
          Request Information
        </a>
      </section>

      {/* ── FINANCING ────────────────────────────────────────────────────── */}
      <section className="financing-grid">
        {/* Left panel */}
        <div style={{ background: STEEL_PANEL, padding: '60px 56px', display: 'flex', flexDirection: 'column', gap: 16, justifyContent: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(255,255,255,0.55)',
            borderRadius: 20,
            padding: '5px 14px 5px 10px',
            fontSize: 12,
            fontWeight: 700,
            color: '#2a3a50',
            alignSelf: 'flex-start',
          }}>
            <div style={{ width: 14, height: 14, borderRadius: '50%', background: NAVY, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg viewBox="0 0 9 9" fill="none" style={{ width: 9, height: 9 }}>
                <path d="M1.5 4.5l2.5 2.5 4-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            Patient-First Approach
          </div>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 40, letterSpacing: '-0.02em', color: '#1a1a1a', lineHeight: 1.15 }}>
            Accessible Hair Loss Care
          </h2>
          <p style={{ fontSize: 16, color: '#445', marginBottom: 0 }}>Options designed with patients in mind</p>
          <p style={{ fontSize: 13, color: '#445', fontWeight: 500 }}>As low as</p>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6 }}>
            <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 900, fontSize: 72, color: '#1a1a1a', lineHeight: 1, letterSpacing: '-0.04em' }}>$188</span>
            <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 28, color: '#1a1a1a', paddingBottom: 10 }}>/mo</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 4 }}>
            <div style={{ width: 4, height: 20, background: NAVY, borderRadius: 2, flexShrink: 0 }} />
            <span style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a' }}>Fast, simple payment plans</span>
          </div>
          <p style={{ fontSize: 11, lineHeight: 1.65, color: '#557', marginTop: 4 }}>
            The above payment was calculated at 21.90% APR over 60 months. This purchase would have a total cost of $11,453. A down payment in the amount of monthly payment amount is due at the time of purchase. Payment amount rounded up to nearest whole number. 0% APR and other promotional rates subject to eligibility. Payment options through Cherry Technologies, Inc. are issued by the following lending partners: withcherry.com/lending-partners. See withcherry.com/terms for details.
          </p>
        </div>
        {/* Right panel: real photo */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: 480 }}>
          <img
            src="/financing-photo.png"
            alt=""
            aria-hidden="true"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
          <div style={{ position: 'absolute', bottom: 28, right: 28, zIndex: 2, background: 'rgba(255,255,255,0.12)', border: '1.5px solid rgba(255,255,255,0.3)', borderRadius: 20, padding: '8px 18px', display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 700, color: WHITE }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ccc88' }} />
            Available Now
          </div>
        </div>
      </section>

      {/* ── COMMITMENT ───────────────────────────────────────────────────── */}
      <section style={{ background: WHITE, padding: '80px 48px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 40, color: '#1a1a1a', letterSpacing: '-0.02em', marginBottom: 10 }}>
          Our Commitment to Patients
        </h2>
        <p style={{ fontSize: 17, color: '#777', marginBottom: 56 }}>Real capabilities. Real safety. Real patient-first care.</p>

        <div className="three-col" style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'left' }}>
          {/* Medical Expertise */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ margin: '0 auto 8px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="92" height="151" viewBox="0 0 92 151" fill="none">
                <g clipPath="url(#clip0_6023_489)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M54.2555 99.6721C55.5987 98.31 57.7821 98.31 59.1253 99.6598C60.4808 101.01 60.4808 103.198 59.1376 104.553C54.5499 109.207 49.9989 113.891 45.3867 118.519C44.0435 119.875 41.86 119.875 40.5045 118.519L32.8624 110.834C31.5069 109.478 31.5069 107.284 32.8624 105.928C34.2056 104.572 36.3891 104.572 37.7445 105.928L42.9333 111.154L54.2555 99.6721ZM70.3309 109.09C70.3309 95.5859 59.432 84.6399 46 84.6399C32.568 84.6399 21.6691 95.5859 21.6691 109.09C21.6691 122.593 32.5557 133.539 46 133.539C59.4443 133.539 70.3309 122.593 70.3309 109.09ZM80.7944 100.745L87.7067 103.419V114.76L80.7944 117.435C79.9112 121.133 78.4576 124.67 76.4765 127.906L79.4819 134.71L71.4963 142.735L64.7251 139.715C61.5051 141.712 57.9907 143.179 54.2984 144.06L51.6427 151.006H40.3573L37.7016 144.06C34.0093 143.179 30.4949 141.712 27.2749 139.721L20.5037 142.741L12.5181 134.723L15.5357 127.918C13.5424 124.676 12.0827 121.145 11.2056 117.441L4.3056 114.766V103.426L11.2056 100.751C12.0888 97.0527 13.5424 93.515 15.5357 90.2793L12.5181 83.4751L20.5037 75.4566L27.2749 78.4766C30.4949 76.4798 34.0093 75.0129 37.7016 74.1315L40.3573 67.1855H51.6427L54.3107 74.1315C57.9907 75.0129 61.5051 76.4798 64.7251 78.4766L71.4963 75.4566L79.4819 83.4751L76.4765 90.2793C78.4576 93.5212 79.9112 97.0527 80.7944 100.757V100.745Z" fill="#849AB9"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.2368 91.5861H0C2.47787 68.2643 22.1168 50.095 46 50.095C69.8832 50.095 89.5099 68.2643 92 91.5861H82.7632C82.5056 91.0499 82.2419 90.5199 81.9597 89.9898L85.3331 82.372L72.5819 69.5648L65.0072 72.9484C62.7563 71.7589 60.4195 70.7789 57.9907 70.027L55.016 62.249H36.984L34.0093 70.027C31.5805 70.7789 29.2437 71.7527 26.9928 72.9484L19.4181 69.5648L6.66693 82.372L10.0403 89.9898C9.75813 90.5137 9.50667 91.0437 9.24907 91.58M46 47.0134C58.9168 47.0134 69.3864 36.4865 69.3864 23.5067C69.3864 10.5269 58.9168 0 46 0C33.0832 0 22.6013 10.5207 22.6013 23.5067C22.6013 36.4927 33.0771 47.0134 46 47.0134Z" fill="black"/>
                </g>
                <defs><clipPath id="clip0_6023_489"><rect width="92" height="151" fill="white"/></clipPath></defs>
              </svg>
            </div>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 26, color: NAVY, letterSpacing: '-0.01em', textAlign: 'center' }}>Medical Expertise</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, lineHeight: 1.55, color: '#444' }}>
                <img src="/isolation-mode.png" width={17} height={17} alt="" style={{ flexShrink: 0, marginTop: 2 }} /><span><strong>Comprehensive information</strong> regarding hair loss patterns</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, lineHeight: 1.55, color: '#444' }}>
                <img src="/isolation-mode.png" width={17} height={17} alt="" style={{ flexShrink: 0, marginTop: 2 }} /><span><strong>Educational discussions</strong> based on individual questions</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, lineHeight: 1.55, color: '#444' }}>
                <img src="/isolation-mode.png" width={17} height={17} alt="" style={{ flexShrink: 0, marginTop: 2 }} /><span>Topics that may include <strong>non-surgical educational considerations</strong></span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, lineHeight: 1.55, color: '#444' }}>
                <img src="/isolation-mode.png" width={17} height={17} alt="" style={{ flexShrink: 0, marginTop: 2 }} /><span><strong>Educational discussion</strong> of factors that influence hair loss</span>
              </li>
            </ul>
          </div>

          {/* Safety Standards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ margin: '0 auto 8px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="139" height="155" viewBox="0 0 139 155" fill="none">
                <g clipPath="url(#clip0_6023_495)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M89.8651 15.9585V0.245417C90.1754 0.381042 90.447 0.574792 90.6862 0.820208L106.429 16.5398C106.674 16.7917 106.862 17.0629 107.011 17.36H91.281C90.4987 17.36 89.8651 16.7335 89.8651 15.9585ZM16.5248 77.0802C15.096 77.0802 13.9388 78.2363 13.9388 79.6635C13.9388 81.0908 15.096 82.2469 16.5248 82.2469H74.5622C75.991 82.2469 77.1482 81.0908 77.1482 79.6635C77.1482 78.2363 75.991 77.0802 74.5622 77.0802H16.5248ZM16.5248 38.3238C15.096 38.3238 13.9388 39.4798 13.9388 40.9071C13.9388 42.3344 15.096 43.4904 16.5248 43.4904H90.725C92.1538 43.4904 93.311 42.3344 93.311 40.9071C93.311 39.4798 92.1538 38.3238 90.725 38.3238H16.5248ZM16.5248 51.2469C15.096 51.2469 13.9388 52.4029 13.9388 53.8302C13.9388 55.2575 15.096 56.4135 16.5248 56.4135H90.725C92.1538 56.4135 93.311 55.2575 93.311 53.8302C93.311 52.4029 92.1538 51.2469 90.725 51.2469H16.5248ZM16.5248 64.1635C15.096 64.1635 13.9388 65.3196 13.9388 66.7469C13.9388 68.1742 15.096 69.3302 16.5248 69.3302H90.725C92.1538 69.3302 93.311 68.1742 93.311 66.7469C93.311 65.3196 92.1538 64.1635 90.725 64.1635H16.5248ZM65.0973 114.539C66.526 114.539 67.6833 113.383 67.6833 111.955C67.6833 110.528 66.526 109.372 65.0973 109.372H16.5248C15.096 109.372 13.9388 110.528 13.9388 111.955C13.9388 113.383 15.096 114.539 16.5248 114.539H65.0973ZM25.2269 22.1779C23.7981 22.1779 22.6408 23.334 22.6408 24.7613C22.6408 26.1885 23.7981 27.3446 25.2269 27.3446H82.0229C83.4517 27.3446 84.609 26.1885 84.609 24.7613C84.609 23.334 83.4517 22.1779 82.0229 22.1779H25.2269ZM65.233 98.3927C66.6618 98.3927 67.8191 97.2367 67.8191 95.8094C67.8191 94.3821 66.6618 93.2261 65.233 93.2261H16.5248C15.096 93.2261 13.9388 94.3821 13.9388 95.8094C13.9388 97.2367 15.096 98.3927 16.5248 98.3927H65.2266H65.233ZM71.2391 118.717C70.5667 124.368 73.6377 129.199 78.8098 131.408L75.338 138.861H2.7994C1.24777 138.861 0 137.601 0 136.058V2.80292C0 1.25938 1.25423 0 2.7994 0H84.693V15.9585C84.693 19.5817 87.6411 22.5267 91.281 22.5267H107.256V68.6004C104.334 68.3163 101.328 69.1106 98.8387 70.9771C93.13 75.246 95.5932 74.3483 88.4816 74.7423C83.0638 75.0458 78.5964 78.7917 77.3551 84.0617C75.7259 90.9979 77.0448 88.7181 71.8468 93.5942C67.9031 97.2948 66.8881 103.049 69.3254 107.874C72.5451 114.229 72.086 111.645 71.2391 118.717Z" fill="#849AB9"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M136.789 97.3592C130.847 91.7921 131.643 93.1548 129.787 85.2369C129.076 82.195 126.529 80.0703 123.419 79.8959C115.286 79.4438 116.766 79.9798 110.25 75.1103C107.741 73.2373 104.431 73.2373 101.942 75.1103C95.4251 79.9863 96.8927 79.4438 88.766 79.8959C85.6434 80.0703 83.1091 82.195 82.3979 85.2369C80.5359 93.1548 81.3311 91.7921 75.3962 97.3592C73.1205 99.4969 72.5386 102.752 73.9544 105.542C77.6202 112.801 77.3486 111.251 76.3789 119.324C76.0168 122.424 77.6719 125.292 80.5424 126.519C88.029 129.722 86.82 128.708 91.2745 135.515C92.9877 138.131 96.0975 139.261 99.0844 138.357C106.881 136.006 105.304 136.006 113.107 138.357C116.094 139.261 119.21 138.131 120.917 135.515C125.378 128.708 124.163 129.715 131.649 126.519C134.52 125.292 136.175 122.424 135.8 119.324C134.895 111.761 134.643 112.646 138.237 105.542C139.653 102.752 139.071 99.4969 136.795 97.3592M106.08 125.421C95.451 125.421 86.833 116.812 86.833 106.188C86.833 95.5638 95.451 86.9548 106.08 86.9548C116.708 86.9548 125.339 95.5702 125.339 106.188C125.339 116.805 116.721 125.421 106.08 125.421ZM116.857 98.7607C117.827 99.8134 117.749 101.447 116.695 102.403L104.237 113.692C103.241 114.719 101.573 114.713 100.558 113.705L95.3863 108.539C94.3777 107.531 94.3777 105.897 95.3863 104.883C96.3949 103.869 98.037 103.876 99.052 104.883L102.485 108.313L113.217 98.5863C114.271 97.624 115.9 97.7015 116.851 98.7542M98.0823 143.788L93.033 154.645C92.8197 155.097 92.1861 155.129 91.9404 154.696L87.1562 146.488L77.7947 148.122C77.2969 148.206 76.909 147.708 77.1224 147.25L83.5487 133.455C84.1564 133.804 86.4063 137.524 86.9429 138.35C89.419 142.154 93.7054 144.169 98.0823 143.788ZM135.056 147.25C135.257 147.702 134.882 148.206 134.384 148.122L125.022 146.488L120.238 154.696C119.999 155.129 119.365 155.097 119.146 154.645L114.083 143.788C118.46 144.169 122.747 142.148 125.236 138.35C125.772 137.53 128.022 133.804 128.617 133.455L135.056 147.25Z" fill="black"/>
                </g>
                <defs><clipPath id="clip0_6023_495"><rect width="139" height="155" fill="white"/></clipPath></defs>
              </svg>
            </div>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 26, color: NAVY, letterSpacing: '-0.01em', textAlign: 'center' }}>Safety Standards</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, lineHeight: 1.55, color: '#444' }}>
                <img src="/isolation-mode.png" width={17} height={17} alt="" style={{ flexShrink: 0, marginTop: 2 }} /><span><strong>Evidence-based approaches</strong> reviewed by licensed medical providers</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, lineHeight: 1.55, color: '#444' }}>
                <img src="/isolation-mode.png" width={17} height={17} alt="" style={{ flexShrink: 0, marginTop: 2 }} /><span><strong>Clean, professional clinical environment</strong> with medical-grade protocols</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, lineHeight: 1.55, color: '#444' }}>
                <img src="/isolation-mode.png" width={17} height={17} alt="" style={{ flexShrink: 0, marginTop: 2 }} /><span><strong>Clear explanations</strong> of commonly discussed topics and considerations</span>
              </li>
            </ul>
          </div>

          {/* Patient-First Philosophy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ margin: '0 auto 8px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="155" height="155" viewBox="0 0 155 155" fill="none">
                <g clipPath="url(#clip0_6023_501)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M28.6092 137.556C31.1352 113.947 51.0942 95.5663 75.3395 95.5663C86.726 95.5663 97.1636 99.6211 105.298 106.362L103.145 108.386C99.7681 111.556 98.8978 116.509 100.985 120.648L102.719 124.081L102.261 127.9C101.803 131.739 103.465 135.394 106.489 137.562H28.6092V137.556ZM129.484 107.357C123.195 107.357 118.098 112.46 118.098 118.755C118.098 125.05 123.195 130.153 129.484 130.153C135.773 130.153 140.871 125.05 140.871 118.755C140.871 112.46 135.773 107.357 129.484 107.357ZM132.566 95.6842C137.396 99.3001 136.303 98.9005 142.323 99.2412C144.633 99.3722 146.518 100.951 147.042 103.204C148.416 109.087 147.833 108.071 152.231 112.205C153.919 113.79 154.345 116.207 153.304 118.284C150.582 123.675 150.785 122.522 151.505 128.516C151.779 130.815 150.556 132.944 148.422 133.854C142.88 136.232 143.77 135.486 140.471 140.536C139.202 142.475 136.898 143.314 134.68 142.645C128.908 140.896 130.073 140.896 124.295 142.645C122.076 143.314 119.773 142.475 118.503 140.536C115.199 135.486 116.095 136.232 110.553 133.854C108.426 132.944 107.195 130.815 107.47 128.516C108.184 122.522 108.386 123.668 105.664 118.284C104.617 116.214 105.043 113.797 106.737 112.205C111.135 108.071 110.553 109.087 111.927 103.204C112.457 100.944 114.335 99.3656 116.645 99.2412C122.665 98.9071 121.573 99.3067 126.402 95.6842C128.26 94.2955 130.708 94.2955 132.566 95.6842ZM122.888 148.109L119.806 154.731C119.734 154.888 119.583 154.987 119.413 154.993C119.236 155 119.086 154.915 118.994 154.764L115.454 148.665L108.511 149.877C108.341 149.91 108.177 149.844 108.066 149.707C107.961 149.569 107.941 149.392 108.013 149.235L112.136 140.372C114.885 144.578 117.057 148.168 122.881 148.102L122.888 148.109ZM136.08 148.109C141.905 148.168 144.077 144.578 146.826 140.379L150.948 149.242C151.02 149.399 151.001 149.576 150.896 149.713C150.791 149.851 150.628 149.917 150.458 149.884L143.521 148.672L139.981 154.771C139.896 154.921 139.739 155.006 139.562 155C139.385 154.993 139.241 154.895 139.169 154.738L136.087 148.115L136.08 148.109ZM75.3461 44.7075C88.4732 44.7075 99.1137 55.3588 99.1137 68.4993C99.1137 81.6397 88.4732 92.291 75.3461 92.291C62.2189 92.291 51.5785 81.6397 51.5785 68.4993C51.5785 55.3588 62.2189 44.7075 75.3461 44.7075Z" fill="#849AB9"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M17.9433 51.3108L21.2676 61.6279C21.3985 62.0406 21.7715 62.3092 22.2034 62.3092L33.0337 62.2895C33.4656 62.2895 33.832 62.5581 33.9695 62.9708C34.1069 63.3835 33.9629 63.8158 33.6095 64.0713L24.8341 70.4254C24.4807 70.6808 24.3433 71.1132 24.4742 71.5259L27.8378 81.8299C27.9752 82.2426 27.8378 82.675 27.4844 82.9304C27.131 83.1859 26.6795 83.1859 26.3261 82.9304L17.5769 76.5436C17.2235 76.2881 16.772 76.2881 16.4186 76.5436L7.66932 82.9304C7.32249 83.1859 6.86441 83.1859 6.51759 82.9304C6.16421 82.675 6.02679 82.2426 6.16421 81.8299L9.5278 71.5259C9.66523 71.1132 9.52126 70.6808 9.16789 70.4254L0.405536 64.0648C0.0521628 63.8093 -0.0852601 63.3769 0.0456189 62.9643C0.176498 62.5516 0.549503 62.283 0.981404 62.283L11.8116 62.3026C12.2435 62.3026 12.6165 62.0341 12.7474 61.6214L16.0718 51.3042C16.2026 50.8915 16.5691 50.6229 17.0075 50.6229C17.446 50.6229 17.8059 50.8915 17.9433 51.3042M136.867 48.0355L140.191 58.3526C140.322 58.7653 140.695 59.0339 141.127 59.0339L151.957 59.0142C152.389 59.0142 152.755 59.2828 152.893 59.6955C153.03 60.1082 152.886 60.5405 152.533 60.796L143.757 67.1501C143.404 67.4056 143.267 67.8379 143.397 68.2506L146.768 78.5546C146.898 78.9673 146.761 79.3997 146.408 79.6552C146.054 79.9106 145.603 79.9106 145.256 79.6552L136.507 73.2683C136.153 73.0129 135.702 73.0129 135.348 73.2683L126.599 79.6552C126.246 79.9106 125.794 79.9106 125.441 79.6552C125.087 79.3997 124.95 78.9673 125.087 78.5546L128.451 68.2506C128.588 67.8379 128.451 67.4056 128.091 67.1501L119.316 60.796C118.962 60.5405 118.825 60.1082 118.956 59.6955C119.093 59.2828 119.46 59.0142 119.892 59.0142L130.722 59.0339C131.154 59.0339 131.52 58.7653 131.658 58.3526L134.982 48.0355C135.113 47.6228 135.486 47.3542 135.918 47.3542C136.35 47.3542 136.716 47.6228 136.853 48.0355M77.4082 0.681261L81.7272 14.0707C81.8581 14.4833 82.2311 14.7519 82.663 14.7519L96.7194 14.7257C97.1513 14.7257 97.5178 14.9943 97.6552 15.407C97.7861 15.8197 97.6486 16.252 97.2953 16.5075L85.9088 24.7547C85.5554 25.0101 85.418 25.4425 85.5489 25.8552L89.9202 39.2249C90.0577 39.6376 89.9202 40.0699 89.5668 40.3254C89.2135 40.5809 88.762 40.5809 88.4086 40.3254L77.0548 32.0324C76.7014 31.7769 76.2499 31.7769 75.8965 32.0324L64.5428 40.3254C64.196 40.5809 63.7379 40.5809 63.3911 40.3254C63.0377 40.0699 62.9003 39.6376 63.0311 39.2249L67.4025 25.8552C67.5399 25.4425 67.4025 25.0101 67.0426 24.7547L55.6561 16.5075C55.3027 16.252 55.1653 15.8197 55.2962 15.407C55.4271 14.9943 55.8001 14.7257 56.232 14.7257L70.2884 14.7519C70.7203 14.7519 71.0933 14.4833 71.2242 14.0707L75.5432 0.681261C75.674 0.268574 76.0405 0 76.479 0C76.9174 0 77.2773 0.268574 77.4147 0.681261" fill="black"/>
                </g>
                <defs><clipPath id="clip0_6023_501"><rect width="155" height="155" fill="white"/></clipPath></defs>
              </svg>
            </div>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 26, color: NAVY, letterSpacing: '-0.01em', textAlign: 'center' }}>Patient-First Philosophy</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, lineHeight: 1.55, color: '#444' }}>
                <img src="/isolation-mode.png" width={17} height={17} alt="" style={{ flexShrink: 0, marginTop: 2 }} /><span><strong>Honest assessments</strong> - we provide recommendations only when appropriate</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, lineHeight: 1.55, color: '#444' }}>
                <img src="/isolation-mode.png" width={17} height={17} alt="" style={{ flexShrink: 0, marginTop: 2 }} /><span><strong>Personalized plans</strong> developed around your unique needs and goals</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, lineHeight: 1.55, color: '#444' }}>
                <img src="/isolation-mode.png" width={17} height={17} alt="" style={{ flexShrink: 0, marginTop: 2 }} /><span><strong>Direct communication</strong> with your doctor at every step of your care journey</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, lineHeight: 1.55, color: '#444' }}>
                <img src="/isolation-mode.png" width={17} height={17} alt="" style={{ flexShrink: 0, marginTop: 2 }} /><span>Focus on <strong>long-term hair health</strong></span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <FaqSection />

      {/* ── FOOTER FORM ──────────────────────────────────────────────────── */}
      <section style={{ background: '#2b2b2c', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 560 }}>
        {/* Map left */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img
            src="/footer-map.png"
            alt=""
            aria-hidden="true"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)' }} />
          <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '28px 32px 0' }}>
              <a
                href="https://maps.google.com/?q=400+Garden+City+Plaza,+Suite+107,+Garden+City,+NY+11530"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: WHITE,
                  color: '#1a1a1a',
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase' as const,
                  padding: '12px 22px',
                  borderRadius: 6,
                  textDecoration: 'none',
                }}
              >
                Visit Our Practice
              </a>
            </div>
            <div style={{ marginTop: 'auto', padding: '28px 32px', background: 'rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>
                <svg viewBox="0 0 18 18" fill="none" style={{ width: 18, height: 18, flexShrink: 0 }}>
                  <path d="M9 1C5.7 1 3 3.7 3 7c0 5.3 6 10 6 10s6-4.7 6-10c0-3.3-2.7-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" fill="rgba(255,255,255,.7)"/>
                </svg>
                <span>400 Garden City Plaza, Suite 107, Garden City, NY 11530</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>
                <svg viewBox="0 0 18 18" fill="none" style={{ width: 18, height: 18, flexShrink: 0 }}>
                  <path d="M2 2h4l1.5 4-2 1.2A9.8 9.8 0 009.8 11l1.2-2L15 10.5V14a1 1 0 01-1 1C7 15 2 10 2 3a1 1 0 011-1z" fill="rgba(255,255,255,.7)"/>
                </svg>
                <a href="tel:+15166135827" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontWeight: 600 }}>(516) 613-5827</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>
                <svg viewBox="0 0 18 18" fill="none" style={{ width: 18, height: 18, flexShrink: 0 }}>
                  <rect x="2" y="5" width="14" height="10" rx="1.5" stroke="rgba(255,255,255,.7)" strokeWidth="1.5"/>
                  <path d="M2 7l7 5 7-5" stroke="rgba(255,255,255,.7)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span>Call 24/7 Call Center</span>
              </div>
            </div>
          </div>
        </div>

        {/* GHL form right */}
        <div style={{ padding: '40px 44px', display: 'flex', flexDirection: 'column' }}>
          <GhlForm formId={bottomFormId} height={400} formName="Footer Form - Hair Loss" />
        </div>
      </section>

      {/* ── FOOTER BAR ───────────────────────────────────────────────────── */}
      <footer style={{ background: '#222222', padding: '18px 48px', textAlign: 'center', fontSize: 12, color: '#666', letterSpacing: '0.05em' }}>
        &copy; 2026 L.A.FUE Hair &bull;{' '}
        <a href="/privacy-policy" style={{ color: '#666', textDecoration: 'underline' }}>PRIVACY POLICY</a>
        {' '}&bull;{' '}
        <a href="/cookie-policy" style={{ color: '#666', textDecoration: 'underline' }}>Cookie Policy</a>
      </footer>
    </div>
  )
}
