import { useState } from 'react'
import './App.css'
import BaiTap3 from './componets/BaiTap3'
import BaiTap1 from './componets/BaiTap1'
import BaiTap2 from './componets/BaiTap2'
import Button from './componets/button'
function App() {


  return (
    <>
      <BaiTap1 />
      <BaiTap2/>
      <BaiTap3/>
  
  <Button  color="red" text="Red Button"/>
  <Button  color="blue" text="Blue Button"/>
  <Button  color="black" text="Black Button"/>
    </>
  )
}

export default App
