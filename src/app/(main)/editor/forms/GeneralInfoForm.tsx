import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { EditorFormProps } from '@/lib/types';
import { generalInfoSchema, GeneralInfoValues } from '@/lib/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function GeneralInfoForm({
  resumeData,
  setResumeData,
}: EditorFormProps) {
  const form = useForm<GeneralInfoValues>({
    resolver: zodResolver(generalInfoSchema),
    defaultValues: {
      title: resumeData?.title || '',
      description: resumeData?.description || '',
    },
  });
  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div className="space-y-1.5 text-center">
        <h2 className="text-2xl font-semibold">General Info</h2>
        <p className="text-sm text-muted-foreground">
          Enter your general information
        </p>
      </div>
      <Form {...form}>
        <form action="" className="space-y-3">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="My Best Resume"
                    autoFocus
                    value={field.value ?? ''}
                  />
                </FormControl>
                <FormDescription>
                  Give your resume a memorable title
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
