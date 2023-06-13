
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Home from './views/home/Home'
import Landing from './views/landing/Landing'
import Form from './views/form/Form'
import Detail from './views/detail/Detail'
import NavBar from './components/NavBar/NavBar'

function App() {
const location = useLocation()
  return (
    <>
     <div>
      {location.pathname !== "/" && <NavBar/>}
      <Routes>
        <Route  exact path="/" element={<Landing/>} /> 
        <Route path="/home" element={<Home/>} /> 
        <Route path="/detail" element={<Detail/>} /> 
        <Route path="/create" element={<Form/>} /> 
      </Routes>
     </div>
    </>
  )
}

export default App
