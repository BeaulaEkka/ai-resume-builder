'use client'
import { ResumeServerData } from '@/lib/types';
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
interface ResumeItemProps {
  resume: ResumeServerData;
}
export default function ResumeItem({ resume }: ResumeItemProps) {
  contentRef = useRef<HTMLDivElement>(null);

  const reactToPrintFn = useReactToPrint({
    contentRef,
    documentTitle: resume.title || 'resume',
  });

  return (
    <div className="group relative rounded-lg border-transparent p-2 hover:border-gray-100 hover:bg-gray-50 hover:shadow-sm">
      This is resume item
    </div>
  );
}
