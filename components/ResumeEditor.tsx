"use client";

import { useResumeStore } from "@/hooks/stores/useResumeStore";
import AnimatedIconButton from "./AnimatedBtn";
import EyeIcon from "./ui/eye-icon";
import PenIcon from "./ui/pen-icon";

export default function ResumeEditor() {
  const resume = useResumeStore((s) => s.resume);

  return (
    <div className="flex tracking-wide justify-start gap-2.5 max-sm:w-full md:w-[80vw] max-sm:px-6">
      <AnimatedIconButton icon={<EyeIcon className="-me-0.5" />}>
        Preview
      </AnimatedIconButton>
      <AnimatedIconButton icon={<PenIcon />}>Edit</AnimatedIconButton>
      {resume && <p>{JSON.stringify(resume)}</p>}
    </div>
  );
}
