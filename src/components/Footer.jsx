
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const instagram =
  "https://www.instagram.com/3mcarcaregwalior";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="container-custom grid gap-10 py-14 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-black">
            <span className="text-red-500">3M</span> CAR CARE
          </h2>
          <p className="mt-2 text-sm font-semibold">
            Studio Gwalior
          </p>
          <p className="mt-4 text-sm text-neutral-400">
            Operated by <strong className="text-white">Sudha Motors</strong>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-7 text-neutral-400">
            Premium car detailing, paint protection
            and automotive care services in Gwalior.
          </p>
        </div>

        <div>
          <h3 className="mb-5 font-bold">Quick Links</h3>
          <nav className="flex flex-col gap-3 text-sm text-neutral-400">
            <Link href="/" className="hover:text-red-500">Home</Link>
            <Link href="/services" className="hover:text-red-500">Services</Link>
            <Link href="/gallery" className="hover:text-red-500">Gallery</Link>
            <Link href="/booking" className="hover:text-red-500">Book Appointment</Link>
          </nav>
        </div>

        <div>
          <h3 className="mb-5 font-bold">Contact Us</h3>
          <div className="flex flex-col gap-4 text-sm text-neutral-400">
            <p className="flex items-center gap-3">
              <MapPin size={18} className="text-red-500" />
              Chetakpuri, Lashkar, Gwalior, MP
            </p>
            <a
              href="tel:+919109173926"
              className="flex items-center gap-3 hover:text-red-500"
            >
              <Phone size={18} className="text-red-500" />
              +91 9109173926
            </a>
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-red-500"
            >
              <FaInstagram size={19} className="text-red-500" />
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom flex flex-col items-center justify-between gap-5 py-6 text-center text-xs text-neutral-400 md:flex-row">
          <p>
            © 2026 3M Car Care Studio Gwalior.
            Operated by Sudha Motors.
          </p>

          <nav
            aria-label="Legal links"
            className="flex flex-wrap justify-center gap-5"
          >
            <Link href="/privacy-policy" className="hover:text-red-500">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-red-500">
              Terms & Conditions
            </Link>
            <Link href="/disclaimer" className="hover:text-red-500">
              Disclaimer
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
