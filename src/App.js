// import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import AjustWebcam from './pages/AjustWebcam'
import SessionInProgress from './pages/SessionInProgress'
import SessionEnd from './pages/SessionEnd'
import Datas from './pages/Datas'



function App() {
  return (
    // Router et differente redirection des pages 
    <Router>
      <Routes>
      <Route  path='/' element={<Home />}/>
      <Route  path='/AjustWebCam' element={<AjustWebcam />}/>
      <Route  path='/SessionInProgress' element={<SessionInProgress />}/>
      <Route  path='/SessionEnd' element={<SessionEnd />}/>
      <Route  path='/Datas' element={<Datas />}/>

      </Routes>
    </Router>
  )
}

export default App
