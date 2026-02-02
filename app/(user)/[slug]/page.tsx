"use client";

import { ResumeCard } from "@/components/resume/ResumeCard";
import { getUserResume } from "@/lib/supabase/resume/getResume";
import { useQuery } from "@tanstack/react-query";

export default function UserPage() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["user-resume"],
    queryFn: getUserResume,
  });

  if (isLoading) return <div>loading...</div>;
  if (isError || !data?.resume) return <div>{error?.message ?? "error"}</div>;

  return <ResumeCard resume={data.resume} />;
}
