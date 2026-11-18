
import Link from "next/link";

export const metadata = {
  title: "Book Appointment | 3M Car Care Studio Gwalior",
  description:
    "Book an appointment for car detailing, ceramic coating, paint protection film and premium car care services in Gwalior.",
};

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#08090b] px-5 pb-20 pt-32 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-red-500">
            Book Your Visit
          </p>

          <h1 className="text-4xl font-black uppercase md:text-6xl">
            Premium Car Care
            <br />
            <span className="text-red-500">
              Starts Here.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-neutral-400">
            Give your vehicle the care it deserves.
            Contact 3M Car Care Studio Gwalior to
            schedule your appointment.
          </p>
        </div>

        <div className="border border-white/10 bg-[#15161a] p-8 text-center md:p-12">
          <h2 className="text-2xl font-bold">
            Schedule Your Appointment
          </h2>

          <p className="mt-4 text-neutral-400">
            Speak with our team to discuss services,
            availability and appointment details.
          </p>

          <a
            href="tel:+919109173926"
            className="mt-8 inline-flex items-center justify-center bg-red-600 px-8 py-4 font-bold text-white transition hover:bg-red-700"
          >
            Call to Book
          </a>

          <div className="mt-6">
            <Link
              href="/#services"
              className="text-sm text-neutral-400 transition hover:text-red-500"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
