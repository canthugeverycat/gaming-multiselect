import MultiSelect from './components/MultiSelect';
import SelectedItems from './components/SelectedItems';

/**
 * Main skeleton of the app
 */
const App = () => {
  return (
    <div className="container">
      <SelectedItems />

      <MultiSelect />
    </div>
  );
};

export default App;
