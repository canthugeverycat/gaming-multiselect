import Button from '../Button';
import Filters from '../Filters';
import List from '../List';
import SelectedItem from '../SelectedItem';

type MultiSelectProps = {
  onSave: () => void;
  onCancel: () => void;
};

const MultiSelect = ({ onSave, onCancel }: MultiSelectProps) => {
  return (
    <div className="multiselect">
      <Filters />

      <List />

      {[1, 2, 3].map((i) => (
        <SelectedItem key={i} />
      ))}

      <Button onClick={onSave}>Save</Button>
      <Button type="secondary" onClick={onCancel}>
        Cancel
      </Button>
    </div>
  );
};

export default MultiSelect;
