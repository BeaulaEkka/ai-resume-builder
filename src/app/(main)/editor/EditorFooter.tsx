import React from 'react';
import { steps } from './steps';
import { Button } from '@/components/ui/button';
import { FileUserIcon, Link, PenLineIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EditorFooterProps {
  currentStep: string;
  setCurrentStep: (step: string) => void;
  showSmResumePreview: boolean;
  setShowSmResumePreview: (show: boolean) => void;
  isSaving: boolean;
}
export default function EditorFooter({
  currentStep,
  setCurrentStep,
  showSmResumePreview,
  setShowSmResumePreview,
}: EditorFooterProps) {
  const previousStep = steps.find(
    (_, index) => steps[index + 1]?.key === currentStep
  )?.key;

  const nextStep = steps.find(
    (_, index) => steps[index - 1]?.key === currentStep
  )?.key;
  return (
    <footer className="w-full border border-t border-green-500 px-3 py-5">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3">
        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            onClick={
              previousStep ? () => setCurrentStep(previousStep) : undefined
            }
            disabled={!previousStep}
          >
            Previous Step
          </Button>
          <Button
            variant="secondary"
            onClick={nextStep ? () => setCurrentStep(nextStep) : undefined}
            disabled={!nextStep}
          >
            Next Step
          </Button>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            setShowSmResumePreview(!showSmResumePreview);
          }}
          className="md:hidden"
          title="Show resume preview"
        >
          {showSmResumePreview ? <PenLineIcon /> : <FileUserIcon />}
        </Button>
        <div className="flex items-center gap-3">
          <Button variant="secondary" asChild>
            <Link href="/resumes">Close</Link>
          </Button>
          <p
            className={cn(
              'text-muted-foreground opacity-0',
              isSaving && 'opacity-100'
            )}
          >
            Saving...
          </p>
        </div>
      </div>
    </footer>
  );
}
