// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import Summary from './components/Summary';

const App = () => {
  const [formData, setFormData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form setFormData={setFormData} />} />
        <Route path="/summary" element={<Summary formData={formData} />} />
      </Routes>
    </Router>
  );
};

export default App;
