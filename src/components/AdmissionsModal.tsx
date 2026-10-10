import React from 'react';
import { X } from 'lucide-react';
import { AdmissionsInquiryForm } from './AdmissionsInquiryForm';

interface AdmissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourse?: string;
}

export const AdmissionsModal: React.FC<AdmissionsModalProps> = ({ isOpen, onClose, initialCourse }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl my-6">
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-colors shadow-lg cursor-pointer border-2 border-white"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="max-h-[90vh] overflow-y-auto rounded-2xl">
          <AdmissionsInquiryForm onSuccessClose={onClose} initialCourse={initialCourse} />
        </div>
      </div>
    </div>
  );
};
