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

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900">
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="pt-20">
        {activeTab === 'home'         && <HomePage         setActiveTab={setActiveTab} />}
        {activeTab === 'team'         && <TeamPage />}
        {activeTab === 'publications' && <PublicationsPage />}
      </main>

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;
