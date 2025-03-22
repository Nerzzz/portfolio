import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './assets/Components/Header'
import Navbar from './assets/Components/Navbar'

import Main from './assets/Pages/Main';
import Knowledge from './assets/Pages/Knowledge';
import Works from './assets/Pages/Works';
import About from './assets/Pages/About';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Navbar />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Knowledge' element={<Knowledge />} />
        <Route path='/Works' element={<Works />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App