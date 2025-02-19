import React, { useState } from 'react'


function BaiTap3() {

    const [text, setText] = useState("");
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [oprater, setOprater] = useState("");
    const [result, setResult] = useState("");
    function handelOnchangenum1(e) {
        setNum1(e.target.value)
    }
    function handelOnchangenum2(e) {
        setNum2(e.target.value)
    }
    function handleSetOprater(e) {
        setOprater(e.target.value)
    }

    function handleOnClick() {
        if (oprater == '+')
            setResult(parseInt(num1) + parseInt(num2))
        else if
            (oprater == '-')
            setResult(parseInt(num1) - parseInt(num2))
        else if
            (oprater == '*')
            setResult(parseInt(num1) * parseInt(num2))
        else if
            (oprater == '/')
            setResult(parseInt(num1) / parseInt(num2))
        else
            console.log("Error")

    }
    return (



        <div className="calculator">

            <h1>CALCULATOR</h1>
         <div className='input-group'>
         <label> Num 1:  </label>
            <input type="text" name='num1' onChange={handelOnchangenum1} placeholder='Number 1' />
            <label> Num 2:  </label>
            <input type="text" name='num2' onChange={handelOnchangenum2} placeholder='Number 1' />  <br />
         </div>
            <div className="operators">
            <h2>Operater</h2> <br />
            <input onChange={handleSetOprater} type="radio" name="group" value="+" id='oparter'  /> <span >+</span> <br />
            <input onChange={handleSetOprater} type="radio" name="group" value="-" id='oparter' /> <span>-</span> <br />
            <input onChange={handleSetOprater} type="radio" name="group" value="*" id='oparter' /> <span>*</span> <br />
            <input onChange={handleSetOprater} type="radio" name="group" value="/" id='oparter' /> <span>/</span> <br />
            </div>

            <br />
            <button onClick={handleOnClick}>Click</button>
            <br />
            <span id='result'>Result is : {result}</span>
        </div>

    )
}

export default BaiTap3