import React, { useState } from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import PublicationsPage from './pages/PublicationsPage';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const handleSetActiveTab = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900">
      <NavBar activeTab={activeTab} setActiveTab={handleSetActiveTab} />

      <main className="pt-20">
        {activeTab === 'home'         && <HomePage         setActiveTab={handleSetActiveTab} />}
        {activeTab === 'team'         && <TeamPage />}
        {activeTab === 'publications' && <PublicationsPage />}
      </main>

      <Footer setActiveTab={handleSetActiveTab} />
    </div>
  );
};

export default App;
