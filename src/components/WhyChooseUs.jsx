import { Shield, UserCheck, Clock, Car } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Safe & Reliable Services',
  },
  {
    icon: UserCheck,
    title: 'Professional Drivers',
  },
  {
    icon: Clock,
    title: 'On-Time, Every Time',
  },
  {
    icon: Car,
    title: 'Comfortable & Clean Vehicles',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 flex items-center justify-center text-teal-700 mb-4">
                <feature.icon size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-gray-900">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
