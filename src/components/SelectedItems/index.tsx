import { FiEdit3 } from 'react-icons/fi';

import Button from '../Button';
import SelectedItem from '../SelectedItem';

import './index.scss';

type SelectedItemsProps = {
  onEdit: () => void;
};

const SelectedItems = ({ onEdit }: SelectedItemsProps) => {
  return (
    <div className="selected-items">
      <p className="selected-items-title">You have {3} selected items:</p>

      <div className="selected-items-container">
        {[1, 2, 3].map((i) => (
          <SelectedItem key={i} id={i} />
        ))}
      </div>

      <Button type="link" onClick={onEdit}>
        <FiEdit3 size={12} /> Change my choice
      </Button>
    </div>
  );
};

export default SelectedItems;
