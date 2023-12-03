import type { APIRoute } from "astro"
import { Resend } from "resend"

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const POST: APIRoute = async ({request}) => {

  const body = await request.json()
  const { values: { username, address, time, services, date, message, phone } } = body

  const send = await resend.emails.send({
    from: 'booking@nanofighters.club',
    to: 'adrian.alvarezalonso1991@gmail.com',
    subject: 'New Booking Services',
    html: 
    `
    <p> Client: ${username} </p>
    <p> Service: ${services} </p>
    <p> Phone: <a href='tel:${phone}' target='_blank'>${phone}</a> </p>
    <p> Address: <a href='http://maps.google.com/?q=${address}' target='_blank'>${address}</a> </p>
    <p> Time: ${time} </p>
    <p> Date: ${date} </p>
    <p> Message: ${message} </p>
    `,
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