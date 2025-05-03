import { auth } from '@clerk/nextjs/server';
import { Metadata } from 'next';
import ResumeEditor from './ResumeEditor';
import { NextResponse } from 'next/server';

interface PageProps {
  // searchParams: Promise<{ resumeId: string }>;
  searchParams: { resumeId?: string };
}
export const metadata: Metadata = {
  title: 'Design your resume',
};
export default async function page({ searchParams }: PageProps) {
  const userId = await auth();
  if (!userId) {
    return NextResponse.redirect('/sign-in'); // Or throw an error
  }
  console.log('userId', userId);
  return (
    <div>
      <ResumeEditor />
    </div>
  );
}
