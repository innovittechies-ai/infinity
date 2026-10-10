import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  ShieldCheck,
  Award,
  ChevronRight,
  BookOpen,
  GraduationCap
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

interface FooterProps {
  onNavigate: (view: string, subParam?: string) => void;
  onOpenAdmissions: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAdmissions }) => {
  return (
    <footer className="bg-[#08172b] text-slate-300 font-sans border-t-4 border-amber-500">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Institutional Pitch (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900 to-indigo-950 flex flex-col items-center justify-center p-1 border border-amber-400">
                <span className="text-base font-black text-amber-400 leading-none">IMEC</span>
                <span className="text-[8px] font-bold tracking-widest text-white mt-0.5">SAGAR</span>
              </div>
              <div>
                <h3 className="text-base font-black text-white tracking-tight leading-tight">
                  INFINITY MANAGEMENT & ENGINEERING COLLEGE
                </h3>
                <span className="text-xs text-amber-400 font-medium tracking-wide">
                  {COLLEGE_INFO.motto}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Infinity Management & Engineering College (IMEC), Sagar is central India's premier educational institute.
              Approved by AICTE New Delhi and affiliated to Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV) Bhopal,
              we foster cutting-edge research, corporate employability, and holistic technical innovation.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-300">
              <span className="bg-blue-950/80 px-2.5 py-1 rounded border border-blue-800">
                AICTE Permanent ID: 1-424147401
              </span>
              <span className="bg-blue-950/80 px-2.5 py-1 rounded border border-blue-800">
                RGPV Code: 0145
              </span>
            </div>
          </div>

          {/* Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-extrabold text-white tracking-wide uppercase border-b border-blue-900 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('about', 'group')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500" /> Our Group
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about', 'leadership')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500" /> Leadership & Trustees
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about', 'vision')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500" /> Vision & Mission
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('placement', 'overview')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500" /> Training & Placements
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('other', 'nirf')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500" /> NIRF Disclosures
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about', 'mandatory')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer text-amber-300 font-medium"
                >
                  <ShieldCheck className="w-3 h-3 text-amber-400" /> Mandatory AICTE Disclosure
                </button>
              </li>
            </ul>
          </div>

          {/* Academic Programs (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-white tracking-wide uppercase border-b border-blue-900 pb-2">
              Departments & Courses
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('academics', 'cse')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500" /> Computer Science & Engg (CSE)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('academics', 'me')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500" /> Mechanical Engineering (ME)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('academics', 'ce')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500" /> Civil Engineering (CE)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('academics', 'ece')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500" /> Electronics & Communication
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('academics', 'mba')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500" /> Master of Business Admin (MBA)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('admissions', 'scholarships')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer text-emerald-400"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500" /> Scholarships (Post-Matric & MMVY)
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Block (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-white tracking-wide uppercase border-b border-blue-900 pb-2">
              Contact & Campus
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-relaxed">
                  {COLLEGE_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <a href={`tel:${COLLEGE_INFO.phone}`} className="hover:text-white font-semibold">
                    {COLLEGE_INFO.phone}
                  </a>
                  <span className="block text-[11px] text-slate-400">Toll Free: {COLLEGE_INFO.tollFree}</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <a href={`mailto:${COLLEGE_INFO.email}`} className="hover:text-white block">
                    {COLLEGE_INFO.email}
                  </a>
                  <a href={`mailto:${COLLEGE_INFO.admissionsEmail}`} className="hover:text-white text-slate-400 text-[11px] block">
                    {COLLEGE_INFO.admissionsEmail}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAdmissions}
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2 px-3 rounded text-xs transition-colors shadow-sm cursor-pointer"
              >
                Admissions Counseling 2026-27
              </button>
            </div>
          </div>
        </div>

        {/* Student Corner Bar */}
        <div className="mt-10 pt-6 border-t border-blue-900/60 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="font-bold text-white uppercase text-[11px] tracking-wider">Student Corner:</span>
            <button onClick={() => onNavigate('student-corner', 'notes')} className="hover:text-amber-400">Digital Notes</button>
            <span>·</span>
            <button onClick={() => onNavigate('student-corner', 'conduct')} className="hover:text-amber-400">Code of Conduct</button>
            <span>·</span>
            <button onClick={() => onNavigate('student-corner', 'holidays')} className="hover:text-amber-400">Holiday List</button>
            <span>·</span>
            <button onClick={() => onNavigate('student-corner', 'clubs')} className="hover:text-amber-400">Student Clubs</button>
            <span>·</span>
            <button onClick={() => onNavigate('other', 'careers')} className="hover:text-amber-400">Faculty Careers</button>
          </div>
          <div className="text-slate-400 text-[11px]">
            Anti-Ragging Helpline: <span className="text-white font-mono font-bold">1800-180-5522</span> (24x7)
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#05101f] py-4 px-4 md:px-8 border-t border-blue-950 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Infinity Management & Engineering College (IMEC), Sagar. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>AICTE Approved</span>
            <span>·</span>
            <span>RGPV Bhopal</span>
            <span>·</span>
            <span>ISO 9001:2015</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
