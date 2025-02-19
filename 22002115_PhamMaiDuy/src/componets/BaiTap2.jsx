import React,{useState} from 'react'
import './BaiTap2.css'
function BaiTap2() {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState("");

    function handelOnchangenum1(e) {
        setNum1(e.target.value)
    }
    function handelOnchangenum2(e) {
        setNum2(e.target.value)
    }
    function handleOnClick(){
        setResult(parseInt(num1) + parseInt(num2))
    }
  return (
    <div className="calculator">
    <h1>Simple Addition</h1>

    <div className="input-group">
      <label>Num 1:</label>
      <input type="number" onChange={handelOnchangenum1} placeholder="Enter number 1" />

      <label>Num 2:</label>
      <input type="number" onChange={handelOnchangenum2} placeholder="Enter number 2" />
    </div>

    <button onClick={handleOnClick}>Calculate</button>

    <h3>Result: {result !== null ? result : "N/A"}</h3>
  </div>
  )
}

export default BaiTap2