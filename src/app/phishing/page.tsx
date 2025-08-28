"use client";

import Silk from "@/blocks/Backgrounds/Silk/Silk";
import TextType from "@/blocks/TextAnimations/TextType/TextType";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button";
import { routes } from "@/utils/routes";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Phishing() {
  const router = useRouter();

  return (
    <>
      <div className="absolute top-0 left-0 h-full w-full opacity-15">
        <Silk
          speed={5}
          scale={1}
          color="#78a1bb"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      <section className="relative flex w-full flex-grow flex-col items-center gap-16 overflow-hidden px-4 pb-8">
        <TextType
          text="Phishing"
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
            Phishing é um golpe digital em que criminosos fingem ser
            instituições confiáveis para roubar dados pessoais. Engenharia
            social é a manipulação psicológica das pessoas para que revelem
            informações.
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
            E-mails, mensagens ou sites falsos induzem a vítima a clicar em
            links maliciosos, inserir senhas ou baixar arquivos infectados.
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
            É uma das principais formas de ataque cibernético, explorando a
            confiança e distração dos usuários para adquirir seus dados.
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
              Desconfie de links e anexos inesperados.
            </TextAnimate>
            <TextAnimate once duration={0.5} by="line" as="li">
              Verifique o remetente do e-mail com atenção.
            </TextAnimate>
            <TextAnimate once duration={0.5} by="line" as="li">
              Nunca compartilhe senhas por telefone ou mensagem.
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
              Eu nunca cairia em um golpe assim.
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
              Até especialistas podem ser enganados, pois os ataques estão cada
              vez mais sofisticados.
            </TextAnimate>
          </p>
        </div>
        <Button
          onClick={() => router.push(routes[8].href)}
          className="w-fit rounded-full bg-white font-mono text-sm text-black hover:gap-4 hover:bg-white"
        >
          Próximo assunto <ArrowRight className="size-4" />
        </Button>
      </section>
    </>
  );
}
