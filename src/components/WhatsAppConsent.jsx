
"use client";

import Link from "next/link";

export default function WhatsAppConsent({
  updatesConsent,
  marketingConsent,
  onUpdatesChange,
  onMarketingChange,
}) {
  return (
    <fieldset className="space-y-4 border border-white/10 bg-white/5 p-5">
      <legend className="px-2 text-sm font-bold text-white">
        WhatsApp Communication Preferences
      </legend>

      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          name="whatsappUpdatesConsent"
          checked={updatesConsent}
          onChange={(e) => onUpdatesChange(e.target.checked)}
          className="mt-1 h-4 w-4 accent-red-600"
        />
        <span className="text-sm leading-6 text-neutral-300">
          I agree to receive appointment confirmations,
          reminders and service updates from Sudha Motors
          (3M Car Care Studio Gwalior) via WhatsApp.
        </span>
      </label>

      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          name="whatsappMarketingConsent"
          checked={marketingConsent}
          onChange={(e) => onMarketingChange(e.target.checked)}
          className="mt-1 h-4 w-4 accent-red-600"
        />
        <span className="text-sm leading-6 text-neutral-300">
          I voluntarily agree to receive promotional
          offers, discounts and marketing updates from
          Sudha Motors via WhatsApp.
        </span>
      </label>

      <p className="text-xs leading-6 text-neutral-400">
        Both options are optional. You can withdraw
        consent by replying STOP or contacting us.
        Read our{" "}
        <Link
          href="/privacy-policy"
          className="text-red-400 underline"
        >
          Privacy Policy
        </Link>
        {" "}and{" "}
        <Link
          href="/terms-and-conditions"
          className="text-red-400 underline"
        >
          Terms & Conditions
        </Link>.
      </p>
    </fieldset>
  );
}
