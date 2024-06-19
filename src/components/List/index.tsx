import { observer } from 'mobx-react-lite';
import { ListRowRenderer, List as VirtualizedList } from 'react-virtualized';

import {
  LIST_ELEMENT_HEIGHT,
  LIST_HEIGHT,
  LIST_WIDTH,
} from '../../globals/const';
import { useStore } from '../../hooks/use-store';
import ListItem from './ListItem';

import './index.scss';

/**
 * A container that smart renders a list of elements
 */
const List = () => {
  const { elementsStore } = useStore();

  const rowRenderer: ListRowRenderer = ({ key, ...props }) => (
    <ListItem key={key} {...props} />
  );

  return (
    <VirtualizedList
      className="list"
      height={LIST_HEIGHT}
      width={LIST_WIDTH}
      rowRenderer={rowRenderer}
      rowHeight={LIST_ELEMENT_HEIGHT}
      rowCount={elementsStore.filtered.length}
      overscanRowCount={10}
    />
  );
};

export default observer(List);
