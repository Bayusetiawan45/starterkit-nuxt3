import { beforeAll, afterEach, describe, expect, it } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/vue';
import App from './App.vue';

describe('App', () => {
  beforeAll(() => {
    render(App, { global: { stubs: ['nuxt-link'] } });
  });

  it('title', async () => {
    const title = screen.getByTestId('title');

    expect(title).toBeTruthy();
    expect(title.textContent).toBe('Hello World');
  });

  it('link', async () => {
    const link = screen.getByTestId('link');

    expect(link).toBeTruthy();
    expect(link.getAttribute('to')).toBe('/')
  });
});
