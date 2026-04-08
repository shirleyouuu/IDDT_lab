import React, { useState, useEffect } from 'react';
import { Activity, Cpu, Microscope, ChevronLeft, ChevronRight } from 'lucide-react';
import { SLIDES } from '../data/labData';

const HomePage = ({ setActiveTab }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % SLIDES.length);
    }, 8000); // 8 秒切換一次
    return () => clearInterval(timer);
  }, []);

  const visibleSlides = isMobile ? 1 : 3;
  const slideDisplay = Array.from({ length: visibleSlides }, (_, idx) => SLIDES[(currentSlide + idx) % SLIDES.length]);

  return (
    <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero */}
      <div className="relative py-28 px-6 overflow-hidden text-white"
        style={{
          backgroundImage: 'url(/IDDT_lab/homepage.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-950/60 pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="bg-blue-500/20 inline-block px-4 py-1 border border-blue-400/40 rounded-full text-blue-200 text-lg font-semibold mb-8">
            工業工程與工程管理學系｜國立清華大學
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            智慧決策與數位雙生
          </h1>
          <p className="text-3xl text-blue-400 font-semibold mb-8">
            Intelligence Decision & Digital Twin Lab
          </p>
          <div className="flex justify-center space-x-6">
            <button
              onClick={() => setActiveTab('team')}
              className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:-translate-y-1 hover:shadow-2xl transition-all"
            >
              探索研究團隊
            </button>
            <button
              onClick={() => setActiveTab('publications')}
              className="bg-transparent text-white border-2 border-white/70 px-8 py-4 rounded-xl font-bold hover:-translate-y-1 hover:bg-white/10 transition-all"
            >
              相關學術研究
            </button>
          </div>
        </div>
      </div>

      {/* Research Summary */}
      <div id="research-section" className="bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">核心研究領域</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "數位雙生建模", desc: "建立高擬真度虛擬模型，精準預測物理設備狀態。", icon: <Activity className="text-cyan-500" /> },
              { title: "智慧調度優化", desc: "運用啟發式算法與 AI，解決複雜生產決策問題。", icon: <Cpu className="text-cyan-500" /> },
              { title: "即時監控預警", desc: "大數據流處理，實現秒級異狀偵測與主動回饋。", icon: <Microscope className="text-cyan-500" /> },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 輪播 */}
      <div className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">研究室日常</h2>
          </div>
          <div className="relative w-full rounded-[40px] overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-4">
              {slideDisplay.map((slide, idx) => (
                <div key={idx} className="relative rounded-[20px] overflow-hidden aspect-[4/3] border border-slate-200 shadow-sm">
                  <img src={slide.url} alt={slide.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white text-lg font-bold">{slide.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                onClick={() => setCurrentSlide((current) => (current - 1 + SLIDES.length) % SLIDES.length)}
                className="bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} className="text-slate-700" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
              <button
                onClick={() => setCurrentSlide((current) => (current + 1) % SLIDES.length)}
                className="bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition"
                aria-label="Next slide"
              >
                <ChevronRight size={16} className="text-slate-700" />
              </button>
            </div>
          </div>
          <div className="mt-4 flex justify-center space-x-2">
            {Array.from({ length: SLIDES.length }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === currentSlide ? 'bg-cyan-400 w-8' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
