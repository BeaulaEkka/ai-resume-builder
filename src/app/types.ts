import { Prisma } from "@prisma/client";

export type ResumeValues = {
  title: string;
  description: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type ResumeServerData = Prisma.ResumeGetPayload<{}>;
