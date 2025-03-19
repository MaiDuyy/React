import { useState } from 'react'
// import userJsons from './pages/TestJson'
import './App.css'
import TestJson from './pages/TestJson'
import Calculater from './context/Calculater'

function App() {
 

  return (
    <div>
      {/* <TestJson/> */}
      <Calculater/>
    </div>
  )
}

export default App
