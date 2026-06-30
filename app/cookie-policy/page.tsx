import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | L.A. FUE Hair NYC',
  robots: 'noindex, nofollow',
}

const DARK_NAV = '#2e2e2f'
const NAVY = '#2a548b'
const WHITE = '#ffffff'

export default function CookiePolicyPage() {
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
        <h1 style={{ color: WHITE, fontSize: 36, fontWeight: 700, margin: 0 }}>Cookie Policy</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', margin: '12px 0 0', fontSize: 14 }}>Last Updated: September 12, 2025</p>
      </div>

      {/* Content */}
      <main style={{ maxWidth: 860, margin: '0 auto', padding: '64px 48px' }}>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 48 }}>
          This Cookie Policy explains how L.A.FUE Hair uses cookies and similar technologies to recognize visitors to <strong>https://start.lafuehairnyc.com</strong>. It describes what these technologies are, why they are used, and your rights to control them. In some cases, cookies may collect personal information, or information that becomes personal when combined with other data.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid #e8e8e8', marginBottom: 48 }} />

        <Section title="What Are Cookies?">
          <p>Cookies are small data files placed on your computer or mobile device when you visit a website. Website owners use cookies to make their sites function, operate efficiently, and provide reporting information.</p>
          <p>First-party cookies are set by the website you are visiting. Third-party cookies come from other parties and enable features like advertising, interactive content, and analytics. Third parties can recognize your device across multiple websites.</p>
        </Section>

        <Section title="Why Do We Use Cookies?">
          <p>Essential or strictly necessary cookies are required for the technical operation of the website. Additional cookies help track user interests and enhance experience. Third parties serve cookies through the website for advertising and analytics purposes.</p>

          <SubSection title="Analytics and Customization Cookies">
            <p>These collect aggregate information to understand website usage, measure marketing campaign effectiveness, and customize the site for users.</p>
            <InfoRow label="Served by" value="Google Analytics" />
            <InfoRow label="To refuse" value="Follow the instructions under 'How Can I Control Cookies?' below." />
          </SubSection>

          <SubSection title="Advertising Cookies">
            <p>These make advertising more relevant by preventing repeated ads, ensuring proper display, and selecting interest-based ads.</p>
            <InfoRow label="Served by" value="Google" />
            <InfoRow label="To refuse" value="Follow the instructions under 'How Can I Control Cookies?' below." />
          </SubSection>
        </Section>

        <Section title="What About Other Tracking Technologies, Like Web Beacons?">
          <p>Beyond cookies, the site may use web beacons (also called tracking pixels or clear gifs). These tiny graphics contain unique identifiers enabling recognition of website visits or email opens. They monitor traffic patterns between pages, deliver cookies, track advertisement sources, improve site performance, and measure email marketing success. Many rely on cookies to function properly.</p>
        </Section>

        <Section title="Do You Use Flash Cookies or Local Shared Objects?">
          <p>The website may use Flash Cookies (Local Shared Objects) for collecting usage information, fraud prevention, and site operations.</p>
          <p>To manage Flash Cookies, adjust your Flash Player settings through the Website Storage Settings Panel or Global Storage Settings Panel. You can delete existing Flash Cookies, prevent new ones from being set, and block non-operator cookies (Flash 8 and above).</p>
          <p>Restricting Flash Cookies may reduce the functionality of Flash applications on the website.</p>
        </Section>

        <Section title="Do You Serve Targeted Advertising?">
          <p>Third parties serve cookies to display targeted advertising through the website. These companies use visit information across multiple websites to provide relevant ads and measure advertising effectiveness using cookies or web beacons. This process does not identify you by name or contact details unless you have provided them directly.</p>
        </Section>

        <Section title="How Can I Control Cookies?">
          <p>You can decide whether to accept or reject cookies through your web browser controls. Rejecting cookies may restrict access to some functionality and areas of the site. Cookie refusal methods vary by browser, so check your browser's help menu for instructions.</p>
          <p>Most advertising networks also offer opt-out options. For more information, visit:</p>
          <ul style={{ color: '#444', lineHeight: 2, paddingLeft: 24 }}>
            <li><a href="http://www.aboutads.info/choices/" target="_blank" rel="noreferrer" style={{ color: NAVY }}>www.aboutads.info/choices/</a></li>
            <li><a href="http://www.youronlinechoices.com" target="_blank" rel="noreferrer" style={{ color: NAVY }}>www.youronlinechoices.com</a></li>
          </ul>
        </Section>

        <Section title="How Often Will You Update This Cookie Policy?">
          <p>The policy may be updated to reflect changes in the cookies we use, or for operational, legal, or regulatory reasons. We encourage you to review it regularly for the most current information.</p>
        </Section>

        <Section title="Where Can I Get Further Information?">
          <p>For information about our broader data practices, see our <a href="/privacy-policy" style={{ color: NAVY }}>Privacy Policy</a>.</p>
          <p>For questions about this Cookie Policy, contact us:</p>
          <address style={{ fontStyle: 'normal', color: '#444', lineHeight: 1.8, marginTop: 12 }}>
            <strong>L.A.FUE Hair</strong><br />
            400 Garden City Plaza, Suite 107<br />
            Garden City, NY 11530<br />
            <a href="tel:5169285500" style={{ color: NAVY }}>(516) 928-5500</a><br />
            <a href="mailto:info@lafuehairnyc.com" style={{ color: NAVY }}>info@lafuehairnyc.com</a>
          </address>
        </Section>
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

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: '#f7f9fc', padding: '20px 24px', borderRadius: 6, border: '1px solid #e4eaf2' }}>
      <h3 style={{ fontSize: 15, fontWeight: 600, color: '#2e2e2f', margin: '0 0 10px' }}>{title}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>{children}</div>
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <p style={{ margin: 0, fontSize: 14 }}>
      <span style={{ fontWeight: 600, color: '#2e2e2f' }}>{label}:</span>{' '}
      <span style={{ color: '#555' }}>{value}</span>
    </p>
  )
}
