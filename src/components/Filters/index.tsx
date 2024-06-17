import { useState } from 'react';
import { MdFilterListAlt } from 'react-icons/md';

import MultiRangeSlider from '../MultiRangeSlider';

import './index.scss';

import SearchInput from '../SearchInput';

/**
 * A container used to display search and filter
 */
const Filters = () => {
  const [showSlider, setShowSlider] = useState(false);

  const handleToggleSlider = () => {
    setShowSlider((prev) => !prev);
  };

  const iconFilterClass = showSlider ? 'icon-filter--active' : '';

  return (
    <div className="filters">
      <div className="filters-container">
        <SearchInput />
        <MdFilterListAlt
          className={`icon-filter ${iconFilterClass}`}
          size={24}
          onClick={handleToggleSlider}
        />
      </div>

      {showSlider && <MultiRangeSlider min={0} max={100} />}
    </div>
  );
};

export default Filters;
