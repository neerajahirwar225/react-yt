import React from 'react'
import { useState } from 'react'

const App = () => {

  const [name, setName] = useState("");

  const submitHandler=(e)=>{
    e.preventDefault();
    console.log('form submitted by',name);
    setName('');
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <input type="text" value={name} onChange={(e)=>{
          setName(e.target.value);
        }}/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App