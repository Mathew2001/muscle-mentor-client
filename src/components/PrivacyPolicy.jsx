import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container py-5 text-white" style={{ maxWidth: "900px" }}>
      <h1 className="mb-3">Privacy Policy – Muscle Mentor</h1>
      <p>Last updated: November 2, 2025</p>

      <p>
        This Privacy Policy explains how <strong>Muscle Mentor</strong> (“we”, “us”, “our”)
        collects, uses, and protects your information when you use our website,
        workout platform, and related services (the “Service”).
      </p>

      {/* 1. Info we collect */}
      <section className="mt-4">
        <h2 className="h4">1. Information We Collect</h2>
        <p>We collect information in two ways:</p>
        <ul>
          <li>
            <strong>Information you provide to us:</strong> when you create an
            account, contact us, submit a form, or leave a review. This can
            include your name, email address, phone number (optional), and any
            message or fitness details you choose to share (goals, height, weight).
          </li>
          <li>
            <strong>Technical / usage data:</strong> basic information about how
            you use the site (pages visited, time, device type). If analytics are
            enabled, this may be collected automatically.
          </li>
        </ul>
      </section>

      {/* 2. How we use it */}
      <section className="mt-4">
        <h2 className="h4">2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide and improve the Muscle Mentor service and workouts</li>
          <li>Respond to your messages, support requests, or coaching inquiries</li>
          <li>Personalize your training / nutrition experience</li>
          <li>Send you service-related notifications (account, password, updates)</li>
          <li>Protect our website from abuse, fraud, or security issues</li>
        </ul>
      </section>

      {/* 3. Legal basis (optional) */}
      <section className="mt-4">
        <h2 className="h4">3. Legal Basis (for EU/UK users)</h2>
        <p>
          We process your personal data based on one or more of the following:
        </p>
        <ul>
          <li>Your consent (e.g. contact form, newsletter)</li>
          <li>Performance of a contract (providing your workout program)</li>
          <li>Legitimate interest (security, improving the service)</li>
        </ul>
      </section>

      {/* 4. How we share */}
      <section className="mt-4">
        <h2 className="h4">4. Sharing of Information</h2>
        <p>
          We do <strong>not</strong> sell your personal data.
          We may share data only with:
        </p>
        <ul>
          <li>
            <strong>Service providers</strong> (e.g. hosting, email delivery,
            payment processors) – only as needed to run Muscle Mentor.
          </li>
          <li>
            <strong>Legal authorities</strong> if required by law or to protect
            our rights.
          </li>
        </ul>
      </section>

      {/* 5. Cookies / analytics */}
      <section className="mt-4">
        <h2 className="h4">5. Cookies and Analytics</h2>
        <p>
          Our website may use cookies or similar technologies to improve
          performance and user experience. If you connect Google Analytics or any
          tracking in the future, you should update this section to explain what
          is collected and why.
        </p>
      </section>

      {/* 6. Data retention */}
      <section className="mt-4">
        <h2 className="h4">6. Data Retention</h2>
        <p>
          We keep your information only for as long as needed to provide the
          service or as required by law. You can ask us to delete your account or
          personal data at any time (see Contact below).
        </p>
      </section>

      {/* 7. Security */}
      <section className="mt-4">
        <h2 className="h4">7. Security</h2>
        <p>
          We use reasonable technical and organizational measures to protect your
          data. However, no method of transmission over the internet is 100% secure.
        </p>
      </section>

      {/* 8. Your rights */}
      <section className="mt-4">
        <h2 className="h4">8. Your Rights</h2>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request corrections to inaccurate data</li>
          <li>Request deletion of your data (“right to be forgotten”)</li>
          <li>Object to or limit certain processing</li>
          <li>Withdraw consent (for marketing, if used)</li>
        </ul>
        <p>
          To exercise these rights, contact us using the details below.
        </p>
      </section>

      {/* 9. Children */}
      <section className="mt-4">
        <h2 className="h4">9. Children’s Privacy</h2>
        <p>
          Our service is intended for users aged 16+ (or the applicable age in
          your country). We do not knowingly collect personal data from children.
        </p>
      </section>

      {/* 10. Changes */}
      <section className="mt-4">
        <h2 className="h4">10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we will
          update the “Last updated” date at the top of this page.
        </p>
      </section>

      {/* 11. Contact */}
      <section className="mt-4 mb-5">
        <h2 className="h4">11. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or how we handle
          your data, you can contact us at:
        </p>
        <p className="mb-0">
          <strong>Email:</strong> support@muslementor.com
        </p>
        <p className="mb-0">
          <strong>Subject:</strong> “Privacy – Muscle Mentor”
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
