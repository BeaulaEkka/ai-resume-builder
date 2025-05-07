import React from 'react';
import ResumePreview from './ResumePreview';
import { ResumeValues } from '@/lib/validations';

interface ResumePreviewSectionProps {
  resumeData: ResumeValues;
  setResumeData: (data: ResumeValues) => void;
  className?: string;
}
export default function ResumePreviewSection({
  resumeData,
  setResumeData,
  className,
}: ResumePreviewSectionProps) {
  return (
    <div className="aspect-[210/297] h-fit w-[794] p-12 text-black">
      <ResumePreview resumeData={resumeData} className="max-w-2xl border" />
    </div>
  );
}
