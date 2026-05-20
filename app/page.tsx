import Link from "next/link";
import { ArrowRight, Truck, HardHat, ShieldCheck, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Abstract Background Elements instead of an image for now, keeping it premium with gradients */}
        <div className="absolute inset-0 bg-secondary-950">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-900/40 via-secondary-900/20 to-transparent" />
          <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary-600/20 blur-[120px]" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary-800/20 blur-[100px]" />
          
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdHRlcm4gaWQ9ImlubmVyR3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 mb-8 backdrop-blur-sm animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-sm font-medium tracking-wide uppercase">Serving the Construction Industry</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tight mb-6 max-w-4xl leading-tight">
            Premium Construction Stones Delivered to Your Site by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Truckload</span>
          </h1>
          
          <p className="text-lg md:text-xl text-secondary-300 max-w-2xl mb-10 leading-relaxed font-light">
            Granite, Gravel, Sharp Sand, and Aggregates for every construction project. Real-time pricing, instant quotes, and reliable delivery.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/products" className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-primary-600 rounded-full overflow-hidden transition-all hover:bg-primary-500 hover:shadow-[0_0_40px_-10px_rgba(255,80,17,0.5)] transform hover:-translate-y-1">
              <span className="mr-2">Order Materials Now</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link href="/calculator" className="inline-flex items-center justify-center px-8 py-4 font-medium text-white glass-dark rounded-full hover:bg-white/10 transition-all transform hover:-translate-y-1">
              Pricing Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-950 mb-4">Why Choose GravelHub?</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">We streamline the procurement of bulk construction materials, saving you time and money.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-3xl bg-secondary-50 border border-secondary-100 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-500/5 transition-all group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-primary-500 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <Truck size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold text-secondary-900 mb-3">Versatile Fleet</h3>
              <p className="text-secondary-600 leading-relaxed">
                From 5-ton mini tippers to 30-ton heavy-duty dump trucks, we have the right vehicle for your site access and volume needs.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="p-8 rounded-3xl bg-secondary-50 border border-secondary-100 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-500/5 transition-all group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-primary-500 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold text-secondary-900 mb-3">Distance-based Pricing</h3>
              <p className="text-secondary-600 leading-relaxed">
                Our smart calculator instantly determines delivery costs based on the exact distance from the quarry to your construction site.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="p-8 rounded-3xl bg-secondary-50 border border-secondary-100 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-500/5 transition-all group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-primary-500 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold text-secondary-900 mb-3">Quality Assured</h3>
              <p className="text-secondary-600 leading-relaxed">
                All our aggregates meet strict industry standards, ensuring the structural integrity of your construction projects.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdHRlcm4gaWQ9ImlubmVyR3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Ready to start your next project?</h2>
          <p className="text-primary-100 text-lg mb-10">Create an account today to get instant quotes, track deliveries, and manage all your bulk material orders in one place.</p>
          <Link href="/register" className="inline-flex items-center justify-center px-8 py-4 font-medium text-primary-600 bg-white rounded-full hover:bg-primary-50 transition-all shadow-xl transform hover:-translate-y-1">
            Create Free Account
          </Link>
        </div>
      </section>
    </div>
  );
}
