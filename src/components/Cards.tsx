import { immobileData } from '@/data/immobile';

import { Card } from './Card';

export function Cards() {
  return (
    <div className="flex items-center gap-8">
      {immobileData.map((immobile) => (
        <Card key={immobile.id} immobile={immobile} />
      ))}
    </div>
  );
}
