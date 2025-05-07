import { Prisma, Resume } from "../../generated/prisma";
import { ResumeValues } from "./validations";

export interface EditorFormProps {
  resumeData: ResumeValues;
  setResumeData: (data: ResumeValues) => void;
  key: string;
}

export type ResumeServerData = Prisma.ResumeGetPayload;
