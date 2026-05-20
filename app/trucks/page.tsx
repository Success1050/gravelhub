import Link from "next/link";
import { Truck, Calculator, MapPin } from "lucide-react";

export default function TrucksPage() {
  const FLEET = [
    {
      id: "5-ton",
      name: "5 Ton Mini Tipper",
      capacity: 5,
      description: "Perfect for residential areas with narrow streets and small construction projects. Holds approximately 3-4 cubic meters of material.",
      bestFor: ["Home renovations", "Driveway repairs", "Small landscaping"],
      color: "bg-blue-500",
    },
    {
      id: "10-ton",
      name: "10 Ton Tipper",
      capacity: 10,
      description: "The standard choice for medium-sized residential and commercial projects. Balances good volume with maneuverability.",
      bestFor: ["Foundation work", "Medium commercial builds", "Site clearance"],
      color: "bg-emerald-500",
    },
    {
      id: "20-ton",
      name: "20 Ton Dump Truck",
      capacity: 20,
      description: "Ideal for large commercial projects and highway construction. Requires solid ground and wide access roads.",
      bestFor: ["Large commercial projects", "Road base", "Bulk filling"],
      color: "bg-amber-500",
    },
    {
      id: "30-ton",
      name: "30 Ton Heavy Duty",
      capacity: 30,
      description: "Our largest vehicle for massive industrial and civil engineering projects. Offers the best economy of scale for bulk orders.",
      bestFor: ["Civil engineering", "Major highways", "Massive land reclamation"],
      color: "bg-red-500",
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <div className="bg-secondary-950 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Our Truck Fleet</h1>
          <p className="text-secondary-300 text-lg max-w-2xl mx-auto">
            We operate a diverse fleet of tippers and dump trucks to handle any volume and navigate any site access requirements.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FLEET.map(truck => (
            <div key={truck.id} className="bg-white rounded-3xl border border-secondary-100 overflow-hidden hover:shadow-xl transition-shadow flex flex-col sm:flex-row">
              <div className={`p-8 sm:w-1/3 flex flex-col items-center justify-center text-white ${truck.color}`}>
                <Truck size={64} className="mb-4 opacity-90" />
                <span className="text-3xl font-heading font-bold">{truck.capacity}</span>
                <span className="text-sm font-medium uppercase tracking-wider opacity-80">Tons</span>
              </div>
              <div className="p-8 sm:w-2/3 flex flex-col">
                <h3 className="text-2xl font-heading font-bold text-secondary-900 mb-3">{truck.name}</h3>
                <p className="text-secondary-600 mb-6 flex-1">{truck.description}</p>
                
                <div>
                  <h4 className="text-sm font-semibold text-secondary-900 mb-3 uppercase tracking-wide">Best For</h4>
                  <ul className="space-y-2">
                    {truck.bestFor.map((use, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-secondary-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8 pt-6 border-t border-secondary-100 flex gap-4">
                  <Link href="/calculator" className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-secondary-50 text-secondary-800 font-medium rounded-lg hover:bg-secondary-100 transition-colors">
                    <Calculator size={18} /> Get Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-primary-50 rounded-3xl p-8 md:p-12 border border-primary-100 flex flex-col md:flex-row items-center gap-8">
          <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
            <MapPin size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-heading font-bold text-secondary-900 mb-2">Not sure which truck can access your site?</h3>
            <p className="text-secondary-700">
              Our logistics experts can evaluate your delivery address and recommend the optimal truck size based on road width, turning radius, and surface conditions.
            </p>
          </div>
          <Link href="/contact" className="ml-auto whitespace-nowrap px-6 py-3 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
