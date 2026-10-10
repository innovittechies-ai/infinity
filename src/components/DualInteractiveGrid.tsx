import React, { useState } from 'react';
import {
  Bell,
  Calendar,
  FileText,
  ExternalLink,
  Cpu,
  Shield,
  Award,
  Clock,
  User,
  ArrowRight,
  Sparkles,
  Download,
  X,
  CheckCircle2
} from 'lucide-react';
import { LATEST_NOTICES, TRAINING_PROGRAMS, Notice, TrainingProgram } from '../data/collegeData';

interface DualInteractiveGridProps {
  onOpenTrainingEnroll: (program: TrainingProgram) => void;
}

export const DualInteractiveGrid: React.FC<DualInteractiveGridProps> = ({ onOpenTrainingEnroll }) => {
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
  const [noticeFilter, setNoticeFilter] = useState<string>('All');
  const [downloadSuccessMessage, setDownloadSuccessMessage] = useState<string | null>(null);

  const filteredNotices = noticeFilter === 'All'
    ? LATEST_NOTICES
    : LATEST_NOTICES.filter((n) => n.category.toLowerCase().includes(noticeFilter.toLowerCase()));

  const handleDownloadNotice = (pdfName?: string) => {
    setDownloadSuccessMessage(`Downloading ${pdfName || 'Official_Circular.pdf'}...`);
    setTimeout(() => {
      setDownloadSuccessMessage(null);
    }, 3000);
  };

  return (
    <section className="py-14 px-4 md:px-8 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-900">
              Campus Intelligence & Skill Tracks
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0c2340] tracking-tight mt-1">
              Active Circulars & Technical Training @ IMEC
            </h2>
          </div>
          <p className="text-xs text-slate-500 max-w-md">
            Stay informed with real-time institutional updates and enhance your professional portfolio with industry-certified workshops.
          </p>
        </div>

        {/* Dual Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* COLUMN 1: NOTICE BOARD (7 cols on lg) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col h-[580px]">
            {/* Notice Board Header */}
            <div className="bg-[#0f2d59] text-white p-4 flex items-center justify-between border-b border-blue-900 shrink-0">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-amber-400" />
                <h3 className="font-extrabold text-base tracking-tight">Official Notice Board</h3>
              </div>
              <span className="text-[11px] font-semibold text-slate-300 bg-blue-950/70 px-2.5 py-0.5 rounded border border-blue-800">
                Live Feed
              </span>
            </div>

            {/* Category Quick Filter */}
            <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 flex items-center gap-1.5 overflow-x-auto text-xs shrink-0">
              <span className="text-slate-500 font-semibold mr-1 shrink-0">Filter:</span>
              {['All', 'Examination', 'Placement', 'Academic', 'Sports'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setNoticeFilter(cat)}
                  className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer text-xs ${
                    noticeFilter === cat
                      ? 'bg-blue-900 text-white font-bold'
                      : 'text-slate-600 hover:bg-slate-200/70'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Scrollable Notices List */}
            <div className="overflow-y-auto flex-1 divide-y divide-slate-100 p-2 space-y-1">
              {filteredNotices.map((notice) => (
                <div
                  key={notice.id}
                  onClick={() => setSelectedNotice(notice)}
                  className="p-3.5 hover:bg-blue-50/60 rounded-xl transition-all cursor-pointer group flex items-start gap-3.5"
                >
                  {/* Calendar Badge */}
                  <div className="bg-slate-100 group-hover:bg-blue-100 rounded-lg p-2 text-center shrink-0 w-14 transition-colors">
                    <span className="block text-[10px] font-extrabold uppercase text-blue-900 tracking-wider">
                      {notice.date.split(' ')[0]}
                    </span>
                    <span className="block text-base font-black text-slate-900 group-hover:text-blue-900 font-mono">
                      {notice.date.split(' ')[1].replace(',', '')}
                    </span>
                  </div>

                  {/* Notice Content Summary */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {notice.category}
                      </span>
                      {notice.isNew && (
                        <span className="bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.2 rounded uppercase animate-pulse">
                          New
                        </span>
                      )}
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-2 leading-snug">
                      {notice.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-1">
                      {notice.content}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="text-slate-300 group-hover:text-blue-900 transition-colors shrink-0 self-center">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>

            {/* Notice Board Footer */}
            <div className="p-3 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-500 shrink-0">
              Showing official communications authorized by Office of the Registrar, IMEC
            </div>
          </div>

          {/* COLUMN 2: TRAINING @ IMEC (5 cols on lg) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col h-[580px]">
            {/* Training Header */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-4 flex items-center justify-between border-b border-amber-800 shrink-0">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-white" />
                <h3 className="font-extrabold text-base tracking-tight">Training @ IMEC</h3>
              </div>
              <span className="text-[11px] font-bold text-amber-950 bg-amber-300 px-2 py-0.5 rounded">
                Skill Tracks
              </span>
            </div>

            {/* Scrollable Training Workshops List */}
            <div className="overflow-y-auto flex-1 divide-y divide-slate-100 p-4 space-y-4">
              {TRAINING_PROGRAMS.map((prog) => (
                <div
                  key={prog.id}
                  className="p-4 rounded-xl border border-slate-200/90 hover:border-amber-400 hover:shadow-xs transition-all space-y-3 bg-slate-50/50"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      Partner: {prog.industryPartner}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {prog.duration}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-[#0c2340] leading-snug">
                    {prog.title}
                  </h4>

                  <p className="text-xs text-slate-600 line-clamp-2">
                    {prog.description}
                  </p>

                  {/* Topics Covered Tags */}
                  <div className="flex flex-wrap gap-1 text-[10px] text-slate-600">
                    {prog.topics.slice(0, 3).map((topic, i) => (
                      <span key={i} className="bg-white border border-slate-200 px-1.5 py-0.5 rounded">
                        {topic}
                      </span>
                    ))}
                    {prog.topics.length > 3 && (
                      <span className="text-slate-400 font-semibold">+{prog.topics.length - 3} more</span>
                    )}
                  </div>

                  {/* Action Bar */}
                  <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 font-medium">
                      Mentor: <span className="text-slate-800 font-semibold">{prog.instructor.split('&')[0]}</span>
                    </span>
                    <button
                      onClick={() => onOpenTrainingEnroll(prog)}
                      className="bg-[#0f2d59] hover:bg-blue-900 text-white font-semibold text-xs px-3 py-1.5 rounded transition-colors cursor-pointer"
                    >
                      Enroll Workshop
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Training Card Bottom Info */}
            <div className="p-3 bg-amber-50 border-t border-amber-200 text-center text-xs text-amber-900 font-medium shrink-0">
              All workshops culminate in verifiable industrial certifications & project portfolio.
            </div>
          </div>
        </div>
      </div>

      {/* NOTICE DETAIL MODAL */}
      {selectedNotice && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden">
            {/* Modal Header */}
            <div className="bg-[#0f2d59] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  IMEC Official Circular
                </span>
              </div>
              <button
                onClick={() => setSelectedNotice(null)}
                className="text-slate-300 hover:text-white p-1 rounded hover:bg-blue-900 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-3">
                <span className="font-semibold text-blue-900 bg-blue-50 px-2 py-0.5 rounded">
                  {selectedNotice.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {selectedNotice.date}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {selectedNotice.title}
              </h3>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed font-serif">
                {selectedNotice.content}
              </div>

              {downloadSuccessMessage && (
                <div className="p-2.5 rounded bg-emerald-50 text-emerald-800 text-xs flex items-center gap-2 border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{downloadSuccessMessage}</span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedNotice(null)}
                  className="px-4 py-2 rounded text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => handleDownloadNotice(selectedNotice.pdfName)}
                  className="px-4 py-2 rounded text-xs font-bold bg-[#0f2d59] text-white hover:bg-blue-900 flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>Download Notice (PDF)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
