import { ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  primary?: boolean;
}

export function Button({ asChild, primary, className, ...props }: ButtonProps) {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      className={clsx(
        'py-3 px-6 font-medium transition-colors',
        {
          'bg-gray-800 text-gray-100 hover:bg-gray-900': primary,
        },
        className
      )}
      {...props}
    />
  );
}
