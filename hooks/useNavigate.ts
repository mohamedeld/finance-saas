"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useMedia } from "react-use";
export const useNavigate = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isMobile = useMedia("(max-width: 1024px)", false);
  const onClick = (href: string) => {
    router.push(href);
    setOpen(false);
  };

  return {
    pathname,
    onClick,
    isMobile,
    setOpen,
    open,
  };
};
