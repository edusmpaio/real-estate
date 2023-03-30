import { Immobile } from '@/data/immobile';
import { Bed, MapPin, Ruler } from '@phosphor-icons/react';
import Link from 'next/link';
import { Button } from './Button';

interface CardProps {
  immobile: Immobile;
}

export function Card({ immobile }: CardProps) {
  const { id, image, title, location, bedrooms, squareMeters, price } =
    immobile;

  return (
    <Link href={`/immobile/${id}`} className="max-h-[485px w-full">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={`h-[284px] w-full bg-no-repeat bg-cover bg-center`}
      />
      <div className="bg-gray-100 py-8 px-6">
        <strong className="font-bold text-2xl block mb-6">{title}</strong>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bed size={16} />
            <span className="text-sm">{bedrooms} quartos</span>
          </div>
          <div className="flex items-center gap-1">
            <Ruler size={16} />
            <span className="text-sm">{squareMeters} m²</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <strong className="text-lg">
            {price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </strong>

          <Button primary>Saiba mais</Button>
        </div>
      </div>
    </Link>
  );
}
