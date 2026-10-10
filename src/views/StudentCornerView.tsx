import React, { useState } from 'react';
import {
  FileText,
  Download,
  ShieldAlert,
  Calendar,
  Users,
  Sparkles,
  BookOpen,
  Search,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { DIGITAL_NOTES, STUDENT_CLUBS } from '../data/collegeData';

interface StudentCornerViewProps {
  initialSubSection?: string;
}

export const StudentCornerView: React.FC<StudentCornerViewProps> = ({ initialSubSection = 'notes' }) => {
  const [activeSection, setActiveSection] = useState<string>(initialSubSection);
  const [notesSearch, setNotesSearch] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const filteredNotes = DIGITAL_NOTES.filter(
    (n) =>
      n.subject.toLowerCase().includes(notesSearch.toLowerCase()) ||
      n.department.toLowerCase().includes(notesSearch.toLowerCase()) ||
      n.topics.toLowerCase().includes(notesSearch.toLowerCase())
  );

  const handleDownload = (subject: string) => {
    setDownloadSuccess(`Downloading complete PDF notes for ${subject}...`);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 2800);
  };

  return (
    <div className="py-10 px-4 md:px-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Title */}
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Campus Ecosystem & Academics
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0c2340] tracking-tight mt-1">
            Student Corner
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Digital resources, institutional discipline, academic schedules, and student societies.
          </p>
        </div>

        {/* Sub-Section Switcher Tabs */}
        <div className="bg-white rounded-xl border border-slate-200 p-1 flex items-center gap-1 text-xs font-semibold overflow-x-auto shadow-xs">
          {[
            { id: 'notes', label: 'Digital Notes & Syllabus' },
            { id: 'conduct', label: 'Code of Conduct & Anti-Ragging' },
            { id: 'holidays', label: 'Holiday List & Calendar' },
            { id: 'clubs', label: 'Student Clubs & Societies' },
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

        {/* 1. DIGITAL NOTES */}
        {activeSection === 'notes' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-[#0c2340]">Digital Study Repository</h3>
                <p className="text-xs text-slate-500">
                  Authored by departmental faculty aligned with latest RGPV curriculum.
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search subject or keyword..."
                  value={notesSearch}
                  onChange={(e) => setNotesSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 text-xs outline-none focus:border-blue-900"
                />
              </div>
            </div>

            {downloadSuccess && (
              <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 text-xs flex items-center gap-2 animate-in fade-in">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>{downloadSuccess}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNotes.map((note) => (
                <div
                  key={note.id}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-blue-400 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        {note.department} · {note.semester}
                      </span>
                      <span className="text-slate-400 font-mono">{note.pages} Pages</span>
                    </div>

                    <h4 className="text-sm font-bold text-[#0c2340] leading-snug">
                      {note.subject}
                    </h4>

                    <p className="text-xs text-slate-500 line-clamp-2">
                      <strong className="text-slate-700">Topics:</strong> {note.topics}
                    </p>

                    <div className="text-[11px] text-slate-600 pt-1">
                      Faculty Guide: <span className="font-semibold text-slate-800">{note.faculty}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">PDF Resource</span>
                    <button
                      onClick={() => handleDownload(note.subject)}
                      className="px-3 py-1.5 rounded-lg bg-[#0f2d59] hover:bg-blue-900 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 text-amber-400" />
                      <span>Download Notes</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. CODE OF CONDUCT & ANTI-RAGGING */}
        {activeSection === 'conduct' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0c2340]">Zero-Tolerance Anti-Ragging Policy</h3>
                <p className="text-xs text-slate-500">
                  Strictly enforced in compliance with Supreme Court of India & AICTE directives.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
              <p>
                Infinity Management & Engineering College maintains a <strong>Zero-Tolerance Policy</strong> against ragging in any form—physical, verbal, or mental. Ragging within or outside the collegiate campus is a cognizable criminal offense punishable with immediate suspension, rustication, and lodging of an FIR.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <h4 className="text-sm font-bold text-slate-900">Anti-Ragging Squad Duties</h4>
                  <ul className="space-y-1.5 text-slate-600 list-disc list-inside">
                    <li>24/7 surprise surveillance of hostels, canteen, and bus stands.</li>
                    <li>Anonymous online grievance redressal portal for freshers.</li>
                    <li>Direct counseling sessions during induction week.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-red-50/70 border border-red-200 space-y-2 text-red-950">
                  <h4 className="text-sm font-bold text-red-900">Emergency Contacts & Helplines</h4>
                  <div className="space-y-1 text-xs">
                    <div>National Anti-Ragging Toll-Free Helpline: <strong>1800-180-5522</strong></div>
                    <div>IMEC Squad Convener: <strong>+91 94251 72159</strong></div>
                    <div>Proctorial Board Office: <strong>proctor@infinitycollege.in</strong></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. HOLIDAY LIST & ACADEMIC CALENDAR */}
        {activeSection === 'holidays' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <h3 className="text-xl font-bold text-[#0c2340]">Academic Calendar & Official Holidays 2026-27</h3>
                <p className="text-xs text-slate-500">Notified under RGPV Bhopal academic guidelines.</p>
              </div>
              <button
                onClick={() => handleDownload('Academic_Calendar_2026_27.pdf')}
                className="px-3.5 py-1.5 rounded-lg bg-[#0f2d59] text-white hover:bg-blue-900 text-xs font-semibold flex items-center gap-1 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>Download Calendar</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-[#0f2d59] text-white">
                  <tr>
                    <th className="p-3">Occasion / Milestone</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">Day</th>
                    <th className="p-3">Category</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-slate-900">Commencement of Even Semester Classes</td>
                    <td className="p-3">Oct 14, 2026</td>
                    <td className="p-3">Wednesday</td>
                    <td className="p-3 text-blue-900 font-semibold">Academic Milestone</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-slate-900">Diwali & Deepawali Break</td>
                    <td className="p-3">Nov 01 - 04, 2026</td>
                    <td className="p-3">Sun - Wed</td>
                    <td className="p-3 text-amber-700 font-semibold">Gazetted Holiday</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-slate-900">First Mid-Semester Examinations</td>
                    <td className="p-3">Nov 18 - 21, 2026</td>
                    <td className="p-3">Wed - Sat</td>
                    <td className="p-3 text-blue-900 font-semibold">Examination</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-slate-900">Annual Sports Meet 'Spardha 2026'</td>
                    <td className="p-3">Dec 10 - 13, 2026</td>
                    <td className="p-3">Thu - Sun</td>
                    <td className="p-3 text-emerald-700 font-semibold">Sports & Fest</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-slate-900">Winter Vacation</td>
                    <td className="p-3">Dec 25, 2026 - Jan 01, 2027</td>
                    <td className="p-3">Fri - Fri</td>
                    <td className="p-3 text-amber-700 font-semibold">Institutional Recess</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 4. STUDENT CLUBS */}
        {activeSection === 'clubs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {STUDENT_CLUBS.map((club, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 hover:border-amber-400 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      {club.domain}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">Lead: {club.lead}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#0c2340]">{club.name}</h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {club.activities}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Open to all branches</span>
                  <button
                    onClick={() => alert(`Registered interest for ${club.name}. The student coordinator will reach out!`)}
                    className="px-3.5 py-1.5 rounded bg-[#0f2d59] text-white hover:bg-blue-900 text-xs font-semibold cursor-pointer"
                  >
                    Join Society
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
