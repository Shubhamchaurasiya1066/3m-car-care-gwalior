
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Sudha Motors",
  description:
    "Privacy Policy for 3M Car Care Studio Gwalior, operated by Sudha Motors.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#08090b] px-5 py-32 text-white">
      <article className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-red-500">
          Legal Information
        </p>

        <h1 className="mb-8 text-4xl font-black md:text-6xl">
          Privacy <span className="text-red-500">Policy</span>
        </h1>

        <p className="mb-10 leading-8 text-neutral-300">
          This Privacy Policy explains how Sudha Motors,
          operating 3M Car Care Studio Gwalior, collects,
          uses and handles personal information when
          customers visit our website or contact us.
        </p>

        <div className="space-y-9 text-neutral-300">
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              1. Information We Collect
            </h2>
            <p className="leading-8">
              When you submit an enquiry or appointment
              request, we may collect your name, mobile
              number, email address, vehicle details,
              requested services, preferred appointment
              date and any information you voluntarily
              provide.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              2. How We Use Information
            </h2>
            <p className="leading-8">
              We use customer information to respond to
              enquiries, coordinate appointments, provide
              requested services, communicate service
              updates and maintain relevant business
              records. Promotional communications are
              sent only where appropriate consent has
              been obtained.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              3. WhatsApp Communication and Consent
            </h2>
            <p className="leading-8">
              Customers may choose to receive appointment
              or service updates through WhatsApp.
              Promotional WhatsApp messages require a
              separate voluntary opt-in. Consent is not
              assumed simply because a customer provides
              a phone number or submits an enquiry.
            </p>
            <p className="mt-3 leading-8">
              Customers may withdraw their consent by
              replying STOP to a WhatsApp message or
              contacting us directly. We will respect
              applicable opt-out requests.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              4. Information Sharing
            </h2>
            <p className="leading-8">
              Information may be shared with service
              providers involved in operating our website,
              managing appointments or delivering
              communications, including WhatsApp/Meta
              where that service is used. We may also
              disclose information where legally required.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              5. Data Security and Retention
            </h2>
            <p className="leading-8">
              We aim to use reasonable safeguards to
              protect customer information. Information
              should be retained only as long as needed
              for legitimate business purposes or
              applicable legal requirements. No online
              transmission or storage method can be
              guaranteed completely secure.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              6. Your Choices
            </h2>
            <p className="leading-8">
              You may contact us to request information
              about your personal data, ask for correction
              or deletion where applicable, or withdraw
              marketing consent.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              7. Contact Us
            </h2>
            <p className="leading-8">
              Sudha Motors — 3M Car Care Studio Gwalior
              <br />
              Chetakpuri, Lashkar, Gwalior,
              Madhya Pradesh, India
              <br />
              Phone:{" "}
              <a href="tel:+919109173926" className="text-red-400">
                +91 9109173926
              </a>
            </p>
          </section>
        </div>

        <Link
          href="/"
          className="mt-12 inline-block text-sm font-bold text-red-500 hover:text-red-400"
        >
          ← Back to Home
        </Link>
      </article>
    </main>
  );
}
