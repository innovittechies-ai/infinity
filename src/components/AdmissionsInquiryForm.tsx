import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  FileText,
  DollarSign,
  GraduationCap,
  Sparkles,
  Download,
  Copy,
  Check
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

interface AdmissionsInquiryFormProps {
  onSuccessClose?: () => void;
  initialCourse?: string;
}

export const AdmissionsInquiryForm: React.FC<AdmissionsInquiryFormProps> = ({
  onSuccessClose,
  initialCourse,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    parentName: '',
    mobile: '',
    email: '',
    city: 'Sagar',
    state: 'Madhya Pradesh',
    program: initialCourse || 'B.Tech - Computer Science & Engineering',
    qualification: '10+2 (PCM)',
    percentage: '',
    category: 'General',
    hostelRequired: false,
    busRequired: true,
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedAppId, setSubmittedAppId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Validate form inputs
  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Student Full Name is required';
    if (!formData.mobile.trim()) {
      errs.mobile = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile.replace(/\s+/g, ''))) {
      errs.mobile = 'Enter a valid 10-digit Indian mobile number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Enter a valid email address';
    }
    if (!formData.percentage.trim()) {
      errs.percentage = 'Qualifying percentage is required';
    } else {
      const p = parseFloat(formData.percentage);
      if (isNaN(p) || p < 35 || p > 100) {
        errs.percentage = 'Enter a valid percentage between 35% and 100%';
      }
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `IMEC-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedAppId(generatedId);
    }, 1200);
  };

  const handleCopyId = () => {
    if (submittedAppId) {
      navigator.clipboard.writeText(submittedAppId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Approximate tuition & scholarship calculation
  const getTuitionEstimation = () => {
    let baseTuition = 55000;
    if (formData.program.includes('MBA')) baseTuition = 48000;
    if (formData.program.includes('Diploma')) baseTuition = 30000;

    let scholarshipBenefit = 0;
    const marks = parseFloat(formData.percentage) || 0;
    if (formData.category === 'SC' || formData.category === 'ST') {
      scholarshipBenefit = baseTuition; // 100% Post-matric
    } else if (formData.category === 'OBC' && marks >= 60) {
      scholarshipBenefit = Math.round(baseTuition * 0.7);
    } else if (marks >= 85) {
      scholarshipBenefit = Math.round(baseTuition * 0.5); // MMVY or Merit
    } else if (marks >= 75) {
      scholarshipBenefit = Math.round(baseTuition * 0.25);
    }

    const netTuition = Math.max(0, baseTuition - scholarshipBenefit);
    return { baseTuition, scholarshipBenefit, netTuition };
  };

  const feeCalc = getTuitionEstimation();

  if (submittedAppId) {
    return (
      <div className="bg-white rounded-2xl p-6 sm:p-8 text-center space-y-6 max-w-xl mx-auto border border-emerald-200 shadow-xl">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Inquiry Successfully Registered
          </span>
          <h3 className="text-2xl font-black text-[#0c2340]">
            Thank You, {formData.fullName}!
          </h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Your admission counseling inquiry for <strong>{formData.program}</strong> has been logged in the IMEC Admission Portal. An admissions counselor will reach out to you shortly.
          </p>
        </div>

        {/* Application ID Card */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Application Inquiry Token
            </span>
            <button
              onClick={handleCopyId}
              className="text-xs text-blue-900 hover:text-amber-600 font-semibold flex items-center gap-1 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Token'}</span>
            </button>
          </div>
          <div className="text-lg font-mono font-black text-blue-950 tracking-wider">
            {submittedAppId}
          </div>
          <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-200 flex flex-wrap justify-between gap-1">
            <span>Contact: {formData.mobile}</span>
            <span>Est. Net Fee: ₹{feeCalc.netTuition.toLocaleString('en-IN')}/year</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => {
              setSubmittedAppId(null);
              setFormData({
                fullName: '',
                parentName: '',
                mobile: '',
                email: '',
                city: 'Sagar',
                state: 'Madhya Pradesh',
                program: 'B.Tech - Computer Science & Engineering',
                qualification: '10+2 (PCM)',
                percentage: '',
                category: 'General',
                hostelRequired: false,
                busRequired: true,
                message: '',
              });
            }}
            className="px-4 py-2 rounded-lg text-xs font-semibold border border-slate-300 hover:bg-slate-100 text-slate-700 cursor-pointer"
          >
            Submit Another Inquiry
          </button>
          {onSuccessClose && (
            <button
              onClick={onSuccessClose}
              className="px-5 py-2 rounded-lg text-xs font-bold bg-[#0f2d59] text-white hover:bg-blue-900 shadow-sm cursor-pointer"
            >
              Close & Return to Portal
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-lg p-6 sm:p-8 max-w-3xl mx-auto">
      {/* Form Header */}
      <div className="border-b border-slate-200 pb-5 mb-6">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">
          <GraduationCap className="w-4 h-4 text-amber-600" />
          <span>Admission Counseling 2026-27</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-[#0c2340] tracking-tight">
          Admissions Lead Generation & Inquiry Form
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Fill out the details below for fast-track document verification, scholarship assessment, and seat reservation counseling.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Personal Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Full Student Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Priyanshu Sharma"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className={`w-full text-xs px-3.5 py-2.5 rounded-lg border ${
                errors.fullName ? 'border-red-500 bg-red-50/40' : 'border-slate-300 focus:border-blue-900'
              } outline-none transition-colors`}
            />
            {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Parent / Guardian Name
            </label>
            <input
              type="text"
              placeholder="e.g. Rajesh Sharma"
              value={formData.parentName}
              onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
              className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-900 outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Mobile Contact Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-semibold">+91</span>
              <input
                type="tel"
                placeholder="73890 74289"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className={`w-full text-xs pl-11 pr-3 py-2.5 rounded-lg border ${
                  errors.mobile ? 'border-red-500 bg-red-50/40' : 'border-slate-300 focus:border-blue-900'
                } outline-none transition-colors font-mono`}
              />
            </div>
            {errors.mobile && <p className="text-[11px] text-red-500 mt-1">{errors.mobile}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="priyanshu@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full text-xs px-3.5 py-2.5 rounded-lg border ${
                errors.email ? 'border-red-500 bg-red-50/40' : 'border-slate-300 focus:border-blue-900'
              } outline-none transition-colors`}
            />
            {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
          </div>
        </div>

        {/* Academic Choice & Scores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Program of Choice <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.program}
              onChange={(e) => setFormData({ ...formData, program: e.target.value })}
              className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 focus:border-blue-900 outline-none bg-white font-medium"
            >
              <option value="B.Tech - Computer Science & Engineering">B.Tech - Computer Science & Engg (CSE)</option>
              <option value="B.Tech - CSE (Artificial Intelligence & ML)">B.Tech - CSE (AI & Machine Learning)</option>
              <option value="B.Tech - Mechanical Engineering">B.Tech - Mechanical Engineering (ME)</option>
              <option value="B.Tech - Civil Engineering">B.Tech - Civil Engineering (CE)</option>
              <option value="B.Tech - Electronics & Communication">B.Tech - Electronics & Comm (ECE)</option>
              <option value="Master of Business Administration (MBA)">Master of Business Administration (MBA)</option>
              <option value="Polytechnic Diploma in CSE">Polytechnic Diploma in CSE</option>
              <option value="Polytechnic Diploma in Mechanical">Polytechnic Diploma in Mechanical</option>
              <option value="Polytechnic Diploma in Civil">Polytechnic Diploma in Civil</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Category for Scholarship Verification
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 focus:border-blue-900 outline-none bg-white font-medium"
            >
              <option value="General">General / Unreserved</option>
              <option value="OBC">OBC (Other Backward Classes)</option>
              <option value="SC">SC (Scheduled Caste)</option>
              <option value="ST">ST (Scheduled Tribe)</option>
              <option value="EWS">EWS (Economically Weaker Section)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Last Qualification Passed
            </label>
            <select
              value={formData.qualification}
              onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
              className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 focus:border-blue-900 outline-none bg-white font-medium"
            >
              <option value="10+2 (PCM)">10+2 / Intermediate (Physics, Chem, Maths)</option>
              <option value="10+2 (Other)">10+2 / Intermediate (Commerce/Arts/Bio)</option>
              <option value="10th High School">10th Matriculation (For Polytechnic)</option>
              <option value="Graduation (B.A/B.Sc/B.Com)">Graduation (B.A/B.Sc/B.Com for MBA)</option>
              <option value="B.E./B.Tech">B.E./B.Tech (For M.Tech Admission)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Percentage / Aggregate Score (%) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              step="0.1"
              placeholder="e.g. 78.5"
              value={formData.percentage}
              onChange={(e) => setFormData({ ...formData, percentage: e.target.value })}
              className={`w-full text-xs px-3.5 py-2.5 rounded-lg border ${
                errors.percentage ? 'border-red-500 bg-red-50/40' : 'border-slate-300 focus:border-blue-900'
              } outline-none transition-colors font-mono`}
            />
            {errors.percentage && <p className="text-[11px] text-red-500 mt-1">{errors.percentage}</p>}
          </div>
        </div>

        {/* Accommodation & City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              City / Domicile Location
            </label>
            <input
              type="text"
              placeholder="e.g. Sagar, Damoh, Chhatarpur, Bhopal"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-900 outline-none transition-colors"
            />
          </div>

          <div className="flex items-center gap-6 pt-5">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700">
              <input
                type="checkbox"
                checked={formData.hostelRequired}
                onChange={(e) => setFormData({ ...formData, hostelRequired: e.target.checked })}
                className="rounded border-slate-300 text-blue-900 focus:ring-0"
              />
              <span>Hostel Needed</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700">
              <input
                type="checkbox"
                checked={formData.busRequired}
                onChange={(e) => setFormData({ ...formData, busRequired: e.target.checked })}
                className="rounded border-slate-300 text-blue-900 focus:ring-0"
              />
              <span>City Bus Transport Needed</span>
            </label>
          </div>
        </div>

        {/* Dynamic Tuition & Scholarship Calculator Box */}
        <div className="bg-blue-50/70 rounded-xl p-4 border border-blue-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Real-Time Fee & Scholarship Estimate
            </span>
            <div className="text-xs text-slate-600">
              Base Annual Tuition: <span className="font-semibold text-slate-800">₹{feeCalc.baseTuition.toLocaleString('en-IN')}</span> ·
              Estimated Scholarship: <span className="font-semibold text-emerald-700">₹{feeCalc.scholarshipBenefit.toLocaleString('en-IN')}</span>
            </div>
          </div>
          <div className="text-right sm:border-l sm:border-blue-200 sm:pl-4">
            <span className="text-[10px] uppercase font-bold text-slate-500 block">Net Payable Approx.</span>
            <span className="text-lg font-extrabold text-[#0c2340] font-mono tabular-nums">
              ₹{feeCalc.netTuition.toLocaleString('en-IN')}<span className="text-xs text-slate-500 font-sans font-normal">/yr</span>
            </span>
          </div>
        </div>

        {/* Message / Remarks */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Specific Questions / Queries (Optional)
          </label>
          <textarea
            rows={2}
            placeholder="Tell us if you have questions regarding JEE counseling, document submission, or hostel allotment..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-blue-900 outline-none transition-colors"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-slate-500 text-center sm:text-left">
            Direct Helpline: <span className="font-bold text-blue-950">{COLLEGE_INFO.phone}</span> | {COLLEGE_INFO.admissionsEmail}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg shadow-md text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Registering Application...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Admissions Inquiry</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
