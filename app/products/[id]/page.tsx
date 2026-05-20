import Link from "next/link";
import { ArrowLeft, CheckCircle2, Truck, Calculator, MapPin } from "lucide-react";

// Mock Data
const PRODUCTS = [
  {
    id: "granite-3-4",
    name: "3/4 inch Granite Stones",
    category: "Granite",
    pricePerTon: 8500,
    description: "Premium 3/4 inch crushed granite stones, ideal for concrete mixes, road base, and general construction. Sourced from top-tier quarries to ensure maximum compressive strength and angularity for optimal interlocking.",
    features: ["High compressive strength", "Excellent interlocking properties", "Free from organic impurities", "Uniform grading"],
    applications: ["Ready-mix concrete", "Road surfacing", "Asphalt production", "Drainage layers"],
    imageUrl: "https://images.unsplash.com/photo-1518542790933-8fa988944517?q=80&w=2000&auto=format&fit=crop",
  },
  // Add other products here if needed for dynamic routing mock, 
  // but for frontend-only we can assume it matches the ID or fallback to this one.
];

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  // In a real app, fetch by ID. Here we mock it by using the first product.
  const product = PRODUCTS[0]; 

  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Breadcrumb & Navigation */}
      <div className="bg-white border-b border-secondary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4 text-sm">
          <Link href="/products" className="text-secondary-500 hover:text-primary-600 flex items-center gap-1 transition-colors">
            <ArrowLeft size={16} /> Back to Products
          </Link>
          <span className="text-secondary-300">/</span>
          <span className="text-secondary-900 font-medium">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-secondary-100 shadow-sm relative group">
              <img 
                src={product.imageUrl} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-2 bg-white/90 backdrop-blur-md font-semibold text-secondary-900 rounded-full shadow-lg">
                  {product.category}
                </span>
              </div>
            </div>
            {/* Thumbnails mockup */}
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`w-24 h-24 rounded-2xl overflow-hidden border-2 cursor-pointer ${i === 1 ? 'border-primary-500' : 'border-secondary-100 hover:border-primary-300'}`}>
                   <img src={product.imageUrl} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-4xl font-heading font-bold text-secondary-900 mb-4">{product.name}</h1>
            
            <div className="flex items-end gap-3 mb-6">
              <span className="text-4xl font-heading font-bold text-primary-600">₦{product.pricePerTon.toLocaleString()}</span>
              <span className="text-secondary-500 mb-1">per Ton</span>
            </div>
            
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="font-heading font-bold text-secondary-900 mb-4 text-lg">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-secondary-700">
                      <CheckCircle2 size={20} className="text-primary-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-heading font-bold text-secondary-900 mb-4 text-lg">Common Applications</h3>
                <ul className="space-y-3">
                  {product.applications.map((app, i) => (
                    <li key={i} className="flex items-start gap-3 text-secondary-700">
                      <div className="w-2 h-2 rounded-full bg-secondary-300 mt-2 shrink-0" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Order Action Card */}
            <div className="mt-auto bg-secondary-50 rounded-3xl p-6 md:p-8 border border-secondary-100">
              <h3 className="font-heading font-bold text-secondary-900 mb-4 text-xl">Ready to order?</h3>
              <p className="text-secondary-600 mb-6">
                Calculate your exact cost including transport based on your required truck size and delivery distance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/calculator" className="flex-1 flex items-center justify-center gap-2 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20 transform hover:-translate-y-0.5">
                  <Calculator size={20} /> Open Calculator
                </Link>
                <Link href="/contact" className="flex-1 flex items-center justify-center gap-2 py-4 bg-white text-secondary-900 font-semibold rounded-xl hover:bg-secondary-100 border border-secondary-200 transition-all">
                  <Truck size={20} /> Request Custom Quote
                </Link>
              </div>
              
              <div className="mt-6 flex items-center gap-2 text-sm text-secondary-500 justify-center">
                <MapPin size={16} /> Delivery available across all major states.
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
