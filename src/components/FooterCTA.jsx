import { Link } from 'react-router-dom'

export default function FooterCTA() {
  return (
    <section className="bg-teal-700 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Your Destination, Our Priority.
            </h2>
            <p className="mt-2 text-teal-100">
              We Request your service today and travel with confidence.
            </p>
          </div>

          <Link
            to="/book"
            className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-teal-700 font-medium px-8 py-3 rounded-md transition-colors"
          >
            Request a Service
          </Link>
        </div>
      </div>
    </section>
  )
}
