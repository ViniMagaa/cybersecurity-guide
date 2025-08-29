"use client";

import { cn } from "@/lib/utils";
import { routes } from "@/utils/routes";
import { Home, MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Dock, DockIcon } from "./magicui/dock";
import { Button, buttonVariants } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="z-30 mt-12">
      <div className="flex justify-between px-4 sm:hidden">
        {pathname !== "/" && (
          <Button
            variant="outline"
            size="icon"
            onClick={() => router.push("/")}
            className="rounded-full bg-transparent text-white backdrop-blur-md"
          >
            <Home className="size-6" />
          </Button>
        )}
        <Button
          variant="outline"
          size="icon"
          className="ml-auto rounded-full bg-transparent text-white backdrop-blur-md"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <MenuIcon className="size-6" />
        </Button>
      </div>
      <div
        className={cn(
          "bg-light fixed h-[calc(100%-2rem)] w-[calc(100%-2rem)] overflow-hidden rounded-3xl text-black transition-all duration-500 sm:hidden",
          isMenuOpen ? "top-4 left-4" : "-top-10/12 -left-full",
        )}
      >
        <Button
          variant="secondary"
          size="icon"
          className="hover:bg-navy absolute top-4 right-4 z-30 rounded-full bg-transparent hover:text-white"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <X className="size-6" />
        </Button>

        <div className="inset-0 space-y-6 pt-6 pl-6">
          {routes.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                aria-label={item.label}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  item.href === pathname &&
                    "border-navy rounded-md border-l-8 pl-2",
                  "flex items-center gap-2 font-mono text-3xl font-semibold transition-all hover:gap-6 hover:font-bold",
                )}
              >
                <item.icon className="size-8" />
                <span>{item.label}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden sm:block">
        <TooltipProvider>
          <Dock className="gap-4 rounded-full px-2">
            {routes.map((item) => (
              <DockIcon key={item.label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      aria-label={item.label}
                      className={cn(
                        item.href === pathname
                          ? "inline-flex shrink-0 items-center justify-center bg-linear-to-br from-[#353d52] to-[#475579] transition-all hover:bg-linear-to-tl"
                          : buttonVariants({
                              variant: "ghost",
                              size: "icon",
                            }),
                        "size-10 rounded-full font-mono",
                      )}
                    >
                      <item.icon className="size-6" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-mono">{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
          </Dock>
        </TooltipProvider>
      </div>
    </div>
  );
}
