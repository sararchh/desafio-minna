import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home'
import SignUp from '../pages/SignUp';

const NotFound = () => {
  return (
    <p>Nao encontrado</p>
  )
}

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/signup' element={<SignUp />} />

      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;