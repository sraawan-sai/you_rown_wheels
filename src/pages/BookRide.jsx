import { useState } from 'react'

const tripTypes = [
  'Airport Transfer',
  'Corporate Travel',
  'Daily Commute',
  'Event / Special Occasion',
  'Outstation Trip',
]

export default function BookRide() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    passengers: '1',
    tripType: 'Airport Transfer',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const update = (field, value) => setForm({ ...form, [field]: value })

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Book a Ride
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Fill in your trip details and we will confirm your booking shortly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-6 md:p-10 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-teal-500 focus:ring-teal-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => update('phone', e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-teal-500 focus:ring-teal-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-teal-500 focus:ring-teal-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Trip Type</label>
              <select
                value={form.tripType}
                onChange={(e) => update('tripType', e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-teal-500 focus:ring-teal-500 outline-none bg-white"
              >
                {tripTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
              <input
                type="text"
                required
                value={form.pickup}
                onChange={(e) => update('pickup', e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-teal-500 focus:ring-teal-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Drop-off Location</label>
              <input
                type="text"
                required
                value={form.dropoff}
                onChange={(e) => update('dropoff', e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-teal-500 focus:ring-teal-500 outline-none"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                required
                value={form.date}
                onChange={(e) => update('date', e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-teal-500 focus:ring-teal-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
              <input
                type="time"
                required
                value={form.time}
                onChange={(e) => update('time', e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-teal-500 focus:ring-teal-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
              <input
                type="number"
                min="1"
                required
                value={form.passengers}
                onChange={(e) => update('passengers', e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-teal-500 focus:ring-teal-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
            <textarea
              rows={3}
              value={form.notes}
              onChange={(e) => update('notes', e.target.value)}
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-teal-500 focus:ring-teal-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-700 hover:bg-teal-800 text-white font-medium py-3 rounded-md transition-colors"
          >
            Confirm Booking Request
          </button>
          {submitted && (
            <p className="text-center text-sm text-teal-700 font-medium">
              Booking request received! We will contact you shortly to confirm.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
