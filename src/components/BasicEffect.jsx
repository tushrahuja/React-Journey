import React, { useEffect } from 'react'

const BasicEffect = () => {
  
  useEffect(() => {
     console.log("BasicEffect component mounted.")
  }, [])

  return (
    <div>
      <h1>useEffect 1st exercise</h1>
    </div>
  )
}

export default BasicEffect