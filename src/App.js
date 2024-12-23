import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './pages/auth';
import MainApp from './pages/MainApp';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route untuk halaman Login */}
        <Route path="/" element={<Auth />} />
        <Route path="/logout" element={<Auth />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/*" element={<MainApp />} />
      </Routes>
    </Router>
  );
}

export default App;
