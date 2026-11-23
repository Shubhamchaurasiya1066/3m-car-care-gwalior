
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  Building2,
  MapPin,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-[#08090b] text-white"
    >
      <div className="container-custom grid items-center gap-14 lg:grid-cols-2">

        {/* Studio Image */}
        <div className="relative min-h-[420px] overflow-hidden md:min-h-[560px]">
          <Image
            src="/images/studio.jpg"
            alt="3M Car Care Studio Gwalior, operated by Sudha Motors"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

          {/* Location Card */}
          <div className="absolute bottom-6 left-6 right-6 border-l-4 border-red-600 bg-black/80 p-5 backdrop-blur-md sm:right-auto">
            <div className="flex items-center gap-2">
              <MapPin
                size={20}
                className="text-red-500"
              />
              <p className="text-xl font-black uppercase">
                Gwalior
              </p>
            </div>

            <p className="mt-2 text-sm text-neutral-300">
              Chetakpuri, Lashkar, Madhya Pradesh
            </p>
          </div>
        </div>

        {/* About Content */}
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[.25em] text-red-500">
            About Our Studio
          </p>

          <h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">
            More Than
            <br />
            <span className="text-red-500">
              Just A Wash.
            </span>
          </h2>

          {/* Existing Description */}
          <p className="mt-7 leading-8 text-neutral-400">
            At 3M Car Care Studio Gwalior, we focus on
            helping customers maintain the appearance
            and condition of their vehicles through
            professional car care services.
          </p>

          {/* Business Identity - Meta Compliance */}
          <div className="mt-8 border border-red-500/25 bg-gradient-to-r from-red-950/30 to-[#151518] p-6">

            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-red-600/15">
                <Building2
                  size={23}
                  className="text-red-500"
                />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">
                  Our Business Identity
                </p>

                <h3 className="mt-1 text-lg font-black text-white">
                  3M Car Care Studio Gwalior
                </h3>
              </div>
            </div>

            <p className="text-sm font-semibold text-white">
              Operated by{" "}
              <span className="font-extrabold text-red-400">
                Sudha Motors
              </span>
            </p>

            <p className="mt-4 text-sm leading-7 text-neutral-300">
              3M Car Care Studio Gwalior is operated by
              Sudha Motors. Sudha Motors is the legal
              business entity responsible for the
              operations and customer services of
              3M Car Care Studio Gwalior, located at
              Chetakpuri, Lashkar, Gwalior,
              Madhya Pradesh, India.
            </p>
          </div>

          {/* Service Highlights */}
          <div className="mt-9 space-y-6">
            <div className="flex gap-4">
              <ShieldCheck
                className="shrink-0 text-red-500"
                size={26}
              />

              <div>
                <h3 className="font-bold">
                  Vehicle Protection
                </h3>

                <p className="mt-2 text-sm leading-6 text-neutral-400">
                  Explore protection options suited to your car.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Sparkles
                className="shrink-0 text-red-500"
                size={26}
              />

              <div>
                <h3 className="font-bold">
                  Detail-Focused Care
                </h3>

                <p className="mt-2 text-sm leading-6 text-neutral-400">
                  Give your vehicle the attention it deserves.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="#contact"
            className="mt-10 inline-flex items-center gap-3 border-b-2 border-red-600 pb-3 font-bold transition hover:text-red-500"
          >
            Contact Our Studio
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
