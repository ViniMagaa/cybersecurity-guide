"use client";

import Squares from "@/blocks/Backgrounds/Squares/Squares";
import TextType from "@/blocks/TextAnimations/TextType/TextType";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button";
import { routes } from "@/utils/routes";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function IoT() {
  const router = useRouter();

  return (
    <>
      <div className="absolute top-0 left-0 z-10 h-full w-full opacity-15">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#ebf5ee"
          hoverFillColor="#78a1bb"
        />
      </div>
      <section className="relative flex w-full flex-grow flex-col items-center gap-16 overflow-hidden px-4 pb-8">
        <TextType
          text="Internet das coisas"
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
            Internet das Coisas, ou IoT (Internet of Things), é a conexão de
            objetos do dia a dia à internet, permitindo que eles coletem e
            troquem dados.
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
            Sensores e dispositivos se conectam a redes sem fio, enviando
            informações para sistemas que podem ser controlados por aplicativos
            ou assistentes virtuais.
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
            Facilita a vida cotidiana (casas inteligentes, saúde conectada,
            cidades inteligentes), mas também abre novas vulnerabilidades de
            segurança.
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
              Altere senhas padrão dos dispositivos.
            </TextAnimate>
            <TextAnimate once duration={0.5} by="line" as="li">
              Atualize sempre o firmware.
            </TextAnimate>
            <TextAnimate once duration={0.5} by="line" as="li">
              Use redes Wi-Fi seguras para conexão.
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
              IoT é só para casas futuristas.
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
              Já está presente em relógios inteligentes, carros, câmeras de
              segurança e até em eletrodomésticos comuns.
            </TextAnimate>
          </p>
        </div>
        <Button
          onClick={() => router.push(routes[9].href)}
          className="z-20 w-fit rounded-full bg-white font-mono text-sm text-black hover:gap-4 hover:bg-white"
        >
          Próximo assunto <ArrowRight className="size-4" />
        </Button>
      </section>
    </>
  );
}
