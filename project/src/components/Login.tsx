import React from 'react';
import { User, Lock, ToggleLeft as Google, Twitter, Wallet } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto bg-[#545454] rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Welcome to NEFTIT</h2>
        
        <div className="space-y-4 mb-8">
          <button className="w-full flex items-center justify-center gap-2 bg-white text-black py-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Google size={20} />
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-[#1DA1F2] text-white py-2 rounded-lg hover:bg-[#1A8CD8] transition-colors">
            <Twitter size={20} />
            Continue with Twitter
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-[#3C3C3C] text-white py-2 rounded-lg hover:bg-[#4A4A4A] transition-colors">
            <Wallet size={20} />
            Connect Wallet
          </button>
        </div>

        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#7A7A7A]"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-[#545454] text-[#BEBEBE]">Or continue with</span>
          </div>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-[#E4E4E5] block">Email</label>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="w-full bg-[#3C3C3C] text-white rounded-lg px-4 py-2 pl-10"
                placeholder="Enter your email"
              />
              <User className="absolute left-3 top-2.5 text-[#949494]" size={20} />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="text-[#E4E4E5] block">Password</label>
            <div className="relative">
              <input
                type="password"
                id="password"
                className="w-full bg-[#3C3C3C] text-white rounded-lg px-4 py-2 pl-10"
                placeholder="Enter your password"
              />
              <Lock className="absolute left-3 top-2.5 text-[#949494]" size={20} />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#39FF14] text-black font-semibold py-2 rounded-lg hover:bg-[#32E012] transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;