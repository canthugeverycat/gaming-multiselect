import { FiEdit3 } from 'react-icons/fi';

import SelectedItem from '../SelectedItem';

import './index.scss';

import Button from '../Button';

type SelectedItemsProps = {
  onEdit: () => void;
};

/**
 * Component that renders a list of currently selected items
 *
 * @param {SelectedItemsProps} props
 * @param {Function} props.onEdit A callback that fires on Change action
 */
const SelectedItems = ({ onEdit }: SelectedItemsProps) => {
  return (
    <>
      <div className="selected-items">
        <p className="selected-items-title">You have {3} selected items:</p>

        <div className="selected-items-container">
          {[1, 2, 3].map((i) => (
            <SelectedItem animate={true} key={i} id={i} />
          ))}
        </div>
      </div>

      <Button className="button-edit" onClick={onEdit}>
        <FiEdit3 /> Change
      </Button>
    </>
  );
};

export default SelectedItems;
