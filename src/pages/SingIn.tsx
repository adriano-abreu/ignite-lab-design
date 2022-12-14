import { Envelope, LockKey } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import { Logo } from '../Logo';

export function SingIn() {
  const [isUserSingnedIn, setIsUserSignedIn] = useState(false);
  function handleSingIn(e: FormEvent) {
    e.preventDefault();

    setIsUserSignedIn(true);
  }

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Faça o Login e comece a usar
        </Text>
      </header>

      <form
        onSubmit={handleSingIn}
        className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4"
      >
        {isUserSingnedIn && <Text>Está logado</Text>}
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <LockKey />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              id="password"
              placeholder="Digite sua senha"
            />
          </TextInput.Root>
        </label>

        <label
          htmlFor="remember"
          className="flex items-center gap-2 cursor-pointer"
        >
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <a href="">
          <Text
            className="text-gray-400 underline hover:text-gray-200"
            size="sm"
          >
            Esqueceu sua senha?
          </Text>
        </a>

        <a href="" className="text-gray-400 underline">
          <Text
            className="text-gray-400 underline hover:text-gray-200"
            size="sm"
          >
            Não possui conta? Crie agora!
          </Text>
        </a>
      </footer>
    </div>
  );
}
