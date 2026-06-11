import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card user='aman'age ={23} img="https://plus.unsplash.com/premium_photo-1779751087423-5f6ddd767103?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" />
      <Card user='sarthak'age ={24} img="https://images.unsplash.com/photo-1778452419724-1f605dc17c46?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" />
      <Card user='sarthak'age ={24} img="https://plus.unsplash.com/premium_photo-1779295130407-7ee27929421b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" />
    </div>
  )
}

export default App
