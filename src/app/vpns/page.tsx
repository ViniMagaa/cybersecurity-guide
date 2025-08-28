import TextType from "@/blocks/TextAnimations/TextType/TextType";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function Vpns() {
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
          text="VPNs"
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
            Ao usar uma VPN, seus dados são criptografados e enviados através de
            um servidor seguro, escondendo seu endereço IP real.
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
            Ajuda a proteger sua privacidade, evita que hackers espionem sua
            conexão e permite acessar conteúdos restritos geograficamente.
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
              VPN garante anonimato total na internet.
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
              VPN aumenta a privacidade, mas não torna você 100% anônimo.
            </TextAnimate>
          </p>
        </div>
      </section>
    </>
  );
}
