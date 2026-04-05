import React from 'react';
import { ChevronRight, GraduationCap, Briefcase, Phone, Mail, MapPin } from 'lucide-react';
import { PROFESSOR, TEAM } from '../data/labData';

const TeamPage = () => (
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
        <div className="flex items-center mb-10">
          <h3 className="text-3xl font-black text-slate-800">碩士班學生</h3>
          <span className="ml-4 px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-bold rounded-full">Full-time Masters</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.masters.map((m, idx) => (
            <div key={idx} className="bg-blue rounded-3xl overflow-hidden border border-slate-100 hover:border-cyan-200 transition-all shadow-sm hover:shadow-xl group">
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

      {/* 在職專班 */}
      <div>
        <div className="flex items-center mb-10">
          <h3 className="text-3xl font-black text-slate-800">在職專班學生</h3>
          <span className="ml-4 px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">Part-time / Professional</span>
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
  </section>
);

export default TeamPage;
