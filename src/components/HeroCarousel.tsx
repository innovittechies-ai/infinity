import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Award,
  Building,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  BookOpen,
  Cpu
} from 'lucide-react';
import { HERO_SLIDES } from '../data/collegeData';

interface HeroCarouselProps {
  onExplorePrograms: () => void;
  onOpenAdmissions: () => void;
  onViewFacilities: () => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  onExplorePrograms,
  onOpenAdmissions,
  onViewFacilities,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <div
      className="relative w-full bg-[#07162c] text-white overflow-hidden min-h-[500px] md:min-h-[560px] flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Graphic Pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Atmospheric Radial Gradients */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Slide Content Grid */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Slide Category Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-900/60 border border-blue-700/50 text-xs font-semibold text-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{slide.tag}</span>
              <span className="text-blue-400">·</span>
              <span className="text-slate-300">{slide.badge}</span>
            </div>

            {/* Slide Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
              {slide.title}
            </h2>

            {/* Slide Subtitle */}
            <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-2xl">
              {slide.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenAdmissions}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-3 rounded-md shadow-lg shadow-amber-500/20 text-sm flex items-center gap-2 transition-all hover:translate-y-[-1px] cursor-pointer"
              >
                <span>{slide.primaryAction}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={slide.id === 2 ? onViewFacilities : onExplorePrograms}
                className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold px-5 py-3 rounded-md text-sm transition-all hover:border-white/40 cursor-pointer"
              >
                {slide.secondaryAction}
              </button>
            </div>

            {/* Highlights Bar */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-blue-900/50 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>AICTE Approved</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>RGPV Affiliated</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Scholarships for All</span>
              </div>
            </div>
          </div>

          {/* Right Visual / Graphic Column */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative rounded-2xl bg-gradient-to-br from-[#102d57] to-[#0a1a33] p-6 border border-blue-700/40 shadow-2xl overflow-hidden">
              {/* Decorative Header */}
              <div className="flex items-center justify-between pb-4 border-b border-blue-800/40">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <span className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase">
                  IMEC ACADEMIC EXCELLENCE
                </span>
              </div>

              {/* Dynamic Visual Mock for Current Slide */}
              <div className="py-6 space-y-4">
                {currentSlide === 0 && (
                  <div className="space-y-4">
                    <div className="h-36 rounded-xl bg-gradient-to-tr from-blue-900 via-indigo-900 to-blue-800 flex flex-col justify-end p-4 border border-blue-700/30">
                      <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Infinity Campus</span>
                      <p className="text-white font-bold text-sm">35+ Acres State-of-the-Art Academic Sanctuary</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-800/40">
                        <span className="text-slate-400 block text-[10px] uppercase">Established</span>
                        <span className="text-white font-bold text-base">2008</span>
                        <span className="text-slate-400 block text-[10px] mt-0.5">18+ Years of Trust</span>
                      </div>
                      <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-800/40">
                        <span className="text-slate-400 block text-[10px] uppercase">Students Trained</span>
                        <span className="text-amber-400 font-bold text-base">12,500+</span>
                        <span className="text-slate-400 block text-[10px] mt-0.5">Alumni Globally</span>
                      </div>
                    </div>
                  </div>
                )}

                {currentSlide === 1 && (
                  <div className="space-y-4">
                    <div className="h-36 rounded-xl bg-gradient-to-tr from-slate-900 via-blue-950 to-indigo-950 flex flex-col justify-end p-4 border border-blue-700/30">
                      <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
                        <Cpu className="w-4 h-4" /> Robotics & IoT Labs
                      </div>
                      <p className="text-white font-bold text-sm">Hardware Prototyping, GPU Clusters & CAD Studios</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-800/40">
                        <span className="text-slate-400 block text-[10px] uppercase">Engineering Labs</span>
                        <span className="text-white font-bold text-base">45+ Units</span>
                        <span className="text-slate-400 block text-[10px] mt-0.5">Modern Machineries</span>
                      </div>
                      <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-800/40">
                        <span className="text-slate-400 block text-[10px] uppercase">Skill Certifications</span>
                        <span className="text-emerald-400 font-bold text-base">AWS & RedHat</span>
                        <span className="text-slate-400 block text-[10px] mt-0.5">Industry Partners</span>
                      </div>
                    </div>
                  </div>
                )}

                {currentSlide === 2 && (
                  <div className="space-y-4">
                    <div className="h-36 rounded-xl bg-gradient-to-tr from-amber-950 via-blue-950 to-blue-900 flex flex-col justify-end p-4 border border-blue-700/30">
                      <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Placement Spotlight</span>
                      <p className="text-white font-bold text-sm">Priyanshu Tiwari placed at Hexaware for ₹7.09 LPA</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-800/40">
                        <span className="text-slate-400 block text-[10px] uppercase">Corporate Recruiters</span>
                        <span className="text-white font-bold text-base">150+ MNCs</span>
                        <span className="text-slate-400 block text-[10px] mt-0.5">Hexaware, TCS, Wipro</span>
                      </div>
                      <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-800/40">
                        <span className="text-slate-400 block text-[10px] uppercase">Placement Percentage</span>
                        <span className="text-amber-400 font-bold text-base">85%+</span>
                        <span className="text-slate-400 block text-[10px] mt-0.5">Across All Branches</span>
                      </div>
                    </div>
                  </div>
                )}

                {currentSlide === 3 && (
                  <div className="space-y-4">
                    <div className="h-36 rounded-xl bg-gradient-to-tr from-emerald-950 via-blue-950 to-blue-900 flex flex-col justify-end p-4 border border-blue-700/30">
                      <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Campus Life & Sports</span>
                      <p className="text-white font-bold text-sm">Cricket Grounds, Gym, Hostels & Central Library</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-800/40">
                        <span className="text-slate-400 block text-[10px] uppercase">Digital Library</span>
                        <span className="text-white font-bold text-base">40,000+</span>
                        <span className="text-slate-400 block text-[10px] mt-0.5">Volumes & DELNET</span>
                      </div>
                      <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-800/40">
                        <span className="text-slate-400 block text-[10px] uppercase">Hostel Capacity</span>
                        <span className="text-white font-bold text-base">500+ Beds</span>
                        <span className="text-slate-400 block text-[10px] mt-0.5">Boys & Girls Mess</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Quick Tag */}
              <div className="pt-2 text-center text-[11px] text-slate-400 border-t border-blue-900/40">
                Infinity Management & Engineering College, Sagar (M.P.)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition-all cursor-pointer z-20 border border-white/10"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition-all cursor-pointer z-20 border border-white/10"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              idx === currentSlide ? 'w-8 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
