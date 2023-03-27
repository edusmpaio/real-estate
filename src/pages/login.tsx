import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Eye, EyeSlash } from '@phosphor-icons/react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="flex min-h-screen">
      <section className="w-1/2 bg-login-house bg-cover bg-center" />

      <section className="w-1/2 py-12 px-28">
        <header className="mb-20">
          <Image
            src="/logo.svg"
            width={94}
            height={32}
            alt="Logo escrito Brand"
          />
        </header>

        <div>
          <strong className="font-title text-4xl block mb-4">
            Vamos começar
          </strong>
          <span className="text-gray-500 block max-w-xs mb-10">
            Acesse sua conta para começar a busca pelo seu novo lar.
          </span>

          <form className="flex flex-col max-w-sm w-full">
            <label htmlFor="email" className="text-sm font-semibold mb-2">
              E-mail
            </label>
            <input
              type="text"
              id="email"
              placeholder="Digite seu e-mail"
              className="text-sm py-4 px-3 mb-4 text-gray-800 border border-gray-300 placeholder:text-gray-400"
            />

            <label htmlFor="password" className="text-sm font-semibold mb-2">
              Senha
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Digite sua senha"
                className="w-full text-sm py-4 pl-3 pr-10 text-gray-800 border border-gray-300 placeholder:text-gray-400"
              />
              {showPassword ? (
                <Eye
                  size={24}
                  className="absolute top-4 right-3 text-gray-400 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <EyeSlash
                  size={24}
                  className="absolute top-4 right-3 text-gray-400 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>

            <button
              type="submit"
              className="bg-gray-800 text-gray-100 w-full my-8 py-4 font-bold hover:bg-gray-900 transition-colors"
            >
              Entrar
            </button>

            <span className="text-gray-500">
              Ainda não tem uma conta?{' '}
              <Link
                href="/register"
                className="font-bold text-gray-800 hover:underline"
              >
                Inscreva-se
              </Link>
            </span>
          </form>
        </div>
      </section>
    </div>
  );
}
