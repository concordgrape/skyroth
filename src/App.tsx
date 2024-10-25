import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import BorderApp from './Pages/BorderApp';
import DermiApp from './Pages/DermiApp';
import VerbuuApp from './Pages/VerbuuApp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/white_border" element={<BorderApp />} />
      <Route path="/dermi" element={<DermiApp />} />
      <Route path="/verbuu" element={<VerbuuApp />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
