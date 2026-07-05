import { Building2, Clock, ShieldCheck, BadgeDollarSign, Headphones } from 'lucide-react'

const features = [
  {
    icon: Building2,
    title: 'Professionally Managed Operations',
  },
  {
    icon: Clock,
    title: 'Punctual and Reliable Service Delivery',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Drivers and Well-Maintained Fleet',
  },
  {
    icon: BadgeDollarSign,
    title: 'Transparent Pricing Structure',
  },
  {
    icon: Headphones,
    title: 'Dedicated Client Support',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-[#f8f8f7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
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
