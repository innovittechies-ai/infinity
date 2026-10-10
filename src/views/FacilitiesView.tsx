import React, { useState } from 'react';
import {
  Cpu,
  Building2,
  Home,
  Trophy,
  Wifi,
  BookOpen,
  Coffee,
  ShieldCheck,
  CheckCircle,
  Sparkles
} from 'lucide-react';

interface FacilitiesViewProps {
  initialSubSection?: string;
  onOpenAdmissions: () => void;
}

export const FacilitiesView: React.FC<FacilitiesViewProps> = ({
  initialSubSection = 'labs',
  onOpenAdmissions,
}) => {
  const [activeSection, setActiveSection] = useState<string>(initialSubSection);

  return (
    <div className="py-10 px-4 md:px-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Title */}
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Campus Ecosystem & Resources
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0c2340] tracking-tight mt-1">
            Infrastructure & World-Class Facilities
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Spread across 35+ acres of landscaped greenery designed for academic focus and vibrant student living.
          </p>
        </div>

        {/* Sub-Section Switcher Tabs */}
        <div className="bg-white rounded-xl border border-slate-200 p-1 flex items-center gap-1 text-xs font-semibold overflow-x-auto shadow-xs">
          {[
            { id: 'labs', label: 'Advanced Laboratories' },
            { id: 'campus', label: 'Smart Green Campus & Wi-Fi' },
            { id: 'hostel', label: 'Hostels & Residential Life' },
            { id: 'sports', label: 'Sports Complex & Gym' },
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

        {/* 1. LABS */}
        {activeSection === 'labs' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-4">
              <h3 className="text-xl font-bold text-[#0c2340]">45+ Specialized Engineering & Computing Laboratories</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Practical exposure is the cornerstone of pedagogical success at IMEC. Every department houses modern, air-conditioned laboratories equipped with industrial hardware, CAD simulation workstations, and licensed enterprise software.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-900 text-amber-400 flex items-center justify-center font-bold">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">AI & High-Performance Computing</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    NVIDIA GPU-accelerated computing rigs for deep neural networks, computer vision, and real-time machine learning inference.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Heavy Machine Shop & Workshop</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Spacious 8,000 sq.ft mechanical workshop featuring central lathes, universal testing machines (UTM), and welding bays.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold">
                    <Wifi className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">IoT & Microcontroller Fab</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Raspberry Pi, ARM Cortex, and Arduino sensor benches designed for prototyping connected automation and smart city hardware.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. CAMPUS */}
        {activeSection === 'campus' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded">
                  Smart Green Campus
                </span>
                <h3 className="text-2xl font-black text-[#0c2340]">35+ Acres Eco-Friendly Academic Oasis</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Located along Patharia Hills, Sagar, the campus blends serene natural landscapes with state-of-the-art academic architecture. The entire campus is powered by high-speed fiber-optic Wi-Fi, solar street illumination, and rainwater harvesting reserves.
                </p>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Air-Conditioned Smart Classrooms with Interactive Flat Panels</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>800-Seater Central Auditorium for National Conferences</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Central Digital Library with 40,000+ volumes and DELNET e-Journals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Dedicated College Bus Fleet connecting entire Sagar District</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0f2d59] text-white space-y-4">
                <h4 className="text-lg font-bold">Experience IMEC in Person</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We welcome prospective students and parents for guided campus walkthroughs every Monday to Saturday between 10:00 AM and 5:00 PM.
                </p>
                <button
                  onClick={onOpenAdmissions}
                  className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition-colors cursor-pointer"
                >
                  Book a Campus Visit
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 3. HOSTEL */}
        {activeSection === 'hostel' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#0c2340]">Residential Hostels & Mess Facilities</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                A home away from home with round-the-clock security, hygienic catering, and recreation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-blue-900 text-white flex items-center justify-center font-bold">
                  <Home className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Boys & Girls Residential Blocks</h4>
                <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside">
                  <li>Separate secure multi-storey hostel buildings for male and female scholars.</li>
                  <li>Furnished double and triple occupancy rooms with study tables and almirahs.</li>
                  <li>24x7 CCTV surveillance, biometric entry logs, and dedicated resident wardens.</li>
                  <li>High-speed Wi-Fi access in common reading rooms and study halls.</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                  <Coffee className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Hygienic Dining & Cafeteria</h4>
                <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside">
                  <li>FSSAI-certified kitchen preparing wholesome, pure-vegetarian North & South Indian meals.</li>
                  <li>Four balanced meals served daily (Breakfast, Lunch, Evening Snacks & Dinner).</li>
                  <li>Student Mess Committee supervising weekly menus, freshness, and cleanliness.</li>
                  <li>On-campus cafeteria serving fresh snacks, tea, and packaged beverages.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* 4. SPORTS */}
        {activeSection === 'sports' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#0c2340]">Sports Complex, Gymnasium & Athletics</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Nurturing champions and physical vitality through extensive athletic arenas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-blue-900 text-sm">Cricket & Football Ground</h4>
                <p className="text-slate-600">Full-size turf cricket pitch and football stadium with pavilion seating for collegiate tournaments.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-blue-900 text-sm">Badminton & Volleyball</h4>
                <p className="text-slate-600">Floodlit outdoor volleyball courts and indoor synthetic badminton arena for evening sports.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-blue-900 text-sm">Modern Fitness Gym</h4>
                <p className="text-slate-600">Fully equipped cardio and strength training gymnasium guided by certified fitness instructors.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-blue-900 text-sm">Indoor Games Hall</h4>
                <p className="text-slate-600">Table tennis tables, carrom boards, chess zones, and yoga studio for relaxation and concentration.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
