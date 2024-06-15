import Filters from '../Filters';
import List from '../List';
import SelectedItem from '../SelectedItem';

const MultiSelect = () => {
  return (
    <div className="multiselect">
      <Filters />

      <List />

      {[1, 2, 3].map((i) => (
        <SelectedItem key={i} />
      ))}

      <button className="button">Save</button>
      <button className="button">Cancel</button>
    </div>
  );
};

export default MultiSelect;
