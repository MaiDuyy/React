import React, { useState } from 'react'

function CounterState() {
   const [count, setCount] = useState(0);
  
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
      <div className='max-w-xl mx-auto px-4 border flex items-center justify-center h-50 bg-gray-200 text-center mt-10 rounded-md'>
  
        <div className=''> 
        <h1 className='text-4xl font-bold'>Counter State</h1>
           <h1 className='text-xl  font-semibold px-4 py-2'>Count : {count}</h1>
  
          <button
          className='bg-blue-500 text-white px-4 py-2 mx-2 rounded-md'
            onClick={() => increment()}
          >+</button>
          <button
             className='bg-red-500 text-white px-4 py-2 mx-2 rounded-md'
            onClick={() => decrement()}
          >-</button>
          <button
             className='bg-green-500 text-white px-4 py-2 mx-2 rounded-md'
            onClick={() => reset()}
          >Reset</button></div>
      </div>
    );
  }

export default CounterState
