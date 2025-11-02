import React from "react";

const AccessibilityStatement = () => {
  return (
    <div className="container py-5 text-white" style={{ maxWidth: "900px" }}>
      <h1 className="mb-3">Accessibility Statement – Muscle Mentor</h1>
      <p>Last updated: November 2, 2025</p>

      <p>
        Muscle Mentor is committed to making our website and workout platform accessible to the widest
        possible audience, regardless of ability, device, or technology. We are continuously working to
        improve the user experience for everyone and to apply the relevant accessibility standards.
      </p>

      {/* 1. Our goal */}
      <section className="mt-4">
        <h2 className="h4">1. Accessibility Standards</h2>
        <p>
          Our aim is to align with the principles of the{" "}
          <strong>Web Content Accessibility Guidelines (WCAG) 2.1</strong>, at the
          <strong> AA level</strong>, as much as possible. These guidelines explain how to make web
          content more accessible for people with disabilities, including those using assistive
          technologies such as screen readers.
        </p>
      </section>

      {/* 2. What we did */}
      <section className="mt-4">
        <h2 className="h4">2. Accessibility Features Implemented</h2>
        <ul>
          <li>Semantic HTML structure for improved screen reader support</li>
          <li>Logical heading order (H1 → H2 → H3)</li>
          <li>Descriptive link text (for example: “Privacy Policy”, not “Click here”)</li>
          <li>Forms with labels and clear error messages (where applicable)</li>
          <li>Color contrast checked for main text and buttons</li>
          <li>Keyboard navigation for main menus and buttons (where supported by browser)</li>
        </ul>
        <p className="mt-2">
          If your current version of the site does <strong>not</strong> yet include all the features above,
          it may be in active development.
        </p>
      </section>

      {/* 3. What is still being improved */}
      <section className="mt-4">
        <h2 className="h4">3. What We Are Improving</h2>
        <p>We are currently working on:</p>
        <ul>
          <li>Improving keyboard focus styles on all interactive elements</li>
          <li>Adding alt text to all images (especially workout images)</li>
          <li>Ensuring popups / modals (workout details) are accessible and trap focus</li>
          <li>Testing with screen readers (NVDA, VoiceOver)</li>
        </ul>
      </section>

      {/* 4. Using your own browser tools */}
      <section className="mt-4">
        <h2 className="h4">4. Text Size and Zoom</h2>
        <p>
          You can increase text size or zoom the page using your browser:
        </p>
        <ul>
          <li><strong>Windows:</strong> Ctrl + + to zoom in, Ctrl + - to zoom out</li>
          <li><strong>Mac:</strong> ⌘ + + to zoom in, ⌘ + - to zoom out</li>
          <li><strong>Mobile:</strong> Use pinch-to-zoom or system accessibility settings</li>
        </ul>
        <p>
          At this stage we do <strong>not</strong> provide an on-page “mini accessibility panel”
          (like contrast / font-size buttons), but the site is designed to work with built-in browser
          and OS accessibility tools.
        </p>
      </section>

      {/* 5. Third-party content */}
      <section className="mt-4">
        <h2 className="h4">5. Third-Party Content</h2>
        <p>
          Some features (videos, embedded content, maps, payment forms) may be provided by third
          parties. We cannot fully guarantee the accessibility of content that is not under our control,
          but we do our best to choose accessible services.
        </p>
      </section>

      {/* 6. Feedback */}
      <section className="mt-4 mb-5">
        <h2 className="h4">6. Feedback and Contact</h2>
        <p>
          We are happy to receive feedback about accessibility issues on Muscle Mentor.
          If you encountered a problem, a broken link, low contrast, or a button you can’t reach with
          the keyboard – tell us and we will try to fix it.
        </p>
        <p className="mb-0">
          <strong>Email:</strong> support@muslementor.com
        </p>
        <p className="mb-0">
          <strong>Subject:</strong> “Accessibility – Muscle Mentor”
        </p>
        <p className="mt-2 mb-0">
          Please describe: the page URL, what you tried to do, and which device / browser you used.
        </p>
      </section>
    </div>
  );
};

export default AccessibilityStatement;
