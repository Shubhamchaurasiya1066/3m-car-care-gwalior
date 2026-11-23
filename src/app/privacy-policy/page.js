
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | 3M Car Care Studio Gwalior",
  description:
    "Privacy Policy for 3M Car Care Studio Gwalior, operated by Sudha Motors.",
};

const LAST_UPDATED = "23 November 2026";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#08090b] px-5 pb-20 pt-32 text-white">
      <div className="mx-auto max-w-4xl">

        <Link
          href="/"
          className="text-sm font-semibold text-red-400 hover:text-red-300"
        >
          ← Back to Home
        </Link>

        <p className="mt-10 text-xs font-bold uppercase tracking-[0.25em] text-red-500">
          Legal Information
        </p>

        <h1 className="mt-3 text-4xl font-black uppercase md:text-6xl">
          Privacy <span className="text-red-500">Policy</span>
        </h1>

        <p className="mt-5 text-sm text-neutral-400">
          Last Updated: {LAST_UPDATED}
        </p>

        {/* Business Identity */}
        <section className="mt-10 border border-red-500/25 bg-red-950/15 p-6">
          <h2 className="text-xl font-bold text-white">
            Business Identity
          </h2>

          <p className="mt-4 leading-8 text-neutral-300">
            This website represents{" "}
            <strong className="text-white">
              3M Car Care Studio Gwalior
            </strong>
            , which is operated by{" "}
            <strong className="text-white">
              Sudha Motors
            </strong>
            .
          </p>

          <div className="mt-5 space-y-2 text-sm leading-7 text-neutral-300">
            <p>
              <strong>Registered Legal Business Name:</strong>{" "}
              Sudha Motors
            </p>

            <p>
              <strong>Studio / Trading Name:</strong>{" "}
              3M Car Care Studio Gwalior
            </p>

            <p>
              <strong>Business Address:</strong>{" "}
              Ground Floor, Chetakpuri,
              Near Barista Cafe, Gwalior,
              Madhya Pradesh - 474009, India
            </p>

            <p>
              <strong>Contact Number:</strong>{" "}
              <a
                href="tel:+919109173926"
                className="text-red-400 hover:underline"
              >
                +91 9109173926
              </a>
            </p>
          </div>
        </section>

        {/* Privacy Content */}
        <div className="mt-12 space-y-10 text-neutral-300">

          <section>
            <h2 className="text-2xl font-bold text-white">
              1. Information We Collect
            </h2>

            <p className="mt-4 leading-8">
              When you contact us or request an appointment,
              we may collect information such as your name,
              mobile number, vehicle details, preferred
              service, appointment date, and any information
              you voluntarily provide in your enquiry.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              2. How We Use Your Information
            </h2>

            <p className="mt-4 leading-8">
              We use customer information to respond to
              enquiries, assist with appointments, provide
              requested services, communicate service-related
              updates, and improve customer support.
            </p>

            <p className="mt-4 leading-8">
              Where you have separately agreed to receive
              promotional WhatsApp messages, we may also
              contact you about relevant offers and
              service promotions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              3. WhatsApp Communications
            </h2>

            <p className="mt-4 leading-8">
              Customers may choose to contact 3M Car Care
              Studio Gwalior, operated by Sudha Motors,
              through WhatsApp.
            </p>

            <p className="mt-4 leading-8">
              Appointment-related communication and
              promotional WhatsApp communication are
              treated separately. Promotional messages
              are intended only for customers who have
              provided the required consent.
            </p>

            <p className="mt-4 leading-8">
              You can withdraw consent for promotional
              WhatsApp messages by replying STOP to
              a promotional message or contacting us
              directly at +91 9109173926.
              We will process opt-out requests and stop
              promotional messages to that number.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              4. Sharing of Information
            </h2>

            <p className="mt-4 leading-8">
              We may share information with service
              providers where necessary to respond to
              enquiries, support appointment communication,
              or deliver requested services.
            </p>

            <p className="mt-4 leading-8">
              If WhatsApp communication is used,
              relevant information may be processed
              through WhatsApp and Meta services
              in accordance with their applicable
              terms and privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              5. Data Security and Retention
            </h2>

            <p className="mt-4 leading-8">
              Sudha Motors aims to use reasonable
              administrative and technical measures
              to protect customer information.
              Information is retained only as long
              as reasonably necessary for the
              purposes described in this policy
              or as required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              6. Your Choices
            </h2>

            <p className="mt-4 leading-8">
              You may contact us to request access,
              correction, or deletion of your personal
              information, subject to applicable legal
              requirements and legitimate retention needs.
            </p>

            <p className="mt-4 leading-8">
              You may also withdraw consent to
              promotional communications at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              7. External Websites
            </h2>

            <p className="mt-4 leading-8">
              Our website may contain links to third-party
              websites, including Instagram, WhatsApp,
              and the 3M India store listing.
              Those websites have their own terms
              and privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              8. Changes to This Policy
            </h2>

            <p className="mt-4 leading-8">
              Sudha Motors may update this Privacy Policy
              to reflect changes in our services,
              data practices, or applicable requirements.
              Updates will be published on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              9. Contact Us
            </h2>

            <p className="mt-4 leading-8">
              For questions about this Privacy Policy
              or how your information is handled,
              please contact:
            </p>

            <div className="mt-5 border border-white/10 bg-white/5 p-5 text-sm leading-8">
              <p className="font-bold text-white">
                Sudha Motors
              </p>

              <p>3M Car Care Studio Gwalior</p>

              <p>
                Ground Floor, Chetakpuri,
                Near Barista Cafe,
                Gwalior, Madhya Pradesh - 474009
              </p>

              <a
                href="tel:+919109173926"
                className="text-red-400 hover:underline"
              >
                +91 9109173926
              </a>
            </div>
          </section>
        </div>

        <div className="mt-14 border-t border-white/10 pt-7">
          <Link
            href="/"
            className="font-semibold text-red-400 hover:text-red-300"
          >
            ← Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
