import React from 'react'
import Multiplication from './Multiplication';
import Substraction from './Subtraction';
import Division from './Division';
import Addition from './Addition';

const Calculator = () => {
  return (
    <>
    <h1>Calculator App</h1>
    <Addition />
    <Substraction />
    <Multiplication />
    <Division />
    </>
  )
}

export default Calculator