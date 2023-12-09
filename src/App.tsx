import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import BorderApp from './BorderApp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/white_border" element={<BorderApp />} />
      <Route path="/dermi" element={<BorderApp />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
