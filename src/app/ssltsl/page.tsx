"use client";

import TextType from "@/blocks/TextAnimations/TextType/TextType";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button";
import { routes } from "@/utils/routes";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SslTsl() {
  const router = useRouter();

  return (
    <>
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#78a1bb"
        maxOpacity={0.25}
        flickerChance={0.1}
      />
      <section className="relative flex w-full flex-grow flex-col items-center gap-16 overflow-hidden px-4 pb-8">
        <TextType
          text="SSL/TSL"
          className="mt-16 font-mono text-3xl font-bold sm:text-4xl md:text-6xl lg:text-7xl"
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
            SSL/TLS são protocolos de segurança que criptografam a comunicação
            entre navegador e servidor, garantindo que dados sensíveis, como
            senhas e cartões, não sejam interceptados.
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
            O navegador verifica se o site possui um certificado válido emitido
            por uma Autoridade Certificadora (CA). Em seguida, cria-se uma
            conexão criptografada que protege as informações trocadas.
          </TextAnimate>
        </div>
        <div className="space-y-4">
          <TextAnimate
            once
            duration={0.5}
            as="h2"
            className="text-center font-mono text-2xl font-bold md:text-5xl"
          >
            Por que é importante?
          </TextAnimate>
          <TextAnimate
            once
            duration={0.5}
            by="line"
            className="max-w-[600px] text-center text-gray-400 lg:text-xl"
          >
            Garante confidencialidade, autenticidade e integridade dos dados
            transmitidos. É um requisito básico para sites profissionais e de
            e-commerce.
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
              Verifique sempre o cadeado ao lado da URL.
            </TextAnimate>
            <TextAnimate once duration={0.5} by="line" as="li">
              Prefira sites que usem “https://” em vez de “http://”.
            </TextAnimate>
            <TextAnimate once duration={0.5} by="line" as="li">
              Empresas devem renovar certificados antes do vencimento.
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
              Se tem cadeado na URL, é 100% seguro.
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
              O cadeado significa que os dados estão criptografados, mas não
              garante que o site em si não seja malicioso.
            </TextAnimate>
          </p>
        </div>
        <Button
          onClick={() => router.push(routes[7].href)}
          className="w-fit rounded-full bg-white font-mono text-sm text-black hover:gap-4 hover:bg-white"
        >
          Próximo assunto <ArrowRight className="size-4" />
        </Button>
      </section>
    </>
  );
}
