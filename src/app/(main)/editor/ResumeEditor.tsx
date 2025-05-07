'use client';
import { ResumeServerData } from '@/lib/types';
import ResumePreviewSection from './ResumePreviewSection';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { ResumeValues } from '@/lib/validations';
import { mapToResumeValues } from '@/lib/utils';
import BreadCrumbs from './BreadCrumbs';
import { steps } from './steps';
// assume you define this
// import { mapToResumeValues } from '@/lib/utils';
// import { ResumeValues } from '@/app/types';

interface ResumeEditorProps {
  resumeToEdit: ResumeServerData | null;
}

export default function ResumeEditor({ resumeToEdit }: ResumeEditorProps) {
  const searchparams = useSearchParams();

  const [resumeData, setResumeData] = useState<ResumeValues>(
    resumeToEdit
      ? mapToResumeValues(resumeToEdit)
      : {
          title: '',
          description: '',
          firstName: '',
          lastName: '',
        }
  );

  const currentStep = searchparams.get('step') || steps[0].key;

  function setCurrentStep(key: string) {
    const newSearchParams = new URLSearchParams(searchparams);
    newSearchParams.set('step', key);
    window.history.pushState(null, '', `?${newSearchParams.toString()}`);
  }

  const FormComponent = steps.find(
    (step) => step.key === currentStep
  )?.component;

  return (
    <div className="flex grow flex-col">
      <header className="space-y-1.5 border-b px-3 py-5 text-center">
        <h1 className="text-2xl font-bold">Design your resume</h1>
        <p className="text-sm text-muted-foreground">
          Follow the steps below to create your resume. Your progress will be
          saved automatically
        </p>
      </header>
      <BreadCrumbs currentStep={currentStep} setCurrentStep={setCurrentStep} />
      {FormComponent && (
        <FormComponent
          key={currentStep}
          resumeData={resumeData}
          setResumeData={setResumeData}
        ></FormComponent>
      )}
      <ResumePreviewSection
        resumeData={resumeData}
        setResumeData={setResumeData}
      />
    </div>
  );
}
