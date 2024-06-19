import { observer } from 'mobx-react-lite';
import { MdClose, MdOutlineCheck } from 'react-icons/md';

import { useStore } from '../../hooks/use-store';
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
  const { elementsStore } = useStore();

  /**
   * Removes an element from selection
   *
   * @param {string} element The element to remove
   */
  const handleRemoveSelectedItem = (element: string) => {
    elementsStore.toggleElement(element);
  };

  return (
    <>
      <div className="multiselect">
        <Filters />

        <List />

        {/* Selected Items */}
        <p className="multiselect-selected-title">Selected items:</p>
        <div
          className="multiselect-selected"
          data-testid="multiselect-selected"
        >
          {elementsStore.selected.map((title, i) => (
            <SelectedItem
              key={i}
              {...{ title }}
              size="small"
              onRemove={handleRemoveSelectedItem}
            />
          ))}

          {/* No selected message */}
          {!elementsStore.selected.length && (
            <p className="multiselect-selected-label">
              Select some items from the list.
            </p>
          )}
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

export default observer(MultiSelect);
