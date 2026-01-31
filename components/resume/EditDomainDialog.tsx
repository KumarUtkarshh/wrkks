"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRef } from "react";
import { Input } from "../ui/input";
import PenIcon from "../ui/pen-icon";

export default function EditDomainDialog() {
  //     {
  //   resume,
  //   updateSkills,
  // }: {
  //   resume: Resume;
  //   updateSkills: (skills: Partial<Skills>) => void;
  // }
  const ref = useRef<HTMLInputElement>(null);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          aria-label="Subscribe"
          className="inline-flex w-9 items-center justify-center rounded-e-md border border-input bg-background text-muted-foreground/80 text-sm outline-none transition-[color,box-shadow] hover:bg-accent hover:text-accent-foreground focus:z-10 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          type="button"
        >
          <PenIcon aria-hidden="true" size={16} />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-left">
            Change Userhandle
          </AlertDialogTitle>
          <AlertDialogDescription className="text-left pt-2 pb-1">
            Old Userhandle
          </AlertDialogDescription>
          <Input ref={ref} placeholder="dev-o-los" />
          <AlertDialogDescription className="text-left pt-2 pb-1">
            Choose new Userhandle
          </AlertDialogDescription>
          <Input ref={ref} placeholder="dev-o-los" />
        </AlertDialogHeader>
        <AlertDialogFooter className="">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Save</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
