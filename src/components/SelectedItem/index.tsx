import './index.scss';

import { IoMdClose } from 'react-icons/io';

import { CustomCSSProperties } from '../../globals/types';

type SelectedItemProps = {
  id: number;
};

const SelectedItem = ({ id }: SelectedItemProps) => {
  // Tweaks the gloss animation to be continuous
  const style: CustomCSSProperties = {
    '--shine-delay': `${id * 0.4}s`,
  };

  // Sets the background color based on index
  const color =
    {
      1: 'purple',
      2: 'khaki',
      3: 'indigo',
    }[id] || 'purple';

  return (
    <button className={`selected-item selected-item--${color}`} {...{ style }}>
      <span className="selected-item-label">Element 1</span>

      <IoMdClose className="icon" size={20} />
    </button>
  );
};

export default SelectedItem;
