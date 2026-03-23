import React from 'react'
import Home from './pages/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Destinations from './pages/Destinations'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/destinations' element={<Destinations/>}/>
          </Routes>
    </BrowserRouter>
  )
}

export default App