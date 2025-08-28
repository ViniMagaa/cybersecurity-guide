"use client";

import TextType from "@/blocks/TextAnimations/TextType/TextType";
import { Globe } from "@/components/magicui/globe";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button";
import { routes } from "@/utils/routes";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Vpns() {
  const router = useRouter();

  return (
    <div className="flex w-full flex-grow overflow-hidden">
      <Globe
        className="fixed -right-[80vw] opacity-0 md:opacity-100"
        config={{
          width: 800,
          height: 800,
          onRender: () => {},
          devicePixelRatio: 2,
          phi: 0,
          theta: 0.3,
          dark: 0,
          diffuse: 0.4,
          mapSamples: 16000,
          mapBrightness: 1.2,
          baseColor: [1, 1, 1],
          markerColor: [120 / 255, 161 / 255, 187 / 255],
          glowColor: [1, 1, 1],
          markers: [
            { location: [14.5995, 120.9842], size: 0.03 },
            { location: [19.076, 72.8777], size: 0.1 },
            { location: [23.8103, 90.4125], size: 0.05 },
            { location: [30.0444, 31.2357], size: 0.07 },
            { location: [39.9042, 116.4074], size: 0.08 },
            { location: [-23.5505, -46.6333], size: 0.1 },
            { location: [19.4326, -99.1332], size: 0.1 },
            { location: [40.7128, -74.006], size: 0.1 },
            { location: [34.6937, 135.5022], size: 0.05 },
            { location: [41.0082, 28.9784], size: 0.06 },
          ],
        }}
      />
      <section className="m-auto flex w-full max-w-5xl flex-grow flex-col gap-16 overflow-hidden px-4 pb-8">
        <TextType
          text="VPNs"
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
            className="font-mono text-2xl font-bold md:max-w-[55vw] md:text-5xl"
          >
            Definição
          </TextAnimate>
          <TextAnimate
            once
            duration={0.5}
            by="line"
            className="text-gray-400 md:max-w-[55vw] lg:text-xl"
          >
            VPN (Virtual Private Network) cria um túnel criptografado que
            conecta seu dispositivo à internet, protegendo sua identidade e
            dados.
          </TextAnimate>
        </div>
        <div className="space-y-4">
          <TextAnimate
            once
            duration={0.5}
            as="h2"
            className="font-mono text-2xl font-bold md:max-w-[55vw] md:text-5xl"
          >
            Como funciona?
          </TextAnimate>
          <TextAnimate
            once
            duration={0.5}
            by="line"
            className="text-gray-400 md:max-w-[55vw] lg:text-xl"
          >
            Ao usar uma VPN, seus dados são criptografados e enviados através de
            um servidor seguro, escondendo seu endereço IP real.
          </TextAnimate>
        </div>
        <div className="space-y-4">
          <TextAnimate
            once
            duration={0.5}
            as="h2"
            className="font-mono text-2xl font-bold md:max-w-[55vw] md:text-5xl"
          >
            Por que é importante?
          </TextAnimate>
          <TextAnimate
            once
            duration={0.5}
            by="line"
            className="text-gray-400 md:max-w-[55vw] lg:text-xl"
          >
            Ajuda a proteger sua privacidade, evita que hackers espionem sua
            conexão e permite acessar conteúdos restritos geograficamente.
          </TextAnimate>
        </div>
        <div className="space-y-4">
          <TextAnimate
            once
            duration={0.5}
            as="h2"
            className="font-mono text-2xl font-bold md:max-w-[55vw] md:text-5xl"
          >
            Dicas práticas de uso
          </TextAnimate>
          <ul className="ml-4 list-disc text-gray-400 md:max-w-[55vw] lg:text-xl">
            <TextAnimate once duration={0.5} by="line" as="li">
              Use VPNs confiáveis e pagas para maior segurança.
            </TextAnimate>
            <TextAnimate once duration={0.5} by="line" as="li">
              Ative a VPN sempre que usar redes públicas, como Wi-Fi de cafés.
            </TextAnimate>
            <TextAnimate once duration={0.5} by="line" as="li">
              Evite VPNs gratuitas que podem vender seus dados.
            </TextAnimate>
          </ul>
        </div>
        <div className="space-y-4">
          <TextAnimate
            once
            duration={0.5}
            as="h2"
            className="font-mono text-2xl font-bold md:max-w-[55vw] md:text-5xl"
          >
            Curiosidades
          </TextAnimate>
          <p className="md:max-w-[55vw]">
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
              VPN garante anonimato total na internet.
            </TextAnimate>
          </p>
          <p className="md:max-w-[55vw]">
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
              VPN aumenta a privacidade, mas não torna você 100% anônimo.
            </TextAnimate>
          </p>
        </div>
        <Button
          onClick={() => router.push(routes[3].href)}
          className="w-fit rounded-full bg-white font-mono text-sm text-black hover:gap-4 hover:bg-white"
        >
          Próximo assunto <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  );
}
