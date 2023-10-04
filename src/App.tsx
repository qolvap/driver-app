import React from 'react';
import FlagList  from './components/FlagsList.tsx';
import CopyrightNotice from './components/Copyright.tsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <FlagList />
      </header>
      < CopyrightNotice />
    </div>
  );
}

export default App;