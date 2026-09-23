import { NextResponse } from "next/server";

type ContactPayload = {
  service?: string;
  budget?: string;
  timeline?: string;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  details?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (!body.name || !body.email || !body.details) {
      return NextResponse.json(
        { message: "Name, email and project details are required." },
        { status: 400 }
      );
    }

    // Replace this section with Resend, Nodemailer, Gmail SMTP,
    // database storage, CRM integration or your preferred workflow.
    console.log("New Being Digitals project inquiry:", body);

    return NextResponse.json(
      {
        success: true,
        message: "Project inquiry received.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Invalid request." },
      { status: 400 }
    );
  }
}
