import prisma from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';
import { Metadata } from 'next';
// import CreateResumeButton from './CreateResumeButton';
import ResumeItem from './ResumeItem';
// import { getUserSubscriptionLevel } from '@/lib/subscriptions';
// import { canCreateResume } from '@/lib/permissions';
import { JSX } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlusSquare } from 'lucide-react';

//page title
export const metadata: Metadata = {
  title: 'Your Resumes',
};
export default async function page(): Promise<JSX.Element | null> {
  const { userId } = await auth();
  if (!userId) {
    return null;
  }

  // const subscription = await prisma.userSubscription.findUnique({
  //   where: {
  //     userId,
  //   },
  // });

  // const priceInfo = subscription
  //   ? await stripe.prices.retrieve(subscription.stripePriceId, {
  //       expand: ['product'],
  //     })
  //   : null;

  const [
    resumes,
    totalCount,
    // subscriptionLevel
  ] = await Promise.all([
    prisma.resume.findMany({
      where: {
        userId,
      },
      orderBy: {
        updatedAt: 'desc',
      },
      // include: resumeDataInclude,
    }),
    prisma.resume.count({
      where: {
        userId,
      },
    }),
    // getUserSubscriptionLevel(userId),
  ]);

  return (
    <main className="mx-auto w-full max-w-7xl space-y-6 border border-gray-100 px-3 py-6">
      {/* <CreateResumeButton
       
      /> */}
      <Button asChild className="mx-auto flex w-fit gap-2">
        <Link href="/editor">
          {' '}
          <PlusSquare className="size-5" />
          new Resume{' '}
        </Link>
      </Button>

      <p className="capitalize">Your Resumes</p>
      {/* <p className="capitalize">
        <span className="text-bold text-xl">Subscription: </span>
        {priceInfo ? (priceInfo.product as Stripe.Product).name : 'Free'}
      </p> */}
      <div className="space-y-1">
        <h1 className="text-3xl font-bold">Your resumes</h1>
        <p>Total:{totalCount}</p>
      </div>
      <div className="flex w-full grid-cols-2 flex-col gap-3 sm:grid md:grid-cols-3 lg:grid-cols-4">
        {resumes.map((resume) => (
          <ResumeItem key={resume.id} resume={resume} />
        ))}
      </div>
    </main>
  );
}
