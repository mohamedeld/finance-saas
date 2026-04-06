"use client";
import { routes } from "@/helpers/contants";
import { NavButton } from "./NavButton";
import { useNavigate } from "@/hooks/useNavigate";
import { NavSheet } from "./NavSheet";

export const Navigation = () => {
  const { isMobile, onClick, open, pathname, setOpen } = useNavigate();
  if (isMobile) {
    return <NavSheet open={open} setOpen={setOpen} />;
  }
  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {routes.map((route) => (
        <NavButton
          key={route?.href}
          href={route?.href}
          label={route?.label}
          isActive={pathname === route?.href}
        />
      ))}
    </nav>
  );
};
