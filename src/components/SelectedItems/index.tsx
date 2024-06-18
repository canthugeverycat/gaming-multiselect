import { observer } from 'mobx-react-lite';
import { FiEdit3 } from 'react-icons/fi';

import { useStore } from '../../hooks/use-store';
import Button from '../Button';
import SelectedItem from '../SelectedItem';

import './index.scss';

type SelectedItemsProps = {
  onEdit: () => void;
};

/**
 * Component that renders a list of currently selected items
 *
 * @param {SelectedItemsProps} props
 * @param {Function} props.onEdit A callback that fires on change button click
 */
const SelectedItems = ({ onEdit }: SelectedItemsProps) => {
  const { elementsStore } = useStore();

  /**
   * The element to remove from selection
   *
   * @param {string} element The element to remove
   */
  const handleRemoveItem = (element: string) => {
    elementsStore.toggleElement(element, true);
  };

  return (
    <>
      <div className="selected-items">
        <p className="selected-items-title">
          You have {elementsStore.savedSelected.length || 'no'} selected items
        </p>

        <div className="selected-items-container">
          {elementsStore.savedSelected.map((title, i) => (
            <SelectedItem
              animate={true}
              key={i}
              {...{ title }}
              onRemove={handleRemoveItem}
            />
          ))}
        </div>
      </div>

      <Button className="button-edit" onClick={onEdit}>
        <FiEdit3 /> Change
      </Button>
    </>
  );
};

export default observer(SelectedItems);
