import { EditorFormProps } from '@/lib/types';
import { personalInfoSchema, PersonalInfoValues } from '@/lib/validations';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
export default function PersonalInfoForm({
  resumeData,
  setResumeData,
}: EditorFormProps) {
  const form = useForm<PersonalInfoValues>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      firstName: resumeData?.firstName || '',
      lastName: resumeData?.lastName || '',
      jobTitle: resumeData?.jobTitle || '',
      city: resumeData?.city || '',
      zipCode: resumeData?.zipCode || '',
      country: resumeData?.country || '',
      email: resumeData?.email || '',
      phone: resumeData?.phone || '',
    },
  });

  const photoInputRef = useRef<HTMLInputElement>(null);
  return (
    <div mx-auto max-w-xl space-y-6>
      <Form {...form}>
        <FormField
          control={form.control}
          name="photo"
          render={({ field: { ...fieldValues } }) => (
            <FormItem>
              <FormLabel>Your Photo</FormLabel>
              <div className="flex items-center gap-2">
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      fieldValues.onChange(file);
                    }}
                    ref={photoInputRef}
                  />
                </FormControl>
                <Button
                  className="border"
                  variant="secondary"
                  type="button"
                  onClick={() => {
                    fieldValues.onChange(null);
                    if (photoInputRef.current) {
                      photoInputRef.current.value = '';
                    }
                  }}
                >
                  Remove
                </Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </Form>
    </div>
  );
}
