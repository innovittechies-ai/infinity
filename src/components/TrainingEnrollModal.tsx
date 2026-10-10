import React, { useState } from 'react';
import { X, CheckCircle, Send, Cpu, Clock, Calendar, Sparkles } from 'lucide-react';
import { TrainingProgram } from '../data/collegeData';

interface TrainingEnrollModalProps {
  program: TrainingProgram | null;
  onClose: () => void;
}

export const TrainingEnrollModal: React.FC<TrainingEnrollModalProps> = ({ program, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    branch: 'B.Tech - CSE',
    semester: 'Semester V',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!program) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2400);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-[#0f2d59] text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Workshop Enrollment @ IMEC
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded hover:bg-blue-900 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-9 h-9" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Enrollment Confirmed!</h3>
            <p className="text-xs text-slate-600">
              You are registered for <strong>{program.title}</strong>. Workshop joining instructions and syllabus schedule have been dispatched to your email and phone.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs">
              <div className="font-bold text-[#0c2340] mb-0.5">{program.title}</div>
              <div className="text-slate-600 flex items-center gap-3">
                <span>Partner: {program.industryPartner}</span>
                <span>·</span>
                <span>Duration: {program.duration}</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Student / Participant Name</label>
              <input
                required
                type="text"
                placeholder="e.g. Priyanshu Tiwari"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 outline-none focus:border-blue-900"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="priyanshu@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 outline-none focus:border-blue-900"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Mobile (+91)</label>
                <input
                  required
                  type="tel"
                  placeholder="73890 74289"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 outline-none focus:border-blue-900 font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Department / Branch</label>
                <select
                  value={formData.branch}
                  onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                  className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 outline-none focus:border-blue-900 bg-white"
                >
                  <option value="B.Tech - CSE">B.Tech - CSE</option>
                  <option value="B.Tech - ME">B.Tech - Mechanical</option>
                  <option value="B.Tech - CE">B.Tech - Civil</option>
                  <option value="B.Tech - ECE">B.Tech - ECE</option>
                  <option value="MBA">MBA Management</option>
                  <option value="Polytechnic Diploma">Polytechnic</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Current Semester</label>
                <select
                  value={formData.semester}
                  onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                  className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 outline-none focus:border-blue-900 bg-white"
                >
                  <option value="Semester I / II">1st Year (Sem I / II)</option>
                  <option value="Semester III / IV">2nd Year (Sem III / IV)</option>
                  <option value="Semester V / VI">3rd Year (Sem V / VI)</option>
                  <option value="Semester VII / VIII">Final Year (Sem VII / VIII)</option>
                </select>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded text-xs text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Confirm Enrollment</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
