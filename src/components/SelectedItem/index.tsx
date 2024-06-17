import './index.scss';

import { IoMdClose } from 'react-icons/io';

import { CustomCSSProperties } from '../../globals/types';

type SelectedItemProps = {
  id: number;
  size?: 'small' | 'medium';
  animate?: boolean;
};

/**
 * Component used for displaying a selected item
 *
 * @param {SelectedItemProps} props
 *
 * @param {number} props.id
 * @param {'small' | 'medium'} props.size Size of the element
 * @param {boolean} props.animate If it should animate a glossover
 */
const SelectedItem = ({ id, size = 'medium', animate }: SelectedItemProps) => {
  // Tweaks the gloss animation to be continuous
  const style: CustomCSSProperties = {
    '--shine-delay': `${id * 0.4}s`,
  };

  const animateClass = animate ? 'selected-item--animate' : '';

  return (
    <button
      className={`selected-item selected-item--${size} ${animateClass}`}
      {...{ style }}
    >
      <span className="selected-item-label">Element {id}</span>

      <IoMdClose className="icon" />
    </button>
  );
};

export default SelectedItem;
