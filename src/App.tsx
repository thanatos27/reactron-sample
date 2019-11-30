import React from 'react';
import Counter from './Counter';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Reactron (React + Electron)</h1>
      <Counter name='My counter'/>
    </div>
  );
}

export default App;
