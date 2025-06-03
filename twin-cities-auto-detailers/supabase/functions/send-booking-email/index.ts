// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

// Define corsHeaders directly in the script
const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // Or your specific frontend origin for better security
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
};

console.log("send-booking-email function initialized (fetch version - INLINED CORS)");

const SENDGRID_API_KEY = Deno.env.get("SENDGRID_API_KEY");

if (!SENDGRID_API_KEY) {
  console.error("SENDGRID_API_KEY is not set in environment variables.");
} else {
  console.log("SendGrid API key loaded.");
}

serve(async (req: Request) => {
  // This is needed if you're planning to invoke your function from a browser.
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { to, subject, htmlBody, fromName, fromEmail } = await req.json();

    if (!to || !subject || !htmlBody) {
      return new Response(JSON.stringify({ error: "Missing required fields: to, subject, htmlBody" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      });
    }

    if (!SENDGRID_API_KEY) {
      console.error("SendGrid API key not configured. Email not sent.");
      return new Response(JSON.stringify({ error: "Email service not configured." }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      });
    }

    const senderName = fromName || "Twin Cities Auto Detailers";
    const senderEmail = fromEmail || "noreply@yourdomain.com"; // IMPORTANT: Replace with your verified sending email

    console.log(`Attempting to send email to: ${to} via SendGrid (fetch)`);
    console.log(`Subject: ${subject}`);
    console.log(`From: ${senderName} <${senderEmail}>`);

    const sendGridPayload = {
      personalizations: [{ to: [{ email: to }] }],
      from: { email: senderEmail, name: senderName },
      subject: subject,
      content: [{ type: "text/html", value: htmlBody }],
    };

    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
      },
      body: JSON.stringify(sendGridPayload),
    });

    if (response.ok) {
      const messageId = response.headers.get("x-message-id");
      console.log(`Email sent successfully via SendGrid (fetch). Status: ${response.status}, Message-ID: ${messageId}`);
      return new Response(JSON.stringify({ message: "Email sent successfully", messageId }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 202,
      });
    } else {
      const errorBody = await response.text();
      let errorDetails = errorBody;
      try {
        errorDetails = JSON.parse(errorBody);
      } catch (e) {
        // Keep errorDetails as text
      }
      console.error(`Error sending email via SendGrid (fetch). Status: ${response.status}`, errorDetails);
      return new Response(JSON.stringify({ error: "Failed to send email via SendGrid", details: errorDetails }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: response.status,
      });
    }
  } catch (error) {
    console.error("Error in send-booking-email function (fetch version - INLINED CORS):", error.message, error.stack);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
}); 