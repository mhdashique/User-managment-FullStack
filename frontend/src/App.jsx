import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import UserProfile from './pages/UserProfile'

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<UserProfile/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
