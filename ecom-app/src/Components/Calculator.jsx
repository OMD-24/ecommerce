import React from 'react'

const Calculator = () => {
  return (
    <div>
        <input type="number" placeholder='num1'/>
        <input type="number" placeholder='num2'/>
        <button onClick={<Show/>}>Submit</button>
    </div>
  )
}

export default Calculator
