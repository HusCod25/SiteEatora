import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | EatoraAI",
  description: "Cookie Policy for EatoraAI with details on essential, performance, and functionality cookies.",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-16 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-4xl space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-emerald-500/10">
        <div className="space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
            Cookie Policy
          </p>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">Cookie Policy</h1>
          <p className="text-sm text-slate-400">Last Updated: December 20, 2025</p>
        </div>

        <div className="space-y-4 text-sm leading-relaxed text-slate-200">
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white">1. Introduction</h2>
            <p>
              Welcome to EatoraAI ("we," "our," or "us"). This Cookie Policy explains what cookies are,
              how we use them on our website and web application, and what your choices are regarding
              their use.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white">2. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your computer or mobile device when you
              visit a website. They are widely used to make websites work more efficiently and to provide
              information to the owners of the site.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white">3. How We Use Cookies</h2>
            <p>We use cookies for several reasons, including:</p>
            <ul className="list-disc space-y-2 pl-6 text-slate-200">
              <li>
                <strong>Essential Cookies:</strong> These are necessary for the website and our web application to
                function properly. They enable core features such as user login, account management, and secure
                payment processing. You cannot opt out of these cookies as the application cannot function without
                them.
              </li>
              <li>
                <strong>Performance & Analytics Cookies:</strong> These help us understand how visitors interact with
                our website by collecting and reporting information anonymously. This helps us improve our user
                interface and services.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> These allow the website to remember choices you make (such as
                your language preference) to provide a more personalized experience.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white">4. Third-Party Cookies</h2>
            <p>
              In some cases, we use trusted third-party services. The following section details the third-party cookies
              you might encounter through our service:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-slate-200">
              <li>
                <strong>Payment Processing:</strong> Our application processes payments via providers such as Stripe or
                PayPal. These providers may use cookies to ensure secure transactions and prevent fraud.
              </li>
              <li>
                <strong>Analytics:</strong> We may use tools like Google Analytics to help us understand how you use the
                site and ways that we can improve your experience.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white">5. Your Cookie Choices</h2>
            <p>
              Most web browsers automatically accept cookies, but you can usually modify your browser settings to
              decline cookies if you prefer. However, blocking Essential Cookies may prevent you from logging into your
              account or making payments within our application.
            </p>
            <p>
              To manage cookies, look at the "Settings" or "Privacy" section of your specific browser (Chrome, Safari,
              Firefox, Edge, etc.).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white">6. Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies
              we use or for other operational, legal, or regulatory reasons. Please re-visit this Cookie Policy regularly
              to stay informed about our use of cookies and related technologies.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white">7. Contact Us</h2>
            <p>If you have any questions about our use of cookies, please contact us at:</p>
            <p>Email: <a href="mailto:eatora.app@gmail.com" className="text-emerald-200 underline-offset-4 hover:underline">eatora.app@gmail.com</a></p>
            <p>Website: <a href="https://eatora.tech/" className="text-emerald-200 underline-offset-4 hover:underline">https://eatora.tech/</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}
