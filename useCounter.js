import { useState } from "react"


export const useCounter = ( initialState = 0 ) => {
  const[counter, setState] = useState(initialState)

  const increment = () => {
    setState(counter + 1)
  }
  const decrement = () => {
    if(counter > 1) {
      setState(counter - 1)
    }
  }

  const reset = () => {
    setState(initialState)
  }

  return {
    counter, 
    increment,
    decrement,
    reset
  }
}
