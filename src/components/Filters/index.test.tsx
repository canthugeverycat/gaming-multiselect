import { fireEvent, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import Filters from './index';

describe('Filters Component', () => {
  it('renders SearchInput', () => {
    render(<Filters />);

    const searchInput = screen.getByTestId('search-input');

    expect(searchInput).toBeInTheDocument();
  });

  it('renders Filter icon', () => {
    render(<Filters />);

    const filterIcon = screen.getByTestId('filters-multirange-icon');

    expect(filterIcon).toBeInTheDocument();
  });

  it('renders MultiRange on toggle', () => {
    render(<Filters />);

    const filterIcon = screen.getByTestId('filters-multirange-icon');

    // Initial state: slider should not be visible
    expect(screen.queryByTestId('multi-range')).not.toBeInTheDocument();

    // Click: show the slider
    fireEvent.click(filterIcon);
    expect(screen.queryByTestId('multi-range')).toBeInTheDocument();

    // Second Click: hide the slider
    fireEvent.click(filterIcon);
    expect(screen.queryByTestId('multi-range')).not.toBeInTheDocument();
  });
});
