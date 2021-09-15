import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import Topbar from './components/Topbar';

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Main />
    </BrowserRouter>
  );
}

export default App;