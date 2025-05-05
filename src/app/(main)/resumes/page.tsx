import { Button } from '@/components/ui/button';
import { PlusSquare } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import ResumeEditor from '../editor/ResumeEditor';

export const metadata = {
  title: 'Resumes',
  description: 'Create a perfect resume in minutes',
};

async function handleCreateNewResume() {
  const newResume = await createNewResume(userId);
  setResumeToEdit(newResume);
}
export default function page() {
  return (
    <main>
      This is resumes page
      <Button
        onClick={handleCreateNewResume}
        className="mx-auto flex w-fit gap-2"
        variant="default"
      >
        <PlusSquare className="size-5" /> New Resume
      </Button>
      {resumeToEdit && <ResumeEditor resumeToEdit={resumeToEdit} />}
    </main>
  );
}
