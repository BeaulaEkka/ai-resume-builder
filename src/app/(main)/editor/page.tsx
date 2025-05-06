import { auth } from '@clerk/nextjs/server';
import { Metadata } from 'next';
import ResumeEditor from './ResumeEditor';

import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';

interface PageProps {
  // searchParams: Promise<{ resumeId: string }>;
  // searchParams: { resumeId?: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}
export const metadata: Metadata = {
  title: 'Design your resume',
};
export default async function page({ searchParams }: PageProps) {
  const { userId } = await auth();
// const searchParams = await getSearchParams(); // This is the key
const resumeId =
  typeof searchParams.resumeId === 'string' ? searchParams.resumeId : undefined;

  if (!userId) {
    redirect('/sign-in');
  }
  if (!userId) {
    return null;
  }

  const resumeToEdit = resumeId
    ? await prisma.resume.findUnique({
        where: {
          id: resumeId,
          userId: userId || undefined,
        },
        // include: resumeDataInclude, // if needed
      })
    : null;
  return (
    <div>
      <ResumeEditor resumeToEdit={resumeToEdit} />
    </div>
  );
}
