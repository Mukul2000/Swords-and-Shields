import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GameBoard from './Components/GameBoard/GameBoard';
import Play from './Components/Play/Play';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/play' element={<GameBoard/>} />
      <Route path='/' element={<Play/>} />
    </Routes>
  </BrowserRouter>
}

export default App;
