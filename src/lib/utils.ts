import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { ResumeServerData } from "./types"
import { ResumeValues } from "@/app/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function mapToResumeValues(data:ResumeServerData): ResumeValues {
  return {
    title: data?.title || '',
    description: data?.description || '',
    userId: data?.userId || '',
    createdAt: data?.createdAt || new Date(),
    updatedAt: data?.updatedAt || new Date(),
  };
}