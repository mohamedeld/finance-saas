"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { routes } from "@/helpers/contants";
import { useNavigate } from "@/hooks/useNavigate";

type NavSheetProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const NavSheet = ({ open, setOpen }: NavSheetProps) => {
  const { pathname, onClick } = useNavigate();
  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetTrigger asChild>
        <Button
          variant={"outline"}
          size={"sm"}
          className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition"
        >
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="px-2 pt-5">
        <nav className="flex flex-col gap-y-2 pt-6  ">
          {routes.map((route) => (
            <Button
              variant={route?.href === pathname ? "secondary" : "ghost"}
              key={route?.href}
              onClick={() => onClick(route?.href)}
              className="w-full justify-start"
            >
              {route?.label}
            </Button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
