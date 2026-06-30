import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | L.A. FUE Hair NYC',
  robots: 'noindex, nofollow',
}

const DARK_NAV = '#2e2e2f'
const NAVY = '#2a548b'
const WHITE = '#ffffff'

export default function PrivacyPolicyPage() {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', color: '#1a1a1a', background: WHITE }}>
      {/* Header */}
      <header style={{ background: DARK_NAV, padding: '20px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img
          src="/logo-lafue.png"
          alt="L.A. FUE Hair NYC"
          style={{ height: 48, width: 'auto' }}
        />
        <a
          href="tel:5169285500"
          style={{ color: WHITE, textDecoration: 'none', fontSize: 16, fontWeight: 600 }}
        >
          (516) 928-5500
        </a>
      </header>

      {/* Banner */}
      <div style={{ background: NAVY, padding: '48px 48px', textAlign: 'center' }}>
        <h1 style={{ color: WHITE, fontSize: 36, fontWeight: 700, margin: 0 }}>Privacy Policy</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', margin: '12px 0 0', fontSize: 14 }}>Last Updated: October 1, 2025</p>
      </div>

      {/* Content */}
      <main style={{ maxWidth: 860, margin: '0 auto', padding: '64px 48px' }}>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 32 }}>
          Thank you for choosing to be part of our community at L.A.FUE Hair. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at <a href="mailto:info@lafuehairnyc.com" style={{ color: NAVY }}>info@lafuehairnyc.com</a>.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 32 }}>
          When you visit our website and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we describe our privacy policy and seek to explain in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it. If there are any terms in this privacy policy that you do not agree with, please discontinue use of our websites and services.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 48 }}>
          This privacy policy applies to all information collected through our website at <strong>https://start.lafuehairnyc.com</strong> and any related services, sales, marketing, or events.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid #e8e8e8', marginBottom: 48 }} />

        {/* TOC */}
        <h2 style={{ fontSize: 20, fontWeight: 700, color: DARK_NAV, marginBottom: 16 }}>Table of Contents</h2>
        <ol style={{ color: NAVY, fontSize: 15, lineHeight: 2, paddingLeft: 24, marginBottom: 48 }}>
          {[
            'What Information Do We Collect?',
            'How Do We Use Your Information?',
            'Will Your Information Be Shared With Anyone?',
            'Do We Use Cookies and Other Tracking Technologies?',
            'How Long Do We Keep Your Information?',
            'How Do We Keep Your Information Safe?',
            'Do We Collect Information from Minors?',
            'What Are Your Privacy Rights?',
            'Do California Residents Have Specific Privacy Rights?',
            'Do We Make Updates to This Policy?',
            'How Can You Contact Us About This Policy?',
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>

        <hr style={{ border: 'none', borderTop: '1px solid #e8e8e8', marginBottom: 48 }} />

        <Section title="1. What Information Do We Collect?">
          <Sub title="Personal information you disclose to us">
            <p>We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the Websites, or otherwise contacting us.</p>
            <p><strong>Name and Contact Data.</strong> We may collect your first and last name, email address, postal address, phone number, and other similar contact data.</p>
            <p><strong>Credentials.</strong> When needed, we collect passwords, password hints, and similar security information used for authentication and account access.</p>
            <p><strong>Payment Data.</strong> We collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number) and the security code associated with your payment instrument. All payment data is stored by the payment processor.</p>
            <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
          </Sub>
          <Sub title="Information collected from other sources">
            <p>We may obtain information about you from other sources, such as public databases, joint marketing partners, and other third parties. Examples include social media profile information, marketing leads, and search results.</p>
          </Sub>
        </Section>

        <Section title="2. How Do We Use Your Information?">
          <p>We use personal information collected via our Websites for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
          <p><strong>Fulfill and manage your orders.</strong> We may use your information to fulfill and manage your orders, payments, returns, and exchanges made through the Websites.</p>
          <p><strong>For other Business Purposes.</strong> We may use your information for data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns, and to evaluate and improve our Websites, products, services, marketing, and your experience.</p>
        </Section>

        <Section title="3. Will Your Information Be Shared With Anyone?">
          <p>We only share and disclose your information in the following situations:</p>
          <ul style={{ color: '#444', lineHeight: 1.9, paddingLeft: 24 }}>
            <li><strong>Compliance with Laws.</strong> We may disclose your information where legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
            <li><strong>Vital Interests and Legal Rights.</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, or threats to the safety of any person.</li>
            <li><strong>Vendors and Third-Party Service Providers.</strong> We may share your data with third party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work.</li>
            <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
            <li><strong>With your Consent.</strong> We may disclose your personal information for any other purpose with your consent.</li>
          </ul>
        </Section>

        <Section title="4. Do We Use Cookies and Other Tracking Technologies?">
          <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our <a href="/cookie-policy" style={{ color: NAVY }}>Cookie Policy</a>.</p>
        </Section>

        <Section title="5. How Long Do We Keep Your Information?">
          <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).</p>
          <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it, or securely store it isolated from any further processing until deletion is possible.</p>
        </Section>

        <Section title="6. How Do We Keep Your Information Safe?">
          <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please remember that we cannot guarantee that the Internet itself is 100 percent secure. Transmission of personal information to and from our Websites is at your own risk. You should only access the services within a secure environment.</p>
        </Section>

        <Section title="7. Do We Collect Information from Minors?">
          <p>We do not knowingly solicit data from or market to children under 18 years of age. By using the Websites, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Websites.</p>
          <p>If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we have collected from children under age 18, please contact us at <a href="mailto:info@lafuehairnyc.com" style={{ color: NAVY }}>info@lafuehairnyc.com</a>.</p>
        </Section>

        <Section title="8. What Are Your Privacy Rights?">
          <p>If you are a resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You have the right to request access to your data, correction of your data, and for your data to be removed. In the event of a data breach, you will be notified within 72 hours of detection.</p>
          <p><strong>Cookies and similar technologies:</strong> Most web browsers are set to accept cookies by default. You can usually choose to set your browser to remove and reject cookies. To opt out of interest-based advertising, visit <a href="http://www.aboutads.info/choices/" target="_blank" rel="noreferrer" style={{ color: NAVY }}>www.aboutads.info/choices/</a>. For more details, see our <a href="/cookie-policy" style={{ color: NAVY }}>Cookie Policy</a>.</p>
        </Section>

        <Section title="9. Do California Residents Have Specific Privacy Rights?">
          <p>California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</p>
          <p>If you are under 18 years of age, reside in California, and have a registered account with the Websites, you have the right to request removal of unwanted data that you publicly post on the Websites.</p>
        </Section>

        <Section title="10. Do We Make Updates to This Policy?">
          <p>We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date and will be effective as soon as it is accessible. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.</p>
        </Section>

        <Section title="11. How Can You Contact Us About This Policy?">
          <p>If you have questions or comments about this policy, you may contact us:</p>
          <address style={{ fontStyle: 'normal', color: '#444', lineHeight: 1.8, marginTop: 16 }}>
            <strong>L.A.FUE Hair</strong><br />
            400 Garden City Plaza, Suite 107<br />
            Garden City, NY 11530<br />
            <a href="tel:5169285500" style={{ color: NAVY }}>(516) 928-5500</a><br />
            <a href="mailto:info@lafuehairnyc.com" style={{ color: NAVY }}>info@lafuehairnyc.com</a>
          </address>
        </Section>

        <hr style={{ border: 'none', borderTop: '1px solid #e8e8e8', margin: '48px 0' }} />

        <div style={{ background: '#f7f9fc', borderLeft: `4px solid ${NAVY}`, padding: '24px 28px', borderRadius: 4 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: DARK_NAV, margin: '0 0 8px' }}>Personal Data Management</h3>
          <p style={{ fontSize: 15, color: '#444', lineHeight: 1.7, margin: 0 }}>
            According to this Privacy Policy, you agree to share your personal data with our service. However, you still have the right to update, transfer, or delete it from us at any time. If you need further management for your data, please contact us at <a href="mailto:info@lafuehairnyc.com" style={{ color: NAVY }}>info@lafuehairnyc.com</a>.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ background: DARK_NAV, padding: '40px 48px', textAlign: 'center' }}>
        <img src="/logo-lafue.png" alt="L.A. FUE Hair NYC" style={{ height: 40, width: 'auto', marginBottom: 16 }} />
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, margin: '0 0 8px' }}>
          400 Garden City Plaza, Suite 107, Garden City, NY 11530
        </p>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, margin: 0 }}>
          <a href="/cookie-policy" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginRight: 16 }}>Cookie Policy</a>
          <a href="/privacy-policy" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Privacy Policy</a>
        </p>
      </footer>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 48 }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: '#2e2e2f', marginBottom: 16, paddingBottom: 10, borderBottom: '2px solid #e8e8e8' }}>
        {title}
      </h2>
      <div style={{ fontSize: 15, lineHeight: 1.85, color: '#444', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {children}
      </div>
    </section>
  )
}

function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 style={{ fontSize: 16, fontWeight: 600, color: '#2e2e2f', marginBottom: 10, marginTop: 4 }}>{title}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>{children}</div>
    </div>
  )
}
