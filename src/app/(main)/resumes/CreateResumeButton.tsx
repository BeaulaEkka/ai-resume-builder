import { Button } from '@/components/ui/button';
import { PlusSquare } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface CreateResumeButtonProps {
  canCreate: boolean;
}
export default function CreateResumeButton({
  canCreate,
}: CreateResumeButtonProps) {
  if (canCreate) {
    return (
      <Button asChild className="mx-auto flex w-fit gap-2">
        <Link href="/editor">
          <PlusSquare className="size-5" /> New Resume
        </Link>
      </Button>
    );
  }
  return (
    <Button
      //   onClick={() => premiumModal.setOpen(true)}
      className="mx-auto flex w-fit gap-2"
    >
      <Link href="/editor">
        <PlusSquare className="size-5" /> New Resume{' '}
      </Link>
    </Button>
  );
}
