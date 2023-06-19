import { render, screen } from '@testing-library/react';
import WorldFlags from './WorldFlags';

describe('WorldFlags', () => {
  test('renders title and subtitle', () => {
    render(<WorldFlags />);

    const titleElement = screen.getByText(/Information about the countries of the world/i);
    const subtitleElement = screen.getByText(/Click on a country to get more details/i);

    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });

  test('renders flag images', () => {
    render(<WorldFlags />);

    const flagImages = screen.getAllByAltText(/Flag/i);

    expect(flagImages.length).toBeGreaterThan(0);
  });

  test('opens country page on left-click', () => {
    render(<WorldFlags />);

    const flagImage = screen.getByAltText(/Flag/i);

    const open = window.open;
    window.open = jest.fn();

    flagImage.click();

    expect(window.open).toHaveBeenCalled();

    window.open = open; // Restore the original window.open function
  });

  // Add more test cases as needed
});

