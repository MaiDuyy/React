import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './component/Dashboard'
import LayoutAdmin from './layout/LayoutAdmin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutAdmin/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='projects' element={<div className="p-6">Projects Page</div>}/>
          <Route path='teams' element={<div className="p-6">Teams Page</div>}/>
          <Route path='analytics' element={<div className="p-6">Analytics Page</div>}/>
          <Route path='messages' element={<div className="p-6">Messages Page</div>}/>
          <Route path='integrations' element={<div className="p-6">Integrations Page</div>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
