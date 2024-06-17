import { IoMdSearch } from 'react-icons/io';

import './index.scss';

/**
 * A Search box component
 */
const SearchInput = () => (
  <div className="search-input">
    <input type="text" placeholder="Search for an item" />
    <IoMdSearch className="icon" size={16} />
  </div>
);

export default SearchInput;
