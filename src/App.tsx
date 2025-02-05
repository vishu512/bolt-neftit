import React, { useState } from 'react';
import { Menu, Search } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import Login from './components/Login';
import Navbar from './components/Navbar';
import EditProfile from './components/EditProfile';
import Discover from './components/Discover';
import Leaderboard from './components/Leaderboard';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    if (!isLoggedIn) return <Login onLogin={() => setIsLoggedIn(true)} />;

    switch (currentPage) {
      case 'profile':
        return <Profile />;
      case 'edit-profile':
        return <EditProfile />;
      case 'discover':
        return <Discover />;
      case 'leaderboard':
        return <Leaderboard />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#3C3C3C]">
      <Navbar 
        isLoggedIn={isLoggedIn} 
        onLoginClick={() => setCurrentPage('login')}
        onPageChange={setCurrentPage}
        onMenuClick={() => setIsSidebarOpen(true)}
      />
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        onPageChange={setCurrentPage}
      />
      <main className="pt-16">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;