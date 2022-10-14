import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps {
  children: string;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'py-4 p-x3 bg-cyan-500 rounded front-semibold  text-black text-sm w-full transition-colors hover:bg-cyan-100 focus:ring-2 ring-gray-100'
      )}
    >
      {children}
    </Comp>
  );
}
