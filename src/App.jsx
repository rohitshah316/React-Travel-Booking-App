import React from 'react'
import Home from './pages/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import About from './pages/About'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
    </BrowserRouter>
  )
}

export default App