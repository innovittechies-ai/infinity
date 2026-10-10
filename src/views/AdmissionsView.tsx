import React, { useState } from 'react';
import {
  GraduationCap,
  FileCheck2,
  Award,
  DollarSign,
  CheckCircle,
  HelpCircle,
  Calendar,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';
import { AdmissionsInquiryForm } from '../components/AdmissionsInquiryForm';
import { SCHOLARSHIPS_INFO, COLLEGE_INFO } from '../data/collegeData';

interface AdmissionsViewProps {
  initialTab?: string;
}

export const AdmissionsView: React.FC<AdmissionsViewProps> = ({ initialTab = 'inquiry' }) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  return (
    <div className="py-10 px-4 md:px-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Admissions & Financial Aid · Session 2026-27
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0c2340] tracking-tight mt-1">
            Enroll at Infinity College
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Your gateway to engineering excellence, management acumen, and guaranteed placement support.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="bg-white rounded-xl border border-slate-200 p-1 flex items-center gap-1 text-xs font-semibold overflow-x-auto shadow-xs">
          {[
            { id: 'inquiry', label: 'Online Inquiry Form' },
            { id: 'process', label: 'Admission Process & Steps' },
            { id: 'scholarships', label: 'Scholarships & State Schemes' },
            { id: 'feestructure', label: 'Fee Guidelines' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
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

        {/* TAB 1: INQUIRY FORM */}
        {activeTab === 'inquiry' && (
          <div>
            <AdmissionsInquiryForm />
          </div>
        )}

        {/* TAB 2: PROCESS & ELIGIBILITY */}
        {activeTab === 'process' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
              <h3 className="text-xl font-bold text-[#0c2340]">4-Step Admission Journey</h3>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  {
                    step: '01',
                    title: 'Inquiry & Counseling',
                    desc: 'Submit online inquiry or visit campus for personalized career assessment and branch selection with senior professors.',
                  },
                  {
                    step: '02',
                    title: 'DTE / University Registration',
                    desc: 'Register for MP DTE Online Counseling (for JEE/12th merit) or College Level Counseling (CLC) round for vacant seats.',
                  },
                  {
                    step: '03',
                    title: 'Document Verification',
                    desc: 'Verification of 10th & 12th marksheets, domicile certificate, caste credentials, Aadhaar card, and passport photos.',
                  },
                  {
                    step: '04',
                    title: 'Fee Payment & Induction',
                    desc: 'Complete semester tuition installment, collect ID card & syllabus pack, and attend the grand orientation induction ceremony.',
                  },
                ].map((s, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 relative">
                    <span className="text-3xl font-black text-amber-500 font-mono block">{s.step}</span>
                    <h4 className="text-sm font-bold text-slate-900">{s.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Document Checklist */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Mandatory Document Checklist for Verification</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs text-slate-700">
                {[
                  '10th Standard Marksheet & Certificate (DOB proof)',
                  '12th Standard Marksheet (For B.Tech / Diploma)',
                  'JEE Main Scorecard (If applicable)',
                  'Graduation Marksheets & Degree (For MBA / M.Tech)',
                  'Transfer Certificate (TC) & Migration Certificate',
                  'Madhya Pradesh Domicile Certificate',
                  'Caste & Income Certificate (For SC/ST/OBC scholarship)',
                  'Aadhaar Card Copy of Candidate & Parents',
                  '6 Recent Color Passport-Size Photographs',
                ].map((doc, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SCHOLARSHIPS */}
        {activeTab === 'scholarships' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SCHOLARSHIPS_INFO.map((sch, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 hover:border-amber-400 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase">
                      <Award className="w-4 h-4 text-amber-600" />
                      <span>Financial Grant Scheme</span>
                    </div>
                    <h3 className="text-base font-bold text-[#0c2340]">{sch.title}</h3>

                    <div className="p-3 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-semibold">
                      Grant: {sch.benefit}
                    </div>

                    <div className="text-xs text-slate-600 space-y-1">
                      <div>
                        <span className="font-bold text-slate-800">Target Beneficiary: </span>
                        {sch.beneficiary}
                      </div>
                      <div>
                        <span className="font-bold text-slate-800">Eligibility Terms: </span>
                        {sch.eligibility}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Government of MP / IMEC</span>
                    <button
                      onClick={() => setActiveTab('inquiry')}
                      className="text-blue-900 hover:text-amber-600 font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <span>Check My Eligibility</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: FEE STRUCTURE */}
        {activeTab === 'feestructure' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#0c2340]">Fee Structure Guidelines (Session 2026-27)</h3>
              <p className="text-xs text-slate-500 mt-1">
                Tuition fees are strictly as regulated by Admission and Fee Regulatory Committee (AFRC), Bhopal, MP.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-[#0f2d59] text-white">
                  <tr>
                    <th className="p-3">Program</th>
                    <th className="p-3">Duration</th>
                    <th className="p-3">Annual Tuition (Approx)</th>
                    <th className="p-3">Examination & Caution</th>
                    <th className="p-3">Net with SC/ST/MMVY Scheme</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-slate-900">B.Tech (CSE, ME, CE, ECE)</td>
                    <td className="p-3">4 Years</td>
                    <td className="p-3 font-mono font-semibold">₹ 55,000 / Year</td>
                    <td className="p-3">As per RGPV Norms</td>
                    <td className="p-3 text-emerald-700 font-bold">100% Govt Reimbursed*</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-slate-900">B.Tech (CSE - AI & ML)</td>
                    <td className="p-3">4 Years</td>
                    <td className="p-3 font-mono font-semibold">₹ 60,000 / Year</td>
                    <td className="p-3">As per RGPV Norms</td>
                    <td className="p-3 text-emerald-700 font-bold">100% Govt Reimbursed*</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-slate-900">Master of Business Admin (MBA)</td>
                    <td className="p-3">2 Years</td>
                    <td className="p-3 font-mono font-semibold">₹ 48,000 / Year</td>
                    <td className="p-3">As per University Norms</td>
                    <td className="p-3 text-emerald-700 font-bold">100% Govt Reimbursed*</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-slate-900">Polytechnic Diploma Engg</td>
                    <td className="p-3">3 Years</td>
                    <td className="p-3 font-mono font-semibold">₹ 30,000 / Year</td>
                    <td className="p-3">As per RGPV Norms</td>
                    <td className="p-3 text-emerald-700 font-bold">100% Govt Reimbursed*</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[11px] text-slate-500 italic">
              *Tuition reimbursement is subject to valid domicile & caste certificates as per MP Post-Matric & MMVY Scholarship Portal guidelines. Bus facility is completely complimentary on designated routes.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
