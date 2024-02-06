import { beforeAll, afterEach, describe, expect, it } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/vue';
import Button from './Button.vue';

describe('Button', () => {
  const props = {
    name: 'Test',
  };
  beforeAll(() => {
    render(Button, { props });
  });

  it('button', async () => {
    const button = screen.getByText(props.name);

    expect(button).toBeTruthy();
    expect(button.textContent).toBe(props.name);
    expect(button.className).toBe('udin');
  });

  it('count', async () => {
    const count = screen.getByTestId('count');
    const button = screen.getByText(props.name);
    expect(count.textContent).toBe('0');

    await fireEvent.click(button);
    await fireEvent.click(button);
    expect(count.textContent).toBe('4');
  });
});
