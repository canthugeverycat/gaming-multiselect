import { MdClose, MdOutlineCheck } from 'react-icons/md';

import Button from '../Button';
import Filters from '../Filters';
import List from '../List';
import SelectedItem from '../SelectedItem';

import './index.scss';

type MultiSelectProps = {
  onSave: () => void;
  onCancel: () => void;
};

/**
 * An input form that allows for selection of multiple items
 *
 * @param {MultiSelectProps} props
 *
 * @param {Function} props.onSave Callback that fires on Save action
 * @param {Function} props.onCancel Callback that fires on Cancel action
 */
const MultiSelect = ({ onSave, onCancel }: MultiSelectProps) => {
  return (
    <>
      <div className="multiselect">
        <Filters />

        <List />

        {/* Selected Items */}
        <p className="multiselect-selected-title">Selected items:</p>
        <div className="multiselect-selected">
          {[1, 2, 3].map((i) => (
            <SelectedItem key={i} id={i} size="small" />
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="multiselect-actions">
        <Button onClick={onSave}>
          <MdOutlineCheck /> Save
        </Button>
        <Button onClick={onCancel}>
          <MdClose /> Cancel
        </Button>
      </div>
    </>
  );
};

export default MultiSelect;
