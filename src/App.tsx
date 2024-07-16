import MultiSelect from './components/MultiSelect';
import SelectedItems from './components/SelectedItems';

import './App.scss';

import { useEffect, useState } from 'react';

import Logo from './components/Logo';
import Separator from './components/Separator';
import { useStore } from './hooks/use-store';

/**
 * Main skeleton of the app
 */
const App = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { elementsStore } = useStore();

  const handleCancel = () => {
    elementsStore.cancelSelection();
    setIsEditing(false);
  };

  const handleSave = () => {
    elementsStore.saveSelection();
    setIsEditing(false);
  };

  const handleEdit = () => {
    elementsStore.cancelSelection();
    elementsStore.resetFilters();
    setIsEditing(true);
  };

  useEffect(() => {
    elementsStore.getData();
  }, []);

  return (
    <div className="container">
      <Logo />
      <h1 className="title">
        <span>WarGaming</span>
        <span>MultiSelect</span>
      </h1>
      <Separator />
      {isEditing ? (
        <MultiSelect onSave={handleSave} onCancel={handleCancel} />
      ) : (
        <SelectedItems onEdit={handleEdit} />
      )}
    </div>
  );
};

export default App;
