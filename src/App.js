import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CadastroPage from './pages/CadastroPage';
import VagasPage from './pages/VagasPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CadastroPage />} />
        <Route path="/vagas" element={<VagasPage />} />
      </Routes>
    </div>
  );
}

export default App;