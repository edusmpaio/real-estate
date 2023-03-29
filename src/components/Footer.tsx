import Image from 'next/image';

export function Footer() {
  return (
    <footer className="max-w-[1180px] mx-auto px-6 py-11 flex items-center justify-between border-t border-gray-300">
      <Image src="/logo.svg" width={94} height={32} alt="Logo escrito Brand" />

      <span className="text-sm">
        &copy; 2023 Brand. Todos os direitos reservados
      </span>
    </footer>
  );
}
