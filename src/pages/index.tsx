import Image from 'next/image';

import { Header } from '@/components/Header';
import { Section } from '@/components/Section';
import { SearchFilter } from '@/components/SearchFilter';
import { Card } from '@/components/Card';

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

          <div className="flex items-center gap-8">
            <Card />
            <Card />
            <Card />
          </div>
        </Section>

        <div className="bg-gray-800 w-full h-full absolute top-80 -z-10" />
      </div>
    </>
  );
}
