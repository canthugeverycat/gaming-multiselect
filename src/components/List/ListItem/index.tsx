import { observer } from 'mobx-react-lite';
import { GiCheckMark } from 'react-icons/gi';
import { ListRowProps } from 'react-virtualized';

import { useStore } from '../../../hooks/use-store';

import './index.scss';

/**
 * Representation of a single element item
 *
 * @param {ListRowProps} props
 * @param {number} props.index
 * @param {CSSProperties} props.style
 */
const ListItem = ({ index, style }: ListRowProps) => {
  const { elementsStore } = useStore();

  const element = elementsStore.filtered[index];

  // Disable an unchecked element if the limit is reached
  const disabledClass =
    elementsStore.isMaxSelected && !elementsStore.selected.includes(element)
      ? 'list-item--disabled'
      : '';

  /**
   * Checks/unchecks the element on click
   */
  const handleToggleCheck = () => {
    elementsStore.toggleElement(element);
  };

  return (
    <li
      {...{ style }}
      className={`list-item ${disabledClass}`}
      onClick={handleToggleCheck}
    >
      <span className="list-item-checkbox">
        {elementsStore.selected.includes(element) && (
          <GiCheckMark className="icon" />
        )}
      </span>
      {element}
    </li>
  );
};

export default observer(ListItem);
