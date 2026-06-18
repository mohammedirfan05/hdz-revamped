import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ─── Resend client (server-side only — key never reaches the browser) ───────
const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
const TO_EMAIL =
  process.env.RESEND_TO_EMAIL ?? "mohammediirfan2006@gmail.com";

// ─── Validation helpers ──────────────────────────────────────────────────────
function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  return /^[\d\s\-\+\(\)]{10,}$/.test(phone);
}

// ─── HTML email template ─────────────────────────────────────────────────────
function buildEmailHtml(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  contactMethod: string;
  message: string;
}) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Quote Request — HDZ Revamped</title>
</head>
<body style="margin:0;padding:0;background:#f4f6fb;font-family:'Inter',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(8,26,55,0.10);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#081A37 0%,#0d2347 50%,#132d5e 100%);padding:36px 40px;">
              <h1 style="margin:0;font-size:22px;font-weight:800;color:#ffffff;letter-spacing:-0.03em;">HDZ Revamped</h1>
              <p style="margin:4px 0 0;font-size:11px;color:#D4A84A;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">Painting &amp; Drywall</p>
              <div style="margin-top:16px;background:rgba(212,168,74,0.15);border:1px solid rgba(212,168,74,0.3);border-radius:8px;padding:10px 16px;display:inline-block;">
                <p style="margin:0;font-size:15px;font-weight:700;color:#ffffff;">📋 New Quote Request</p>
              </div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">
              <p style="margin:0 0 24px;font-size:15px;color:#5a6480;line-height:1.7;">
                You have received a new quote request from your website. Here are the details:
              </p>

              <!-- Info Grid -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                ${[
      { label: "👤 Full Name", value: data.name },
      { label: "📧 Email", value: data.email },
      { label: "📞 Phone", value: data.phone },
      { label: "🔧 Service Needed", value: data.service },
      { label: "📬 Preferred Contact", value: data.contactMethod },
    ]
      .map(
        (row) => `
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f2f8;">
                    <div style="font-size:11px;font-weight:700;color:#a0a8b8;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:3px;">${row.label}</div>
                    <div style="font-size:15px;font-weight:600;color:#081A37;">${row.value}</div>
                  </td>
                </tr>`
      )
      .join("")}
              </table>

              <!-- Message -->
              <div style="background:#f4f6fb;border-radius:12px;padding:20px 24px;margin-bottom:28px;border-left:3px solid #295DFF;">
                <div style="font-size:11px;font-weight:700;color:#a0a8b8;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:10px;">💬 Project Details</div>
                <p style="margin:0;font-size:14px;color:#3d4966;line-height:1.75;white-space:pre-wrap;">${data.message}</p>
              </div>

              <!-- Reply CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <a href="mailto:${data.email}?subject=Re: Quote Request - ${encodeURIComponent(data.service)}"
                       style="display:inline-block;background:linear-gradient(135deg,#295DFF 0%,#1a45d4 100%);color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;padding:14px 28px;border-radius:999px;letter-spacing:-0.01em;">
                      Reply to ${data.name} →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8fafc;padding:20px 40px;border-top:1px solid #e8ecf4;">
              <p style="margin:0;font-size:12px;color:#a0a8b8;text-align:center;line-height:1.6;">
                This email was sent from the quote form at <strong>hdzrevamped.vercel.app</strong><br/>
                HDZ Revamped · San Diego County, CA · License #1146147
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

// ─── Route Handler ───────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // 1. Parse body
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { name, email, phone, service, message, contactMethod, website } = body as Record<string, string>;

  // 2. Honeypot — silently drop bot submissions
  if (website) {
    return NextResponse.json({ success: true });
  }

  // 3. Server-side validation
  const errors: string[] = [];

  if (!name || name.trim().length < 2)
    errors.push("Name must be at least 2 characters.");
  if (!email || !isValidEmail(email))
    errors.push("Please provide a valid email address.");
  if (!phone || !isValidPhone(phone))
    errors.push("Please provide a valid phone number.");
  if (!service || service.trim().length === 0)
    errors.push("Please select a service.");
  if (!message || message.trim().length < 10)
    errors.push("Project details must be at least 10 characters.");
  if (!["phone", "email", "either"].includes(contactMethod))
    errors.push("Invalid contact method.");

  if (errors.length > 0) {
    return NextResponse.json(
      { success: false, error: errors.join(" ") },
      { status: 422 }
    );
  }

  // 4. Send via Resend
  const preferredContactLabel =
    contactMethod === "phone"
      ? "Phone Call"
      : contactMethod === "email"
        ? "Email"
        : "Either Phone or Email";

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email.trim(),
      subject: `New Quote Request: ${service} — ${name}`,
      html: buildEmailHtml({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        service: service.trim(),
        contactMethod: preferredContactLabel,
        message: message.trim(),
      }),
    });

    if (error) {
      console.error("[Resend] Email send error:", error);
      return NextResponse.json(
        {
          success: false,
          error:
            "Failed to send your request. Please call us directly at (760) 580-9790.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Resend] Unexpected error:", err);
    return NextResponse.json(
      {
        success: false,
        error:
          "An unexpected error occurred. Please call us at (760) 580-9790.",
      },
      { status: 500 }
    );
  }
}

// Block non-POST methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
