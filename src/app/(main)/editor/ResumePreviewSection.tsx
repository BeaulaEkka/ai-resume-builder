import React from 'react';
import ResumePreview from './ResumePreview';

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
    <div>
      <ResumePreview resumeData={resumeData} className="max-w-2xl border" />
    </div>
  );
}
