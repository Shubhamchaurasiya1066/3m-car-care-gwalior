
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDown,
  Play,
  ShieldCheck,
  Sparkles,
  BadgeCheck,
} from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#08090b] pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-banner.png')",
        }}
        aria-hidden="true"
      />

      {/* Background Video */}
      {!reduceMotion && !videoFailed && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-banner.png"
          onError={() => setVideoFailed(true)}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      )}

      {/* Overlays */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/25"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08090b] via-transparent to-black/30"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-[140px]"
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="container-custom relative z-10 py-28 md:py-36">
        <motion.div
          initial={
            reduceMotion ? false : { opacity: 0, y: 40 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-red-600" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-red-400 sm:tracking-[0.3em]">
              Premium Automotive Care • Gwalior
            </span>
          </div>

          <h1 className="text-5xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
            Your Car.
            <br />
            Our <span className="text-red-500">Passion.</span>
            <br />
            Pure Perfection.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-neutral-300 md:text-lg">
            Elevate your driving experience with
            professional car detailing, paint protection,
            and premium automotive care at
            3M Car Care Studio Gwalior.
          </p>

          {/* Studio Identity */}
          <div className="mt-8 max-w-xl border border-white/15 border-l-4 border-l-red-600 bg-black/55 p-5 backdrop-blur-md sm:p-6">
            <div className="flex items-start gap-3">
              <BadgeCheck
                size={24}
                className="mt-1 shrink-0 text-red-500"
              />

              <div>
                <p className="text-base font-black uppercase tracking-wide text-white sm:text-lg">
                  3M Car Care Studio Gwalior
                </p>

                <p className="mt-2 text-sm font-medium text-neutral-200">
                  Operated by{" "}
                  <span className="font-extrabold text-red-400">
                    Sudha Motors
                  </span>
                </p>

                <p className="mt-2 text-xs leading-6 text-neutral-400">
                  Ground Floor, Chetakpuri, Near Barista
                  Cafe, Gwalior, Madhya Pradesh – 474009
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/booking"
              className="group inline-flex items-center justify-center gap-3 bg-red-600 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-red-700 hover:shadow-[0_0_35px_rgba(220,38,38,0.35)]"
            >
              Book an Appointment
              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-3 border border-white/40 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
            >
              Explore Services
              <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* Highlights */}
          <div className="mt-14 flex flex-wrap items-center gap-6 border-t border-white/15 pt-7 text-sm text-neutral-300 md:gap-10">
            <div className="flex items-center gap-3">
              <ShieldCheck size={21} className="text-red-500" />
              <span>Paint Protection</span>
            </div>

            <div className="flex items-center gap-3">
              <Sparkles size={21} className="text-red-500" />
              <span>Premium Detailing</span>
            </div>

            <div className="flex items-center gap-3">
              <Play size={21} className="text-red-500" />
              <span>Car Care Studio</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <Link
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-white/70 transition hover:text-red-500"
      >
        <motion.div
          animate={reduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={25} />
        </motion.div>
      </Link>
    </section>
  );
}
