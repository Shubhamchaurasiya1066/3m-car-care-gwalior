
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-[#08090b]">
      <div className="container-custom grid items-center gap-14 lg:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden md:min-h-[560px]">
          <Image
            src="/images/studio.jpg"
            alt="Car care studio"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 border-l-4 border-red-600 bg-black/75 p-5">
            <p className="text-xl font-black uppercase">Gwalior</p>
            <p className="text-sm text-neutral-300">
              Chetakpuri, Madhya Pradesh
            </p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[.25em] text-red-500">
            About Our Studio
          </p>

          <h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">
            More Than
            <br />
            <span className="text-red-500">Just A Wash.</span>
          </h2>

          <p className="mt-7 leading-8 text-neutral-400">
            At 3M Car Care Studio Gwalior, we focus on
            helping customers maintain the appearance
            and condition of their vehicles through
            professional car care services.
          </p>

          <div className="mt-9 space-y-6">
            <div className="flex gap-4">
              <ShieldCheck className="shrink-0 text-red-500" size={26} />
              <div>
                <h3 className="font-bold">Vehicle Protection</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-400">
                  Explore protection options suited to your car.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Sparkles className="shrink-0 text-red-500" size={26} />
              <div>
                <h3 className="font-bold">Detail-Focused Care</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-400">
                  Give your vehicle the attention it deserves.
                </p>
              </div>
            </div>
          </div>

          <Link
            href="#contact"
            className="mt-10 inline-flex items-center gap-3 border-b-2 border-red-600 pb-3 font-bold"
          >
            Contact Our Studio <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
