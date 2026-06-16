import React from 'react'
import { useState } from 'react'
const App = () => {
  const [num, setNum] = useState([10,20,30])
  // const [num, setNum] = useState({user:'Neeraj',age:22})
  const btnClick=()=>{
    // setNum({user:'suraj',age:'34'})   //--> this also works
    // setNum(prev=>({...prev,age:50}))
    // setNum(prev=>(prev+1))
    const newNum=[...num];
    newNum.push(88);
    setNum(newNum)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClick}>click</button>
    </div>
  )
}

export default App