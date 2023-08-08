import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import InfoPage from './components/infopage/InfoPage'

function App() {

  return (
    <>
    <BrowserRouter>
       <Navbar/>
       <div className='spacing'></div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Recipeinfo/:id' element={<InfoPage/>}/>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
