import { Check } from 'lucide-react'

const promises = [
  'Experienced Drivers',
  'Punctual & Dependable',
  'Well-Maintained Fleet',
  'Customer Satisfaction',
  'Cost Efficient',
  '24/7 Support',
]

export default function Experience() {
  return (
    <section className="bg-teal-900 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Experience You Can Trust
            </h2>
            <p className="mt-4 text-teal-200 font-semibold">
              Led by 20+ Years of Expertise in Operations & Automation Specialists
            </p>
            <p className="mt-4 text-teal-100 max-w-lg">
              We bring innovation, efficiency, and reliability to every journey—ensuring a smooth and professional travel experience.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold text-teal-700 mb-6">
              Our Promise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {promises.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 text-teal-700">
                    <Check size={18} />
                  </div>
                  <span className="text-sm md:text-base text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
