
import { ArrowUpRight, MapPin, Phone } from "lucide-react";

const phone = "9109173926";

export default function BookingCTA() {
  return (
    <section id="contact" className="section-padding bg-[#09090b]">
      <div className="container-custom">
        <div className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-[#251013] via-[#151518] to-[#09090b] px-6 py-16 text-center md:px-16 md:py-24">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-600/10 blur-3xl" />

          <div className="relative z-10">
            <p className="mb-5 text-sm font-bold uppercase tracking-[.25em] text-red-500">
              Give Your Car The Best
            </p>

            <h2 className="mx-auto max-w-4xl text-4xl font-black uppercase leading-tight md:text-6xl">
              Ready For The
              <br />
              <span className="text-red-500">Ultimate Shine?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-7 text-neutral-400">
              Connect with our Gwalior studio to discuss
              your car care requirements.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/91${phone}?text=${encodeURIComponent("Hello, I would like to enquire about car care services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-red-600 px-7 py-4 font-bold transition hover:bg-red-700"
              >
                Enquire on WhatsApp <ArrowUpRight size={18} />
              </a>

              <a
                href={`tel:+91${phone}`}
                className="inline-flex items-center gap-3 border border-white/40 px-7 py-4 font-bold hover:bg-white hover:text-black"
              >
                <Phone size={18} /> Call Studio
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center gap-2 text-sm text-neutral-400">
              <MapPin size={17} className="text-red-500" />
              Chetakpuri, Gwalior, Madhya Pradesh
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
