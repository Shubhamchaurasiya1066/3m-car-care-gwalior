
import Link from "next/link";

export const metadata = {
  title: "Disclaimer | Sudha Motors",
  description:
    "Website and service disclaimer for 3M Car Care Studio Gwalior.",
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#08090b] px-5 py-32 text-white">
      <article className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-red-500">
          Legal Information
        </p>

        <h1 className="mb-10 text-4xl font-black md:text-6xl">
          <span className="text-red-500">Disclaimer</span>
        </h1>

        <div className="space-y-9 leading-8 text-neutral-300">
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              General Information
            </h2>
            <p>
              Information on this website is provided
              for general informational purposes.
              Service details and availability may
              change and should be confirmed directly
              with our team.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              Service Results
            </h2>
            <p>
              Actual results from paint protection,
              ceramic coating, detailing and other
              automotive services depend on vehicle
              condition, product selection, maintenance
              and other relevant factors. No specific
              result is guaranteed unless expressly
              agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              Images and Media
            </h2>
            <p>
              Some images, videos or design visuals on
              this website may be illustrative or
              digitally generated. They may not depict
              actual customer vehicles or the physical
              studio. Actual services and facilities
              should be verified directly with us.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              Third-Party Links
            </h2>
            <p>
              Links to external websites or messaging
              platforms are provided for convenience.
              Those services operate under their own
              terms and privacy policies.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">
              Business Information
            </h2>
            <p>
              3M Car Care Studio Gwalior is operated
              by Sudha Motors.
              <br />
              Chetakpuri, Lashkar, Gwalior,
              Madhya Pradesh, India.
              <br />
              Contact: +91 9109173926
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
