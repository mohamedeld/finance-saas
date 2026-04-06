"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

type NavButtonProps = {
  href: string;
  label: string;
  isActive: boolean;
};
export const NavButton = ({ href, label, isActive }: NavButtonProps) => {
  return (
    <Button
      variant={"outline"}
      size={"sm"}
      asChild
      className={cn(
        "w-full font-normal lg:w-auto justify-between hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition",
        isActive ? "bg-white/10" : "bg-transparent",
      )}
    >
      <Link href={href} prefetch={true}>
        {label}
      </Link>
    </Button>
  );
};
