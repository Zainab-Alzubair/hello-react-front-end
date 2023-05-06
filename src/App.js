import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Greetings from './components/Greetings';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Greetings />} />
    </Routes>
  </BrowserRouter>
);

export default App;
