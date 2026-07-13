import { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-16 md:py-24 bg-[#f8f8f7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Have a question or need a custom transport plan? Reach out and we will respond quickly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center text-teal-700 bg-teal-50 rounded-md">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">+91-8019765417</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center text-teal-700 bg-teal-50 rounded-md">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">sales@yourownwheels.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center text-teal-700 bg-teal-50 rounded-md">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Office</h3>
                <p className="text-gray-600">Hyderabad, Telangana</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center text-teal-700 bg-teal-50 rounded-md">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Availability</h3>
                <p className="text-gray-600">24 / 7</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-6 md:p-8 space-y-5">
            <div>
              <label className="block text-base font-bold text-teal-700 mb-1">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-base focus:border-teal-500 focus:ring-teal-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-base font-bold text-teal-700 mb-1">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-base focus:border-teal-500 focus:ring-teal-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-base font-bold text-teal-700 mb-1">Phone</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-base focus:border-teal-500 focus:ring-teal-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-base font-bold text-teal-700 mb-1">Message</label>
              <textarea
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-base focus:border-teal-500 focus:ring-teal-500 outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-700 hover:bg-teal-800 text-white font-medium py-2.5 rounded-md transition-colors"
            >
              Send Message
            </button>
            {submitted && (
              <p className="text-center text-sm text-teal-700 font-medium">Thanks! We will get back to you soon.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
