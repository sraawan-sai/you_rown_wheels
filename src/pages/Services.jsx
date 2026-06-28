import { Plane, Building2, Bus, Users, Briefcase, Shield, Clock, Car, UserCheck } from 'lucide-react'

const allServices = [
  {
    icon: Plane,
    title: 'Airport Transfers',
    description: 'On-time pickups and drop-offs to all major airports with flight tracking and luggage assistance.',
  },
  {
    icon: Building2,
    title: 'Corporate Travel',
    description: 'Reliable employee transport and executive travel solutions tailored to your business schedule.',
  },
  {
    icon: Bus,
    title: 'Daily Commutes',
    description: 'Comfortable and punctual daily transport for professionals and groups on fixed routes.',
  },
  {
    icon: Users,
    title: 'Events & Special Occasions',
    description: 'Group transport for weddings, conferences, and celebrations with dedicated coordination.',
  },
  {
    icon: Briefcase,
    title: 'Outstation Trips',
    description: 'Safe intercity travel with well-maintained vehicles and experienced drivers for long-distance journeys.',
  },
]

const highlights = [
  { icon: Shield, title: 'Safe & Reliable Services' },
  { icon: UserCheck, title: 'Professional Drivers' },
  { icon: Clock, title: 'On-Time, Every Time' },
  { icon: Car, title: 'Comfortable & Clean Vehicles' },
]

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Tailored transport solutions for every journey and every occasion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 flex items-center justify-center text-teal-700 mb-4 bg-teal-50 rounded-md">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center">
              <div className="w-14 h-14 flex items-center justify-center text-teal-700 mb-3">
                <item.icon size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
