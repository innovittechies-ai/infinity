import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  GraduationCap,
  ChevronDown,
  Menu,
  X,
  Building2,
  BookOpen,
  Award,
  Users,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { COLLEGE_INFO, FLASH_ANNOUNCEMENTS } from '../data/collegeData';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string, subParam?: string) => void;
  onOpenAdmissions: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, onOpenAdmissions }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTickerIdx, setCurrentTickerIdx] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  // Rotate ticker message smoothly
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTickerIdx((prev) => (prev + 1) % FLASH_ANNOUNCEMENTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Sticky navbar listener
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: string, subParam?: string) => {
    onNavigate(view, subParam);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full select-none font-sans">
      {/* 1. TOP BANNER BAR */}
      <div className="bg-[#0b1f3a] text-slate-200 border-b border-blue-900/60 text-xs py-1.5 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Flash Ticker */}
          <div className="flex items-center gap-2 overflow-hidden w-full md:w-7/12">
            <span className="bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded text-[11px] uppercase tracking-wider shrink-0 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Flash
            </span>
            <div className="truncate text-slate-200 font-medium transition-all duration-500">
              {FLASH_ANNOUNCEMENTS[currentTickerIdx]}
            </div>
          </div>

          {/* Quick Contact & Action */}
          <div className="flex items-center justify-end gap-4 w-full md:w-auto shrink-0">
            <a
              href={`tel:${COLLEGE_INFO.phone}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold text-white tracking-wide">{COLLEGE_INFO.phone}</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a
              href={`mailto:${COLLEGE_INFO.email}`}
              className="hidden lg:flex items-center gap-1 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{COLLEGE_INFO.email}</span>
            </a>
            <span className="text-slate-600 hidden lg:inline">|</span>
            <button
              onClick={onOpenAdmissions}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-3 py-1 rounded shadow-sm text-xs transition-all hover:shadow-md cursor-pointer whitespace-nowrap"
            >
              Apply Now 2026-27
            </button>
          </div>
        </div>
      </div>

      {/* 2. INSTITUTIONAL BRAND HEADER */}
      <div className="bg-white border-b border-slate-200 py-3.5 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo & Identity Lockup */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 cursor-pointer group"
          >
            {/* Crest Emblem */}
            <div className="w-13 h-13 md:w-15 md:h-15 rounded-xl bg-gradient-to-br from-[#0f2d59] via-[#12366b] to-[#1e3a8a] text-white flex flex-col items-center justify-center p-1.5 shadow-md border-2 border-amber-400/80 group-hover:border-amber-400 transition-all">
              <span className="text-lg md:text-xl font-black tracking-tight text-amber-400 leading-none">IMEC</span>
              <span className="text-[9px] uppercase font-bold tracking-widest text-slate-200 mt-0.5">SAGAR</span>
              <div className="w-6 h-0.5 bg-amber-400 rounded-full mt-0.5"></div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl md:text-2xl font-black text-[#0c2340] tracking-tight group-hover:text-blue-900 transition-colors">
                  INFINITY
                </h1>
                <span className="text-xs uppercase px-1.5 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-200 font-semibold tracking-wider hidden sm:inline-block">
                  ESTD 2008
                </span>
              </div>
              <p className="text-xs md:text-sm font-bold text-slate-700 tracking-tight leading-tight">
                MANAGEMENT & ENGINEERING COLLEGE
              </p>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                Approved by AICTE New Delhi & Affiliated to RGPV Bhopal
              </p>
            </div>
          </div>

          {/* Institutional Highlights / Trust Badges */}
          <div className="hidden lg:flex items-center gap-6 text-right">
            <div className="border-r border-slate-200 pr-5">
              <span className="block text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Affiliated To</span>
              <span className="text-xs font-bold text-[#0c2340]">RGPV Bhopal & MCBU</span>
            </div>
            <div className="border-r border-slate-200 pr-5">
              <span className="block text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Highest Package</span>
              <span className="text-xs font-extrabold text-amber-600">7.09 LPA (Hexaware)</span>
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Toll Free Inquiry</span>
              <span className="text-xs font-bold text-[#0c2340]">{COLLEGE_INFO.tollFree}</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-blue-900 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 3. STICKY HIERARCHICAL NAVIGATION BAR */}
      <nav
        className={`w-full transition-all duration-300 z-40 ${
          isSticky
            ? 'fixed top-0 left-0 bg-[#0f2d59] shadow-lg border-b border-amber-500/40'
            : 'bg-[#0f2d59] border-b border-blue-950'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="hidden lg:flex items-center justify-between">
            {/* Desktop Navigation Links */}
            <div className="flex items-center text-[13px] font-semibold text-white">
              {/* Home */}
              <button
                onClick={() => handleNavClick('home')}
                className={`py-3.5 px-3.5 hover:bg-blue-950 hover:text-amber-300 transition-colors cursor-pointer border-b-2 ${
                  currentView === 'home' ? 'border-amber-400 text-amber-300 bg-blue-950/60' : 'border-transparent'
                }`}
              >
                Home
              </button>

              {/* About Us Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('about')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleNavClick('about')}
                  className={`py-3.5 px-3.5 flex items-center gap-1 hover:bg-blue-950 hover:text-amber-300 transition-colors cursor-pointer border-b-2 ${
                    currentView === 'about' ? 'border-amber-400 text-amber-300 bg-blue-950/60' : 'border-transparent'
                  }`}
                >
                  About Us <ChevronDown className="w-3.5 h-3.5 opacity-80" />
                </button>
                {activeDropdown === 'about' && (
                  <div className="absolute top-full left-0 w-64 bg-white text-slate-800 shadow-xl border-t-2 border-amber-500 rounded-b-md py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <button
                      onClick={() => handleNavClick('about', 'group')}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-900 transition-colors flex items-center justify-between"
                    >
                      Our Group (Infinity Group) <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                    <button
                      onClick={() => handleNavClick('about', 'leadership')}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-900 transition-colors flex items-center justify-between"
                    >
                      Leadership & Management <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                    <button
                      onClick={() => handleNavClick('about', 'vision')}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-900 transition-colors flex items-center justify-between"
                    >
                      Vision, Mission & Goals <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                    <button
                      onClick={() => handleNavClick('about', 'faculty')}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-900 transition-colors flex items-center justify-between"
                    >
                      Distinguished Faculty <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                    <div className="my-1 border-t border-slate-100"></div>
                    <button
                      onClick={() => handleNavClick('about', 'mandatory')}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-blue-900 hover:bg-blue-50 transition-colors flex items-center gap-1.5"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-600" /> Mandatory Disclosures (AICTE)
                    </button>
                  </div>
                )}
              </div>

              {/* Academics (Nested Multi-Level Dropdown) */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('academics')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleNavClick('academics')}
                  className={`py-3.5 px-3.5 flex items-center gap-1 hover:bg-blue-950 hover:text-amber-300 transition-colors cursor-pointer border-b-2 ${
                    currentView === 'academics' ? 'border-amber-400 text-amber-300 bg-blue-950/60' : 'border-transparent'
                  }`}
                >
                  Academics <ChevronDown className="w-3.5 h-3.5 opacity-80" />
                </button>
                {activeDropdown === 'academics' && (
                  <div className="absolute top-full left-0 w-80 bg-white text-slate-800 shadow-xl border-t-2 border-amber-500 rounded-b-md py-2 z-50">
                    <div className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                      Academic Departments
                    </div>
                    {[
                      { id: 'cse', name: 'Computer Science & Engg (CSE)' },
                      { id: 'me', name: 'Mechanical Engineering (ME)' },
                      { id: 'ce', name: 'Civil Engineering (CE)' },
                      { id: 'ece', name: 'Electronics & Comm. (ECE)' },
                      { id: 'mba', name: 'Management Studies (MBA)' },
                    ].map((dept) => (
                      <div key={dept.id} className="relative group/sub">
                        <button
                          onClick={() => handleNavClick('academics', dept.id)}
                          className="w-full text-left px-4 py-2.5 hover:bg-blue-50 hover:text-blue-900 transition-colors flex items-center justify-between text-xs font-semibold"
                        >
                          <span>{dept.name}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                        </button>
                      </div>
                    ))}
                    <div className="my-1 border-t border-slate-100"></div>
                    <button
                      onClick={() => handleNavClick('academics', 'all-courses')}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-blue-900 hover:bg-blue-50 transition-colors flex items-center gap-1.5"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-amber-600" /> All Programs & Intake Matrix
                    </button>
                  </div>
                )}
              </div>

              {/* Admissions Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('admissions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleNavClick('admissions')}
                  className={`py-3.5 px-3.5 flex items-center gap-1 hover:bg-blue-950 hover:text-amber-300 transition-colors cursor-pointer border-b-2 ${
                    currentView === 'admissions' ? 'border-amber-400 text-amber-300 bg-blue-950/60' : 'border-transparent'
                  }`}
                >
                  Admissions <ChevronDown className="w-3.5 h-3.5 opacity-80" />
                </button>
                {activeDropdown === 'admissions' && (
                  <div className="absolute top-full left-0 w-64 bg-white text-slate-800 shadow-xl border-t-2 border-amber-500 rounded-b-md py-2 z-50">
                    <button
                      onClick={() => handleNavClick('admissions', 'inquiry')}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      Online Inquiry Form
                    </button>
                    <button
                      onClick={() => handleNavClick('admissions', 'process')}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      Admission Process & Eligibility
                    </button>
                    <button
                      onClick={() => handleNavClick('admissions', 'scholarships')}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      Scholarships & Concessions
                    </button>
                    <button
                      onClick={() => handleNavClick('admissions', 'feestructure')}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      Fee Structure Guidelines
                    </button>
                  </div>
                )}
              </div>

              {/* Student Corner Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('students')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleNavClick('student-corner')}
                  className={`py-3.5 px-3.5 flex items-center gap-1 hover:bg-blue-950 hover:text-amber-300 transition-colors cursor-pointer border-b-2 ${
                    currentView === 'student-corner' ? 'border-amber-400 text-amber-300 bg-blue-950/60' : 'border-transparent'
                  }`}
                >
                  Student Corner <ChevronDown className="w-3.5 h-3.5 opacity-80" />
                </button>
                {activeDropdown === 'students' && (
                  <div className="absolute top-full left-0 w-64 bg-white text-slate-800 shadow-xl border-t-2 border-amber-500 rounded-b-md py-2 z-50">
                    <button
                      onClick={() => handleNavClick('student-corner', 'notes')}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      Digital Notes & Syllabus
                    </button>
                    <button
                      onClick={() => handleNavClick('student-corner', 'conduct')}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      Code of Conduct & Anti-Ragging
                    </button>
                    <button
                      onClick={() => handleNavClick('student-corner', 'holidays')}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      Holiday List & Calendar
                    </button>
                    <button
                      onClick={() => handleNavClick('student-corner', 'clubs')}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      Student Clubs & Activities
                    </button>
                  </div>
                )}
              </div>

              {/* Infrastructure & Facilities */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('infrastructure')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleNavClick('facilities')}
                  className={`py-3.5 px-3.5 flex items-center gap-1 hover:bg-blue-950 hover:text-amber-300 transition-colors cursor-pointer border-b-2 ${
                    currentView === 'facilities' ? 'border-amber-400 text-amber-300 bg-blue-950/60' : 'border-transparent'
                  }`}
                >
                  Facilities <ChevronDown className="w-3.5 h-3.5 opacity-80" />
                </button>
                {activeDropdown === 'infrastructure' && (
                  <div className="absolute top-full left-0 w-60 bg-white text-slate-800 shadow-xl border-t-2 border-amber-500 rounded-b-md py-2 z-50">
                    <button
                      onClick={() => handleNavClick('facilities', 'labs')}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      Advanced Engineering Labs
                    </button>
                    <button
                      onClick={() => handleNavClick('facilities', 'campus')}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      Wi-Fi Smart Campus
                    </button>
                    <button
                      onClick={() => handleNavClick('facilities', 'hostel')}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      Hostel & Dining
                    </button>
                    <button
                      onClick={() => handleNavClick('facilities', 'sports')}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      Sports Complex & Gym
                    </button>
                  </div>
                )}
              </div>

              {/* T & P (Training & Placement) */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('tnp')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleNavClick('placement')}
                  className={`py-3.5 px-3.5 flex items-center gap-1 hover:bg-blue-950 hover:text-amber-300 transition-colors cursor-pointer border-b-2 ${
                    currentView === 'placement' ? 'border-amber-400 text-amber-300 bg-blue-950/60' : 'border-transparent'
                  }`}
                >
                  T & P <ChevronDown className="w-3.5 h-3.5 opacity-80" />
                </button>
                {activeDropdown === 'tnp' && (
                  <div className="absolute top-full left-0 w-64 bg-white text-slate-800 shadow-xl border-t-2 border-amber-500 rounded-b-md py-2 z-50">
                    <button
                      onClick={() => handleNavClick('placement', 'overview')}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      T&P Overview & Records
                    </button>
                    <button
                      onClick={() => handleNavClick('placement', 'incubation')}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      Incubation Center
                    </button>
                    <button
                      onClick={() => handleNavClick('placement', 'training')}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      Technical Training Tracks
                    </button>
                    <button
                      onClick={() => handleNavClick('placement', 'recruiters')}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      Prominent Recruiters
                    </button>
                  </div>
                )}
              </div>

              {/* Other Links */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('other')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleNavClick('other')}
                  className={`py-3.5 px-3.5 flex items-center gap-1 hover:bg-blue-950 hover:text-amber-300 transition-colors cursor-pointer border-b-2 ${
                    currentView === 'other' ? 'border-amber-400 text-amber-300 bg-blue-950/60' : 'border-transparent'
                  }`}
                >
                  Other Links <ChevronDown className="w-3.5 h-3.5 opacity-80" />
                </button>
                {activeDropdown === 'other' && (
                  <div className="absolute top-full right-0 w-56 bg-white text-slate-800 shadow-xl border-t-2 border-amber-500 rounded-b-md py-2 z-50">
                    <button
                      onClick={() => handleNavClick('other', 'nirf')}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      NIRF Disclosures
                    </button>
                    <button
                      onClick={() => handleNavClick('other', 'nss')}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      NSS Social Outreach
                    </button>
                    <button
                      onClick={() => handleNavClick('other', 'media')}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      Media & Press Gallery
                    </button>
                    <button
                      onClick={() => handleNavClick('other', 'alumni')}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      Alumni Network
                    </button>
                    <button
                      onClick={() => handleNavClick('other', 'careers')}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-900 transition-colors font-semibold text-blue-900"
                    >
                      Careers @ IMEC
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Action in Navbar */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenAdmissions}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-3.5 py-1.5 rounded text-xs transition-colors shadow-sm cursor-pointer"
              >
                Admissions 2026-27
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU ACCORDION */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0d2345] text-white border-t border-blue-900 px-4 py-3 max-h-[80vh] overflow-y-auto space-y-2">
            <button
              onClick={() => handleNavClick('home')}
              className="w-full text-left py-2.5 px-3 rounded hover:bg-blue-900/60 font-semibold text-sm border-b border-blue-900/40"
            >
              Home
            </button>

            {/* About Us Accordion */}
            <div>
              <button
                onClick={() => setMobileActiveSubmenu(mobileActiveSubmenu === 'about' ? null : 'about')}
                className="w-full flex items-center justify-between py-2.5 px-3 rounded hover:bg-blue-900/60 font-semibold text-sm border-b border-blue-900/40"
              >
                <span>About Us</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveSubmenu === 'about' ? 'rotate-180' : ''}`} />
              </button>
              {mobileActiveSubmenu === 'about' && (
                <div className="pl-4 py-2 space-y-1.5 text-xs text-slate-300 bg-blue-950/40 rounded mt-1">
                  <div onClick={() => handleNavClick('about', 'group')} className="py-1.5 hover:text-amber-400 cursor-pointer">Our Group</div>
                  <div onClick={() => handleNavClick('about', 'leadership')} className="py-1.5 hover:text-amber-400 cursor-pointer">Leadership & Trustees</div>
                  <div onClick={() => handleNavClick('about', 'vision')} className="py-1.5 hover:text-amber-400 cursor-pointer">Vision, Mission & Goals</div>
                  <div onClick={() => handleNavClick('about', 'faculty')} className="py-1.5 hover:text-amber-400 cursor-pointer">Faculty Roster</div>
                  <div onClick={() => handleNavClick('about', 'mandatory')} className="py-1.5 hover:text-amber-400 cursor-pointer">Mandatory Disclosures (AICTE)</div>
                </div>
              )}
            </div>

            {/* Academics Accordion */}
            <div>
              <button
                onClick={() => setMobileActiveSubmenu(mobileActiveSubmenu === 'academics' ? null : 'academics')}
                className="w-full flex items-center justify-between py-2.5 px-3 rounded hover:bg-blue-900/60 font-semibold text-sm border-b border-blue-900/40"
              >
                <span>Academics (Departments)</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveSubmenu === 'academics' ? 'rotate-180' : ''}`} />
              </button>
              {mobileActiveSubmenu === 'academics' && (
                <div className="pl-4 py-2 space-y-1.5 text-xs text-slate-300 bg-blue-950/40 rounded mt-1">
                  <div onClick={() => handleNavClick('academics', 'cse')} className="py-1.5 hover:text-amber-400 cursor-pointer">Computer Science & Engg (CSE)</div>
                  <div onClick={() => handleNavClick('academics', 'me')} className="py-1.5 hover:text-amber-400 cursor-pointer">Mechanical Engineering (ME)</div>
                  <div onClick={() => handleNavClick('academics', 'ce')} className="py-1.5 hover:text-amber-400 cursor-pointer">Civil Engineering (CE)</div>
                  <div onClick={() => handleNavClick('academics', 'ece')} className="py-1.5 hover:text-amber-400 cursor-pointer">Electronics & Comm. (ECE)</div>
                  <div onClick={() => handleNavClick('academics', 'mba')} className="py-1.5 hover:text-amber-400 cursor-pointer">Management Studies (MBA)</div>
                </div>
              )}
            </div>

            {/* Admissions */}
            <div>
              <button
                onClick={() => setMobileActiveSubmenu(mobileActiveSubmenu === 'admissions' ? null : 'admissions')}
                className="w-full flex items-center justify-between py-2.5 px-3 rounded hover:bg-blue-900/60 font-semibold text-sm border-b border-blue-900/40"
              >
                <span>Admissions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveSubmenu === 'admissions' ? 'rotate-180' : ''}`} />
              </button>
              {mobileActiveSubmenu === 'admissions' && (
                <div className="pl-4 py-2 space-y-1.5 text-xs text-slate-300 bg-blue-950/40 rounded mt-1">
                  <div onClick={() => handleNavClick('admissions', 'inquiry')} className="py-1.5 hover:text-amber-400 cursor-pointer">Inquiry Form</div>
                  <div onClick={() => handleNavClick('admissions', 'process')} className="py-1.5 hover:text-amber-400 cursor-pointer">Process Overview</div>
                  <div onClick={() => handleNavClick('admissions', 'scholarships')} className="py-1.5 hover:text-amber-400 cursor-pointer">Scholarship Details</div>
                </div>
              )}
            </div>

            {/* Student Corner */}
            <div>
              <button
                onClick={() => setMobileActiveSubmenu(mobileActiveSubmenu === 'students' ? null : 'students')}
                className="w-full flex items-center justify-between py-2.5 px-3 rounded hover:bg-blue-900/60 font-semibold text-sm border-b border-blue-900/40"
              >
                <span>Student Corner</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveSubmenu === 'students' ? 'rotate-180' : ''}`} />
              </button>
              {mobileActiveSubmenu === 'students' && (
                <div className="pl-4 py-2 space-y-1.5 text-xs text-slate-300 bg-blue-950/40 rounded mt-1">
                  <div onClick={() => handleNavClick('student-corner', 'notes')} className="py-1.5 hover:text-amber-400 cursor-pointer">Digital Notes & Video Lectures</div>
                  <div onClick={() => handleNavClick('student-corner', 'conduct')} className="py-1.5 hover:text-amber-400 cursor-pointer">Code of Conduct & Anti-Ragging</div>
                  <div onClick={() => handleNavClick('student-corner', 'holidays')} className="py-1.5 hover:text-amber-400 cursor-pointer">Holiday List & Calendar</div>
                  <div onClick={() => handleNavClick('student-corner', 'clubs')} className="py-1.5 hover:text-amber-400 cursor-pointer">Student Clubs</div>
                </div>
              )}
            </div>

            {/* Facilities */}
            <div>
              <button
                onClick={() => setMobileActiveSubmenu(mobileActiveSubmenu === 'facilities' ? null : 'facilities')}
                className="w-full flex items-center justify-between py-2.5 px-3 rounded hover:bg-blue-900/60 font-semibold text-sm border-b border-blue-900/40"
              >
                <span>Infrastructure & Facilities</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveSubmenu === 'facilities' ? 'rotate-180' : ''}`} />
              </button>
              {mobileActiveSubmenu === 'facilities' && (
                <div className="pl-4 py-2 space-y-1.5 text-xs text-slate-300 bg-blue-950/40 rounded mt-1">
                  <div onClick={() => handleNavClick('facilities', 'labs')} className="py-1.5 hover:text-amber-400 cursor-pointer">Advanced Labs</div>
                  <div onClick={() => handleNavClick('facilities', 'campus')} className="py-1.5 hover:text-amber-400 cursor-pointer">Campus & Wi-Fi</div>
                  <div onClick={() => handleNavClick('facilities', 'hostel')} className="py-1.5 hover:text-amber-400 cursor-pointer">Hostel Facilities</div>
                  <div onClick={() => handleNavClick('facilities', 'sports')} className="py-1.5 hover:text-amber-400 cursor-pointer">Sports & Gymnasium</div>
                </div>
              )}
            </div>

            {/* T & P */}
            <button
              onClick={() => handleNavClick('placement')}
              className="w-full text-left py-2.5 px-3 rounded hover:bg-blue-900/60 font-semibold text-sm border-b border-blue-900/40"
            >
              Training & Placement (T&P)
            </button>

            {/* Other Links */}
            <div>
              <button
                onClick={() => setMobileActiveSubmenu(mobileActiveSubmenu === 'other' ? null : 'other')}
                className="w-full flex items-center justify-between py-2.5 px-3 rounded hover:bg-blue-900/60 font-semibold text-sm border-b border-blue-900/40"
              >
                <span>Other Links</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveSubmenu === 'other' ? 'rotate-180' : ''}`} />
              </button>
              {mobileActiveSubmenu === 'other' && (
                <div className="pl-4 py-2 space-y-1.5 text-xs text-slate-300 bg-blue-950/40 rounded mt-1">
                  <div onClick={() => handleNavClick('other', 'nirf')} className="py-1.5 hover:text-amber-400 cursor-pointer">NIRF Disclosures</div>
                  <div onClick={() => handleNavClick('other', 'nss')} className="py-1.5 hover:text-amber-400 cursor-pointer">NSS Unit</div>
                  <div onClick={() => handleNavClick('other', 'media')} className="py-1.5 hover:text-amber-400 cursor-pointer">Media Gallery</div>
                  <div onClick={() => handleNavClick('other', 'alumni')} className="py-1.5 hover:text-amber-400 cursor-pointer">Alumni Network</div>
                  <div onClick={() => handleNavClick('other', 'careers')} className="py-1.5 hover:text-amber-400 cursor-pointer">Careers @ IMEC</div>
                </div>
              )}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAdmissions}
                className="w-full py-2.5 bg-amber-500 text-slate-950 font-bold rounded text-center text-sm"
              >
                Admissions Inquiry 2026-27
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
