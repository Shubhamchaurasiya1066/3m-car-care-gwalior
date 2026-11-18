
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const instagram =
    "https://www.instagram.com/3mcarcaregwalior";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black py-12">
            <div className="container-custom grid gap-10 md:grid-cols-3">

                {/* Company Information */}
                <div>
                    <h2 className="text-2xl font-black">
                        <span className="text-red-500">3M</span> CAR CARE
                    </h2>

                    <p className="mt-2 text-xs uppercase tracking-[.25em] text-neutral-400">
                        Studio Gwalior
                    </p>

                    <p className="mt-5 max-w-xs text-sm leading-7 text-neutral-400">
                        Professional car care, detailing and protection
                        services in Gwalior.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="mb-5 font-bold text-white">
                        Quick Links
                    </h3>

                    <div className="flex flex-col gap-3 text-sm text-neutral-400">
                        <Link href="#home" className="hover:text-red-500">
                            Home
                        </Link>

                        <Link href="#services" className="hover:text-red-500">
                            Services
                        </Link>

                        <Link href="#about" className="hover:text-red-500">
                            About
                        </Link>

                        <Link href="#gallery" className="hover:text-red-500">
                            Gallery
                        </Link>

                        <Link href="#contact" className="hover:text-red-500">
                            Contact
                        </Link>
                    </div>
                </div>

                {/* Contact Information */}
                <div>
                    <h3 className="mb-5 font-bold text-white">
                        Get In Touch
                    </h3>

                    <div className="space-y-4 text-sm text-neutral-400">

                        <p className="flex items-center gap-3">
                            <MapPin size={18} className="text-red-500" />
                            Chetakpuri, Gwalior
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
                            <FaInstagram size={20} className="text-red-500" />
                            Instagram
                        </a>

                    </div>
                </div>
            </div>


            {/* Copyright */}
            <div className="container-custom mt-12 border-t border-white/10 pt-6 text-center text-xs text-neutral-500">
                © 2026 3M Car Care Studio Gwalior. All rights reserved.
            </div>

        </footer>
    );
}
