export default function About() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Us
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Your professional journey partner, delivering safe and reliable transport solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4">
              Your Own Wheels is a professional transport solutions provider with over 20 years of expertise in operations and automation. We specialize in airport transfers, corporate travel, daily commutes, events, and outstation trips.
            </p>
            <p className="text-gray-600">
              Our mission is to make every journey reliable, safe, comfortable, and on time. We combine experienced drivers, well-maintained vehicles, and 24/7 support to deliver a seamless travel experience.
            </p>
          </div>
          <div className="bg-teal-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-teal-800 mb-4">Our Values</h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Safety First</strong> — Every trip is monitored and every vehicle is maintained to the highest standards.</li>
              <li><strong>Reliability</strong> — Punctual pickups and dependable service, every time.</li>
              <li><strong>Customer Focus</strong> — Tailored solutions designed around your schedule and comfort.</li>
              <li><strong>Innovation</strong> — Smart booking and route management powered by modern technology.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
