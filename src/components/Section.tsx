import { ReactElement } from 'react';

interface SectionProps {
  children: ReactElement;
}

export function Section({ children }: SectionProps) {
  return (
    <section className="max-w-[1180px] mx-auto px-6 mb-[140px]">
      {children}
    </section>
  );
}
