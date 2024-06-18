import { observer } from 'mobx-react-lite';

import './index.scss';

import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';

import { useStore } from '../../hooks/use-store';

/**
 * A slider that allows for min and max range
 */
const MultiRangeSlider = () => {
  const { elementsStore } = useStore();

  return (
    <div className="multi-range">
      <span className="multi-range-value">{elementsStore.filter[0]}</span>
      <Slider
        className="multi-range-input"
        range
        min={0}
        max={elementsStore.elements.length}
        defaultValue={elementsStore.filter}
        allowCross={false}
        step={1}
        onChangeComplete={(value: any) => {
          elementsStore.setFilter(value);
        }}
      />
      <span className="multi-range-value">{elementsStore.filter[1]}</span>
    </div>
  );
};

export default observer(MultiRangeSlider);
