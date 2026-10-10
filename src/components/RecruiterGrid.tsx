import React from 'react';
import { Building2, Award, CheckCircle, Handshake } from 'lucide-react';
import { RECRUITERS } from '../data/collegeData';

export const RecruiterGrid: React.FC = () => {
  return (
    <section className="py-14 px-4 md:px-8 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            <Handshake className="w-3.5 h-3.5 text-amber-600" />
            <span>Corporate Partnerships & Placement Ecosystem</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c2340] tracking-tight">
            Our Prominent Recruiters
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Leading conglomerates and Fortune 500 multinationals actively recruit engineering and management talent from IMEC Sagar.
          </p>
        </div>

        {/* Corporate Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {RECRUITERS.map((recruiter, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200 hover:border-blue-400 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all text-center flex flex-col justify-between group"
            >
              <div className="py-2">
                <div className="w-10 h-10 rounded-lg bg-blue-900/10 text-blue-900 flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                  <Building2 className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-sm text-slate-900 group-hover:text-blue-900 transition-colors">
                  {recruiter.name}
                </h4>
                <span className="text-[10px] text-slate-500 font-medium block">
                  {recruiter.tier}
                </span>
              </div>
              <div className="mt-2 pt-2 border-t border-slate-200 text-[11px] font-bold text-amber-600 font-mono tabular-nums">
                Up to {recruiter.package}
              </div>
            </div>
          ))}
        </div>

        {/* Continuous Logo Ribbon */}
        <div className="pt-4 border-t border-slate-100 overflow-hidden relative">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-sm font-bold text-slate-400 uppercase tracking-widest">
            {RECRUITERS.map((r, i) => (
              <span key={i} className="hover:text-blue-900 transition-colors flex items-center gap-2">
                <span>{r.name}</span>
                <span className="text-slate-300">★</span>
              </span>
            ))}
            {RECRUITERS.map((r, i) => (
              <span key={`dup-${i}`} className="hover:text-blue-900 transition-colors flex items-center gap-2">
                <span>{r.name}</span>
                <span className="text-slate-300">★</span>
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Placement Statistics Bar */}
        <div className="bg-[#0f2d59] text-white rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-md">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums">
              ₹ 7.09 LPA
            </div>
            <span className="text-xs text-slate-300 font-medium mt-1 block">
              Highest On-Campus CTC
            </span>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              ₹ 4.20 LPA
            </div>
            <span className="text-xs text-slate-300 font-medium mt-1 block">
              Average CTC Offered
            </span>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums">
              150+
            </div>
            <span className="text-xs text-slate-300 font-medium mt-1 block">
              Corporate Recruitment Drives
            </span>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              85%+
            </div>
            <span className="text-xs text-slate-300 font-medium mt-1 block">
              Overall Placement Success
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
