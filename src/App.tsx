/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroCarousel } from './components/HeroCarousel';
import { PlacementTicker } from './components/PlacementTicker';
import { AboutSnippet } from './components/AboutSnippet';
import { DualInteractiveGrid } from './components/DualInteractiveGrid';
import { RecruiterGrid } from './components/RecruiterGrid';
import { Footer } from './components/Footer';
import { AdmissionsModal } from './components/AdmissionsModal';
import { TrainingEnrollModal } from './components/TrainingEnrollModal';

import { DepartmentView } from './views/DepartmentView';
import { AboutUsView } from './views/AboutUsView';
import { AdmissionsView } from './views/AdmissionsView';
import { StudentCornerView } from './views/StudentCornerView';
import { FacilitiesView } from './views/FacilitiesView';
import { PlacementView } from './views/PlacementView';
import { OtherLinksView } from './views/OtherLinksView';

import { TrainingProgram } from './data/collegeData';
import { Sparkles, Phone, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [subParam, setSubParam] = useState<string | undefined>(undefined);
  const [isAdmissionsModalOpen, setIsAdmissionsModalOpen] = useState(false);
  const [selectedTrainingProgram, setSelectedTrainingProgram] = useState<TrainingProgram | null>(null);

  const handleNavigate = (view: string, param?: string) => {
    setCurrentView(view);
    setSubParam(param);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAdmissions = (courseName?: string) => {
    setIsAdmissionsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-amber-500 selection:text-white">
      {/* 1. GLOBAL HEADER WITH TOP FLASH TICKER & HIERARCHICAL NAV */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenAdmissions={() => handleOpenAdmissions()}
      />

      {/* 2. DYNAMIC MAIN BODY CONTENT */}
      <main className="flex-1">
        {currentView === 'home' && (
          <div>
            {/* Hero Carousel */}
            <HeroCarousel
              onExplorePrograms={() => handleNavigate('academics', 'all-courses')}
              onOpenAdmissions={() => handleOpenAdmissions()}
              onViewFacilities={() => handleNavigate('facilities', 'labs')}
            />

            {/* Live Placement Highlight Reel Ticker */}
            <PlacementTicker
              onViewAllPlacements={() => handleNavigate('placement', 'overview')}
            />

            {/* About Snippet: Learn. Innovate. Lead. Succeed. */}
            <AboutSnippet
              onLearnMore={() => handleNavigate('about', 'group')}
              onExploreCourses={() => handleNavigate('academics', 'all-courses')}
            />

            {/* Dual-Column Interactive Grid: Notice Board & Training @ IMEC */}
            <DualInteractiveGrid
              onOpenTrainingEnroll={(prog) => setSelectedTrainingProgram(prog)}
            />

            {/* Recruiter Logos Grid & Placement Stats */}
            <RecruiterGrid />
          </div>
        )}

        {currentView === 'about' && (
          <AboutUsView initialSubSection={subParam || 'group'} />
        )}

        {currentView === 'academics' && (
          <DepartmentView
            initialDeptId={subParam || 'cse'}
            onOpenAdmissions={() => handleOpenAdmissions()}
          />
        )}

        {currentView === 'admissions' && (
          <AdmissionsView initialTab={subParam || 'inquiry'} />
        )}

        {currentView === 'student-corner' && (
          <StudentCornerView initialSubSection={subParam || 'notes'} />
        )}

        {currentView === 'facilities' && (
          <FacilitiesView
            initialSubSection={subParam || 'labs'}
            onOpenAdmissions={() => handleOpenAdmissions()}
          />
        )}

        {currentView === 'placement' && (
          <PlacementView
            initialSubSection={subParam || 'overview'}
            onOpenTrainingEnroll={(prog) => setSelectedTrainingProgram(prog)}
          />
        )}

        {currentView === 'other' && (
          <OtherLinksView initialSubSection={subParam || 'nirf'} />
        )}
      </main>

      {/* 3. GLOBAL FOOTER */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAdmissions={() => handleOpenAdmissions()}
      />

      {/* Floating Action Button for Quick Admissions Inquiry */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <button
          onClick={() => handleOpenAdmissions()}
          className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-full shadow-xl flex items-center gap-2 text-xs sm:text-sm border-2 border-white transition-all hover:scale-105 cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-slate-950" />
          <span>Apply Online 2026</span>
        </button>
      </div>

      {/* ADMISSIONS MODAL */}
      <AdmissionsModal
        isOpen={isAdmissionsModalOpen}
        onClose={() => setIsAdmissionsModalOpen(false)}
      />

      {/* TRAINING ENROLLMENT MODAL */}
      <TrainingEnrollModal
        program={selectedTrainingProgram}
        onClose={() => setSelectedTrainingProgram(null)}
      />
    </div>
  );
}
