import React, { useState } from 'react';
import {
  Briefcase,
  TrendingUp,
  Cpu,
  Award,
  Building2,
  CheckCircle,
  ExternalLink,
  Users,
  Clock,
  Sparkles
} from 'lucide-react';
import { PLACED_STUDENTS, RECRUITERS, TRAINING_PROGRAMS, TrainingProgram } from '../data/collegeData';

interface PlacementViewProps {
  initialSubSection?: string;
  onOpenTrainingEnroll: (program: TrainingProgram) => void;
}

export const PlacementView: React.FC<PlacementViewProps> = ({
  initialSubSection = 'overview',
  onOpenTrainingEnroll,
}) => {
  const [activeSection, setActiveSection] = useState<string>(initialSubSection);

  return (
    <div className="py-10 px-4 md:px-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Title */}
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Career Advancement & Industry Linkages
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0c2340] tracking-tight mt-1">
            Training & Placement (T & P) Cell
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Bridging academic excellence with corporate requirements through high-impact recruitment and training.
          </p>
        </div>

        {/* Sub-Section Navigation Tabs */}
        <div className="bg-white rounded-xl border border-slate-200 p-1 flex items-center gap-1 text-xs font-semibold overflow-x-auto shadow-xs">
          {[
            { id: 'overview', label: 'T&P Overview & Statistics' },
            { id: 'incubation', label: 'Incubation & Startup Hub' },
            { id: 'training', label: 'Technical Training Tracks' },
            { id: 'recruiters', label: 'Prominent Recruiters' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id)}
              className={`flex-1 py-2 px-3 rounded-lg text-center transition-all cursor-pointer whitespace-nowrap ${
                activeSection === tab.id
                  ? 'bg-blue-900 text-white font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 1. OVERVIEW & STATS */}
        {activeSection === 'overview' && (
          <div className="space-y-8">
            {/* KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs text-center space-y-1">
                <span className="text-xs font-bold text-amber-700 uppercase">Highest CTC</span>
                <div className="text-2xl sm:text-3xl font-black text-amber-600 font-mono tabular-nums">
                  ₹ 7.09 LPA
                </div>
                <span className="text-[11px] text-slate-500">Hexaware Technologies</span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs text-center space-y-1">
                <span className="text-xs font-bold text-blue-900 uppercase">Average CTC</span>
                <div className="text-2xl sm:text-3xl font-black text-blue-950 font-mono tabular-nums">
                  ₹ 4.20 LPA
                </div>
                <span className="text-[11px] text-slate-500">Across All Disciplines</span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs text-center space-y-1">
                <span className="text-xs font-bold text-emerald-700 uppercase">Placement Rate</span>
                <div className="text-2xl sm:text-3xl font-black text-emerald-700 font-mono tabular-nums">
                  85%+
                </div>
                <span className="text-[11px] text-slate-500">Consecutive 5 Years</span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs text-center space-y-1">
                <span className="text-xs font-bold text-purple-700 uppercase">Recruiters On-Campus</span>
                <div className="text-2xl sm:text-3xl font-black text-purple-950 font-mono tabular-nums">
                  150+
                </div>
                <span className="text-[11px] text-slate-500">MNCs & Startups</span>
              </div>
            </div>

            {/* Placed Students Master Table */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#0c2340]">Recent Student Placement Selections</h3>
                  <p className="text-xs text-slate-500">Authentic records from recent placement cycles.</p>
                </div>
                <span className="text-xs font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                  Batch 2025-26
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-slate-200 rounded-lg overflow-hidden">
                  <thead className="bg-[#0f2d59] text-white">
                    <tr>
                      <th className="p-3">Student Name</th>
                      <th className="p-3">Discipline</th>
                      <th className="p-3">Hiring Company</th>
                      <th className="p-3">Role / Designation</th>
                      <th className="p-3">Package (CTC)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {PLACED_STUDENTS.map((st) => (
                      <tr key={st.id} className="hover:bg-slate-50">
                        <td className="p-3 font-bold text-slate-900">{st.name}</td>
                        <td className="p-3 text-slate-600">{st.branch}</td>
                        <td className="p-3 font-semibold text-blue-900 flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-slate-400" />
                          <span>{st.company}</span>
                        </td>
                        <td className="p-3 text-slate-600">{st.role}</td>
                        <td className="p-3 font-mono font-bold text-amber-600">{st.package}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 2. INCUBATION & STARTUP HUB */}
        {activeSection === 'incubation' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded">
                  Innovation Ecosystem
                </span>
                <h3 className="text-2xl font-black text-[#0c2340]">
                  IMEC Incubation & Entrepreneurship Cell
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our Incubation Center empowers student innovators to convert disruptive ideas into viable startup enterprises. In association with national MSME schemes and angel mentors, we offer free workspace, seed funding grants, and patent registration assistance.
                </p>

                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Free Co-Working Innovation Space with Gigabit Internet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Prototyping Grant Support up to ₹2.5 Lakhs per student project</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Patent Drafting & IPR Clinic for Student Registrations</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                <h4 className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-2">
                  Incubation Milestones
                </h4>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Student Startups Incubated</span>
                    <span className="font-bold text-slate-900">14+ Ventures</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Patents Filed & Published</span>
                    <span className="font-bold text-slate-900">22+ Patents</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Total Seed Grants Disbursed</span>
                    <span className="font-bold text-amber-700 font-mono">₹ 18.5 Lakhs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">External Angel Mentors</span>
                    <span className="font-bold text-slate-900">12 Industry Veterans</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. TECHNICAL TRAINING TRACKS */}
        {activeSection === 'training' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TRAINING_PROGRAMS.map((prog) => (
                <div
                  key={prog.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 hover:border-amber-400 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        {prog.industryPartner}
                      </span>
                      <span className="text-slate-500 font-semibold">{prog.duration}</span>
                    </div>

                    <h3 className="text-base font-bold text-[#0c2340] leading-snug">
                      {prog.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {prog.description}
                    </p>

                    <div>
                      <span className="text-[11px] font-bold text-slate-700 block mb-1">Key Curriculum Modules:</span>
                      <div className="flex flex-wrap gap-1 text-[10px]">
                        {prog.topics.map((t, i) => (
                          <span key={i} className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Instructor: {prog.instructor.split('&')[0]}</span>
                    <button
                      onClick={() => onOpenTrainingEnroll(prog)}
                      className="px-3.5 py-1.5 rounded bg-[#0f2d59] text-white hover:bg-blue-900 font-semibold cursor-pointer"
                    >
                      Enroll Workshop
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. PROMINENT RECRUITERS */}
        {activeSection === 'recruiters' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#0c2340]">Corporate Hiring Partners</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Organizations participating in on-campus and pool recruitment drives at IMEC.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {RECRUITERS.map((r, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
                  <div className="w-8 h-8 rounded-lg bg-blue-900 text-white flex items-center justify-center font-bold text-xs mx-auto mb-2">
                    {r.name[0]}
                  </div>
                  <h4 className="font-bold text-xs text-slate-900">{r.name}</h4>
                  <div className="text-[10px] text-slate-500">{r.tier}</div>
                  <div className="text-[11px] font-mono font-bold text-amber-600 mt-1">{r.package}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
