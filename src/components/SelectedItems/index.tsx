import Button from '../Button';
import SelectedItem from '../SelectedItem';

type SelectedItemsProps = {
  onEdit: () => void;
};

const SelectedItems = ({ onEdit }: SelectedItemsProps) => {
  return (
    <div className="selected-items">
      <p>You currently have 2 selected items</p>

      {[1, 2, 3].map((i) => (
        <SelectedItem key={i} />
      ))}

      <Button onClick={onEdit}>Change my choice</Button>
    </div>
  );
};

export default SelectedItems;
