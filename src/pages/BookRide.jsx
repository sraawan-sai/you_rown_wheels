import { useState } from 'react'

const tripTypes = [
  'Corporate Travel',
  'Airport Transfer',
  'Daily Commute',
  'Event / Special Occasion',
  'Outstation Trip',
]

const carTypes = [
  'Sedan',
  'SUV',
  'Luxury',
  'Bus',
]

const cities = [
  'Hyderabad',
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
    tripType: 'Corporate Travel',
    carType: 'Sedan',
    city: 'Hyderabad',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitted(true)

    try {
      const response = await fetch('/api/send-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const result = await response.json()

      if (response.ok) {
        setShowModal(true)
      } else {
        console.error('Email failed:', result)
        alert('Failed to send booking email. Please try again.')
      }
    } catch (error) {
      console.error('Request error:', error)
      alert('Failed to send booking email. Please try again.')
    } finally {
      setSubmitted(false)
    }
  }

  const closeModal = () => {
    setShowModal(false)
    setForm({
      name: '',
      phone: '',
      email: '',
      pickup: '',
      dropoff: '',
      date: '',
      time: '',
      passengers: '1',
      tripType: 'Corporate Travel',
      carType: 'Sedan',
      city: 'Hyderabad',
      notes: '',
    })
  }

  const update = (field, value) => setForm({ ...form, [field]: value })

  return (
    <section className="py-16 md:py-24 bg-[#f8f8f7]">
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

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Car Type</label>
              <select
                value={form.carType}
                onChange={(e) => update('carType', e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-teal-500 focus:ring-teal-500 outline-none bg-white"
              >
                {carTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <select
                value={form.city}
                onChange={(e) => update('city', e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-teal-500 focus:ring-teal-500 outline-none bg-white"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
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

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 text-center">
              <div className="w-14 h-14 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Booking Saved</h3>
              <p className="text-gray-600 mb-6">
                Your booking request has been saved. An email with your booking details has been sent.
              </p>
              <button
                onClick={closeModal}
                className="w-full bg-teal-700 hover:bg-teal-800 text-white font-medium py-2.5 rounded-md transition-colors"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
