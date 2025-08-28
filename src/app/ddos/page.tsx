"use client";

import FaultyTerminal from "@/blocks/Backgrounds/FaultyTerminal/FaultyTerminal";
import TextType from "@/blocks/TextAnimations/TextType/TextType";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button";
import { routes } from "@/utils/routes";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Ddos() {
  const router = useRouter();

  return (
    <>
      <div className="fixed top-0 z-0 h-screen w-full opacity-30">
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={1}
          pause={false}
          scanlineIntensity={1}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0}
          tint="#556f44"
          mouseReact={true}
          mouseStrength={0.5}
          pageLoadAnimation={false}
          brightness={1}
        />
      </div>
      <section className="relative flex w-full flex-grow flex-col items-center gap-16 overflow-hidden px-4 pb-8">
        <TextType
          text="DDoS"
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
            Um ataque de DDoS (Distributed Denial of Service) acontece quando
            vários dispositivos são usados para sobrecarregar um servidor ou
            site com tráfego falso, até ele ficar inacessível.
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
            Hackers controlam uma rede de computadores ou dispositivos
            infectados (botnet) que enviam milhões de requisições ao mesmo tempo
            para um alvo específico.
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
            Pode derrubar sites, serviços bancários e até plataformas
            governamentais, gerando prejuízos financeiros e perda de confiança
            dos usuários.
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
              Use serviços de proteção como Cloudflare ou AWS Shield.
            </TextAnimate>
            <TextAnimate once duration={0.5} by="line" as="li">
              Monitore o tráfego da rede constantemente.
            </TextAnimate>
            <TextAnimate once duration={0.5} by="line" as="li">
              Tenha planos de mitigação para grandes volumes de acesso.
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
              Ataques DDoS só acontecem em grandes empresas.
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
              Pequenos negócios e até sites pessoais também são alvos, pois o
              ataque pode ser automatizado e barato de executar.
            </TextAnimate>
          </p>
        </div>

        <Button
          onClick={() => router.push(routes[5].href)}
          className="w-fit rounded-full bg-white font-mono text-sm text-black hover:gap-4 hover:bg-white"
        >
          Próximo assunto <ArrowRight className="size-4" />
        </Button>
      </section>
    </>
  );
}
