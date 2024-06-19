import { fireEvent, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { useStore } from '../../../hooks/use-store';
import { ElementsStore } from '../../../store/elements';
import ListItem from './index';

jest.mock('../../../hooks/use-store');

const mockStore = new ElementsStore();

// These props are needed for react-virtualized
const createProps = (index: number) => ({
  index,
  style: {},
  columnIndex: 0,
  isScrolling: false,
  isVisible: true,
  parent: {} as any,
});

describe('ListItem', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useStore as jest.Mock).mockReturnValue({
      elementsStore: mockStore,
    });
  });

  it('renders elements with correct text', () => {
    mockStore.elements = ['Element 5'];

    const props = createProps(0);

    render(<ListItem key="vrtlzd-key" {...props} />);

    mockStore.filtered.forEach((element) => {
      expect(screen.getByText(element)).toBeInTheDocument();
    });
  });

  it('renders ListItem with correct class when selected', () => {
    mockStore.elements = ['Element 1'];
    mockStore.selected = ['Element 1'];

    const props = createProps(0);

    render(<ListItem key="vrtlzd-key" {...props} />);

    const listItem = screen.getByRole('listitem');

    expect(listItem).toHaveClass('list-item');
    expect(listItem).not.toHaveClass('list-item--disabled');
  });

  it('toggles element selection on click', () => {
    mockStore.elements = ['Element 2'];
    mockStore.selected = [];

    const props = createProps(0);

    render(<ListItem key="vrtlzd-key" {...props} />);

    const listItem = screen.getByRole('listitem');
    fireEvent.click(listItem);
    const checkedIcon = screen.getByTestId('list-item-icon--checked');

    expect(checkedIcon).toBeInTheDocument();
  });

  it('disables unchecked ListItems when max limit is reached', () => {
    mockStore.elements = ['Element 1', 'Element 2', 'Element 3', 'Element 4'];
    mockStore.selected = ['Element 1', 'Element 2', 'Element 3'];

    const props = createProps(3);

    render(<ListItem key="vrtlzd-key" {...props} />);

    const listItem = screen.getByRole('listitem');

    expect(listItem).toHaveClass('list-item--disabled');
  });
});
