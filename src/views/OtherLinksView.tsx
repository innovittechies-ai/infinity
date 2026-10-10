import React, { useState } from 'react';
import {
  FileText,
  Heart,
  Image,
  Users,
  Briefcase,
  CheckCircle,
  ExternalLink,
  Download,
  Mail,
  Send,
  X
} from 'lucide-react';
import { CAREER_OPENINGS } from '../data/collegeData';

interface OtherLinksViewProps {
  initialSubSection?: string;
}

export const OtherLinksView: React.FC<OtherLinksViewProps> = ({ initialSubSection = 'nirf' }) => {
  const [activeSection, setActiveSection] = useState<string>(initialSubSection);
  const [applyingJob, setApplyingJob] = useState<any | null>(null);
  const [jobAppliedSuccess, setJobAppliedSuccess] = useState(false);
  const [jobForm, setJobForm] = useState({ name: '', email: '', phone: '', exp: '', resumeNote: '' });

  const handleJobSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setJobAppliedSuccess(true);
    setTimeout(() => {
      setJobAppliedSuccess(false);
      setApplyingJob(null);
      setJobForm({ name: '', email: '', phone: '', exp: '', resumeNote: '' });
    }, 2000);
  };

  return (
    <div className="py-10 px-4 md:px-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Title */}
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Institutional Relations & Outreaches
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0c2340] tracking-tight mt-1">
            Other Links & Disclosures
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            NIRF filings, National Service Scheme (NSS), Media gallery, Alumni relations, and Career openings.
          </p>
        </div>

        {/* Sub-Section Switcher Tabs */}
        <div className="bg-white rounded-xl border border-slate-200 p-1 flex items-center gap-1 text-xs font-semibold overflow-x-auto shadow-xs">
          {[
            { id: 'nirf', label: 'NIRF Disclosures' },
            { id: 'nss', label: 'NSS Social Outreach' },
            { id: 'media', label: 'Media & Press Gallery' },
            { id: 'alumni', label: 'Alumni Network' },
            { id: 'careers', label: 'Careers @ IMEC' },
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

        {/* 1. NIRF DISCLOSURES */}
        {activeSection === 'nirf' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#0c2340]">National Institutional Ranking Framework (NIRF)</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Official institutional reports submitted to Ministry of Education, Govt. of India.
              </p>
            </div>

            <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden text-xs">
              {[
                { year: 'NIRF 2026 Institutional Data (Engineering Discipline)', date: 'Submitted Jan 2026' },
                { year: 'NIRF 2026 Overall Institutional Report', date: 'Submitted Jan 2026' },
                { year: 'NIRF 2025 Engineering Submissions & Placement Records', date: 'Archive' },
                { year: 'NIRF 2025 Management Studies Discipline Filing', date: 'Archive' },
              ].map((item, idx) => (
                <div key={idx} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-blue-900" />
                    <div>
                      <span className="font-bold text-slate-800 block">{item.year}</span>
                      <span className="text-[11px] text-slate-500">{item.date}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => alert(`Simulated download: ${item.year}`)}
                    className="text-xs font-bold text-blue-900 hover:text-amber-600 flex items-center gap-1 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Report</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. NSS SOCIAL OUTREACH */}
        {activeSection === 'nss' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0c2340]">National Service Scheme (NSS Unit)</h3>
                <p className="text-xs text-slate-500">Motto: "Not Me But You" — Social Transformation</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">Annual Mega Blood Donation Camp</h4>
                <p className="leading-relaxed">Organized biannually in partnership with District Hospital Sagar. Over 250 units of blood donated by IMEC scholars in 2025-26.</p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">Rural Digital Literacy Camps</h4>
                <p className="leading-relaxed">Adopted villages in Sagar rural belt where student volunteers impart smartphone banking, digital safety, and cyber hygiene to villagers.</p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">Green Plantation Drive (Harit Sagar)</h4>
                <p className="leading-relaxed">Planting 2,000+ native saplings along Patharia Hills and maintaining drip irrigation systems for environment preservation.</p>
              </div>
            </div>
          </div>
        )}

        {/* 3. MEDIA & PRESS GALLERY */}
        {activeSection === 'media' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#0c2340]">Media Coverage & Press Gallery</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Headlines and photo features covering IMEC achievements across leading national dailies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Dainik Bhaskar: Hexaware Selects 28 IMEC Engineers at High Packages', date: 'October 2026', tag: 'Placement News' },
                { title: 'Patrika: National Robotics Hackathon Concludes at Infinity Campus', date: 'September 2026', tag: 'Tech Fest' },
                { title: 'HariBhoomi: Smt. Sudha Malaiya Felicitates Meritorious Scholars on Foundation Day', date: 'August 2026', tag: 'Institution' },
              ].map((m, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {m.tag}
                  </span>
                  <h4 className="font-bold text-sm text-slate-900 leading-snug">{m.title}</h4>
                  <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200 flex justify-between">
                    <span>{m.date}</span>
                    <span className="text-blue-900 font-semibold">Press Release</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. ALUMNI NETWORK */}
        {activeSection === 'alumni' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded">
                  Infinity Alumni Association
                </span>
                <h3 className="text-2xl font-black text-[#0c2340]">12,500+ Strong Global Network</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our alumni work at Google, Microsoft, Amazon, Tata Group, Infosys, and public sector undertakings like BHEL and ISRO, or head dynamic entrepreneurial startups across India and abroad.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                  <div className="font-bold text-slate-900">Alumni Relations Cell:</div>
                  <div>Email: alumni@infinitycollege.in · Phone: +91 73890 74289</div>
                </div>
              </div>

              <div className="bg-[#0f2d59] text-white p-6 rounded-2xl space-y-4">
                <h4 className="text-base font-bold">Register as an Alumnus</h4>
                <p className="text-xs text-slate-300">
                  Stay updated on alumni meets, campus recruitment opportunities for your organization, and mentorship drives.
                </p>
                <button
                  onClick={() => alert('Alumni portal registration form launched. Thank you!')}
                  className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition-colors cursor-pointer"
                >
                  Join Official Alumni Directory
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 5. CAREERS @ IMEC */}
        {activeSection === 'careers' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-2">
              <h3 className="text-xl font-bold text-[#0c2340]">Career Openings @ Infinity College</h3>
              <p className="text-xs text-slate-500">
                Join our visionary faculty and administrative staff. Competitive pay scales matching 7th Pay Commission / AICTE norms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CAREER_OPENINGS.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 hover:border-blue-400 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        {job.dept}
                      </span>
                      <span className="text-slate-500">{job.type}</span>
                    </div>

                    <h4 className="text-base font-bold text-[#0c2340]">{job.title}</h4>

                    <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-0.5">Qualification Criteria:</span>
                      {job.qualification}
                    </div>

                    <div className="text-[11px] text-amber-700 font-semibold">
                      Application Deadline: {job.deadline}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500">Job ID: {job.id.toUpperCase()}</span>
                    <button
                      onClick={() => setApplyingJob(job)}
                      className="px-4 py-2 rounded-lg bg-[#0f2d59] text-white hover:bg-blue-900 text-xs font-bold transition-colors cursor-pointer"
                    >
                      Apply Online
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* JOB APPLICATION MODAL */}
      {applyingJob && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden">
            <div className="bg-[#0f2d59] text-white p-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">Job Application</span>
                <h4 className="text-sm font-bold truncate max-w-xs">{applyingJob.title}</h4>
              </div>
              <button
                onClick={() => setApplyingJob(null)}
                className="text-slate-300 hover:text-white p-1 rounded hover:bg-blue-900 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {jobAppliedSuccess ? (
              <div className="p-8 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Application Submitted!</h3>
                <p className="text-xs text-slate-600">
                  Our HR & Registrar office will review your credentials for {applyingJob.title} and reach out for interview scheduling.
                </p>
              </div>
            ) : (
              <form onSubmit={handleJobSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Applicant Name</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Dr. Rajesh Verma"
                    value={jobForm.name}
                    onChange={(e) => setJobForm({ ...jobForm, name: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 outline-none focus:border-blue-900"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="rajesh@example.com"
                      value={jobForm.email}
                      onChange={(e) => setJobForm({ ...jobForm, email: e.target.value })}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 outline-none focus:border-blue-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 9876543210"
                      value={jobForm.phone}
                      onChange={(e) => setJobForm({ ...jobForm, phone: e.target.value })}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 outline-none focus:border-blue-900 font-mono"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Relevant Experience & Publications</label>
                  <textarea
                    rows={2}
                    placeholder="Briefly state your highest degree, years of teaching/industry experience, and SCI publications..."
                    value={jobForm.resumeNote}
                    onChange={(e) => setJobForm({ ...jobForm, resumeNote: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 outline-none focus:border-blue-900"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setApplyingJob(null)}
                    className="px-4 py-2 rounded text-xs text-slate-600 hover:bg-slate-100 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Application</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
