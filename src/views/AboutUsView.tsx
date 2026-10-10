import React, { useState } from 'react';
import {
  Building2,
  Users,
  Compass,
  Award,
  ShieldCheck,
  CheckCircle,
  FileText,
  Mail,
  Phone,
  Sparkles,
  Download
} from 'lucide-react';
import { COLLEGE_INFO, LEADERSHIP } from '../data/collegeData';

interface AboutUsViewProps {
  initialSubSection?: string;
}

export const AboutUsView: React.FC<AboutUsViewProps> = ({ initialSubSection = 'group' }) => {
  const [activeSection, setActiveSection] = useState<string>(initialSubSection);

  const facultyMembers = [
    { name: 'Dr. P. K. Singh', designation: 'Principal & Professor', dept: 'Mechanical Engg', qualification: 'Ph.D., M.Tech, FIE', exp: '25+ Years' },
    { name: 'Dr. Rajendra Kumar Gupta', designation: 'Professor & HOD', dept: 'Computer Science', qualification: 'Ph.D. (IIT Roorkee)', exp: '19+ Years' },
    { name: 'Dr. Sunita Patel', designation: 'Professor & HOD', dept: 'Electronics & Comm.', qualification: 'Ph.D. (MANIT Bhopal)', exp: '16+ Years' },
    { name: 'Prof. Harishankar Mishra', designation: 'Associate Professor & HOD', dept: 'Mechanical Engg', qualification: 'M.Tech (NIT Bhopal)', exp: '15+ Years' },
    { name: 'Er. Alok Sharma', designation: 'Associate Professor & HOD', dept: 'Civil Engineering', qualification: 'M.Tech (Structures)', exp: '14+ Years' },
    { name: 'Dr. Manish Verma', designation: 'Professor & HOD', dept: 'Management Studies (MBA)', qualification: 'Ph.D., MBA (IIM-I Alum)', exp: '18+ Years' },
    { name: 'Prof. Animesh Chourasia', designation: 'Assistant Professor', dept: 'Computer Science', qualification: 'M.Tech, CEH Certified', exp: '9+ Years' },
    { name: 'Er. Sandeep Patel', designation: 'Assistant Professor', dept: 'Computer Science', qualification: 'M.Tech (Cloud Computing)', exp: '8+ Years' },
  ];

  return (
    <div className="py-10 px-4 md:px-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Title */}
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            About Infinity Management & Engineering College
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0c2340] tracking-tight mt-1">
            Institutional Heritage & Leadership
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Dedicated to advancing technical education, moral leadership, and research since 2008.
          </p>
        </div>

        {/* Sub-Section Navigation Tabs */}
        <div className="bg-white rounded-xl border border-slate-200 p-1 flex items-center gap-1 text-xs font-semibold overflow-x-auto shadow-xs">
          {[
            { id: 'group', label: 'Our Group' },
            { id: 'leadership', label: 'Leadership & Trustees' },
            { id: 'vision', label: 'Vision, Mission & Goals' },
            { id: 'faculty', label: 'Faculty Roster' },
            { id: 'mandatory', label: 'Mandatory Disclosures (AICTE)' },
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

        {/* 1. OUR GROUP */}
        {activeSection === 'group' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 space-y-6 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded">
                  Infinity Group of Institutions
                </span>
                <h2 className="text-2xl font-black text-[#0c2340]">
                  Pioneering Education in Bundelkhand
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The Infinity Group of Institutions was conceived with the noble objective of establishing benchmark professional education centers in Sagar, Madhya Pradesh. Over the past 18+ years, the group has burgeoned into a premier umbrella governing institutes of engineering, management, polytechnic, and basic sciences.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our expansive 35-acre green campus on University Road features modern laboratories, digital library systems, dedicated sports stadia, and residential quarters, empowering thousands of students from across the nation to achieve their fullest career potential.
                </p>
              </div>

              <div className="lg:col-span-4 bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-4">
                <h3 className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-2">
                  At A Glance
                </h3>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Year Established</span>
                    <span className="font-bold text-slate-800">2008</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Campus Area</span>
                    <span className="font-bold text-slate-800">35+ Acres</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Affiliation</span>
                    <span className="font-bold text-slate-800">RGPV Bhopal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Approvals</span>
                    <span className="font-bold text-slate-800">AICTE New Delhi</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Alumni Worldwide</span>
                    <span className="font-bold text-amber-700">12,500+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. LEADERSHIP & TRUSTEES */}
        {activeSection === 'leadership' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {LEADERSHIP.map((leader, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-blue-400 transition-all"
                >
                  <div>
                    <div className="w-14 h-14 rounded-full bg-blue-900 text-amber-400 flex items-center justify-center font-black text-lg mb-4 shadow-inner">
                      {leader.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                      {leader.role}
                    </span>
                    <h3 className="text-lg font-bold text-[#0c2340] mt-2">{leader.name}</h3>
                    <div className="text-xs text-slate-500 mb-4">{leader.credentials}</div>
                    <p className="text-xs text-slate-600 leading-relaxed font-serif italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                      "{leader.message}"
                    </p>
                  </div>

                  <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-100">
                    Infinity Management & Engineering College
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. VISION & MISSION */}
        {activeSection === 'vision' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 space-y-8 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl bg-blue-50/70 border border-blue-200 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-blue-900 text-amber-400 flex items-center justify-center font-bold">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0c2340]">Our Vision</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  To be acknowledged as a centre of academic brilliance and ethical leadership that produces globally competitive engineers, technocrats, and management pioneers dedicated to nation building and sustainable human progress.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-amber-50/70 border border-amber-200 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0c2340]">Our Mission</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  To impart experiential technical and managerial education grounded in rigorous scientific methodology, ethical human values, industry-led incubation, and community engagement.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 mb-4">Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="font-bold text-blue-900">Academic Integrity</h4>
                  <p className="text-slate-600">Uncompromising honesty, rigorous scholarship, and meritocratic evaluation.</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="font-bold text-blue-900">Innovation & Creativity</h4>
                  <p className="text-slate-600">Fostering inquisitive minds, exploratory labs, and patent drafting.</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="font-bold text-blue-900">Social Responsibility</h4>
                  <p className="text-slate-600">Dedicated to environmental care, community empowerment, and zero discrimination.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. FACULTY ROSTER */}
        {activeSection === 'faculty' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#0c2340]">Distinguished Faculty Roster</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Our faculty members hold advanced degrees from IITs, NITs, and reputed state universities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {facultyMembers.map((fac, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 hover:border-blue-400 bg-slate-50/50 hover:bg-white transition-all space-y-2 group"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-xs group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    {fac.name.split(' ').slice(-1)[0][0]}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {fac.name}
                  </h4>
                  <span className="text-[11px] font-semibold text-amber-700 block">{fac.designation}</span>
                  <div className="text-[11px] text-slate-500">{fac.dept}</div>
                  <div className="pt-2 border-t border-slate-200 text-[10px] text-slate-600 flex justify-between">
                    <span>{fac.qualification}</span>
                    <span className="font-semibold text-slate-800">{fac.exp}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. MANDATORY DISCLOSURES */}
        {activeSection === 'mandatory' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-amber-600" />
              <div>
                <h3 className="text-xl font-bold text-[#0c2340]">AICTE Mandatory Disclosures</h3>
                <p className="text-xs text-slate-500">
                  Published in compliance with All India Council for Technical Education regulations.
                </p>
              </div>
            </div>

            <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden text-xs">
              {[
                { title: 'AICTE Extension of Approval (EoA) 2026-27', doc: 'AICTE_EoA_2026_27_IMEC.pdf', size: '1.4 MB' },
                { title: 'RGPV Bhopal University Affiliation Letter', doc: 'RGPV_Affiliation_Notification_2026.pdf', size: '890 KB' },
                { title: 'Anti-Ragging Committee & Squad Constitution Notification', doc: 'Anti_Ragging_Squad_IMEC_2026.pdf', size: '420 KB' },
                { title: 'Internal Complaints Committee (ICC) & Gender Sensitization Cell', doc: 'ICC_Committee_Members.pdf', size: '360 KB' },
                { title: 'Fee Regulatory Committee (AFRC MP) Approved Fee Schedule', doc: 'AFRC_Approved_Fee_Order.pdf', size: '650 KB' },
                { title: 'Grievance Redressal Mechanism & Ombudsman Details', doc: 'Grievance_Redressal_Ombudsman.pdf', size: '510 KB' },
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-blue-900" />
                    <span className="font-bold text-slate-800">{item.title}</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-500">
                    <span>{item.size}</span>
                    <button
                      onClick={() => alert(`Simulated download: ${item.doc}`)}
                      className="text-blue-900 hover:text-amber-600 font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>View PDF</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
