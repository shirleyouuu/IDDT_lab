import React, { useState } from 'react';
import { ChevronRight, GraduationCap, Briefcase, Phone, Mail, MapPin, Users, X } from 'lucide-react';
import { PROFESSOR, TEAM } from '../data/labData';

const TeamPage = () => {
  const [activeGraduateType, setActiveGraduateType] = useState(null);
  const graduateList = activeGraduateType ? TEAM.graduates[activeGraduateType] : [];
  const graduateTitle = activeGraduateType === 'masters' ? '碩士班已畢業學生' : '在職專班已畢業學生';
  const graduateDescription = activeGraduateType === 'masters'
    ? '以下為本實驗室過往碩士班畢業學生'
    : '以下為本實驗室過往在職專班畢業學生';
  const mastersYear2 = TEAM.masters.filter((m) => m.year === '碩二');
  const mastersYear1 = TEAM.masters.filter((m) => m.year === '碩一');

  return (
    <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-7xl mx-auto px-6 py-12">
    <header className="mb-16">
      <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">成員介紹</h2>
      <div className="w-20 h-2 bg-cyan-600 rounded-full" />
    </header>

    {/* 教授 */}
    <div className="bg-white rounded-[40px] shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100 mb-24">
      <div className="flex flex-col lg:flex-row lg:gap-8">
        <div className="lg:w-1/3 p-8 md:p-14 flex items-start">
          <img src={PROFESSOR.image} alt={PROFESSOR.name} className="w-full h-full object-cover min-h-[250px] rounded-2xl" />
        </div>
        <div className="lg:w-2/3 p-8 md:p-14">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-4xl font-bold text-slate-900 mb-2">{PROFESSOR.name}</h3>
              <p className="text-cyan-600 font-bold text-xl">{PROFESSOR.title}</p>
            </div>
            <div className="hidden md:flex flex-col text-right text-sm text-slate-500 space-y-2">
              <div className="flex items-center justify-end space-x-2"><Phone size={14} /><span>{PROFESSOR.contact.phone}</span></div>
              <div className="flex items-center justify-end space-x-2 text-cyan-600 font-medium"><Mail size={14} /><span>{PROFESSOR.contact.email}</span></div>
              <div className="flex items-center justify-end space-x-2"><MapPin size={14} /><span>{PROFESSOR.contact.office}</span></div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="flex items-center text-slate-800 font-bold mb-4 border-b pb-2">
                <GraduationCap className="mr-2 text-cyan-500" size={18} /> 學歷背景
              </h4>
              <ul className="space-y-3">
                {PROFESSOR.education.map((edu, i) => (
                  <li key={i} className="text-slate-600 flex items-start text-sm leading-relaxed">
                    <ChevronRight size={14} className="mt-1 mr-2 text-cyan-400" /> {edu}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="flex items-center text-slate-800 font-bold mb-4 border-b pb-2">
                <Briefcase className="mr-2 text-cyan-500" size={18} /> 工作經歷
              </h4>
              <ul className="space-y-3">
                {PROFESSOR.experience.map((exp, i) => (
                  <li key={i} className="text-slate-600 flex items-start text-sm leading-relaxed">
                    <ChevronRight size={14} className="mt-1 mr-2 text-cyan-400" /> {exp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10">
            <h4 className="text-slate-800 font-bold mb-4">研究領域 Focus</h4>
            <div className="flex flex-wrap gap-2">
              {PROFESSOR.researchInterests.map((interest, i) => (
                <span key={i} className="bg-slate-100 text-slate-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-cyan-50 hover:text-cyan-600 transition-colors cursor-default">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 md:px-14 pb-8 md:pb-14 text-slate-600 text-sm leading-relaxed">
        <p>{PROFESSOR.biography}</p>
      </div>
    </div>

    {/* 學生 */}
    <div className="space-y-24">
      {/* 碩士班 */}
      <div>
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <div className="flex items-center">
            <h3 className="text-3xl font-black text-slate-800">碩士班學生</h3>
            <span className="ml-4 px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-bold rounded-full">Full-time Masters</span>
          </div>
          <button
            type="button"
            onClick={() => setActiveGraduateType('masters')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 shadow-sm"
          >
            <Users size={16} /> 查看已畢業學生
          </button>
        </div>

        <div className="space-y-10">
          <div>
            <h4 className="text-2xl font-bold text-slate-800 mb-6">碩二生</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mastersYear2.map((m, idx) => (
                <div key={idx} className="relative bg-blue rounded-3xl overflow-hidden border border-slate-100 hover:border-cyan-200 transition-all shadow-sm hover:shadow-xl group">
                  <span className="absolute top-4 right-4 text-[10px] uppercase bg-slate-800 text-white px-2 py-1 rounded-full">
                    {m.year}
                  </span>
                  <div className="h-48 bg-slate-100 overflow-hidden">
                    <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-lg font-bold text-slate-800 mb-1">{m.name}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed italic border-t pt-3">{m.interest}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-slate-800 mb-6">碩一生</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mastersYear1.map((m, idx) => (
                <div key={idx} className="relative bg-blue rounded-3xl overflow-hidden border border-slate-100 hover:border-cyan-200 transition-all shadow-sm hover:shadow-xl group">
                  <span className="absolute top-4 right-4 text-[10px] uppercase bg-slate-800 text-white px-2 py-1 rounded-full">
                    {m.year}
                  </span>
                  <div className="h-48 bg-slate-100 overflow-hidden">
                    <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-lg font-bold text-slate-800 mb-1">{m.name}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed italic border-t pt-3">{m.interest}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 在職專班 */}
      <div>
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <div className="flex items-center">
            <h3 className="text-3xl font-black text-slate-800">在職專班學生</h3>
            <span className="ml-4 px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">Part-time / Professional</span>
          </div>
          <button
            type="button"
            onClick={() => setActiveGraduateType('professional')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 shadow-sm"
          >
            <Users size={16} /> 查看已畢業學生
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM.professional.map((m, idx) => (
            <div key={idx} className="bg-white rounded-3xl flex overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all p-4 items-center gap-6">
              <img src={m.image} alt={m.name} className="w-24 h-24 rounded-2xl object-cover shadow-sm" />
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-lg font-bold text-slate-800">{m.name}</h4>
                  <span className="text-[9px] bg-slate-800 text-white px-2 py-0.5 rounded uppercase">{m.company}</span>
                </div>
                <p className="text-slate-500 text-xs leading-snug">{m.interest}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {activeGraduateType && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60">
        <div className="w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-[32px] bg-white shadow-2xl border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 border-b border-slate-200 px-6 py-5">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">{graduateTitle}</h3>
              <p className="text-sm text-slate-500">{graduateDescription}</p>
            </div>
            <button
              type="button"
              onClick={() => setActiveGraduateType(null)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200"
              aria-label="關閉已畢業學生視窗"
            >
              <X size={18} />
            </button>
          </div>
          <div className="max-h-[72vh] overflow-y-auto px-6 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {graduateList.length > 0 ? (
                graduateList.map((graduate, idx) => (
                  <div key={idx} className="bg-white rounded-3xl flex overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all p-4 items-center gap-6">
                    <img src={graduate.image} alt={graduate.name} className="w-24 h-24 rounded-2xl object-cover shadow-sm" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-lg font-bold text-slate-800">{graduate.name}</h4>
                        <span className="text-[9px] bg-slate-800 text-white px-2 py-0.5 rounded uppercase">
                          {graduate.company || graduate.year || '已畢業'}
                        </span>
                      </div>
                      <p className="text-slate-500 text-xs leading-snug">{graduate.interest}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-500">
                  目前尚無已畢業學生資料。
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )}
  </section>
  );
};

export default TeamPage;
