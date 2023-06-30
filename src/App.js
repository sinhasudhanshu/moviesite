import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import SecondPage from './SecondPage';
import Error from './Error';
import "./App.css";
const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<SecondPage />} />
        <Route path="*" element={<Error />} />

      </Routes>



    </div>
  )
}

export default App;