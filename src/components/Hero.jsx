import { Calendar, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroImage from '../../images/hero.jpg'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="z-30 grid lg:grid-cols-2 items-center min-h-[520px] md:min-h-[600px] lg:min-h-[700px]">
          <div className="relative z-40 px-6 lg:px-8 py-12 md:py-16 lg:py-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Your Own Wheels
            </h1>
            <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold text-teal-600">
              Seamless Transport. Professional Experience.
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
              At Your Own Wheels, we deliver dependable and efficient mobility solutions tailored for businesses and individuals who value punctuality, safety, and professionalism.
            </p>
            <p className="mt-4 text-gray-600 max-w-2xl">
              From corporate travel to customized transport requirements, we ensure every journey is managed with precision and care.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-medium px-6 py-3 rounded-md transition-colors"
              >
                <Calendar size={18} />
                Request a Service
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-teal-700 text-teal-700 hover:bg-teal-50 font-medium px-6 py-3 rounded-md transition-colors"
              >
                <Phone size={18} />
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative z-30 h-80 md:h-96 lg:h-auto lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 -mx-6 lg:mx-0">
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
            <img
              src={heroImage}
              alt="Professional van transport"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 leading-[0]">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-24 lg:h-32">
          <path
            d="M0 120L1440 120L1440 60Q1080 60 720 0Q360 60 0 60Z"
            fill="#0F766E"
          />
        </svg>
      </div>
    </section>
  )
}
