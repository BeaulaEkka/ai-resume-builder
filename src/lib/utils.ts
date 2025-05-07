import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { ResumeServerData } from "./types";
import { ResumeValues } from "./validations";




export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function mapToResumeValues(data:ResumeServerData): ResumeValues {
  return {
    id: data.id,
    title: data?.title || undefined,
    description: data?.description || undefined,
    photo: data?.photoUrl || undefined,
    firstName: data.firstName || undefined,
    lastName: data.lastName || undefined,
    jobTitle: data.jobTitle || undefined,
    city: data.city || undefined,
    zipCode: data.zipCode || undefined,
    country: data.country || undefined,
    email: data.email || undefined,
    phone: data.phone || undefined,
    createdAt: data?.createdAt || new Date(),
    updatedAt: data?.updatedAt || new Date(),
  };
}