"use client";

import { useResumeStore } from "@/hooks/stores/useResumeStore";
import { normalizeResume } from "@/lib/helpers";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import AnimatedIconButton from "../buttons/AnimatedBtn";
import { NotFoundPage } from "../NotFound";
import EyeIcon from "../ui/eye-icon";
import PenIcon from "../ui/pen-icon";
import { ResumeCard } from "./ResumeCard";
import { ResumeEditor } from "./ResumeEditor";

export default function ResumePreview() {
  const resume = useResumeStore((s) => s.resume);
  const [isEditMode, setisEditMode] = useState(false);
  const { user } = useUser();

  const normalizedResume = normalizeResume(resume);

  if (!resume || !user) return <NotFoundPage />;

  return (
    <div>
      <div className="flex tracking-wide justify-start gap-2.5 max-sm:w-full md:w-[80vw] max-sm:px-6">
        <AnimatedIconButton
          onClick={() => setisEditMode(false)}
          icon={<EyeIcon className="-me-0.5" />}
        >
          Preview
        </AnimatedIconButton>
        <AnimatedIconButton
          onClick={() => setisEditMode(true)}
          icon={<PenIcon />}
        >
          Edit
        </AnimatedIconButton>
      </div>
      <div className="min-h-screen justify-center flex py-12 px-4">
        {isEditMode ? (
          <ResumeEditor />
        ) : (
          <ResumeCard resume={normalizedResume} clerkId={user.id} />
        )}
      </div>
    </div>
  );
}
