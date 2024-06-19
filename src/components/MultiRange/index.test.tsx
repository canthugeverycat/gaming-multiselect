import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { useStore } from '../../hooks/use-store';
import MultiRange from './index';

jest.mock('../../hooks/use-store');

describe('MultiRange Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useStore as jest.Mock).mockReturnValue({
      elementsStore: {
        elements: ['Element 1', 'Element 2', 'Element 3'],
        filter: [0, 3],
      },
    });
  });

  it('renders the component', () => {
    render(<MultiRange />);
    const multiRangeComponent = screen.getByTestId('multi-range');

    expect(multiRangeComponent).toBeInTheDocument();
  });

  it('displays filter values', () => {
    render(<MultiRange />);

    const minValue = screen.getByText('0');
    const maxValue = screen.getByText('3');

    expect(minValue).toBeInTheDocument();
    expect(maxValue).toBeInTheDocument();
  });
});
