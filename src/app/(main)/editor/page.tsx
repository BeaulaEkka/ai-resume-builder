import { auth } from '@clerk/nextjs/server';
import { Metadata } from 'next';
import ResumeEditor from './ResumeEditor';
import prisma from '@/lib/prisma';


interface PageProps {
  searchParams: Promise<{ resumeId: string }>;
}
export const metadata: Metadata = {
  title: 'Design your resume',
};
export default async function page({ searchParams }: PageProps) {
  const { userId } = await auth();
  const { resumeId } = await searchParams;
  // if (!userId) {
  //   redirect('/sign-in');
  // }
  // if (!userId) {
  //   return null;
  // }

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
