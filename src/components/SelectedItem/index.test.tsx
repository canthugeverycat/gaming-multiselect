import { fireEvent, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import SelectedItem, { SelectedItemProps } from './index';

describe('SelectedItem component', () => {
  const mockOnRemove = jest.fn();
  const props: SelectedItemProps = {
    title: 'Element 123',
    size: 'medium',
    animate: true,
    onRemove: mockOnRemove,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    render(<SelectedItem {...props} />);

    const selectedItem = screen.getByRole('button', { name: 'Selected Item' });
    const titleElement = screen.getByText('Element 123');

    expect(selectedItem).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(selectedItem).toHaveClass('selected-item--medium');
  });

  it('calls fn with an appropriate param when remove icon is clicked', () => {
    render(<SelectedItem {...props} />);

    const closeButton = screen.getByTestId('selected-item-icon--remove');
    fireEvent.click(closeButton);

    expect(mockOnRemove).toHaveBeenCalledWith('Element 123');
  });
});
