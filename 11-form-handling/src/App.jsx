import React from 'react'
import { useState } from 'react'

const App = () => {

  const [name, setName] = useState("second");

  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(name);
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" value={name} onChange={(e)=>{
          setName(e.target.value);
        }}/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App