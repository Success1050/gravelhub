import Link from "next/link";
import { Truck, Menu, X, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-secondary-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary-500 text-white p-2 rounded-xl group-hover:bg-primary-600 transition-colors">
                <Truck size={28} className="stroke-[1.5]" />
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight text-foreground">
                Gravel<span className="text-primary-500">Hub</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-secondary-600 hover:text-primary-500 font-medium transition-colors">
              Products
            </Link>
            <Link href="/calculator" className="text-secondary-600 hover:text-primary-500 font-medium transition-colors">
              Pricing Calculator
            </Link>
            <Link href="/trucks" className="text-secondary-600 hover:text-primary-500 font-medium transition-colors">
              Our Fleet
            </Link>

            <div className="flex items-center space-x-4 ml-4 border-l border-secondary-200 pl-4">
              <Link href="/login" className="text-secondary-800 hover:text-primary-500 font-medium transition-colors">
                Log in
              </Link>
              <Link href="/register" className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-secondary-600 hover:text-primary-500 p-2">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
