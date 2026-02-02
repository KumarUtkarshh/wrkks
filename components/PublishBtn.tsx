"use client";

import { useResumeStore } from "@/hooks/stores/useResumeStore";
import { getUserData } from "@/lib/supabase/getUserData";
import { publishResume } from "@/lib/supabase/resume/publishResume";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { toastManager } from "./ui/toast";

export function PublishButton() {
  const resume = useResumeStore((s) => s.resume);

  const { data } = useQuery({
    queryKey: ["islive"],
    queryFn: async () => getUserData(["islive"]),
    placeholderData: { islive: false },
  });

  const islive = data?.islive ?? false;

  const mutation = useMutation({
    mutationFn: (resumeData: NonNullable<typeof resume>) =>
      publishResume(resumeData),
    onSuccess: () => {
      toastManager.add({
        title: "Resume published successfully!",
        type: "success",
      });
    },
    onError: (err) => {
      toastManager.add({
        title: err.message,
        type: "error",
      });
    },
  });

  const handlePublish = () => {
    if (!resume) {
      toastManager.add({
        title: "Please create your resume before publishing.",
        type: "error",
      });
      return;
    }

    mutation.mutate(resume);
  };
  return (
    <div className="flex gap-2.5 w-full">
      {islive && (
        <Button variant="secondary" className="w-full">
          Unpublish
        </Button>
      )}
      <Button
        onClick={handlePublish}
        disabled={mutation.isPending}
        className="w-full"
      >
        {mutation.isPending
          ? "Publishing..."
          : islive
            ? "Visit Site"
            : "Publish"}
      </Button>
    </div>
  );
}
