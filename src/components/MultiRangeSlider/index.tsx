import './index.scss';

import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';

type MultiRangeSliderProps = {
  min: number;
  max: number;
  step?: number;
};

/**
 * A slider that allows min and max range
 * @param {MultiRangeSliderProps} props
 *
 * @param {number} props.min Minimum value
 * @param {number} props.max Maximum value
 * @param {number} props.step Step increment
 */
const MultiRangeSlider = ({ min, max, step = 1 }: MultiRangeSliderProps) => {
  return (
    <div className="multi-range">
      <span className="multi-range-value">{0}</span>
      <Slider
        className="multi-range-input"
        range
        min={min}
        max={max}
        defaultValue={[20, 70]}
        allowCross={false}
        step={step}
      />
      <span className="multi-range-value">{100}</span>
    </div>
  );
};

export default MultiRangeSlider;
