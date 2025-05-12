import { NextRequest } from "next/server";
import { Resend} from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
  if (!body.name && !body.email && body.message) {
    return Response.json({
      success: false,
      message: "Incomplete data"
    }, {status: 401})
  }
  const {data, error} = await resend.emails.send({
    from: "TextVideoGeneration <onboarding@resend.dev>",
    to: "rajendrapatha2702@gmail.com",
    subject: "Message from TextVideoGeneration",
    html: `
    <strong>Name:</strong> ${body.name}<br />
    <strong>Email:</strong> ${body.email}<br />
    <strong>Message:</strong><br />${body.message}
    `
  })
  if (error) {
    console.log(error)
    return Response.json({
      message: "Failed to send email",
      error
    })
  }
  console.log(data)
  return Response.json({
    success: true,
    message: "Email sent via Resend",
  }, {status: 200})
  } catch (err) {
    return Response.json({
      success: false,
      message: "Error sending email"
    }, {status: 500})
  }
}