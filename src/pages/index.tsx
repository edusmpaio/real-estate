import Image from 'next/image';

import { Header } from '@/components/Header';
import { Section } from '@/components/Section';
import { SearchFilter } from '@/components/SearchFilter';

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
    </>
  );
}
