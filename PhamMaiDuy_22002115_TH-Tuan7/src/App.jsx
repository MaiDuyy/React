import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LayoutAdmin from './layout/LayoutAdmin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutAdmin/>}>
         
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
