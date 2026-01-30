/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { cloneElement, ReactElement, useRef } from "react";
import { AnimatedIconHandle } from "./ui/types";

type AnimatedIconButtonProps = {
  icon: ReactElement;
  children: React.ReactNode;
  className?: string;
};

export default function AnimatedIconButton({
  icon,
  children,
  className,
}: AnimatedIconButtonProps) {
  const iconRef = useRef<AnimatedIconHandle>(null);

  return (
    <Button
      variant={"outline"}
      className={`flex items-center gap-2 ${className ?? ""}`}
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      {cloneElement(icon as any, { ref: iconRef })}
      {children}
    </Button>
  );
}
