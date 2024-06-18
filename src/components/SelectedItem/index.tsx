import './index.scss';

import { IoMdClose } from 'react-icons/io';

type SelectedItemProps = {
  title: string;
  size?: 'small' | 'medium';
  animate?: boolean;
  onRemove: (element: string) => void;
};

/**
 * Component used for displaying a selected item
 *
 * @param {SelectedItemProps} props
 *
 * @param {string} props.title The element itself
 * @param {'small' | 'medium'} props.size Size of the element
 * @param {boolean} props.animate If it should animate a glossover
 */
const SelectedItem = ({
  title,
  size = 'medium',
  animate,
  onRemove,
}: SelectedItemProps) => {
  const animateClass = animate ? 'selected-item--animate' : '';

  return (
    <button className={`selected-item selected-item--${size} ${animateClass}`}>
      <span className="selected-item-label">{title}</span>

      <IoMdClose className="icon" onClick={() => onRemove(title)} />
    </button>
  );
};

export default SelectedItem;
