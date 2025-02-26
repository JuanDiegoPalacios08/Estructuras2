import { useState } from 'react'
import './App.css'
import PropTypes from 'prop-types';

const FirstApp = ({num}) => {
  const [counter, setCounter] = useState(num)
  
  const handleAdd =() => {
    setCounter(counter + 1)
  }

  const handleSubstract =() =>{
    if (counter==0) {
        alert("No puede ser menor que cero.")
        return
    }
    setCounter(counter - 1)
  }
  const handReset =() =>{
    setCounter(num)
  }

  return (
    <>
      <h1>counter</h1>
      <span>{counter}</span>
      <div>
      <button onClick={()=> handleAdd()}>+1</button>
      </div>
      <div>
      <button onClick={()=> handleSubstract()}>-1</button>
      </div>
      <div>
      <button onClick={()=> handReset()}>Reset</button>
      </div>
      

    </>
  )
}


export default FirstApp
