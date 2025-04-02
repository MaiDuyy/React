
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LayoutAdmin from './layout/layoutAdmin'


function App() {
 

  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LayoutAdmin/>}/>
    </Routes>
  
  </BrowserRouter>
  )
}

export default App
