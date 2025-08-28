"use client";

import { routes } from "@/utils/routes";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Dock, DockIcon } from "./magicui/dock";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";

export function Menu() {
  const pathname = usePathname();

  return (
    <TooltipProvider>
      <Dock className="z-20 mt-12 gap-4 rounded-full px-2">
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
  );
}
