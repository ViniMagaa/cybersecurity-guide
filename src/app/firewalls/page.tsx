"use client";

import Cubes from "@/blocks/Animations/Cubes/Cubes";
import TextType from "@/blocks/TextAnimations/TextType/TextType";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button";
import { routes } from "@/utils/routes";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Firewalls() {
  const router = useRouter();
  return (
    <section className="flex w-full flex-grow flex-col overflow-hidden">
      <div className="fixed top-0 right-2/3 h-screen w-[100vh]">
        <Cubes
          maxAngle={30}
          radius={2}
          cellGap={10}
          borderStyle="2px solid #ebf5ee"
          faceColor="transparent"
          rippleColor="#ebf5ee"
          rippleSpeed={1.5}
          autoAnimate={true}
          rippleOnClick={true}
        />
      </div>

      <div className="ml-[calc(33vw+2rem)] flex flex-col gap-16 pb-8">
        <TextType
          text="Firewalls"
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
            className="font-mono text-2xl font-bold md:text-5xl"
          >
            Definição
          </TextAnimate>
          <TextAnimate
            once
            duration={0.5}
            by="line"
            className="max-w-3/4 text-gray-400 lg:text-xl"
          >
            Firewall é uma barreira de segurança que monitora e controla o
            tráfego entre a sua rede e a internet, bloqueando acessos não
            autorizados.
          </TextAnimate>
        </div>
        <div className="space-y-4">
          <TextAnimate
            once
            duration={0.5}
            as="h2"
            className="font-mono text-2xl font-bold md:text-5xl"
          >
            Como funciona?
          </TextAnimate>
          <TextAnimate
            once
            duration={0.5}
            by="line"
            className="max-w-3/4 text-gray-400 lg:text-xl"
          >
            Ele analisa os dados que entram e saem do seu computador ou rede,
            comparando com regras pré-definidas para permitir ou bloquear o
            acesso.
          </TextAnimate>
        </div>
        <div className="space-y-4">
          <TextAnimate
            once
            duration={0.5}
            as="h2"
            className="font-mono text-2xl font-bold md:text-5xl"
          >
            Por que é importante?
          </TextAnimate>
          <TextAnimate
            once
            duration={0.5}
            by="line"
            className="max-w-3/4 text-gray-400 lg:text-xl"
          >
            Sem um firewall, seu dispositivo fica vulnerável a ataques, vírus e
            invasores que podem roubar informações ou causar danos.
          </TextAnimate>
        </div>
        <div className="space-y-4">
          <TextAnimate
            once
            duration={0.5}
            as="h2"
            className="font-mono text-2xl font-bold md:text-5xl"
          >
            Dicas práticas de uso
          </TextAnimate>
          <ul className="ml-4 max-w-3/4 list-disc text-gray-400 lg:text-xl">
            <TextAnimate once duration={0.5} by="line" as="li">
              Mantenha o firewall sempre ativo.
            </TextAnimate>
            <TextAnimate once duration={0.5} by="line" as="li">
              Configure regras para bloquear portas desnecessárias.
            </TextAnimate>
            <TextAnimate once duration={0.5} by="line" as="li">
              Atualize o software do firewall regularmente.
            </TextAnimate>
          </ul>
        </div>
        <div className="space-y-4">
          <TextAnimate
            once
            duration={0.5}
            as="h2"
            className="font-mono text-2xl font-bold md:text-5xl"
          >
            Curiosidades
          </TextAnimate>
          <p className="max-w-3/4">
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
              Firewall é suficiente para proteger totalmente seu computador.
            </TextAnimate>
          </p>
          <p className="max-w-3/4">
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
              Firewall é essencial, mas deve ser combinado com antivírus e
              outras práticas para uma segurança eficaz.
            </TextAnimate>
          </p>
        </div>

        <Button
          onClick={() => router.push(routes[2].href)}
          className="w-fit rounded-full bg-white font-mono text-sm text-black hover:gap-4 hover:bg-white"
        >
          Próximo assunto <ArrowRight className="size-4" />
        </Button>
      </div>
    </section>
  );
}
