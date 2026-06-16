import React from 'react'

function App() {
  const pageScrolling=(elem)=>{
    if(elem>0){
      console.log('Down Scrolling');
    }
    else if(elem==0){
      console.log('stoped');
    }
    else{
      console.log('Up Scrolling');
    }
  }
  return (
    <div onWheel={(elem)=>{
      pageScrolling(elem.deltaY);
    }}>
      <div className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div>
    </div>
  )
}

export default App
