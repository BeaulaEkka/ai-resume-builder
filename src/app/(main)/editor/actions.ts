"use server";

import prisma from "@/lib/prisma";

export async function createNewResume(userId: string) {
  const resume = await prisma.resume.create({
    data: {
      title: "Untitled Resume",
      userId,
      description: "",
    },
  });

  return resume;
}
