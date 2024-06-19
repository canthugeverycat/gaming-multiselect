import { observer } from 'mobx-react-lite';
import { ChangeEvent } from 'react';
import { IoMdSearch } from 'react-icons/io';

import { useStore } from '../../hooks/use-store';

import './index.scss';

/**
 * A Search box component
 */
const SearchInput = () => {
  const { elementsStore } = useStore();

  /**
   * Change the search input
   *
   * @param {ChangeEvent} e Click event
   */
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    elementsStore.setSearch(e.target.value);
  };

  return (
    <div className="search-input" data-testid="search-input">
      <input
        type="text"
        placeholder="Search for an item"
        value={elementsStore.searchValue}
        onChange={handleSearchChange}
      />
      <IoMdSearch className="icon" size={16} />
    </div>
  );
};

export default observer(SearchInput);
