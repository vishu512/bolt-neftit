import React from 'react';
import { Trophy, Clock } from 'lucide-react';

const Leaderboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-[#545454] rounded-xl p-8 shadow-lg">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Leaderboard</h2>
          <div className="flex items-center gap-2 text-[#39FF14]">
            <Clock size={20} />
            <span>Coming Soon</span>
          </div>
        </div>

        <div className="flex items-center justify-center py-16">
          <div className="text-center">
            <Trophy className="w-16 h-16 text-[#39FF14] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Leaderboard Coming Soon</h3>
            <p className="text-[#BEBEBE]">Stay tuned for exciting competitions and rewards!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;