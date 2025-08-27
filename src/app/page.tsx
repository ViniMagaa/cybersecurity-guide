"use client";

import Aurora from "@/blocks/Backgrounds/Aurora/Aurora";
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";
import TextType from "@/blocks/TextAnimations/TextType/TextType";
import { Button } from "@/components/ui/button";
import { routes } from "@/utils/routes";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export type IconProps = React.HTMLAttributes<SVGElement>;

export default function Home() {
  const router = useRouter();
  return (
    <section className="flex h-full w-full flex-grow flex-col overflow-hidden">
      <div className="fixed top-0 h-screen w-screen">
        <Aurora
          colorStops={["#593c8f", "#78a1bb", "#659b5e"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <div className="z-10 flex w-full flex-grow flex-col items-center justify-center gap-4 p-2">
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
          onClick={() => router.push(routes[1].href)}
          className="rounded-full bg-white font-mono text-sm text-black hover:gap-4 hover:bg-white"
        >
          Iniciar <ArrowRight className="size-4" />
        </Button>
      </div>
    </section>
  );
}
