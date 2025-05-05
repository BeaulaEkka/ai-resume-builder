import { useState } from 'react';
import ResumePreviewSection from './ResumePreviewSection';
import { ResumeValues } from '@/types/resume'; // assume you define this

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
  const [resumeData, setResumeData] = useState<ResumeValues>(
    mapToResumeValues(resumeToEdit)
  );

  return (
    <div>
      <ResumePreviewSection
        resumeId={resumeToEdit.id}
        setResumeData={setResumeData}
      />
    </div>
  );
}
