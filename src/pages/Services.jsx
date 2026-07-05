import { Plane, Building2, Bus, Users, Briefcase, Shield, Clock, Car, UserCheck } from 'lucide-react'

const allServices = [
    {
    icon: Building2,
    title: 'Corporate Travel',
    description: 'Reliable employee transport and executive travel solutions tailored to your business schedule.',
  },
  {
    icon: Plane,
    title: 'Airport Transfers',
    description: 'On-time pickups and drop-offs to all major airports with flight tracking and luggage assistance.',
  },
  {
    icon: Bus,
    title: 'Daily Commutes / Shuttle Services',
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
    <section className="py-16 md:py-24 bg-[#f8f8f7]">
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

        <div className="mt-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-sm font-semibold text-teal-700 uppercase tracking-wide mb-2">
              Business Partnerships
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partner with Us
            </h3>
            <p className="text-lg text-gray-600">
              We collaborate with organizations to provide structured and scalable transport solutions that enhance operational efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-teal-50 rounded-lg p-8">
              <h4 className="text-xl font-bold text-teal-800 mb-4">
                Why Businesses Choose Us
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-teal-700 flex-shrink-0" />
                  Consistent Service Standards
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-teal-700 flex-shrink-0" />
                  Scalable Transport Solutions
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-teal-700 flex-shrink-0" />
                  Professional Support Team
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-teal-700 flex-shrink-0" />
                  Flexible Engagement Models
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-teal-700 flex-shrink-0" />
                  Automation Services
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-teal-700 flex-shrink-0" />
                  Corporate Offices
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-teal-700 flex-shrink-0" />
                  IT & Technology Companies
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-teal-700 flex-shrink-0" />
                  Manufacturing Units
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-teal-700 flex-shrink-0" />
                  Educational Institutions
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-teal-700 flex-shrink-0" />
                  Hospitality & Events
                </li>
              </ul>
            </div>

            <div className="bg-teal-50 rounded-lg p-8">
              <h4 className="text-xl font-bold text-teal-800 mb-4">
                Extended Services
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-teal-700 flex-shrink-0" />
                  Hotel
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-teal-700 flex-shrink-0" />
                  Airport Transport
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-teal-700 flex-shrink-0" />
                  Hospital
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-teal-700 flex-shrink-0" />
                  Outstation Visit
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-teal-700 flex-shrink-0" />
                  Residential Society
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-teal-700 flex-shrink-0" />
                  Individual Travel Requirement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
