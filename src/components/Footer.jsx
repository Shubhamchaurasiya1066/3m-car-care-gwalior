
import Link from "next/link";
import {
  MapPin,
  Phone,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const OFFICIAL_3M_URL =
  "https://3mcarcare.3mindia.co.in/3m-car-care-studio-car-detailing-ceramic-coating-and-ppf-chetakpuri-sudha-motors-car-restoration-service-chetakpuri-gwalior-435036/Home";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08090b] text-white">
      <div className="container-custom py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Business Identity */}
          <div className="lg:col-span-2">
            <p className="text-2xl font-black uppercase tracking-tight">
              3M Car Care Studio{" "}
              <span className="text-red-500">
                Gwalior
              </span>
            </p>

            {/* Legal Business Name */}
            <div className="mt-4 inline-flex items-center gap-2 border border-red-500/30 bg-red-600/10 px-4 py-2">
              <ShieldCheck
                size={17}
                className="text-red-500"
              />

              <span className="text-sm font-semibold text-neutral-200">
                Operated by{" "}
                <strong className="text-red-400">
                  Sudha Motors
                </strong>
              </span>
            </div>

            <p className="mt-5 max-w-lg text-sm leading-7 text-neutral-400">
              3M Car Care Studio Gwalior is operated by
              Sudha Motors, the registered legal business
              responsible for this studio. We provide
              professional car detailing, paint protection,
              and automotive care services in Gwalior,
              Madhya Pradesh.
            </p>

            <p className="mt-4 text-xs leading-6 text-neutral-500">
              Legal Business Name:{" "}
              <strong className="text-neutral-300">
                Sudha Motors
              </strong>
              <br />
              Studio Name: 3M Car Care Studio Gwalior
            </p>

            {/* Official 3M Listing */}
            <a
              href={OFFICIAL_3M_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-red-400 transition hover:text-red-300"
            >
              View Our 3M India Store Listing
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-white">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-sm text-neutral-400">
              <Link
                href="/#home"
                className="transition hover:text-red-400"
              >
                Home
              </Link>

              <Link
                href="/#about"
                className="transition hover:text-red-400"
              >
                About Us
              </Link>

              <Link
                href="/#services"
                className="transition hover:text-red-400"
              >
                Our Services
              </Link>

              <Link
                href="/booking"
                className="transition hover:text-red-400"
              >
                Book Appointment
              </Link>

              <Link
                href="/#contact"
                className="transition hover:text-red-400"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-white">
              Contact Us
            </h3>

            <div className="mt-6 space-y-5 text-sm text-neutral-400">

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={19}
                  className="mt-1 shrink-0 text-red-500"
                />

                <p className="leading-6">
                  Ground Floor, Chetakpuri,
                  <br />
                  Near Barista Cafe,
                  <br />
                  Gwalior, Madhya Pradesh - 474009
                </p>
              </div>

              {/* Phone */}
              <a
                href="tel:+919109173926"
                className="flex items-center gap-3 transition hover:text-red-400"
              >
                <Phone
                  size={19}
                  className="text-red-500"
                />
                +91 9109173926
              </a>

              {/* Instagram - Fixed Import */}
              <a
                href="https://www.instagram.com/3mcarcaregwalior"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-red-400"
              >
                <FaInstagram
                  size={19}
                  className="text-red-500"
                />
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-14 flex flex-wrap gap-x-7 gap-y-4 border-t border-white/10 pt-8 text-sm text-neutral-400">
          <Link
            href="/privacy-policy"
            className="transition hover:text-red-400"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms-and-conditions"
            className="transition hover:text-red-400"
          >
            Terms & Conditions
          </Link>

          <Link
            href="/disclaimer"
            className="transition hover:text-red-400"
          >
            Disclaimer
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-neutral-500 md:flex-row">
          <p>
            © 2026 Sudha Motors.
            All rights reserved.
          </p>

          <p>
            3M Car Care Studio Gwalior
            {" "}• Operated by Sudha Motors
          </p>
        </div>

      </div>
    </footer>
  );
}
