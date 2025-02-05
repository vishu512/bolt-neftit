import React from 'react';
import { Compass } from 'lucide-react';

const Discover = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-[#545454] rounded-xl p-8 shadow-lg">
        <div className="flex items-center gap-2 mb-8">
          <Compass className="text-[#39FF14]" size={24} />
          <h2 className="text-2xl font-bold text-white">Discover</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-[#3C3C3C] rounded-lg p-4 hover:bg-[#4A4A4A] transition-colors">
              <div className="aspect-square bg-[#545454] rounded-lg mb-4"></div>
              <h3 className="text-white font-semibold mb-2">Featured Item #{i + 1}</h3>
              <p className="text-[#BEBEBE] text-sm">Coming soon...</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;