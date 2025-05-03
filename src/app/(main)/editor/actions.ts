// app/api/resumes/new/route.ts (or use an action on a server component/page)
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.redirect("/sign-in"); // Or throw an error
  }

  const newResume = await prisma.resume.create({
    data: {
      userId,
      title: "Untitled Resume",
      // any other default fields...
    },
  });

  return NextResponse.redirect(`/editor?resumeId=${newResume.id}`);
}
