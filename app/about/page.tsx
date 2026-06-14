import { CheckCircle, Users, Award, Truck, Shield, Clock } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 leading-tight">
              About GravelHub
            </h1>
            <p className="text-xl md:text-2xl text-primary-50 leading-relaxed">
              Your trusted partner for premium construction materials, delivered with reliability and excellence since our founding.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-4xl mb-6 text-secondary-900">
                Our Mission
              </h2>
              <p className="text-lg text-secondary-700 leading-relaxed mb-6">
                At GravelHub, we're committed to revolutionizing the way construction materials are sourced and delivered. We combine decades of industry expertise with modern technology to provide seamless ordering, competitive pricing, and reliable delivery.
              </p>
              <p className="text-lg text-secondary-700 leading-relaxed">
                Whether you're working on a small residential project or a large commercial development, we ensure you get the right materials at the right time, every time.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="font-heading font-semibold text-2xl mb-6 text-secondary-900">
                Why Choose Us
              </h3>
              <ul className="space-y-4">
                {[
                  "Premium quality materials sourced from trusted suppliers",
                  "Transparent pricing with our online calculator",
                  "Modern fleet of well-maintained trucks",
                  "On-time delivery guaranteed",
                  "Expert customer support team",
                  "Flexible ordering options"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-primary-500 shrink-0 mt-1" size={20} />
                    <span className="text-secondary-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl mb-4 text-secondary-900">
              Our Core Values
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "Every material is rigorously tested and verified to meet industry standards before delivery."
              },
              {
                icon: Clock,
                title: "Reliability",
                description: "We understand that time is money in construction. Count on us for punctual, dependable service."
              },
              {
                icon: Users,
                title: "Customer First",
                description: "Your success is our success. We're dedicated to providing exceptional support and service."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We continuously improve our processes, fleet, and service to exceed expectations."
              },
              {
                icon: Truck,
                title: "Modern Fleet",
                description: "Our well-maintained trucks ensure safe, efficient delivery of your materials."
              },
              {
                icon: CheckCircle,
                title: "Transparency",
                description: "Clear pricing, honest communication, and no hidden fees—what you see is what you get."
              }
            ].map((value, index) => (
              <div key={index} className="bg-secondary-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="bg-primary-100 text-primary-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <value.icon size={28} />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4 text-secondary-900">
                  {value.title}
                </h3>
                <p className="text-secondary-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-4xl mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust GravelHub for their construction material needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              View Our Products
            </Link>
            <Link
              href="/contact"
              className="bg-primary-600 hover:bg-primary-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all border-2 border-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
