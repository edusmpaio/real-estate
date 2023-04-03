import { ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'default' | 'white';
}

export function Button({ asChild, className, ...props }: ButtonProps) {
  const Component = asChild ? Slot : 'button';
  let { variant } = props;

  if (!variant) {
    variant = 'default';
  }

  return (
    <Component
      className={clsx(
        'py-3 px-6 font-medium transition-colors',
        {
          'bg-gray-800 text-gray-100 hover:bg-gray-900': variant === 'default',
          'bg-gray-100 text-gray-800 hover:bg-white': variant === 'white',
        },
        className
      )}
      {...props}
    />
  );
}
