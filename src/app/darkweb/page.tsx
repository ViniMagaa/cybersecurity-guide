"use client";

import TextType from "@/blocks/TextAnimations/TextType/TextType";
import { TextAnimate } from "@/components/magicui/text-animate";
import { WarpBackground } from "@/components/magicui/warp-background";
import { Button } from "@/components/ui/button";
import { routes } from "@/utils/routes";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Darkweb() {
  const router = useRouter();

  return (
    <>
      <WarpBackground
        className="fixed top-0 h-screen w-screen overflow-hidden opacity-15"
        gridColor="#ebf5ee"
      >
        <div className="h-screen w-screen" />
      </WarpBackground>
      <section className="relative flex w-full flex-grow flex-col items-center gap-16 overflow-hidden px-4 pb-8">
        <TextType
          text="Darkweb"
          className="mt-16 font-mono text-xl font-bold sm:text-3xl md:text-5xl lg:text-7xl"
          typingSpeed={75}
          showCursor
          cursorCharacter="_"
        />
        <div className="space-y-4">
          <TextAnimate
            once
            duration={0.5}
            as="h2"
            className="text-center font-mono text-2xl font-bold md:text-5xl"
          >
            Definição
          </TextAnimate>
          <TextAnimate
            once
            duration={0.5}
            by="line"
            className="max-w-[600px] text-center text-gray-400 lg:text-xl"
          >
            A Dark Web é uma parte da internet que não pode ser acessada por
            navegadores comuns, exigindo softwares específicos como o Tor.
          </TextAnimate>
        </div>
        <div className="space-y-4">
          <TextAnimate
            once
            duration={0.5}
            as="h2"
            className="text-center font-mono text-2xl font-bold md:text-5xl"
          >
            Como funciona?
          </TextAnimate>
          <TextAnimate
            once
            duration={0.5}
            by="line"
            className="max-w-[600px] text-center text-gray-400 lg:text-xl"
          >
            Ela utiliza camadas de anonimato para esconder endereços IP e
            permitir que usuários e sites permaneçam ocultos.
          </TextAnimate>
        </div>
        <div className="space-y-4">
          <TextAnimate
            once
            duration={0.5}
            as="h2"
            className="text-center font-mono text-2xl font-bold md:text-5xl"
          >
            Consequências
          </TextAnimate>
          <TextAnimate
            once
            duration={0.5}
            by="line"
            className="max-w-[600px] text-center text-gray-400 lg:text-xl"
          >
            Pode ser usada tanto para proteger a privacidade em países com
            censura quanto para atividades ilegais, como venda de drogas ou
            dados roubados.
          </TextAnimate>
        </div>
        <div className="space-y-4">
          <TextAnimate
            once
            duration={0.5}
            as="h2"
            className="text-center font-mono text-2xl font-bold md:text-5xl"
          >
            Dicas práticas de uso
          </TextAnimate>
          <ul className="ml-4 max-w-[600px] list-disc text-gray-400 lg:text-xl">
            <TextAnimate once duration={0.5} by="line" as="li">
              Evite acessar a Dark Web sem conhecimento técnico.
            </TextAnimate>
            <TextAnimate once duration={0.5} by="line" as="li">
              Nunca baixe arquivos de fontes desconhecidas.
            </TextAnimate>
            <TextAnimate once duration={0.5} by="line" as="li">
              Use sempre VPN e navegação segura caso precise acessar.
            </TextAnimate>
          </ul>
        </div>
        <div className="space-y-4">
          <TextAnimate
            once
            duration={0.5}
            as="h2"
            className="text-center font-mono text-2xl font-bold md:text-5xl"
          >
            Curiosidades
          </TextAnimate>
          <p className="max-w-[600px]">
            <TextAnimate
              once
              duration={0.5}
              as="strong"
              className="font-mono text-lg font-semibold lg:text-2xl"
            >
              Mito:
            </TextAnimate>
            <TextAnimate
              once
              duration={0.5}
              as="span"
              by="line"
              className="ml-2 text-gray-400 lg:text-xl"
            >
              A Dark Web é totalmente ilegal.
            </TextAnimate>
          </p>
          <p className="max-w-[600px]">
            <TextAnimate
              once
              duration={0.5}
              as="strong"
              className="font-mono text-lg font-semibold lg:text-2xl"
            >
              Verdade:
            </TextAnimate>
            <TextAnimate
              once
              duration={0.5}
              by="line"
              as="span"
              className="text-gray-400 lg:text-xl"
            >
              Ela também é usada para jornalismo, ativismo e comunicação anônima
              em regimes opressores.
            </TextAnimate>
          </p>
        </div>

        <Button
          onClick={() => router.push(routes[6].href)}
          className="w-fit rounded-full bg-white font-mono text-sm text-black hover:gap-4 hover:bg-white"
        >
          Próximo assunto <ArrowRight className="size-4" />
        </Button>
      </section>
    </>
  );
}
