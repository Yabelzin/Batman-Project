import { useState, useEffect} from 'react';
import './App.css';
import Button from './components/button/button';
import Header from './components/header/header';
import Home from './pages/home';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Contato from './pages/contato/contato';
import Fotos from './pages/fotos/fotos';
import Comments from './pages/comments/comments';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/contacts' element= {<Contato/>}/>
        <Route path='/fotos' element={<Fotos/>}/>
        <Route path='/comments' element={<Comments/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;