import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { SingIn } from './SingIn';

export default {
  title: 'Pages/Sing in',
  component: SingIn,
  args: {},
  argTypes: {},
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText('Digite seu e-mail'),
      'adriano@example.com'
    );
    userEvent.type(canvas.getByPlaceholderText('Digite sua senha'), '123456');
    userEvent.click(canvas.getByRole('button'));

    await waitFor(() => {
      return expect(canvas.getByText('Está logado'));
    });
  },
};
