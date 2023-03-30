import Image from 'next/image';

import { Header } from '@/components/layout/Header';
import { Section } from '@/components/layout/Section';
import { Footer } from '@/components/layout/Footer';

import { SearchFilter } from '@/components/SearchFilter';
import { Cards } from '@/components/Cards';
import { Button } from '@/components/Button';

export default function Home() {
  return (
    <>
      <Header />

      <Section className="flex mt-24 justify-center">
        <div className="relative">
          <h1 className="font-title font-bold text-6xl mb-8 pt-24 max-w-2xl">
            Encontre o imóvel ideal para você
          </h1>
          <p className="max-w-lg text-lg text-gray-500">
            Explore nossas opções de imóveis e encontre a casa dos seus sonhos
            com a ajuda da nossa equipe especializada.
          </p>

          <SearchFilter />
        </div>

        <Image
          src="/hero-photo.jpg"
          alt="Foto de uma casa moderna branca"
          width={400}
          height={600}
          quality={100}
        />
      </Section>

      <div className="relative">
        <Section>
          <h2 className="font-title text-4xl mb-6">
            Nossos principais imóveis
          </h2>
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-500 max-w-md">
              Conheça nossas opções mais populares e encontre o lar perfeito
              para você.
            </p>
            <a href="#" className="font-medium text-gray-600">
              Ver mais
            </a>
          </div>

          <Cards />
        </Section>

        <Section className="flex flex-col items-center text-center">
          <h2 className="font-title text-gray-100 text-5xl mb-6 max-w-2xl">
            Ou procure pelo seu imóvel dos sonhos
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg text-lg">
            Navegue pela nossa lista de imóveis disponíveis e encontre o lar que
            combina com você, seja para compra ou aluguel.
          </p>

          <Button
            asChild
            className="bg-gray-100 text-gray-800 hover:bg-white text-lg"
          >
            <a href="#">Explorar imóveis</a>
          </Button>
        </Section>
        <div className="bg-gray-800 w-full h-[82.7%] absolute top-80 -z-10" />
      </div>

      <Section className="mt-[280px] flex items-center gap-16">
        <Image
          src="/about-us-image.jpg"
          alt="Homem e mulher na empresa sentados olhando para a tela de um notebook"
          width={594}
          height={457}
        />
        <div>
          <h2 className="font-title text-4xl mb-6">Sobre a empresa</h2>
          <p className="text-gray-500 mb-6">
            A nossa equipe de especialistas é formada por agentes imobiliários
            altamente qualificados, com um profundo conhecimento do mercado e
            das últimas tendências em imóveis modernos. Estamos comprometidos em
            ajudar nossos clientes a encontrar o imóvel perfeito para suas
            necessidades, independentemente de seus requisitos.
          </p>
          <p className="text-gray-500">
            Na nossa imobiliária, valorizamos a honestidade, a integridade e a
            transparência em todas as nossas transações. Estamos sempre prontos
            para ouvir as necessidades dos nossos clientes e trabalhar em
            conjunto para alcançar seus objetivos.
          </p>
        </div>
      </Section>

      <Footer />
    </>
  );
}
