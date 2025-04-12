import { useState } from 'react'

const App =({value}) =>{
  const [count,setCount] = useState(value);

  const handleAdd = () =>{
    setCount(count + 1)
  }

  const handleSubstract = () =>{
    setCount(count -1)
  }

  const handleReset = () =>{
    setCount(value)
  }

  return(
    <div>
      <h1>Counter</h1>
      <br />
      <span>{count}</span>
      <br />
      <button onClick={()=> handleAdd()}>Sumar 1</button>
      <button onClick={()=> handleSubstract()}>Restar 1</button>
      <button onClick={()=> handleReset()}>Reiniciar</button>
    </div>
  )
}

export default App
