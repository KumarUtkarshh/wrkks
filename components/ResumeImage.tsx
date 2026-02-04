"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function ResumeImage() {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded || !isSignedIn || !user?.hasImage) return null;

  return (
    <div className="relative w-24 h-24 rounded-xl bg-muted border border-border shrink-0">
      <div className="w-full h-full absolute overflow-hidden rounded-xl">
        <Image
          src={user.imageUrl}
          alt="User profile image"
          fill
          className="object-cover"
          sizes="112px"
          priority
        />
      </div>
    </div>
  );
}
