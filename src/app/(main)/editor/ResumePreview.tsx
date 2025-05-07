'use client';

import useDimensions from '@/lib/hooks/useDimensions';
import { cn } from '@/lib/utils';
import { ResumeValues } from '@/lib/validations';
import { RefObject, useRef } from 'react';

interface ResumePreviewProps {
  resumeData: ResumeValues;
  contentRef?: React.Ref<HTMLDivElement>;
  className?: string;
}
export default function ResumePreview({
  resumeData,
  contentRef,
  className,
}: ResumePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { width } = useDimensions(containerRef as RefObject<HTMLElement>);
  return (
    <div
      className={cn(
        'aspect-[210/297] h-fit w-full bg-white text-black',
        className
      )}
      ref={containerRef}
    >
      <div
        className={cn('', !width && 'invisible')}
        style={{
          zoom: (1 / 794) * width,
        }}
        ref={contentRef}
        id="resumePreviewContent"
      >
        <ResumePreview resumeData={resumeData} />
      </div>
    </div>
  );
}
