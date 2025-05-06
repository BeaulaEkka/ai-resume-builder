'use client';
import { useState } from 'react';
import ResumePreviewSection from './ResumePreviewSection';
// assume you define this
import { mapToResumeValues } from '@/lib/utils';
import { ResumeValues } from '@/app/types';

interface ResumeEditorProps {
  resumeToEdit: {
    id: string;
    title: string;
    description: string | null;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

export default function ResumeEditor({ resumeToEdit }: ResumeEditorProps) {
  // const [resumeData, setResumeData] = useState<ResumeValues>(
  //   mapToResumeValues(resumeToEdit)
  // );

  return (
    <div>
      <ResumePreviewSection
        resume={resumeToEdit}
        // setResumeData={setResumeData}
      />
    </div>
  );
}
