import { useState } from 'react';
import { MdFilterListAlt } from 'react-icons/md';

import MultiRange from '../MultiRange';

import './index.scss';

import SearchInput from '../SearchInput';

/**
 * A container used to display search and filter
 */
const Filters = () => {
  const [showSlider, setShowSlider] = useState(false);

  /**
   * Show/hide the range slider
   */
  const handleToggleSlider = () => {
    setShowSlider((prev) => !prev);
  };

  const iconFilterClass = showSlider ? 'icon-filter--active' : '';

  return (
    <div className="filters">
      <div className="filters-container">
        <SearchInput />
        <MdFilterListAlt
          data-testid="filters-multirange-icon"
          className={`icon-filter ${iconFilterClass}`}
          size={24}
          onClick={handleToggleSlider}
        />
      </div>

      {showSlider && <MultiRange />}
    </div>
  );
};

export default Filters;
