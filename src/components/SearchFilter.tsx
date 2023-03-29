import { v4 as uuidv4 } from 'uuid';

import {
  TagSimple,
  House,
  MapPin,
  CurrencyCircleDollar,
} from '@phosphor-icons/react';

import { SelectOptions } from './SelectOptions';

const searchFilterFields = [
  {
    id: uuidv4(),
    icon: <TagSimple size={20} />,
    placeholder: 'Tipo',
    options: ['Aluguel', 'Compra'],
  },
  {
    id: uuidv4(),
    icon: <House size={20} />,
    placeholder: 'Categoria',
    options: ['Apartamento', 'Casa', 'Sobrado', 'Flat'],
  },
  {
    id: uuidv4(),
    icon: <MapPin size={20} />,
    placeholder: 'Cidade',
    options: ['São Paulo', 'Rio de Janeiro'],
  },
  {
    id: uuidv4(),
    icon: <CurrencyCircleDollar size={20} />,
    placeholder: 'Valor máximo',
    options: [
      'R$ 300.000,00',
      'R$ 600.000,00',
      'R$ 900.000,00',
      'R$ 1.200.000,00',
      'R$ 1.500.000,00',
    ],
  },
];

export function SearchFilter() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="absolute bottom-28 bg-white p-10 flex gap-6 shadow-md"
    >
      {searchFilterFields.map((field) => (
        <SelectOptions key={field.id} field={field} />
      ))}

      <button className="bg-gray-800 text-gray-100 py-3 px-6 font-medium hover:bg-gray-900 transition-colors text-sm">
        Buscar
      </button>
    </form>
  );
}
