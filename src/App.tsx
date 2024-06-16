import MultiSelect from './components/MultiSelect';
import SelectedItems from './components/SelectedItems';

import './App.scss';

import { useState } from 'react';

import Logo from './components/Logo';

/**
 * Main skeleton of the app
 */
const App = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleCancel = () => setIsEditing(false);

  const handleSave = () => setIsEditing(false);

  const handleEdit = () => setIsEditing(true);

  return (
    <>
      <Logo />
      <div className="container">
        {isEditing ? (
          <MultiSelect onSave={handleSave} onCancel={handleCancel} />
        ) : (
          <SelectedItems onEdit={handleEdit} />
        )}
      </div>
    </>
  );
};

export default App;
