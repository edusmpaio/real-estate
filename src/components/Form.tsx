import { useState } from 'react';
import Link from 'next/link';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Eye, EyeSlash } from '@phosphor-icons/react';
import { Button } from './Button';

interface FormProps {
  isRegister?: boolean;
}

const loginFormSchema = z
  .object({
    email: z
      .string()
      .nonempty({ message: 'O e-mail é obrigatório' })
      .email({ message: 'Digite um e-mail válido.' }),
    password: z
      .string()
      .nonempty({ message: 'A senha é obrigatória' })
      .min(6, { message: 'A senha deve conter no mínimo 6 caracteres.' }),
    confirmPassword: z
      .string()
      .nonempty({ message: 'A confirmação de senha é obrigatória' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não conferem.',
    path: ['confirmPassword'],
  });

type LoginFormInputsType = z.infer<typeof loginFormSchema>;

export function Form({ isRegister }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputsType>({
    resolver: zodResolver(loginFormSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="flex flex-col max-w-sm w-full"
    >
      <label htmlFor="email" className="text-sm font-semibold mb-2">
        E-mail
      </label>
      <input
        type="text"
        id="email"
        placeholder="Digite seu e-mail"
        className={`text-sm py-4 px-3 text-gray-800 border border-gray-300 placeholder:text-gray-400 ${
          errors.email ? 'border-red-600' : ''
        }`}
        {...register('email')}
      />
      {errors.email && (
        <span className="mt-1 text-red-600 text-xs">
          {errors.email?.message}
        </span>
      )}

      <label htmlFor="password" className="text-sm font-semibold mt-4 mb-2">
        Senha
      </label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          placeholder="Digite sua senha"
          className={`w-full text-sm py-4 pl-3 pr-10 text-gray-800 border border-gray-300 placeholder:text-gray-400 ${
            errors.password ? 'border-red-600' : ''
          }`}
          {...register('password')}
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
      {errors.password && (
        <span className="mt-1 text-red-600 text-xs">
          {errors.password?.message}
        </span>
      )}

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
              className={`w-full text-sm py-4 pl-3 pr-10 text-gray-800 border border-gray-300 placeholder:text-gray-400 ${
                errors.confirmPassword ? 'border-red-600' : ''
              }`}
              {...register('confirmPassword')}
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
          {errors.confirmPassword && (
            <span className="mt-1 text-red-600 text-xs">
              {errors.confirmPassword?.message}
            </span>
          )}
        </>
      )}

      <Button type="submit" className="w-full my-8">
        {isRegister ? 'Cadastrar' : 'Entrar'}
      </Button>

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
