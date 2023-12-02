import type { APIRoute } from "astro"
import { Resend } from "resend"

const resend = new Resend(import.meta.env.RESEND_API_KEY)

// Salidas: /builtwith.json
export const POST: APIRoute = async ({params, request}) => {

  const send = await resend.emails.send({
    from: 'adrian.alvarezalonso1991@gmail.com',
    to: 'adrian.alvarezalonso1991@gmail.com',
    subject: 'Testing Resend',
    html: '<p>Hi<p>',
    text: 'Hi'
  })

  if (send.data) {
    return new Response(
      JSON.stringify({
        message: send.data
      }),
      {
        status: 200,
        statusText: "OK"
      }
    )
  } else {
    return new Response(
      JSON.stringify({
        message: send.error
      }),
      {
        status: 500,
        statusText: "Internal Server Error"
      }
    )
  }
}