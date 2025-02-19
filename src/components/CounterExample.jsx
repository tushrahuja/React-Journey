import React from 'react'
import { useState } from 'react'

const CounterExample = () => {
  const [count, changeCount] = useState(0);

  return (
    <div>
      <h1>You clicked {count} times</h1>
      <button onClick={() => { changeCount(count+1) }}>Increment</button>
      <button onClick={() => { changeCount(count-1) }}>Decrement</button>
    </div>
  )
}

export default CounterExample