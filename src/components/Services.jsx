
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  CarFront,
} from "lucide-react";

const services = [
  {
    title: "Paint Protection Film",
    category: "EXTERIOR PROTECTION",
    image: "/images/ppf.jpg",
    icon: ShieldCheck,
    number: "01",
    description:
      "Protect your vehicle's paint from everyday wear with premium paint protection film solutions.",
  },
  {
    title: "Ceramic Coating",
    category: "PAINT ENHANCEMENT",
    image: "/images/ceramic.jpg",
    icon: Sparkles,
    number: "02",
    description:
      "Enhance gloss and make routine exterior maintenance easier with professional ceramic coating.",
  },
  {
    title: "Complete Car Detailing",
    category: "PREMIUM DETAILING",
    image: "/images/detailing.jpg",
    icon: CarFront,
    number: "03",
    description:
      "Refresh your vehicle with comprehensive interior and exterior detailing services.",
  },
];

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0d0e11] py-20 md:py-28"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-red-600/5 blur-[120px]"
      />

      <div className="container-custom relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={
            reduceMotion ? false : { opacity: 0, y: 40 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-red-600" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">
              Our Premium Services
            </p>
          </div>

          <h2 className="text-4xl font-black uppercase leading-tight tracking-tight text-white md:text-6xl">
            Premium Care.
            <br />
            <span className="text-neutral-500">
              Every Detail.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-400">
            Discover professional automotive care designed
            to enhance, maintain and protect your vehicle.
            Experience premium car detailing in Gwalior.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 45 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: reduceMotion ? 0 : index * 0.12,
                }}
                className="group relative overflow-hidden border border-white/10 bg-[#15161a] transition-colors duration-300 hover:border-red-600/50"
              >
                {/* Service Image */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} - 3M Car Care Studio Gwalior`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#15161a] via-transparent to-black/20" />

                  {/* Number */}
                  <span className="absolute left-5 top-5 border border-white/20 bg-black/70 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                    {service.number}
                  </span>

                  {/* Icon */}
                  <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center bg-red-600 text-white">
                    <Icon size={23} />
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-500">
                    {service.category}
                  </p>

                  <h3 className="mt-4 text-2xl font-bold text-white transition-colors group-hover:text-red-400">
                    {service.title}
                  </h3>

                  <p className="mt-4 min-h-24 text-sm leading-7 text-neutral-400">
                    {service.description}
                  </p>

                  <div className="mt-7 border-t border-white/10 pt-6">
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:text-red-500"
                    >
                      Enquire Now
                      <ArrowUpRight
                        size={19}
                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>

                {/* Bottom Red Line */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-red-600 transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
