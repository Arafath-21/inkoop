import React from 'react';

import NumberInput from './components/NumberInput';
import Display from './components/Display';

// Main App Component
const App: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Number Input</h2>
      <NumberInput />
      <Display />
    </div>
  );
};

export default App;
