import { Plane, Building2, Bus, Users, Briefcase } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
    {
    icon: Building2,
    title: 'Corporate Travel',
  },
  {
    icon: Plane,
    title: 'Airport Transfers',
  },
  {
    icon: Bus,
    title: 'Daily Commutes / Shuttle Services',
  },
  {
    icon: Users,
    title: 'Events & Special Occasions',
  },
  {
    icon: Briefcase,
    title: 'Outstation Trips',
  },
]

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 flex items-center justify-center text-teal-900 mb-4">
                <service.icon size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-gray-900">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center border border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white font-medium px-6 py-2.5 rounded-md transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
