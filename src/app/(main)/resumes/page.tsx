import { Button } from '@/components/ui/button';
import { PlusSquare } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Resumes',
  description: 'Create a perfect resume in minutes',
};
export default function page() {
  return (
    <main>
      This is resumes page
      <Button asChild className="mx-auto flex w-fit gap-2">
        <Link href="/editor">
          <PlusSquare className="size-5" /> New Resume
        </Link>
      </Button>
    </main>
  );
}
