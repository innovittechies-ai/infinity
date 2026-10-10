import React, { useState } from 'react';
import {
  BookOpen,
  Cpu,
  Award,
  Users,
  Compass,
  CheckCircle,
  Building2,
  GraduationCap,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { DEPARTMENTS, DepartmentDetail } from '../data/collegeData';

interface DepartmentViewProps {
  initialDeptId?: string;
  onOpenAdmissions: () => void;
}

export const DepartmentView: React.FC<DepartmentViewProps> = ({
  initialDeptId = 'cse',
  onOpenAdmissions,
}) => {
  const [selectedDeptId, setSelectedDeptId] = useState<string>(
    DEPARTMENTS[initialDeptId] ? initialDeptId : 'cse'
  );
  const [activeTab, setActiveTab] = useState<'about' | 'courses' | 'labs' | 'placements'>('about');

  const dept: DepartmentDetail = DEPARTMENTS[selectedDeptId] || DEPARTMENTS.cse;

  return (
    <div className="py-10 px-4 md:px-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Breadcrumb & Title */}
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Academics · Engineering & Management Disciplines
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0c2340] tracking-tight mt-1">
            Department of {dept.name}
          </h1>
          <p className="text-sm text-slate-600 mt-1 italic">
            "{dept.tagline}"
          </p>
        </div>

        {/* Department Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
          {Object.values(DEPARTMENTS).map((d) => (
            <button
              key={d.id}
              onClick={() => {
                setSelectedDeptId(d.id);
                setActiveTab('about');
              }}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedDeptId === d.id
                  ? 'bg-[#0f2d59] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {d.shortCode} - {d.name.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Sub-Page Navigation Tabs */}
        <div className="bg-white rounded-xl border border-slate-200 p-1 flex items-center gap-1 text-xs font-semibold overflow-x-auto shadow-xs">
          {[
            { id: 'about', label: 'About & Vision' },
            { id: 'courses', label: `Degree Programs (${dept.courses.length})` },
            { id: 'labs', label: `Labs & Infrastructure (${dept.labs.length})` },
            { id: 'placements', label: 'Department Placements' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 py-2 px-3 rounded-lg text-center transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-blue-900 text-white font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: ABOUT & VISION */}
        {activeTab === 'about' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 md:p-8 space-y-6 shadow-xs">
              <div>
                <h3 className="text-xl font-bold text-[#0c2340] mb-3">About the Department</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{dept.about}</p>
              </div>

              <div className="p-5 rounded-xl bg-blue-50/70 border border-blue-200/80 space-y-2">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-blue-950 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-amber-500" /> Department Vision
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed italic">{dept.vision}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-3">Department Mission</h4>
                <div className="space-y-2.5">
                  {dept.mission.map((m, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* HOD Card & Department Overview */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  Head of Department (HOD)
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-900 text-amber-300 flex items-center justify-center font-bold text-sm shadow-inner shrink-0">
                    HOD
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0c2340]">{dept.headOfDept}</h4>
                    <span className="text-[11px] text-slate-500">Department Chair & Senior Professor</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 leading-relaxed">
                  "Our curriculum emphasizes hands-on application, problem-solving aptitude, and direct industry mentorship from the first year onwards."
                </div>
              </div>

              {/* Quick Action Box */}
              <div className="bg-[#0f2d59] text-white rounded-2xl p-6 space-y-4">
                <h4 className="text-base font-bold">Interested in {dept.shortCode}?</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Admissions for Academic Year 2026-27 are currently open. Book a 1-on-1 counseling session or download syllabus.
                </p>
                <button
                  onClick={onOpenAdmissions}
                  className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition-colors cursor-pointer"
                >
                  Apply for {dept.shortCode} Programs
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: COURSES OFFERED */}
        {activeTab === 'courses' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dept.courses.map((course, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 hover:border-blue-400 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                        {course.level}
                      </span>
                      <span className="text-xs font-mono font-bold text-amber-700">
                        Intake: {course.intake} Seats
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#0c2340] mb-1">{course.name}</h3>
                    <div className="text-xs text-slate-500 mb-3">Duration: {course.duration}</div>

                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700">
                      <span className="font-bold text-slate-900 block mb-0.5">Eligibility Criteria:</span>
                      {course.eligibility}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500">AICTE & RGPV Approved</span>
                    <button
                      onClick={onOpenAdmissions}
                      className="px-3.5 py-1.5 rounded bg-[#0f2d59] text-white hover:bg-blue-900 text-xs font-semibold cursor-pointer"
                    >
                      Inquire Course
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: INFRASTRUCTURE & LABS */}
        {activeTab === 'labs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dept.labs.map((lab, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3 hover:border-amber-400 transition-all"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-900 text-amber-400 flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-[#0c2340]">{lab.name}</h4>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">{lab.description}</p>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                  <span className="font-bold text-blue-950 block mb-0.5">Major Equipment & Kits:</span>
                  <span className="text-slate-700 font-mono text-[11px]">{lab.equipment}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: PLACEMENTS */}
        {activeTab === 'placements' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 space-y-6 shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-center">
                <span className="text-xs font-bold text-amber-800 uppercase">Highest Package</span>
                <div className="text-2xl font-black text-amber-600 font-mono tabular-nums mt-1">
                  ₹ {dept.placements.highestPackage}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-center">
                <span className="text-xs font-bold text-blue-900 uppercase">Average Package</span>
                <div className="text-2xl font-black text-blue-950 font-mono tabular-nums mt-1">
                  ₹ {dept.placements.avgPackage}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                <span className="text-xs font-bold text-emerald-800 uppercase">Placement Success</span>
                <div className="text-2xl font-black text-emerald-700 font-mono tabular-nums mt-1">
                  {dept.placements.placementRate}
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-3">Key Corporate Recruiters for {dept.shortCode}</h4>
              <div className="flex flex-wrap gap-2">
                {dept.placements.topCompanies.map((c, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-lg bg-slate-100 text-slate-800 font-semibold text-xs border border-slate-200"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
