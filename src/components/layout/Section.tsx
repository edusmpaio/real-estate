import { HTMLAttributes, ReactNode } from 'react';

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Section({ children, className }: SectionProps) {
  return (
    <section className={`max-w-[1180px] mx-auto px-6 mb-[140px] ${className}`}>
      {children}
    </section>
  );
}
