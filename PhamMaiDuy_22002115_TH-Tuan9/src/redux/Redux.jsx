import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './actions/actions';

const Redux = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleInc = () => dispatch(increment());
  const handleDecre = () => dispatch(decrement());
  const handleReset = () => dispatch(reset());

  return (
    <div className='max-w-xl mx-auto px-4 border flex items-center justify-center h-50 bg-gray-200 text-center mt-10 rounded-md'>
      <div className="">
        <h1 className="text-4xl font-bold mb-4 text-center">Redux</h1>
        <span className="text-xl mb-4">Count: {count}</span>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white  rounded-md " onClick={handleInc}>
            +
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={handleDecre}>
            -
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>



  );
};

export default Redux;
