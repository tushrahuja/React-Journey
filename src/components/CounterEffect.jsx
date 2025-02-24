import React, { useEffect, useState } from 'react'

const CounterEffect = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}` 
  }, [count])

  return (
    <div>
      <h1>You clicked {count} times</h1>
      <h2>useEffect 2nd exercise</h2>
      <button
        onClick={() => {
          setCount(count + 1)
        }}>
        Increment
      </button>

    </div>
  )
}

export default CounterEffect