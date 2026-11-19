
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CalendarDays,
  CarFront,
  Phone,
  Send,
} from "lucide-react";

const phone = "9109173926";

const services = [
  "Paint Protection Film",
  "Ceramic Coating",
  "Complete Car Detailing",
  "Car Wash",
  "Other Service",
];

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    carModel: "",
    service: "",
    date: "",
    message: "",
    whatsappUpdatesConsent: false,
    whatsappMarketingConsent: false,
    privacyAccepted: false,
  });

  const updateField = (name, value) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = [
      "Hello Sudha Motors / 3M Car Care Studio Gwalior,",
      "",
      "I would like to request an appointment.",
      "",
      `Name: ${form.name}`,
      `Mobile: ${form.phone}`,
      `Car Model: ${form.carModel}`,
      `Service: ${form.service}`,
      `Preferred Date: ${form.date}`,
      `Additional Message: ${form.message || "None"}`,
      "",
      `WhatsApp Appointment Updates Consent: ${
        form.whatsappUpdatesConsent ? "Yes" : "No"
      }`,
      `WhatsApp Marketing Consent: ${
        form.whatsappMarketingConsent ? "Yes" : "No"
      }`,
      "",
      "Please confirm appointment availability.",
    ].join("\n");

    const url = `https://wa.me/91${phone}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 border border-white/10 bg-[#15161a] p-6 md:p-10"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          Request an Appointment
        </h2>

        <p className="mt-3 text-sm leading-7 text-neutral-400">
          Fill in your details and send your appointment
          enquiry directly to our team on WhatsApp.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="customerName"
            className="mb-2 block text-sm text-neutral-300"
          >
            Full Name *
          </label>

          <input
            id="customerName"
            type="text"
            required
            maxLength={100}
            value={form.name}
            onChange={(e) =>
              updateField("name", e.target.value)
            }
            placeholder="Enter your full name"
            className="w-full border border-white/15 bg-black/40 px-4 py-3 text-white outline-none focus:border-red-500"
          />
        </div>

        <div>
          <label
            htmlFor="customerPhone"
            className="mb-2 block text-sm text-neutral-300"
          >
            Mobile Number *
          </label>

          <input
            id="customerPhone"
            type="tel"
            required
            inputMode="numeric"
            pattern="[6-9][0-9]{9}"
            maxLength={10}
            value={form.phone}
            onChange={(e) =>
              updateField(
                "phone",
                e.target.value.replace(/\D/g, "")
              )
            }
            placeholder="10-digit mobile number"
            className="w-full border border-white/15 bg-black/40 px-4 py-3 text-white outline-none focus:border-red-500"
          />
        </div>

        <div>
          <label
            htmlFor="carModel"
            className="mb-2 block text-sm text-neutral-300"
          >
            Car Model *
          </label>

          <input
            id="carModel"
            type="text"
            required
            maxLength={100}
            value={form.carModel}
            onChange={(e) =>
              updateField("carModel", e.target.value)
            }
            placeholder="Example: Hyundai Creta"
            className="w-full border border-white/15 bg-black/40 px-4 py-3 text-white outline-none focus:border-red-500"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-sm text-neutral-300"
          >
            Select Service *
          </label>

          <select
            id="service"
            required
            value={form.service}
            onChange={(e) =>
              updateField("service", e.target.value)
            }
            className="w-full border border-white/15 bg-[#15161a] px-4 py-3 text-white outline-none focus:border-red-500"
          >
            <option value="">Choose a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="date"
            className="mb-2 block text-sm text-neutral-300"
          >
            Preferred Appointment Date *
          </label>

          <input
            id="date"
            type="date"
            required
            value={form.date}
            onChange={(e) =>
              updateField("date", e.target.value)
            }
            className="w-full border border-white/15 bg-[#15161a] px-4 py-3 text-white outline-none focus:border-red-500"
          />
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block text-sm text-neutral-300"
          >
            Additional Message
          </label>

          <textarea
            id="message"
            rows={4}
            maxLength={1000}
            value={form.message}
            onChange={(e) =>
              updateField("message", e.target.value)
            }
            placeholder="Any specific requirements?"
            className="w-full resize-none border border-white/15 bg-black/40 px-4 py-3 text-white outline-none focus:border-red-500"
          />
        </div>
      </div>

      {/* WhatsApp Opt-in */}
      <div className="space-y-5 border-t border-white/10 pt-7">
        <h3 className="text-lg font-bold text-white">
          WhatsApp Communication Preferences
        </h3>

        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={form.whatsappUpdatesConsent}
            onChange={(e) =>
              updateField(
                "whatsappUpdatesConsent",
                e.target.checked
              )
            }
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
            checked={form.whatsappMarketingConsent}
            onChange={(e) =>
              updateField(
                "whatsappMarketingConsent",
                e.target.checked
              )
            }
            className="mt-1 h-4 w-4 accent-red-600"
          />

          <span className="text-sm leading-6 text-neutral-300">
            I voluntarily agree to receive promotional
            offers, discounts and marketing messages
            from Sudha Motors via WhatsApp.
          </span>
        </label>

        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            required
            checked={form.privacyAccepted}
            onChange={(e) =>
              updateField(
                "privacyAccepted",
                e.target.checked
              )
            }
            className="mt-1 h-4 w-4 accent-red-600"
          />

          <span className="text-sm leading-6 text-neutral-300">
            I have read the{" "}
            <Link
              href="/privacy-policy"
              target="_blank"
              className="text-red-400 underline"
            >
              Privacy Policy
            </Link>
            {" "}and{" "}
            <Link
              href="/terms-and-conditions"
              target="_blank"
              className="text-red-400 underline"
            >
              Terms & Conditions
            </Link>
            , and understand how my enquiry information
            will be used. *
          </span>
        </label>

        <p className="text-xs leading-6 text-neutral-500">
          WhatsApp messaging consent is optional.
          You can withdraw consent by replying STOP
          or contacting the studio.
        </p>
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-3 bg-red-600 px-7 py-4 font-bold text-white transition hover:bg-red-700"
      >
        <Send size={19} />
        Continue to WhatsApp
      </button>

      <p className="text-center text-xs text-neutral-500">
        Your request is not submitted until you send
        the prepared message in WhatsApp.
        Appointment confirmation is subject to availability.
      </p>
    </form>
  );
}
