import { Resend } from 'resend'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const {
    name,
    phone,
    email,
    tripType,
    carType,
    city,
    pickup,
    dropoff,
    date,
    time,
    passengers,
    notes,
  } = req.body

  if (!name || !phone || !email || !pickup || !dropoff || !date || !time) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: [process.env.OWNER_EMAIL],
      replyTo: email,
      subject: `New Booking Request from ${name}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Trip Type:</strong> ${tripType}</p>
        <p><strong>Car Type:</strong> ${carType}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Pickup:</strong> ${pickup}</p>
        <p><strong>Drop-off:</strong> ${dropoff}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Passengers:</strong> ${passengers}</p>
        <p><strong>Additional Notes:</strong> ${notes || 'None'}</p>
      `,
    })

    res.status(200).json({ success: true, data })
  } catch (error) {
    console.error('Resend error:', error)
    res.status(500).json({ error: 'Failed to send email', message: error.message })
  }
}
