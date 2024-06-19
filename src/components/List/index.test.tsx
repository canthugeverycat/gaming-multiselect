import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { useStore } from '../../hooks/use-store';
import { ElementsStore } from '../../store/elements';
import List from './index';

jest.mock('../../hooks/use-store');

const mockStore = new ElementsStore();

describe('List', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useStore as jest.Mock).mockReturnValue({
      elementsStore: mockStore,
    });
  });

  it('renders list with correct number of items', () => {
    mockStore.elements = ['Element 1', 'Element 2', 'Element 3'];
    mockStore.searchValue = '';
    mockStore.setFilter([0, 3]);

    const { container } = render(<List />);

    expect(container.querySelector('.list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });
});
