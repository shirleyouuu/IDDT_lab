import React, { useRef, useEffect } from 'react';
import { BookOpen, Briefcase, Microscope, MapPin } from 'lucide-react';
import { PUBLICATIONS } from '../data/labData';

const PublicationsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const nstcRef = useRef(null);
  const industryRef = useRef(null);
  const journalsRef = useRef(null);

  const handleScroll = (ref) => {
    const element = ref.current;
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-7xl mx-auto px-6 py-12">
      <header className="mb-12">
        <div className="mb-6">
          <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">相關學術研究</h2>
        </div>
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => handleScroll(nstcRef)}
            className="px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded-lg hover:bg-blue-200 transition-colors flex items-center gap-2"
          >
            <BookOpen size={16} /> 國科會計畫
          </button>
          <button
            onClick={() => handleScroll(industryRef)}
            className="px-4 py-2 bg-cyan-100 text-cyan-700 font-semibold rounded-lg hover:bg-cyan-200 transition-colors flex items-center gap-2"
          >
            <Briefcase size={16} /> 產學合作
          </button>
          <button
            onClick={() => handleScroll(journalsRef)}
            className="px-4 py-2 bg-indigo-100 text-indigo-700 font-semibold rounded-lg hover:bg-indigo-200 transition-colors flex items-center gap-2"
          >
            <Microscope size={16} /> 發行研究
          </button>
        </div>
      </header>

      <div className="space-y-16">
        {/* 國科會計畫 */}
        <div className="space-y-6">
          <div ref={nstcRef} className="flex items-center space-x-3 mb-8">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><BookOpen size={20} /></div>
            <h3 className="text-2xl font-bold text-slate-800">國科會計畫</h3>
          </div>
          <div className="space-y-4">
            {PUBLICATIONS.nstc.map((p, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 transition-all">
                <p className="text-[14px] text-blue-500 font-bold mb-3">{p.date}</p>
                <h4 className="font-bold text-slate-800 whitespace-pre-line">{p.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* 產學合作 */}
        <div className="space-y-6">
          <div ref={industryRef} className="flex items-center space-x-3 mb-8">
            <div className="p-2 bg-cyan-100 rounded-lg text-cyan-600"><Briefcase size={20} /></div>
            <h3 className="text-2xl font-bold text-slate-800">產學合作計畫</h3>
          </div>
          <div className="space-y-4">
            {PUBLICATIONS.industry.map((p, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-cyan-200 transition-all">
                <p className="text-[14px] text-cyan-500 font-bold mb-3">{p.partner}</p>
                <h4 className="font-bold text-slate-800">{p.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* 期刊論文 */}
        <div className="space-y-6">
          <div ref={journalsRef} className="flex items-center space-x-3 mb-8">
            <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600"><Microscope size={20} /></div>
            <h3 className="text-2xl font-bold text-slate-800">發行研究 (Journals)</h3>
          </div>
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
            {PUBLICATIONS.journals.map((p, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-indigo-200 transition-all">
                <div className="flex items-start gap-4">
                  <span className="text-xs font-bold text-indigo-500 whitespace-nowrap mt-1 flex-shrink-0">#{i + 1}</span>
                  <h4 className="font-bold text-slate-800 leading-snug">{p.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsPage;
