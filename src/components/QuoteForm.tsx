"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { SERVICES, CONTACT } from "@/data/siteData";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[\d\s\-\+\(\)]+$/, "Invalid phone number format"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please describe your project (at least 10 characters)"),
  contactMethod: z.enum(["phone", "email", "either"]),
  // Honeypot field — must remain empty
  website: z.string().max(0, "").optional(),
});

type FormData = z.infer<typeof schema>;

interface QuoteFormProps {
  preselectedService?: string;
  compact?: boolean;
}

export default function QuoteForm({ preselectedService, compact = false }: QuoteFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      service: preselectedService || "",
      contactMethod: "either",
    },
  });

  const onSubmit = async (data: FormData) => {
    // Honeypot check
    if (data.website) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      // Use EmailJS to send form — configure with your EmailJS account
      // For now, we simulate a successful send and provide mailto fallback
      const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const emailJsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const emailJsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (emailJsServiceId && emailJsTemplateId && emailJsPublicKey) {
        const emailjs = await import("@emailjs/browser");
        await emailjs.send(
          emailJsServiceId,
          emailJsTemplateId,
          {
            from_name: data.name,
            from_email: data.email,
            from_phone: data.phone,
            service_type: data.service,
            message: data.message,
            preferred_contact: data.contactMethod,
            to_email: CONTACT.email,
          },
          emailJsPublicKey
        );
      } else {
        // Fallback: open mailto with prefilled content
        const subject = encodeURIComponent(`Quote Request: ${data.service} — ${data.name}`);
        const body = encodeURIComponent(
          `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nService: ${data.service}\nPreferred Contact: ${data.contactMethod}\n\nProject Details:\n${data.message}`
        );
        window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please call us directly or try again.");
    }
  };

  if (status === "success") {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem 2rem",
          textAlign: "center",
          gap: "1rem",
        }}
      >
        <CheckCircle size={56} color="var(--success)" strokeWidth={1.5} />
        <h3 style={{ color: "var(--navy)", marginTop: "0.5rem" }}>Quote Request Sent!</h3>
        <p style={{ color: "var(--gray-text)", maxWidth: "380px" }}>
          Thank you! We&apos;ll get back to you within 24 hours. For faster service, call us at{" "}
          <a href={`tel:${CONTACT.phone}`} style={{ color: "var(--blue)", fontWeight: 600 }}>
            {CONTACT.phoneDisplay}
          </a>
          .
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn btn-secondary"
          style={{ marginTop: "0.5rem" }}
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Honeypot */}
      <input
        type="text"
        {...register("website")}
        aria-hidden="true"
        tabIndex={-1}
        style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0 }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: compact ? "1fr" : "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {/* Name */}
        <div className="form-group">
          <label htmlFor="quote-name" className="form-label">
            Full Name <span style={{ color: "#ef4444" }}>*</span>
          </label>
          <input
            id="quote-name"
            type="text"
            placeholder="John Smith"
            className={`form-input ${errors.name ? "error" : ""}`}
            autoComplete="name"
            {...register("name")}
          />
          {errors.name && <span className="form-error">{errors.name.message}</span>}
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="quote-phone" className="form-label">
            Phone Number <span style={{ color: "#ef4444" }}>*</span>
          </label>
          <input
            id="quote-phone"
            type="tel"
            placeholder="(760) 555-0100"
            className={`form-input ${errors.phone ? "error" : ""}`}
            autoComplete="tel"
            {...register("phone")}
          />
          {errors.phone && <span className="form-error">{errors.phone.message}</span>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="quote-email" className="form-label">
            Email Address <span style={{ color: "#ef4444" }}>*</span>
          </label>
          <input
            id="quote-email"
            type="email"
            placeholder="john@example.com"
            className={`form-input ${errors.email ? "error" : ""}`}
            autoComplete="email"
            {...register("email")}
          />
          {errors.email && <span className="form-error">{errors.email.message}</span>}
        </div>

        {/* Service */}
        <div className="form-group">
          <label htmlFor="quote-service" className="form-label">
            Service Needed <span style={{ color: "#ef4444" }}>*</span>
          </label>
          <select
            id="quote-service"
            className={`form-input ${errors.service ? "error" : ""}`}
            {...register("service")}
            style={{ cursor: "pointer" }}
          >
            <option value="">Select a service…</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Multiple Services">Multiple Services</option>
            <option value="Other">Other / Not Sure</option>
          </select>
          {errors.service && <span className="form-error">{errors.service.message}</span>}
        </div>

        {/* Preferred Contact */}
        <div className="form-group">
          <label htmlFor="quote-contact" className="form-label">
            Preferred Contact Method
          </label>
          <select
            id="quote-contact"
            className="form-input"
            {...register("contactMethod")}
            style={{ cursor: "pointer" }}
          >
            <option value="either">Either Phone or Email</option>
            <option value="phone">Phone Call</option>
            <option value="email">Email</option>
          </select>
        </div>

        {/* Message — full width */}
        <div className="form-group" style={{ gridColumn: compact ? undefined : "1 / -1" }}>
          <label htmlFor="quote-message" className="form-label">
            Project Details <span style={{ color: "#ef4444" }}>*</span>
          </label>
          <textarea
            id="quote-message"
            rows={compact ? 3 : 5}
            placeholder="Describe your project: size of area, current condition, desired outcome, timeline, etc."
            className={`form-input ${errors.message ? "error" : ""}`}
            style={{ resize: "vertical", minHeight: compact ? "80px" : "120px" }}
            {...register("message")}
          />
          {errors.message && <span className="form-error">{errors.message.message}</span>}
        </div>
      </div>

      {/* Error state */}
      {status === "error" && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "#fef2f2",
            border: "1px solid #fecaca",
            borderRadius: "8px",
            padding: "0.75rem 1rem",
            marginTop: "1rem",
            color: "#dc2626",
            fontSize: "0.875rem",
          }}
        >
          <AlertCircle size={16} style={{ flexShrink: 0 }} />
          {errorMessage}
        </div>
      )}

      {/* Submit */}
      <div style={{ marginTop: "1.5rem", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === "loading"}
          id="quote-form-submit"
          style={{ minWidth: "180px" }}
        >
          {status === "loading" ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send size={18} />
              Request Free Quote
            </>
          )}
        </button>
        <p style={{ fontSize: "0.8rem", color: "var(--gray-text)" }}>
          We respond within 24 hours.
        </p>
      </div>
    </form>
  );
}
