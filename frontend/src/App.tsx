import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Welcome from './pages/Welcome'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Slidebar from './Components/Slidebar'

function App() {

  return (
    <BrowserRouter  >
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/signup' element={<Signup/>}  />
      <Route path='/login' element={<Login/>}  />
      <Route path='' element={<Dashboard/>}/>
  
    </Routes>
    </BrowserRouter>
  
  )
}

export default App
