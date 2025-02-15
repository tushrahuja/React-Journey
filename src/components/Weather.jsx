import React from 'react'

const Weather = () => {
  let temperature = 26;
  if (temperature < 15) {
    return <h1>It's cold ourside!</h1>
  } else if (temperature >= 15 && temperature <= 25){
    return <h1>It's nice outside!</h1>
  } else if (temperature > 25){
    return <h1>It's hot outside!</h1>
  }
}

export default Weather