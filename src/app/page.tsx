"use client";

import Aurora from "@/blocks/Backgrounds/Aurora/Aurora";
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";
import TextType from "@/blocks/TextAnimations/TextType/TextType";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  Anchor,
  ArrowRight,
  BrickWallFire,
  Copyright,
  EarthLock,
  HomeIcon,
  LockKeyhole,
  MonitorSmartphone,
  MountainSnow,
  ShieldAlert,
  Waypoints,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";

export type IconProps = React.HTMLAttributes<SVGElement>;

const DATA = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Início" },
    { href: "/firewalls", icon: BrickWallFire, label: "Firewalls" },
    { href: "/vpns", icon: EarthLock, label: "VPNs" },
    { href: "/criptografia", icon: ShieldAlert, label: "Criptografia" },
    { href: "/ddos", icon: MonitorSmartphone, label: "DDoS" },
    { href: "/darkweb", icon: MountainSnow, label: "Dark Web" },
    { href: "/ssltsl", icon: Waypoints, label: "SSL/TSL" },
    { href: "/phishing", icon: Anchor, label: "Phishing" },
    { href: "/ciberseguranca", icon: LockKeyhole, label: "Cibersegurança" },
  ],
};

export default function Home() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <main className="from-navy relative min-h-screen bg-linear-to-br from-15% to-[#131620] to-75%">
      <section className="relative flex h-screen flex-col overflow-hidden">
        <div className="fixed h-screen w-full">
          <Aurora
            colorStops={["#593c8f", "#78a1bb", "#659b5e"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>

        <TooltipProvider>
          <Dock className="mt-12 gap-4 rounded-full px-2">
            {DATA.navbar.map((item) => (
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

        <div className="fixed top-1/2 left-1/2 flex w-full -translate-1/2 flex-col items-center gap-4">
          <TextType
            text={[
              "Segurança e Privacidade",
              "Proteja seus dados",
              "Navegue com segurança",
              "Guia sobre cibersegurança",
            ]}
            className="text-center font-mono text-xl font-bold sm:text-3xl md:text-5xl lg:text-7xl"
            typingSpeed={75}
            showCursor
            cursorCharacter="_"
          />
          <SplitText
            text="Proteja-se na era da informação"
            className="text-sm font-thin opacity-60 sm:text-xl md:text-3xl lg:text-5xl"
          />
          <Button
            onClick={() => router.push(DATA.navbar[1].href)}
            className="rounded-full bg-white font-mono text-sm text-black hover:gap-4 hover:bg-white"
          >
            Iniciar <ArrowRight className="size-4" />
          </Button>
        </div>
      </section>

      <footer className="fixed bottom-0 left-1/2 flex w-[calc(100%-10vw)] -translate-x-1/2 items-center justify-between border-t px-2 py-4 opacity-50">
        <div className="flex items-center gap-2 font-mono text-sm">
          <Copyright size={14} /> 2025
        </div>
        <div>
          <Link
            href="https://github.com/vinimagaa/cybersecurity-guide"
            target="_blank"
          >
            <FaGithub />
          </Link>
        </div>
      </footer>
    </main>
  );
}
