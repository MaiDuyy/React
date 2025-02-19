import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
function BaiTap1() {
    const [text, setText] = useState("");
    const [result,setResult] = useState("")

    function handelOnchange(e) {
        setText(e.target.value)
    }

    function handelOnClick(e) {
        setResult(text)
    }
  return (
    <div className='calculator'>
      <div className="input-group">
      <input type="text"  onChange={handelOnchange} placeholder='Nhap ten'/>  <br />
        <Badge bg="success" onClick={handelOnClick} as={Button}>
          Click
        </Badge> <br />
        <span> Welcome: {result}</span>
      </div>

       
    </div>
  )
}

export default BaiTap1