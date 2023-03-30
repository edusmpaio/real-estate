import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  linkedToHome?: boolean;
}

export function Header({ linkedToHome }: HeaderProps) {
  return (
    <header className="flex items-center justify-between max-w-[1180px] mx-auto pt-6 px-6">
      <div className="flex items-center gap-8">
        {linkedToHome ? (
          <Link href="/">
            <Image
              src="/logo.svg"
              width={94}
              height={32}
              alt="Logo escrito Brand"
            />
          </Link>
        ) : (
          <Image
            src="/logo.svg"
            width={94}
            height={32}
            alt="Logo escrito Brand"
          />
        )}

        <div className="w-[1px] h-6 bg-gray-800" />

        <nav className="flex items-center gap-6 text-gray-600 font-medium">
          <Link href="/" className="hover:text-gray-800 transition-colors">
            Início
          </Link>
          <a href="#" className="hover:text-gray-800 transition-colors">
            Imóveis
          </a>
          <a href="#" className="hover:text-gray-800 transition-colors">
            Contato
          </a>
        </nav>
      </div>

      <Link
        href="/login"
        className="bg-gray-800 text-gray-100 py-3 px-6 font-medium text-sm hover:bg-gray-900 transition-colors"
      >
        Fazer Login
      </Link>
    </header>
  );
}
