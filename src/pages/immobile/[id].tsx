import Image from 'next/image';

import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/layout/Section';
import { Header } from '@/components/layout/Header';

import { ProposalForm } from './components/ProposalForm';
import { Armchair, Bathtub, Bed, MapPin, Ruler } from '@phosphor-icons/react';

export default function ImmobileDetails() {
  return (
    <>
      <Header linkedToHome />
      <Section className="mt-24">
        <h1 className="font-title text-4xl mb-14">Apartamento Skyline</h1>
        <div className="flex justify-between">
          <Image
            src="/apartament.jpg"
            alt="Foto do imóvel"
            width={720}
            height={426}
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
              <span>Rio de Janeiro</span>
            </div>

            <div className="flex gap-2 font-medium">
              <Ruler size={24} />
              <span>180m²</span>
            </div>

            <div className="flex gap-2 font-medium">
              <Bed size={24} />
              <span>2 quartos</span>
            </div>

            <div className="flex gap-2 font-medium">
              <Bathtub size={24} />
              <span>2 banheiros</span>
            </div>

            <div className="flex gap-2 font-medium">
              <Armchair size={24} />
              <span>Mobiliado</span>
            </div>
          </div>

          <div className="bg-white shadow-md p-6 flex items-center justify-between mt-16">
            <div>
              <span className="text-sm text-gray-500 block">
                Valor do imóvel
              </span>
              <strong className="text-2xl">R$ 800.000</strong>
            </div>

            <a
              href="#"
              className="bg-gray-800 text-gray-100 py-3 px-6 font-medium hover:bg-gray-900 transition-colors text-sm"
            >
              Agendar visita
            </a>
          </div>

          <div className="mt-16">
            <h3 className="font-bold text-xl mb-6">Descrição do imóvel</h3>
            <p className="text-gray-500">
              Com uma vista incrível para a cidade, este apartamento moderno
              oferece um espaço amplo e elegante, com acabamentos de alta
              qualidade. O apartamento conta com uma suíte master com closet, um
              segundo quarto, banheiro social, cozinha americana integrada a
              sala de estar e jantar, além de uma varanda com churrasqueira. O
              condomínio dispõe de área de lazer completa com piscina, academia
              e salão de festas.
            </p>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}
