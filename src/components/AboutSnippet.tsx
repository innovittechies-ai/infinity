import React, { useState } from 'react';
import { Target, Compass, Award, CheckCircle, ArrowRight, BookOpen, Lightbulb, Users, ShieldAlert } from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

interface AboutSnippetProps {
  onLearnMore: () => void;
  onExploreCourses: () => void;
}

export const AboutSnippet: React.FC<AboutSnippetProps> = ({ onLearnMore, onExploreCourses }) => {
  const [activePillarTab, setActivePillarTab] = useState<'aims' | 'goals' | 'objectives'>('aims');

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-50 border border-blue-200 text-xs font-bold text-blue-900 uppercase tracking-widest">
            Institutional Legacy Since 2008
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0c2340] tracking-tight">
            Learn. Innovate. Lead. Succeed.
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Infinity Management & Engineering College (IMEC), Sagar is the flagship institution of the Infinity Group.
            Established to transform central India's educational landscape, we deliver rigorous technical training,
            industry-aligned research, and holistic managerial prowess.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-lg bg-blue-900 text-amber-400 flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-105 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0c2340] mb-2 group-hover:text-blue-900 transition-colors">
              01. Learn
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Outcome-based engineering and management curricula affiliated to RGPV Bhopal. Mentored by experienced academicians, IIT/NIT alumni, and research guides.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-105 transition-transform">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0c2340] mb-2 group-hover:text-amber-600 transition-colors">
              02. Innovate
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Equipped with an Incubation & Startup Cell, advanced robotics labs, IoT prototyping benches, and National Intellectual Property (IPR) patent clinics.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-lg bg-blue-800 text-white flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-105 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0c2340] mb-2 group-hover:text-blue-900 transition-colors">
              03. Lead
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fostering decisive administrative capability, team building, and cultural consciousness through active student clubs, NSS camps, and annual festivals.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-105 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0c2340] mb-2 group-hover:text-emerald-700 transition-colors">
              04. Succeed
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Consistently high placement rate across global giants like Hexaware, Cognizant, TCS, and Wipro, with top package reaching ₹7.09 LPA.
            </p>
          </div>
        </div>

        {/* Institutional Pillars: Aims, Goals & Core Objectives Container */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-slate-200 pb-4 gap-4">
            <div>
              <h3 className="text-xl font-extrabold text-[#0c2340]">
                Institutional Charter & Philosophy
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Guided by excellence, integrity, and sustainable development.
              </p>
            </div>

            {/* Segmented Control Buttons */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 text-xs font-semibold">
              <button
                onClick={() => setActivePillarTab('aims')}
                className={`px-4 py-2 rounded-md transition-all cursor-pointer ${
                  activePillarTab === 'aims'
                    ? 'bg-[#0f2d59] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Our Aims
              </button>
              <button
                onClick={() => setActivePillarTab('goals')}
                className={`px-4 py-2 rounded-md transition-all cursor-pointer ${
                  activePillarTab === 'goals'
                    ? 'bg-[#0f2d59] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Strategic Goals
              </button>
              <button
                onClick={() => setActivePillarTab('objectives')}
                className={`px-4 py-2 rounded-md transition-all cursor-pointer ${
                  activePillarTab === 'objectives'
                    ? 'bg-[#0f2d59] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Core Objectives
              </button>
            </div>
          </div>

          {/* Dynamic Content Body */}
          <div className="pt-6">
            {activePillarTab === 'aims' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-blue-900 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-500" /> Democratizing Technical Education
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To make premium engineering and management studies accessible to deserving youth across the Bundelkhand and central India regions regardless of socioeconomic background.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-blue-900 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-500" /> Industry Synchronization
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To align every academic syllabus with active corporate tech stacks through regular guest lectures, corporate moots, and professional internships.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-blue-900 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-500" /> Research & Regional Problem Solving
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To encourage indigenous engineering solutions addressing regional issues in agriculture mechanization, water conservation, and renewable energy.
                  </p>
                </div>
              </div>
            )}

            {activePillarTab === 'goals' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-blue-900 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-500" /> Center of Excellence Expansion
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Establishing dedicated industry-supported labs in Generative AI, Cyber Security, Electric Vehicle (EV) tech, and Semiconductor VLSI.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-blue-900 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-500" /> 100% Employability Readiness
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Mandatory soft skills, coding aptitude, and mock interviews from the 3rd semester onwards, ensuring every graduate lands a fruitful career.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-blue-900 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-500" /> Academic & International Alliances
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Forging MoUs with premier national universities, IIT incubation centers, and multinational corporate training academies.
                  </p>
                </div>
              </div>
            )}

            {activePillarTab === 'objectives' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-blue-900 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-500" /> Ethical Human Values
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Imparting high moral standards, zero-tolerance towards ragging or bias, and sensitizing scholars towards green eco-responsibility.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-blue-900 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-500" /> Faculty Development & Innovation
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Encouraging continuous faculty research through funded national conferences, patent filing subsidies, and doctoral study sabbaticals.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-blue-900 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-500" /> Student Mentorship & Wellness
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A personalized 1:15 faculty-to-student mentor-mentee mechanism tracking academic milestones, psychological well-being, and career progress.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Action Row */}
          <div className="mt-8 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span className="font-semibold text-slate-800">Affiliation & Approvals:</span>
              <span>AICTE New Delhi</span>
              <span>·</span>
              <span>RGPV Bhopal</span>
              <span>·</span>
              <span>DTE Madhya Pradesh</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onLearnMore}
                className="text-xs font-bold text-blue-900 hover:text-amber-600 flex items-center gap-1 cursor-pointer"
              >
                <span>Read Institutional Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
