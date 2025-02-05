import React from 'react';
import { Camera, Disc as Discord, Twitter, Wallet } from 'lucide-react';

const EditProfile = () => {
  const user = {
    name: "John Doe",
    streak: 7,
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200&h=200"
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-[#545454] rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-8">Edit Profile</h2>

        <div className="space-y-8">
          {/* Profile Picture */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={user.avatar}
                alt="Profile"
                className="w-32 h-32 rounded-full border-2 border-[#949494]"
              />
              <button className="absolute bottom-0 right-0 p-2 bg-[#39FF14] rounded-full text-black hover:bg-[#32E012] transition-colors">
                <Camera size={20} />
              </button>
            </div>
          </div>

          {/* Username */}
          <div className="space-y-2">
            <label className="text-[#E4E4E5] block">Username</label>
            <input
              type="text"
              value={user.name}
              className="w-full bg-[#3C3C3C] text-white rounded-lg px-4 py-2"
            />
          </div>

          {/* Connected Wallets */}
          <div className="space-y-4">
            <h3 className="text-[#E4E4E5] font-semibold">Connected Wallets</h3>
            <button className="w-full flex items-center justify-between bg-[#3C3C3C] text-white rounded-lg px-4 py-2 hover:bg-[#4A4A4A] transition-colors">
              <div className="flex items-center gap-2">
                <Wallet size={20} />
                <span>Connect Wallet</span>
              </div>
              <span className="text-[#39FF14]">Connect</span>
            </button>
          </div>

          {/* Connected Socials */}
          <div className="space-y-4">
            <h3 className="text-[#E4E4E5] font-semibold">Connected Socials</h3>
            <button className="w-full flex items-center justify-between bg-[#3C3C3C] text-white rounded-lg px-4 py-2 hover:bg-[#4A4A4A] transition-colors">
              <div className="flex items-center gap-2">
                <Discord size={20} />
                <span>Discord</span>
              </div>
              <span className="text-[#39FF14]">Connect</span>
            </button>
            <button className="w-full flex items-center justify-between bg-[#3C3C3C] text-white rounded-lg px-4 py-2 hover:bg-[#4A4A4A] transition-colors">
              <div className="flex items-center gap-2">
                <Twitter size={20} />
                <span>Twitter</span>
              </div>
              <span className="text-[#39FF14]">Connect</span>
            </button>
          </div>

          {/* Streak */}
          <div className="bg-[#3C3C3C] rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[#E4E4E5]">Daily Streak</span>
              <span className="text-[#39FF14] font-bold">{user.streak} days</span>
            </div>
            <button className="w-full bg-[#39FF14] text-black font-semibold py-2 rounded-lg hover:bg-[#32E012] transition-colors">
              Check In
            </button>
          </div>

          {/* Save Button */}
          <button className="w-full bg-[#39FF14] text-black font-semibold py-2 rounded-lg hover:bg-[#32E012] transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;