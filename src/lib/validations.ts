import { StaticImageData } from "next/image";
import { z } from "zod";

export const optionalString = z
  .string()
  .trim()
  .optional()
  .or(z.literal(""))
  .or(z.null());

//generalInfoSchema
export const generalInfoSchema = z.object({
  title: optionalString,
  description: optionalString,
});

export type GeneralInfoValues = z.infer<typeof generalInfoSchema>;

//personalInfoSchema
export const personalInfoSchema = z.object({
  photo: z
    .custom<File | undefined>()
    .refine(
      (file) =>
        !file || (file instanceof File && file.type.startsWith("image/")),
      "It must be an image file"
    )
    .refine(
      (file) => !file || file.size <= 1024 * 1024 * 4,
      "File must be less than 4MB"
    ),
  firstName: optionalString,
  lastName: optionalString,
  jobTitle: optionalString,
  email: optionalString,
  phone: optionalString,
  city: optionalString,
  zipCode: optionalString,
  country: optionalString,
});

export type PersonalInfoValues = z.infer<typeof personalInfoSchema>;

//resumeSchema
export const resumeSchema = generalInfoSchema.merge(personalInfoSchema);

export type ResumeValues = Omit<z.infer<typeof resumeSchema>, "photo"> & {
  id?: string;
  photo?: File | string | StaticImageData | null;
};
