
import Link from "next/link";
import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Book Appointment | 3M Car Care Studio Gwalior",
  description:
    "Request a car detailing, ceramic coating or paint protection appointment at 3M Car Care Studio Gwalior, operated by Sudha Motors.",
};

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#08090b] px-5 pb-20 pt-32 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
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

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-neutral-400">
            Request your preferred service and appointment
            date at 3M Car Care Studio Gwalior,
            operated by Sudha Motors.
          </p>
        </div>

        <BookingForm />

        <div className="mt-8 text-center">
          <p className="mb-3 text-sm text-neutral-400">
            Prefer speaking directly with our team?
          </p>

          <a
            href="tel:+919109173926"
            className="font-bold text-red-500 hover:text-red-400"
          >
            Call +91 9109173926
          </a>

          <div className="mt-5">
            <Link
              href="/services"
              className="text-sm text-neutral-400 hover:text-white"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
