import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the box element', () => {
  render(<App />);
  const boxElement = screen.getByTestId('box');
  expect(boxElement).toBeInTheDocument();
});

test('redirects to "/worldflags" on box click', () => {
  const { container } = render(<App />);
  const boxElement = screen.getByTestId('box');

  // Mock window.location.href assignment
  const { href } = window.location;
  delete window.location;
  window.location = Object.create(window.location);
  window.location.href = '';

  // Simulate box click
  boxElement.click();

  // Verify redirect to "/worldflags"
  expect(window.location.href).toBe('/worldflags');

  // Restore window.location.href
  window.location.href = href;

  // Cleanup
  container.remove();
});

