import React, { useState } from 'react';
import { Award, Briefcase, TrendingUp, Building2, UserCheck, ChevronRight } from 'lucide-react';
import { PLACED_STUDENTS, PlacedStudent } from '../data/collegeData';

interface PlacementTickerProps {
  onViewAllPlacements: () => void;
}

export const PlacementTicker: React.FC<PlacementTickerProps> = ({ onViewAllPlacements }) => {
  const [selectedBranch, setSelectedBranch] = useState<string>('All');

  const filteredStudents = selectedBranch === 'All'
    ? PLACED_STUDENTS
    : PLACED_STUDENTS.filter((s) => s.branch.toLowerCase().includes(selectedBranch.toLowerCase()));

  // Generates clean initials avatar with high-contrast academic colors
  const getAvatarBadge = (name: string, index: number) => {
    const initials = name
      .split(' ')
      .map((n) => n[0])
      .join('');
    const bgColors = [
      'bg-blue-700 text-white',
      'bg-indigo-700 text-white',
      'bg-amber-600 text-white',
      'bg-emerald-700 text-white',
      'bg-purple-700 text-white',
      'bg-sky-700 text-white',
    ];
    const colorClass = bgColors[index % bgColors.length];
    return (
      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shadow-inner shrink-0 ${colorClass}`}>
        {initials}
      </div>
    );
  };

  return (
    <section className="bg-slate-100/80 border-y border-slate-200/80 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Ticker Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
              <TrendingUp className="w-4 h-4 text-amber-600" />
              <span>Career Milestones · 2025-26 Placements</span>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-[#0c2340] tracking-tight mt-1">
              Live Placements Highlight Reel
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Congratulations to our brilliant technocrats placed in premier multinationals.
            </p>
          </div>

          {/* Quick Filter Tabs & View All */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 shadow-xs text-xs font-medium">
              {['All', 'CSE', 'Mechanical', 'Civil', 'ECE', 'MBA'].map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedBranch(dept)}
                  className={`px-3 py-1 rounded-md transition-all cursor-pointer whitespace-nowrap ${
                    selectedBranch === dept
                      ? 'bg-[#0f2d59] text-white shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            <button
              onClick={onViewAllPlacements}
              className="text-xs font-bold text-blue-900 hover:text-amber-600 flex items-center gap-1 px-3 py-1.5 rounded hover:bg-blue-50 transition-colors cursor-pointer"
            >
              <span>View All Records</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Cards / Highlight Reels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredStudents.slice(0, 4).map((student, idx) => (
            <div
              key={student.id}
              className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-400 transition-all group flex flex-col justify-between"
            >
              <div className="flex items-start gap-3">
                {getAvatarBadge(student.name, idx)}
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-slate-900 truncate group-hover:text-blue-900 transition-colors">
                    {student.name}
                  </h4>
                  <div className="text-[11px] text-slate-500 truncate font-medium">
                    {student.branch}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-700 flex items-center gap-1 mt-0.5 truncate">
                    <Building2 className="w-3 h-3 text-slate-400 shrink-0" />
                    <span>{student.company}</span>
                  </div>
                </div>
              </div>

              {/* Package Badge & Role */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Package</span>
                  <span className="text-base font-extrabold text-amber-600 tracking-tight font-mono tabular-nums">
                    ₹ {student.package}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Designation</span>
                  <span className="text-xs font-semibold text-slate-700 truncate max-w-[120px] inline-block">
                    {student.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Placement Moving Marquee Ribbon */}
        <div className="bg-[#0b1f3a] text-white rounded-lg p-2.5 overflow-hidden flex items-center gap-3 shadow-inner">
          <div className="bg-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-wider px-2 py-0.5 rounded shrink-0 flex items-center gap-1">
            <Award className="w-3 h-3" /> Recent Offers
          </div>
          <div className="overflow-hidden relative w-full">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs font-medium text-slate-200">
              {PLACED_STUDENTS.map((s) => (
                <span key={s.id} className="inline-flex items-center gap-2">
                  <span className="font-bold text-white">{s.name}</span>
                  <span className="text-slate-400">({s.branch.split(' - ')[1] || s.branch})</span>
                  <span className="text-amber-400 font-bold">➔ {s.company}</span>
                  <span className="text-emerald-400 font-extrabold font-mono tabular-nums">[{s.package}]</span>
                  <span className="text-slate-600">·</span>
                </span>
              ))}
              {/* Duplicate loop for infinite continuous scroll */}
              {PLACED_STUDENTS.map((s) => (
                <span key={`dup-${s.id}`} className="inline-flex items-center gap-2">
                  <span className="font-bold text-white">{s.name}</span>
                  <span className="text-slate-400">({s.branch.split(' - ')[1] || s.branch})</span>
                  <span className="text-amber-400 font-bold">➔ {s.company}</span>
                  <span className="text-emerald-400 font-extrabold font-mono tabular-nums">[{s.package}]</span>
                  <span className="text-slate-600">·</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
