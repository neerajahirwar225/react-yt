import React from 'react'

const App = () => {
  const notes=[
    {
      title:'react',
      details:'on going'
    },
    {
      title:'DSA',
      details:'completed'
    }
  ];
  localStorage.setItem('notes',JSON.stringify(notes));
  console.log(notes);
  const user = JSON.parse(localStorage.getItem('notes'));
  console.log(user);
  return (
    <div>App</div>
  )
}

export default App