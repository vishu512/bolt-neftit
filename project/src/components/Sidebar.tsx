import React from 'react';
import { X, Home, User, Wallet, BarChart3, Settings } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const menuItems = [
    { icon: Home, label: 'Home' },
    { icon: User, label: 'Profile' },
    { icon: Wallet, label: 'Wallet' },
    { icon: BarChart3, label: 'Statistics' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity z-50 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-64 bg-[#3C3C3C] transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <button
            onClick={onClose}
            className="text-white hover:text-[#E4E4E5] transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mt-8">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center gap-4 px-6 py-3 text-[#BEBEBE] hover:text-white hover:bg-[#545454] transition-colors"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}

export default Sidebar