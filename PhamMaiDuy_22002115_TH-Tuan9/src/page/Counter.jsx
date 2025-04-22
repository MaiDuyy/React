import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement ,rest } from '../store/counterSlice.js';

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);

  return (
    <div className='max-w-xl mx-auto px-4 border flex items-center justify-center h-50 bg-gray-200 text-center mt-10 rounded-md'>


      <div className='text-center border-b-green-300 py-12'>
        <h1 className='text-4xl font-bold'>Counter Redux ToolKit</h1>
        <h2 className='mb-2 text-xl font-semibold text-blue-500' >Counter: {count}</h2>
        <div className='space-x-4 '>
          <button className='bg-blue-500 text-white px-4 py-2 mx-2 rounded-md hover:bg-blue-400 duration-300' onClick={() => dispatch(increment())}>+</button>
          <button className='bg-red-500 text-white px-4 py-2 mx-2 rounded-md hover:bg-red-300 duration-300 drop-shadow-amber-100' onClick={() => dispatch(decrement())}>-</button>
          <button className='bg-green-500 text-white px-4 py-2 mx-2 rounded-md hover:bg-green-300 duration-300 drop-shadow-amber-100' onClick={() => dispatch(rest())}>Rest</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
