
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Sudha Motors",
  description:
    "Terms and Conditions for 3M Car Care Studio Gwalior.",
};

const sections = [
  {
    title: "1. Website Use",
    text: "This website provides information about automotive care services offered by 3M Car Care Studio Gwalior, operated by Sudha Motors. Visitors must use the website lawfully and provide accurate information when submitting enquiries.",
  },
  {
    title: "2. Appointments",
    text: "Submitting an appointment request does not automatically confirm a booking. Appointments are subject to availability and confirmation by our team.",
  },
  {
    title: "3. Services and Pricing",
    text: "Service recommendations, availability, pricing and estimated completion times may depend on vehicle type, condition and the selected service. Final details should be confirmed before work begins.",
  },
  {
    title: "4. Cancellations and Changes",
    text: "Customers should contact the studio to request appointment cancellations or rescheduling. Any applicable charges or refund conditions must be communicated before payment or service confirmation.",
  },
  {
    title: "5. Customer Responsibilities",
    text: "Customers should provide accurate vehicle and contact details, disclose relevant vehicle issues and remove valuables before handing over a vehicle for service.",
  },
  {
    title: "6. WhatsApp Communication",
    text: "Customers may voluntarily opt in to WhatsApp appointment updates or promotional messages. Promotional consent is optional and may be withdrawn by contacting us or following the opt-out instructions provided.",
  },
  {
    title: "7. Third-Party Services",
    text: "The website may link to third-party services, including Instagram and WhatsApp. Their respective terms and privacy policies may apply.",
  },
  {
    title: "8. Changes to These Terms",
    text: "These Terms and Conditions may be updated to reflect changes in our services or applicable requirements. Updated terms will be published on this page.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#08090b] px-5 py-32 text-white">
      <article className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-red-500">
          Legal Information
        </p>

        <h1 className="mb-8 text-4xl font-black md:text-6xl">
          Terms & <span className="text-red-500">Conditions</span>
        </h1>

        <p className="mb-10 leading-8 text-neutral-300">
          These Terms and Conditions describe the use of
          the 3M Car Care Studio Gwalior website and its
          services, operated by Sudha Motors.
        </p>

        <div className="space-y-9">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-3 text-xl font-bold">
                {section.title}
              </h2>
              <p className="leading-8 text-neutral-300">
                {section.text}
              </p>
            </section>
          ))}

          <section>
            <h2 className="mb-3 text-xl font-bold">
              9. Contact
            </h2>
            <p className="leading-8 text-neutral-300">
              Sudha Motors, Chetakpuri, Lashkar,
              Gwalior, Madhya Pradesh, India.
              <br />
              Phone: +91 9109173926
            </p>
          </section>
        </div>

        <Link
          href="/"
          className="mt-12 inline-block font-bold text-red-500"
        >
          ← Back to Home
        </Link>
      </article>
    </main>
  );
}
