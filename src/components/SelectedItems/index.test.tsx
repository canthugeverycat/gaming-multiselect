import { fireEvent, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { useStore } from '../../hooks/use-store';
import { ElementsStore } from '../../store/elements';
import SelectedItems from './index';

jest.mock('../../hooks/use-store');

const mockStore = new ElementsStore();

describe('SelectedItems component', () => {
  const mockEdit = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    (useStore as jest.Mock).mockReturnValue({
      elementsStore: mockStore,
    });
  });

  it('renders correct number of selected items', () => {
    mockStore.elements = ['Element 1', 'Element 2', 'Element 3'];
    mockStore.savedSelected = ['Element 1', 'Element 2'];

    render(<SelectedItems onEdit={mockEdit} />);

    const selectedItems = screen.getAllByLabelText('Selected Item');
    expect(selectedItems.length).toBe(2);
  });

  it('displays correct message when no selected items', () => {
    mockStore.savedSelected = [];
    render(<SelectedItems onEdit={mockEdit} />);

    const noItemsMessage = screen.getByText('You have no selected items');
    expect(noItemsMessage).toBeInTheDocument();
  });

  it('updates selected elements on remove', () => {
    mockStore.elements = ['Element 1', 'Element 2', 'Element 3'];
    mockStore.savedSelected = ['Element 1', 'Element 2'];

    render(<SelectedItems onEdit={mockEdit} />);

    const removeButtons = screen.getAllByTestId('selected-item-icon--remove');
    fireEvent.click(removeButtons[1]);

    expect(mockStore.savedSelected).toStrictEqual(['Element 1']);
  });
});
