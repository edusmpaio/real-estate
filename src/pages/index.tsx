import { Header } from '@/components/Header';
import Image from 'next/image';
import { Section } from '@/components/Section';

export default function Home() {
  return (
    <>
      <Header />

      <Section className="flex mt-24 justify-center">
        <div className="relative">
          <h1 className="font-title font-bold text-6xl mb-11 pt-24 max-w-2xl">
            Encontre o imóvel ideal para você
          </h1>
          <p className="max-w-lg text-xl text-gray-500">
            Explore nossas opções de imóveis e encontre a casa dos seus sonhos
            com a ajuda da nossa equipe especializada.
          </p>

          <form className="absolute bottom-20 bg-white p-10 flex gap-6">
            <button className="bg-gray-800 text-gray-100 py-3 px-6 font-medium text-sm hover:bg-gray-900 transition-colors">
              Buscar
            </button>
          </form>
        </div>

        <Image
          src="/hero-photo.jpg"
          alt="Foto de uma casa moderna branca"
          width={380}
          height={570}
        />
      </Section>
    </>
  );
}
