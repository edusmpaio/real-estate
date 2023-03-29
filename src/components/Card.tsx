import { Bathtub, Bed, MapPin, Ruler } from '@phosphor-icons/react';

export function Card() {
  return (
    <a href="#" className="max-h-[485px w-full">
      <div className="h-[284px] w-full bg-[url('../../public/apartament.jpg')] bg-no-repeat bg-cover bg-center" />
      <div className="bg-gray-100 py-8 px-6">
        <strong className="font-bold text-2xl block mb-6">
          Título do card
        </strong>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            <span className="text-sm">São Paulo</span>
          </div>
          <div className="flex items-center gap-1">
            <Bed size={16} />
            <span className="text-sm">2 Quartos</span>
          </div>
          <div className="flex items-center gap-1">
            <Ruler size={16} />
            <span className="text-sm">180 m²</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <strong className="text-xl">R$ 800.000</strong>
          <button className="bg-gray-800 text-gray-100 py-3 px-6 font-medium hover:bg-gray-900 transition-colors text-sm">
            Saiba mais
          </button>
        </div>
      </div>
    </a>
  );
}
