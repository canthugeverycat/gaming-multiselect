import { fireEvent, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { useStore } from '../../hooks/use-store';
import { ElementsStore } from '../../store/elements';
import MultiSelect from './index';

jest.mock('../../hooks/use-store');

const mockStore = new ElementsStore();

describe('MultiSelect', () => {
  const onSaveMock = jest.fn();
  const onCancelMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (useStore as jest.Mock).mockReturnValue({
      elementsStore: mockStore,
    });
  });

  it('renders selected items correctly', () => {
    mockStore.elements = ['Element 1', 'Element 2'];
    mockStore.selected = ['Element 1'];

    render(<MultiSelect onSave={onSaveMock} onCancel={onCancelMock} />);

    const container = screen.getByTestId('multiselect-selected');

    const selectedItems = container.querySelectorAll('button');

    expect(selectedItems.length).toBe(1);
  });

  it('shows message when no items are selected', () => {
    mockStore.elements = ['Element 1', 'Element 2'];
    mockStore.selected = [];

    render(<MultiSelect onSave={onSaveMock} onCancel={onCancelMock} />);

    const noSelectedMessage = screen.getByText(
      'Select some items from the list.'
    );

    expect(noSelectedMessage).toBeInTheDocument();
  });

  it('updates selected elements on remove', () => {
    mockStore.elements = ['Element 1', 'Element 2', 'Element 3'];
    mockStore.selected = ['Element 1', 'Element 2'];

    render(<MultiSelect onSave={onSaveMock} onCancel={onCancelMock} />);

    const removeButtons = screen.getAllByTestId('selected-item-icon--remove');
    fireEvent.click(removeButtons[1]);

    expect(mockStore.selected).toStrictEqual(['Element 1']);
  });
});
