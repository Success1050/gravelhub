"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator as CalculatorIcon, Truck, MapPin, Package, AlertCircle } from "lucide-react";

// Mock Data
const MATERIALS = [
  { id: "granite-3-4", name: "3/4 inch Granite Stones", pricePerTon: 8500 },
  { id: "sharp-sand", name: "Sharp Sand", pricePerTon: 4500 },
  { id: "laterite", name: "Red Laterite", pricePerTon: 2500 },
  { id: "stone-dust", name: "Quarry Dust", pricePerTon: 3500 },
];

const TRUCKS = [
  { id: "5", name: "5 Ton Mini Tipper", capacity: 5, baseDelivery: 15000, perKm: 500 },
  { id: "10", name: "10 Ton Tipper", capacity: 10, baseDelivery: 25000, perKm: 800 },
  { id: "20", name: "20 Ton Dump Truck", capacity: 20, baseDelivery: 45000, perKm: 1200 },
  { id: "30", name: "30 Ton Heavy Duty", capacity: 30, baseDelivery: 60000, perKm: 1500 },
];

export default function CalculatorPage() {
  const [material, setMaterial] = useState(MATERIALS[0].id);
  const [truck, setTruck] = useState(TRUCKS[1].id);
  const [loads, setLoads] = useState(1);
  const [distance, setDistance] = useState(15); // Mock distance in km

  const selectedMaterial = MATERIALS.find(m => m.id === material)!;
  const selectedTruck = TRUCKS.find(t => t.id === truck)!;

  // Pricing Logic
  const totalTonnage = selectedTruck.capacity * loads;
  const materialCost = selectedMaterial.pricePerTon * totalTonnage;
  
  // Delivery cost per load
  const deliveryCostPerLoad = selectedTruck.baseDelivery + (selectedTruck.perKm * distance);
  const totalDeliveryCost = deliveryCostPerLoad * loads;
  
  const subtotal = materialCost + totalDeliveryCost;
  const tax = subtotal * 0.075; // 7.5% VAT (Nigeria standard)
  const total = subtotal + tax;

  return (
    <div className="bg-background min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-secondary-900 mb-4 flex items-center justify-center gap-3">
            <CalculatorIcon className="text-primary-500" size={36} />
            Pricing Calculator
          </h1>
          <p className="text-secondary-600 text-lg max-w-2xl mx-auto">
            Get an instant estimate for your bulk materials delivery. Prices include material cost and estimated transport charges based on distance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Form Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-secondary-100 shadow-sm">
              <h2 className="text-xl font-heading font-semibold mb-6 flex items-center gap-2 text-secondary-900">
                <Package className="text-primary-500" /> Material Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">Select Material</label>
                  <select 
                    value={material} 
                    onChange={(e) => setMaterial(e.target.value)}
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-secondary-50"
                  >
                    {MATERIALS.map(m => (
                      <option key={m.id} value={m.id}>{m.name} (₦{m.pricePerTon.toLocaleString()}/ton)</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">Truck Capacity</label>
                  <select 
                    value={truck} 
                    onChange={(e) => setTruck(e.target.value)}
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-secondary-50"
                  >
                    {TRUCKS.map(t => (
                      <option key={t.id} value={t.id}>{t.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">Number of Truckloads</label>
                  <div className="flex items-center">
                    <button 
                      onClick={() => setLoads(Math.max(1, loads - 1))}
                      className="w-12 h-12 flex items-center justify-center bg-secondary-100 text-secondary-700 rounded-l-xl hover:bg-secondary-200"
                    >-</button>
                    <input 
                      type="number" 
                      value={loads} 
                      onChange={(e) => setLoads(Math.max(1, parseInt(e.target.value) || 1))}
                      className="h-12 w-full text-center border-y border-secondary-100 focus:outline-none"
                      min="1"
                    />
                    <button 
                      onClick={() => setLoads(loads + 1)}
                      className="w-12 h-12 flex items-center justify-center bg-secondary-100 text-secondary-700 rounded-r-xl hover:bg-secondary-200"
                    >+</button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">Estimated Distance (km) <span className="text-xs text-secondary-400 font-normal ml-1">Mocked for UI</span></label>
                  <input 
                    type="range" 
                    min="1" 
                    max="150" 
                    value={distance} 
                    onChange={(e) => setDistance(parseInt(e.target.value))}
                    className="w-full h-2 bg-secondary-200 rounded-lg appearance-none cursor-pointer accent-primary-600 mt-4"
                  />
                  <div className="flex justify-between text-xs text-secondary-500 mt-2">
                    <span>1 km</span>
                    <span className="font-bold text-primary-600">{distance} km</span>
                    <span>150 km</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex items-start gap-4">
              <AlertCircle className="text-blue-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-blue-900 font-medium mb-1">Pricing Notice</h4>
                <p className="text-blue-700 text-sm">
                  This calculator provides an estimate. Final delivery charges may vary slightly based on exact Google Maps routing from the nearest quarry to your site address.
                </p>
              </div>
            </div>
          </div>

          {/* Receipt Section */}
          <div>
            <div className="bg-secondary-950 text-white rounded-3xl p-8 sticky top-28 shadow-2xl">
              <h3 className="text-xl font-heading font-semibold mb-6 border-b border-secondary-800 pb-4">Quote Summary</h3>
              
              <div className="space-y-4 text-sm mb-6">
                <div className="flex justify-between">
                  <span className="text-secondary-400">Material</span>
                  <span className="font-medium text-right">{selectedMaterial.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-400">Total Volume</span>
                  <span className="font-medium">{totalTonnage} Tons ({loads} loads)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-400">Delivery Distance</span>
                  <span className="font-medium">~{distance} km</span>
                </div>
              </div>
              
              <div className="space-y-4 py-6 border-y border-secondary-800 mb-6">
                <div className="flex justify-between">
                  <span className="text-secondary-300">Material Cost</span>
                  <span>₦{materialCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-300">Transport & Logistics</span>
                  <span>₦{totalDeliveryCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-secondary-400 text-sm">
                  <span>VAT (7.5%)</span>
                  <span>₦{tax.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-end mb-8">
                <span className="text-lg font-medium text-secondary-300">Total</span>
                <span className="text-3xl font-heading font-bold text-primary-400">
                  ₦{total.toLocaleString(undefined, {maximumFractionDigits: 0})}
                </span>
              </div>
              
              <Link href="/login?redirect=checkout" className="w-full flex items-center justify-center py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-colors shadow-lg">
                Proceed to Order
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
