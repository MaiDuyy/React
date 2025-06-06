
import './App.css'
import Counter from './page/Counter'
import CounterState from './page/CounterState'
import CounterReducer from './page/CounterReduce'
import Redux from './redux/Redux'
import { Provider } from 'react-redux'
// import store from './redux/store.js'
// import  store  from './todo/store.js'
import TodoApp from './todo/TodoApp.jsx'
// import { store } from './shoppingcart/store.js'

import ShoppingCart from './shoppingcart/ShoppingCart.jsx'
import { store } from './auth/store.js'
import AuthLogin from './auth/AuthLogin.jsx'
function App() {
  

  return (
    <>

    {/* <Counter/> */}
    {/* <CounterState/> */}
    {/* <CounterReducer/> */}
      <Provider store={store}>
      {/* <Redux/> */}
      {/* <TodoApp/> */}
      {/* <ShoppingCart/> */}
      <AuthLogin/>
      </Provider>

      
    </>
  )
}

export default App
