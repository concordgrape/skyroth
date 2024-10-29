import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import BorderApp from './Pages/BorderApp';
import VerbuuApp from './Pages/VerbuuApp';

import DermiPrvacy from './Pages/dermi/DermiPrivacy';
import DermiEULA from './Pages/dermi/DermiEULA';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/white_border" element={<BorderApp />} />
      <Route path="/dermi/terms-of-use" element={<DermiEULA />} />
      <Route path="/dermi/privacy-policy" element={<DermiPrvacy />} />
      <Route path="/verbuu" element={<VerbuuApp />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
