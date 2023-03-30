import { GetStaticPropsContext } from 'next';
import Image from 'next/image';

import { immobileData, Immobile } from '@/data/immobile';

import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/layout/Section';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/Button';

import { Armchair, Bathtub, Bed, MapPin, Ruler } from '@phosphor-icons/react';
import ProposalForm from './components/_ProposalForm';

interface ImmobileDetailsProps {
  currentImmobile: Immobile;
}

export default function ImmobileDetails({
  currentImmobile,
}: ImmobileDetailsProps) {
  const {
    title,
    image,
    price,
    location,
    squareMeters,
    bedrooms,
    bathrooms,
    isFurnished,
    description,
  } = currentImmobile;

  return (
    <>
      <Header linkedToHome />
      <Section className="mt-24">
        <h1 className="font-title text-4xl mb-14">{title}</h1>
        <div className="flex justify-between">
          <Image
            src={image}
            alt="Foto do imóvel"
            width={720}
            height={426}
            quality={100}
          />

          <div className="sticky top-0 self-start p-8 bg-white shadow-md max-w-xs">
            <strong className="block text-lg mb-6">Faça sua proposta</strong>

            <ProposalForm />
          </div>
        </div>

        <div className="max-w-[720px]">
          <div className="pb-9 border-b border-gray-300 mt-16 flex justify-around">
            <div className="flex gap-2 font-medium">
              <MapPin size={24} />
              <span>{location}</span>
            </div>

            <div className="flex gap-2 font-medium">
              <Ruler size={24} />
              <span>{squareMeters}m²</span>
            </div>

            <div className="flex gap-2 font-medium">
              <Bed size={24} />
              <span>{bedrooms} quartos</span>
            </div>

            <div className="flex gap-2 font-medium">
              <Bathtub size={24} />
              <span>{bathrooms} banheiros</span>
            </div>

            <div className="flex gap-2 font-medium">
              <Armchair size={24} />
              <span>{isFurnished ? 'Mobiliado' : 'Sem mobilia'}</span>
            </div>
          </div>

          <div className="bg-white shadow-md p-6 flex items-center justify-between mt-16">
            <div>
              <span className="text-sm text-gray-500 block">
                Valor do imóvel
              </span>
              <strong className="text-2xl">
                {price.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </strong>
            </div>

            <Button asChild primary>
              <a href="#">Agendar visita</a>
            </Button>
          </div>

          <div className="mt-16">
            <h3 className="font-bold text-xl mb-6">Descrição do imóvel</h3>
            <p className="text-gray-500">{description}</p>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}

// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: 'blocking',
//   };
// }

export async function getServerSideProps(
  context: GetStaticPropsContext<{ id: string }>
) {
  const id = context.params?.id;

  const currentImmobile = immobileData.find((immobile) => immobile.id === id);

  if (!currentImmobile) {
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  return {
    props: {
      currentImmobile,
    },
  };
}
