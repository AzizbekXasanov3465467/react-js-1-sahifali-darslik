
import './App.css'

import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'

// pages
import Home from "./pages/home"
import About  from './pages/about'
import Contact from './pages/contact'
function App() {


  return (

  
 <div className="App">
  <BrowserRouter>
<nav>
  <h1>My Artcles</h1>
<NavLink  to="/">Home</NavLink>
<NavLink to="/about">About</NavLink>
<NavLink  to="/contact">Contact</NavLink>
</nav>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/about' element={<About/>} />
  <Route path='/contact' element={<Contact/>} />
</Routes>
  </BrowserRouter>
 </div>
    
  )
}

export default App
