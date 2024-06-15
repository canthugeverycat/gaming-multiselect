import SelectedItem from '../SelectedItem';

const SelectedItems = () => {
  return (
    <div className="selected-items">
      <p>You currently have 2 selected items</p>

      {[1, 2, 3].map((i) => (
        <SelectedItem key={i} />
      ))}

      <button className="button">Change my choice</button>
    </div>
  );
};

export default SelectedItems;
