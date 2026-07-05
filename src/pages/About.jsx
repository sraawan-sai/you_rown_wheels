export default function About() {
  return (
    <section className="py-16 md:py-24 bg-[#f8f8f7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Us
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Your professional journey partner, delivering safe and reliable transport solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="md:col-span-2 mb-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4">
              Your Own Wheels is a professional transport solutions provider with over 20 years of expertise in operations and automation. We specialize in airport transfers, corporate travel, daily commutes, events, and outstation trips.
            </p>
            <p className="text-gray-600">
              We combine experienced drivers, well-maintained vehicles, and 24/7 support to deliver a seamless travel experience.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-teal-700 flex-shrink-0" />
                To provide safe, structured, and dependable transportation services
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-teal-700 flex-shrink-0" />
                To support businesses with scalable mobility solutions
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-teal-700 flex-shrink-0" />
                To maintain high standards of service quality and professionalism
              </li>
            </ul>
          </div>

          <div className="bg-teal-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-teal-800 mb-6">
              Our Values
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-teal-700 flex-shrink-0" />
                Reliability and Accountability
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-teal-700 flex-shrink-0" />
                Customer-Centric Approach
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-teal-700 flex-shrink-0" />
                Operational Excellence
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-teal-700 flex-shrink-0" />
                Transparency and Integrity
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
