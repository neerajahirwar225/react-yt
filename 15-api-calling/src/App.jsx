import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const App = () => {
  // api calling using async function -> fetch
  // async function getData(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //   const data =await response.json();
  //   console.log(data);

  const [data, setData] = useState([])
  const getData=async()=>{
    const response =await axios.get('https://picsum.photos/v2/list')  //using axios
    
    setData(response.data);
  }

  return (
    <div>
      <button onClick={getData}>Get data</button>
      <div>
        {data.map(function(elem,idx){
          return <h3>{elem.author} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App