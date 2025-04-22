
import './App.css'
import Counter from './page/Counter'
import CounterState from './page/CounterState'
import CounterReducer from './page/CounterReduce'
import Redux from './redux/Redux'
import { Provider } from 'react-redux'
import store from './redux/store.js'

function App() {
  

  return (
    <>
    
    <Counter/>
    <CounterState/>
    <CounterReducer/>
      <Provider store={store}>
      <Redux/>
      </Provider>
    </>
  )
}

export default App
