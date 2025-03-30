import React from 'react'
import { CssBaseline } from '@mui/material'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomeUi from './views/HomeUi'
import LoginUi from './views/LoginUi'
import ContactUi from './views/ContactUi'
import AboutUi from './views/AboutUi'

function App() {
  return (
    <>
    <CssBaseline/>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeUi/>}></Route>
      <Route path="/login" element={<LoginUi/>}></Route>
      <Route path="/contact" element={<ContactUi/>}></Route>
      <Route path="/about" element={<AboutUi/>}></Route>
    </Routes>
    </BrowserRouter>


    </>
  
  )
}

export default App