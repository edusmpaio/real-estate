import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeSlash } from '@phosphor-icons/react';

interface FormProps {
  isRegister?: boolean;
}

export function Form({ isRegister }: FormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <form className="flex flex-col max-w-sm w-full">
      <label htmlFor="email" className="text-sm font-semibold mb-2">
        E-mail
      </label>
      <input
        type="text"
        id="email"
        placeholder="Digite seu e-mail"
        className="text-sm py-4 px-3 text-gray-800 border border-gray-300 placeholder:text-gray-400"
      />

      <label htmlFor="password" className="text-sm font-semibold mt-4 mb-2">
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
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          />
        ) : (
          <EyeSlash
            size={24}
            className="absolute top-4 right-3 text-gray-400 cursor-pointer"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          />
        )}
      </div>

      {isRegister && (
        <>
          <label htmlFor="password" className="text-sm font-semibold mt-4 mb-2">
            Confirmar senha
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="password"
              placeholder="Confirme sua senha"
              className="w-full text-sm py-4 pl-3 pr-10 text-gray-800 border border-gray-300 placeholder:text-gray-400"
            />
            {showConfirmPassword ? (
              <Eye
                size={24}
                className="absolute top-4 right-3 text-gray-400 cursor-pointer"
                onClick={() => {
                  setShowConfirmPassword(!showConfirmPassword);
                }}
              />
            ) : (
              <EyeSlash
                size={24}
                className="absolute top-4 right-3 text-gray-400 cursor-pointer"
                onClick={() => {
                  setShowConfirmPassword(!showConfirmPassword);
                }}
              />
            )}
          </div>
        </>
      )}

      <button
        type="submit"
        className="bg-gray-800 text-gray-100 w-full my-8 py-4 font-bold hover:bg-gray-900 transition-colors"
      >
        {isRegister ? 'Cadastrar' : 'Entrar'}
      </button>

      {isRegister ? (
        <span className="text-gray-500">
          Já tem uma conta?{' '}
          <Link
            href="/login"
            className="font-bold text-gray-800 hover:underline"
          >
            Entrar
          </Link>
        </span>
      ) : (
        <span className="text-gray-500">
          Ainda não tem uma conta?{' '}
          <Link
            href="/register"
            className="font-bold text-gray-800 hover:underline"
          >
            Inscreva-se
          </Link>
        </span>
      )}
    </form>
  );
}
