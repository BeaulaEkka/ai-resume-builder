import { ResumeServerData } from '@/lib/types';
import React from 'react';

interface ResumeItemProps {
  resume: ResumeServerData;
}
export default function ResumeItem({ resume }: ResumeItemProps) {
  return <div>This is resume item</div>;
}
