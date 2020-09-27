import '@testing-library/jest-dom/extend-expect';

import { render, fireEvent } from '@testing-library/svelte';

import Button from '../components/Button';

test("'Hello Svelte' is rendered on the header", () => {
  const { getByText } = render(Button, { name: 'specialdoom' });

  expect(getByText('Hello specialdoom!')).toBeInTheDocument();
});

test('Button text changes when button is clicked', async () => {
  const { getByText } = render(Button, { name: 'specialdoom' });
  const button = getByText('Button');

  await fireEvent.click(button);

  expect(button).toHaveTextContent('Button Clicked');
});
