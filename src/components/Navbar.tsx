import React, { useState } from 'react';
import { Menu, Search, ChevronDown } from 'lucide-react';

interface NavbarProps {
  isLoggedIn: boolean;
  onLoginClick: () => void;
  onPageChange: (page: string) => void;
  onMenuClick: () => void;
}

const Navbar = ({ isLoggedIn, onLoginClick, onPageChange, onMenuClick }: NavbarProps) => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 bg-black/50 backdrop-blur-sm border-b border-[#545454] z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold text-white">NEFTIT</h1>
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => onPageChange('discover')}
              className="text-[#E4E4E5] hover:text-white transition-colors"
            >
              Discover
            </button>
            {isLoggedIn && (
              <button 
                onClick={() => onPageChange('streak')}
                className="text-[#E4E4E5] hover:text-white transition-colors"
              >
                Streak
              </button>
            )}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-[#949494]" size={20} />
            <input
              type="text"
              placeholder="Search..."
              className="bg-[#3C3C3C] text-white rounded-lg pl-10 pr-4 py-2 w-[200px] focus:outline-none focus:ring-2 focus:ring-[#545454]"
            />
          </div>

          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center gap-2 text-white hover:text-[#E4E4E5] transition-colors"
              >
                Profile
                <ChevronDown size={16} />
              </button>

              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#3C3C3C] rounded-lg shadow-lg py-2">
                  <div className="px-4 py-2 border-b border-[#545454]">
                    <p className="text-sm text-[#BEBEBE]">XP: 1250</p>
                    <p className="text-sm text-[#BEBEBE]">NEFT Points: 450</p>
                  </div>
                  <button
                    onClick={() => {
                      onPageChange('profile');
                      setIsProfileDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-[#E4E4E5] hover:bg-[#545454] transition-colors"
                  >
                    My Profile
                  </button>
                  <button
                    onClick={() => {
                      onPageChange('collectibles');
                      setIsProfileDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-[#E4E4E5] hover:bg-[#545454] transition-colors"
                  >
                    My Collectibles
                  </button>
                  <button
                    onClick={() => {
                      onPageChange('faq');
                      setIsProfileDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-[#E4E4E5] hover:bg-[#545454] transition-colors"
                  >
                    FAQ
                  </button>
                  <button
                    onClick={() => {
                      onPageChange('refer');
                      setIsProfileDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-[#E4E4E5] hover:bg-[#545454] transition-colors"
                  >
                    Refer a Friend
                  </button>
                  <button
                    onClick={() => {
                      onPageChange('saved');
                      setIsProfileDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-[#E4E4E5] hover:bg-[#545454] transition-colors"
                  >
                    Saved Items
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 text-[#E4E4E5] hover:bg-[#545454] transition-colors"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={onLoginClick}
              className="px-4 py-2 bg-[#39FF14] text-black font-semibold rounded-lg hover:bg-[#32E012] transition-colors"
            >
              Login
            </button>
          )}
          <button
            onClick={onMenuClick}
            className="text-white hover:text-[#E4E4E5] transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;