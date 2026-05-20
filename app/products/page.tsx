import Link from "next/link";
import { Search, Filter, ArrowRight } from "lucide-react";

// Mock Data
const PRODUCTS = [
  {
    id: "granite-3-4",
    name: "3/4 inch Granite Stones",
    category: "Granite",
    pricePerTon: 8500,
    description: "Premium 3/4 inch crushed granite stones, ideal for concrete mixes, road base, and general construction.",
    imageUrl: "https://images.unsplash.com/photo-1518542790933-8fa988944517?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "sharp-sand",
    name: "Sharp Sand",
    category: "Sand",
    pricePerTon: 4500,
    description: "Coarse sharp sand perfect for block making, concrete work, and floor screeding.",
    imageUrl: "https://images.unsplash.com/photo-1621508216173-958428385437?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "laterite",
    name: "Red Laterite",
    category: "Filling",
    pricePerTon: 2500,
    description: "High-quality red laterite for foundation filling and road construction base.",
    imageUrl: "https://images.unsplash.com/photo-1529312265969-923f733ebdf1?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "granite-1-2",
    name: "1/2 inch Granite Stones",
    category: "Granite",
    pricePerTon: 9000,
    description: "Fine crushed 1/2 inch granite stones, excellent for high-strength concrete and asphalt.",
    imageUrl: "https://images.unsplash.com/photo-1549463510-74e892c90666?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "stone-dust",
    name: "Quarry Dust",
    category: "Dust",
    pricePerTon: 3500,
    description: "Fine quarry dust used for paving block installation and as a sand alternative.",
    imageUrl: "https://images.unsplash.com/photo-1580978310931-158f964dc08b?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "hardcore",
    name: "Hardcore Stones",
    category: "Base",
    pricePerTon: 6000,
    description: "Large irregular stones for foundation hardcore packing and erosion control.",
    imageUrl: "https://images.unsplash.com/photo-1506861596707-16013a776c11?q=80&w=2000&auto=format&fit=crop",
  }
];

export default function ProductsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="bg-secondary-950 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Our Materials</h1>
          <p className="text-secondary-300 text-lg max-w-2xl mx-auto">
            Browse our selection of premium construction aggregates. Available for delivery in 5, 10, 20, and 30-ton truckloads.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <div className="w-full md:w-64 shrink-0 space-y-8">
            <div>
              <h3 className="font-heading font-semibold text-lg text-secondary-900 mb-4 flex items-center gap-2">
                <Filter size={18} /> Filters
              </h3>
              
              <div className="space-y-6">
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">Search</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="e.g. Granite..." 
                      className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                    />
                    <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">Categories</label>
                  <div className="space-y-2">
                    {['All', 'Granite', 'Sand', 'Filling', 'Dust', 'Base'].map(cat => (
                      <label key={cat} className="flex items-center gap-3 group cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500 cursor-pointer" />
                        <span className="text-secondary-600 group-hover:text-secondary-900 transition-colors">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS.map(product => (
                <Link href={`/products/${product.id}`} key={product.id} className="group bg-white border border-secondary-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary-500/5 hover:border-primary-200 transition-all flex flex-col">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-secondary-800 rounded-full shadow-sm">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-heading font-bold text-lg text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">{product.name}</h3>
                    <p className="text-sm text-secondary-500 mb-4 line-clamp-2 flex-1">{product.description}</p>
                    
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-secondary-100">
                      <div className="flex flex-col">
                        <span className="text-xs text-secondary-500">Starting at</span>
                        <span className="font-bold text-secondary-900">₦{product.pricePerTon.toLocaleString()} / ton</span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-colors">
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
