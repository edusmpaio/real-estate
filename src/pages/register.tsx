import Image from 'next/image';
import Link from 'next/link';

import { Form } from '@/components/Form';

export default function Register() {
  return (
    <div className="flex min-h-screen">
      <section className="w-1/2 bg-register-house bg-cover bg-center overflow-hidden" />

      <section className="w-1/2 py-12 px-28 max-h-screen overflow-auto">
        <header className="mb-20">
          <Link href="/">
            <Image
              src="/logo.svg"
              width={94}
              height={32}
              alt="Logo escrito Brand"
            />
          </Link>
        </header>

        <div>
          <strong className="font-title text-4xl block mb-4">
            Crie sua conta
          </strong>
          <span className="text-gray-500 block max-w-xs mb-10">
            Registre-se para começar a busca pelo seu novo lar.
          </span>

          <Form isRegister />
        </div>
      </section>
    </div>
  );
}
