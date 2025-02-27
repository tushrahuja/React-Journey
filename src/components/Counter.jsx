import { use, useReducer, useState } from 'react'
import { counterReducer, initialState } from './counterReducer'


const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState)
  const [inputValue, setInputValue] = useState(0)

  const handleIncrement = () => { dispatch({ type: 'increment' }) }
  const handleDecrement = () => { dispatch({ type: 'decrement' }) }

  const handleIncrementByAmount = () => {
    dispatch({type: 'incrementByAmount', payload: +inputValue})
    setInputValue(0)
  }
  const handleDecrementByAmount = () => {
    dispatch({type: 'decrementByAmount', payload: +inputValue})
    setInputValue(0)
  }

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleDecrement}>DECREMENT</button>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button onClick={handleIncrementByAmount}>ADD</button>
        <button onClick={handleDecrementByAmount}>SUBTRACT</button>
      </div>
    </div>
  )
}

export default Counter