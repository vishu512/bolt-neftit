import React from 'react';
import { Trophy, Star, Gem } from 'lucide-react';

const Profile = () => {
  const user = {
    name: "John Doe",
    xp: 1250,
    neftPoints: 450,
    tasksCompleted: 24,
    level: 5,
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200&h=200"
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="bg-[#545454] rounded-xl p-6 shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={user.avatar}
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-[#949494]"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-2">{user.name}</h2>
            <div className="flex flex-wrap gap-4">
              <div className="bg-[#3C3C3C] rounded-lg px-4 py-2">
                <p className="text-sm text-[#BEBEBE]">XP</p>
                <p className="text-xl text-white font-bold">{user.xp}</p>
              </div>
              <div className="bg-[#3C3C3C] rounded-lg px-4 py-2">
                <p className="text-sm text-[#BEBEBE]">NEFT Points</p>
                <p className="text-xl text-white font-bold">{user.neftPoints}</p>
              </div>
              <div className="bg-[#3C3C3C] rounded-lg px-4 py-2">
                <p className="text-sm text-[#BEBEBE]">Level</p>
                <p className="text-xl text-white font-bold">{user.level}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tasks & Collectibles */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {/* Tasks Section */}
        <div className="bg-[#545454] rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="text-[#E4E4E5]" />
            <h3 className="text-xl font-bold text-white">Tasks Completed</h3>
          </div>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-[#3C3C3C] rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-white">Task {i + 1}</span>
                  <span className="text-[#E4E4E5]">+50 XP</span>
                </div>
                <div className="mt-2 bg-[#7A7A7A] rounded-full h-2">
                  <div
                    className="bg-[#BEBEBE] h-full rounded-full"
                    style={{ width: `${(i + 1) * 33}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Collectibles Section */}
        <div className="bg-[#545454] rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <Gem className="text-[#E4E4E5]" />
            <h3 className="text-xl font-bold text-white">My Collectibles</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-[#3C3C3C] rounded-lg p-4 aspect-square flex flex-col items-center justify-center">
                <Star className="text-[#BEBEBE] w-12 h-12 mb-2" />
                <span className="text-white text-sm">Neft-{70 + i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;