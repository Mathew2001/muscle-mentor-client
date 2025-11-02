import React from "react";

const Terms = () => {
  return (
    <div className="container py-5 text-white">
      <h1 className="mb-4">Terms of Use – MuscleMentor</h1>
      <p>
        Last updated: {new Date().toLocaleDateString()}
      </p>
      <p>
        Welcome to <strong>MuscleMentor</strong> (the “Service”). By accessing
        or using our website, programs, workouts, or any content we provide,
        you agree to these Terms of Use. If you do not agree, please do not use
        the Service.
      </p>

      <h2 className="mt-4 h4">1. Purpose of the Service</h2>
      <p>
        MuscleMentor provides fitness-related content, including workout plans,
        training programs, tips, and general wellness information. The content
        is for informational and educational purposes only and is not a
        substitute for professional medical advice.
      </p>

      <h2 className="mt-4 h4">2. Not Medical Advice</h2>
      <p>
        Always consult your physician or other qualified health provider before
        starting a new workout program, especially if you have a medical
        condition, are pregnant, have an injury, or take medication. You are
        solely responsible for your own health and safety.
      </p>

      <h2 className="mt-4 h4">3. Your Responsibilities</h2>
      <ul>
        <li>Use the workouts according to your level and abilities.</li>
        <li>Stop immediately if you feel pain, dizziness, or discomfort.</li>
        <li>
          Make sure you have a safe environment for training (space, equipment,
          footwear).
        </li>
        <li>
          Do not share your account (if applicable) with other users without our
          permission.
        </li>
      </ul>

      <h2 className="mt-4 h4">4. Accounts & Access</h2>
      <p>
        If the Service allows you to create an account, you must provide
        accurate information and keep your login details secure. We may suspend
        or terminate access if we detect misuse, spam, or violation of these
        Terms.
      </p>

      <h2 className="mt-4 h4">5. Payments (If/When Applicable)</h2>
      <p>
        Some parts of the Service may be paid (for example: premium programs,
        coaching, downloads). Prices and payment terms will be presented
        clearly. All payments are final unless otherwise stated.
      </p>

      <h2 className="mt-4 h4">6. Intellectual Property</h2>
      <p>
        All content on the site, including workouts, programs, text, images,
        logos, and design, is owned by MuscleMentor or licensed to us. You may
        not copy, resell, publish, or distribute our content without written
        permission.
      </p>

      <h2 className="mt-4 h4">7. User Content (Reviews / Comments)</h2>
      <p>
        If you submit a review, comment, or progress report, you grant us a
        non-exclusive right to display it on the site/app for marketing or
        community purposes. Do not post offensive, illegal, or copyrighted
        content.
      </p>

      <h2 className="mt-4 h4">8. Third-Party Links & Tools</h2>
      <p>
        The Service may contain links to third-party websites or tools (e.g.
        payment, video hosting, chat). We are not responsible for the content
        or practices of those services.
      </p>

      <h2 className="mt-4 h4">9. Limitation of Liability</h2>
      <p>
        Training and physical activity involve risk. MuscleMentor, its owners,
        and its team will not be liable for any injury, loss, or damage arising
        from the use of the Service. You use the Service at your own risk.
      </p>

      <h2 className="mt-4 h4">10. Changes to the Service or Terms</h2>
      <p>
        We may update or modify these Terms from time to time. When we do, we
        will update the “Last updated” date above. Continued use of the Service
        after changes means you accept the new Terms.
      </p>

      <h2 className="mt-4 h4">11. Contact</h2>
      <p>
        If you have any questions about these Terms, you can contact us at:{" "}
        <a href="mailto:support@muscementor.fit">support@muscementor.fit</a> or
        by phone at 052-4421044.
      </p>

      <p className="mt-5">
        *This is a general terms template for a fitness/training website. If
        you are charging users, operating in multiple countries, or collecting
        health data, consider having a lawyer review this.
      </p>
    </div>
  );
};

export default Terms;
