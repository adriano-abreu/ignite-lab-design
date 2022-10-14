import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  asChild?: boolean;
}

export function Button({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'py-3 px-4 bg-cyan-500 rounded font-semibold  text-black text-sm w-full transition-colors hover:bg-cyan-100 focus:ring-2 ring-gray-100',
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
