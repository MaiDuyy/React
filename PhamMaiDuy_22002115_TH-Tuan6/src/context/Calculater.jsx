import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case '+': {
      return {
        ...state, count: state.count + 1 
      };
    }
    case '-': {
      return {
        ...state, count: state.count - 1 
      };
    }
    default:
      throw new Error('Unknown action: ' + action.type);
  }
}

const initialState = { count: 0 };

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClickInC() {
    dispatch({ type: '+' });
  }

  function handleButtonClickDeC() {
    dispatch({ type: '-' });
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-200 p-4 space-y-4'>
      <span className='text-xl font-bold'>{state.count}</span>
      <button 
        className='bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-yellow-600' 
        onClick={handleButtonClickInC}
      >
        Increment
      </button>
      <button 
        className='bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600' 
        onClick={handleButtonClickDeC}
      >
        Decrement
      </button>
    </div>
  );
}
