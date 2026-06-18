"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { SERVICES, CONTACT } from "@/data/siteData";

// ─── Validation schema (mirrors server-side validation) ──────────────────────
const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[\d\s\-\+\(\)]+$/, "Invalid phone number format"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z
    .string()
    .min(10, "Please describe your project (at least 10 characters)"),
  contactMethod: z.enum(["phone", "email", "either"]),
  // Honeypot field — must remain empty
  website: z.string().max(0, "").optional(),
});

type FormData = z.infer<typeof schema>;

interface QuoteFormProps {
  preselectedService?: string;
  compact?: boolean;
}

export default function QuoteForm({
  preselectedService,
  compact = false,
}: QuoteFormProps) {
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

  // ─── Submit handler — purely client-side fetch, no secrets ────────────────
  const onSubmit = async (data: FormData) => {
    // Honeypot: silently block bot submissions
    if (data.website) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(
          result.error ||
            "Something went wrong. Please call us directly or try again."
        );
      }

      setStatus("success");
      reset();
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please call us directly or try again."
      );
    }
  };

  // ─── Success state ────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
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
        <CheckCircle size={56} color="var(--success, #16a34a)" strokeWidth={1.5} aria-hidden="true" />
        <h3 style={{ color: "var(--navy)", marginTop: "0.5rem" }}>
          Quote Request Sent!
        </h3>
        <p style={{ color: "var(--gray-text)", maxWidth: "380px" }}>
          Thank you! We&apos;ll get back to you within 24 hours. For faster
          service, call us at{" "}
          <a
            href={`tel:${CONTACT.phone}`}
            style={{ color: "var(--royal)", fontWeight: 600 }}
          >
            {CONTACT.phoneDisplay}
          </a>
          .
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn btn-outline"
          style={{ marginTop: "0.5rem" }}
        >
          Send Another Request
        </button>
      </div>
    );
  }

  // ─── Form ─────────────────────────────────────────────────────────────────
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Honeypot — hidden from real users, bots will fill it */}
      <input
        type="text"
        {...register("website")}
        aria-hidden="true"
        tabIndex={-1}
        style={{
          position: "absolute",
          left: "-9999px",
          opacity: 0,
          height: 0,
          width: 0,
        }}
        autoComplete="off"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: compact ? "1fr" : "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="quote-name" className="form-label">
            Full Name <span style={{ color: "#ef4444" }} aria-hidden="true">*</span>
          </label>
          <input
            id="quote-name"
            type="text"
            placeholder="Your full name"
            className={`form-input ${errors.name ? "error" : ""}`}
            autoComplete="name"
            aria-required="true"
            aria-describedby={errors.name ? "quote-name-error" : undefined}
            aria-invalid={errors.name ? "true" : undefined}
            {...register("name")}
          />
          {errors.name && (
            <span id="quote-name-error" className="form-error" role="alert">{errors.name.message}</span>
          )}
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="quote-phone" className="form-label">
            Phone Number <span style={{ color: "#ef4444" }} aria-hidden="true">*</span>
          </label>
          <input
            id="quote-phone"
            type="tel"
            placeholder="(760) 000-0000"
            className={`form-input ${errors.phone ? "error" : ""}`}
            autoComplete="tel"
            aria-required="true"
            aria-describedby={errors.phone ? "quote-phone-error" : undefined}
            aria-invalid={errors.phone ? "true" : undefined}
            {...register("phone")}
          />
          {errors.phone && (
            <span id="quote-phone-error" className="form-error" role="alert">{errors.phone.message}</span>
          )}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="quote-email" className="form-label">
            Email Address <span style={{ color: "#ef4444" }} aria-hidden="true">*</span>
          </label>
          <input
            id="quote-email"
            type="email"
            placeholder="you@example.com"
            className={`form-input ${errors.email ? "error" : ""}`}
            autoComplete="email"
            aria-required="true"
            aria-describedby={errors.email ? "quote-email-error" : undefined}
            aria-invalid={errors.email ? "true" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <span id="quote-email-error" className="form-error" role="alert">{errors.email.message}</span>
          )}
        </div>

        {/* Service */}
        <div className="form-group">
          <label htmlFor="quote-service" className="form-label">
            Service Needed <span style={{ color: "#ef4444" }} aria-hidden="true">*</span>
          </label>
          <select
            id="quote-service"
            className={`form-input ${errors.service ? "error" : ""}`}
            {...register("service")}
            style={{ cursor: "pointer" }}
            aria-required="true"
            aria-describedby={errors.service ? "quote-service-error" : undefined}
            aria-invalid={errors.service ? "true" : undefined}
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
          {errors.service && (
            <span id="quote-service-error" className="form-error" role="alert">{errors.service.message}</span>
          )}
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

        {/* Project Details — full width */}
        <div
          className="form-group"
          style={{ gridColumn: compact ? undefined : "1 / -1" }}
        >
          <label htmlFor="quote-message" className="form-label">
            Project Details <span style={{ color: "#ef4444" }} aria-hidden="true">*</span>
          </label>
          <textarea
            id="quote-message"
            rows={compact ? 3 : 5}
            placeholder="Describe your project — area size, current condition, what you'd like changed, and your timeline."
            className={`form-input ${errors.message ? "error" : ""}`}
            style={{ resize: "vertical", minHeight: compact ? "80px" : "120px" }}
            aria-required="true"
            aria-describedby={errors.message ? "quote-message-error" : undefined}
            aria-invalid={errors.message ? "true" : undefined}
            {...register("message")}
          />
          {errors.message && (
            <span id="quote-message-error" className="form-error" role="alert">{errors.message.message}</span>
          )}
        </div>
      </div>

      {/* Error state */}
      {status === "error" && (
        <div
          role="alert"
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
      <div
        style={{
          marginTop: "1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === "loading"}
          id="quote-form-submit"
          style={{ minWidth: "180px" }}
          aria-live="polite"
          aria-busy={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <Loader2 size={18} className="spin-icon" aria-hidden="true" />
              <span>Sending…</span>
            </>
          ) : (
            <>
              <Send size={18} aria-hidden="true" />
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
