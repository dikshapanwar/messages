import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEmails";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  username: string,
  email: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [email],
      subject: "Verification Code",
      react: VerificationEmail({ username, otp: verifyCode }),
    })

    return { status: "success", message: "Verification email sent successfully" }
  } catch (error) {
    console.error("Error sending verification email:", error)
    return { status: "error", message: "Failed to send verification email" }
  }
}
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [email],
      subject: "Verification Code",
      react: VerificationEmail({ username, otp: verifyCode }),    });