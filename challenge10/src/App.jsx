import { useSelector,useDispatch } from "react-redux";
import { increment,decrement, incrementBy } from "./store/slices/counterSlice";
import { useState } from "react";

export const App =() => {
  const dispatch = useDispatch();
  const {count} = useSelector((state) => state.counter)
  const [incrementValue,setIncrementValue] = useState(0);

  const handleClick = () =>{
    dispatch(increment());
  };

  const handleDecrement = () =>{
    dispatch(decrement());
  }

  const handleIncrementBy = () =>{
    dispatch(incrementBy(Number(incrementValue)));
  }

  return (
  <>
  <p>Counter is: {count}</p> 
  <button onClick={handleClick}>
    Increment
  </button>
  <button onClick={handleDecrement}>
    Decrement
  </button>
  <br />
  <input 
  type="number"
  value={incrementValue}
  onChange ={(e) => setIncrementValue(e.target.value)}
  placeholder="Ingresa el valor a incrementar" />
  <button onClick={handleIncrementBy}>Increment By</button>
  </>
  );
}
