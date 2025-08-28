"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type BackgroundProps = {
  children: React.ReactNode;
};

export function Background({ children }: BackgroundProps) {
  const pathname = usePathname();

  return (
    <main
      className={cn(
        "relative flex min-h-screen flex-col from-15% to-75%",
        pathname === "/darkweb"
          ? "bg-linear-to-b from-neutral-800 to-black"
          : "from-navy bg-linear-to-br to-[#131620]",
      )}
    >
      {children}
    </main>
  );
}
