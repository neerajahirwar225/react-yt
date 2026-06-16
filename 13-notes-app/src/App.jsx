import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("")
  const [details, setDetails] = useState('');
  const [task, setTask] = useState([])

  const formHandler=(e)=>{
    e.preventDefault();
    if(!title.trim() || !details.trim()) {
      alert("Please fill all fields");
      return;
    }

    const copyTask=[...task];
    copyTask.push({title,details})

    setTask(copyTask)

    setTitle('');
    setDetails('');
  }
  const deleteNote=(idx)=>{

    const copyTask=[...task];
    copyTask.splice(idx,1);
    setTask(copyTask)
  }

  return (
    <div className='min-h-screen lg:flex bg-amber-200 text-black'>
      
      <form onSubmit={(e)=>{
        formHandler(e);
      }} className='flex p-10  lg:w-1/2 items-start  flex-col gap-10'>
        <h1 className='text-3xl mb-2 font-bold'>Add Notes</h1>
        {/* Pahla input  Heading */}
          <input 
          type="text" 
          placeholder='Enter title' 
          className='px-5 py-3 w-full lg:w-1/2 outline-none border-2 rounded font-medium'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
          />
          {/* Detailled wala input */}
          <textarea 
          type="text" 
          placeholder='Write Here'
          className=' flex items-start flex-row px-5 py-3 h-32 w-full lg:w-1/2 outline-none border-2 rounded font-medium'
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
          />
          <button className='bg-amber-950 w-full lg:w-1/2 active:scale-95 px-5 py-3 text-white rounded'>Add Notes</button>
      </form>
      <div className=' bg-amber-600  lg:border-l-2  lg:w-1/2 p-12'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 h-[90%] overflow-auto">
          {task.map(function(elem,idx){
            return <div key={idx} className="
            h-52 w-full
            flex flex-col justify-between
            text-black p-4
            rounded-2xl bg-white
            shadow-md hover:shadow-xl
            hover:-translate-y-1
            transition-all duration-300
          ">
              <div>
                <h3 className=' text-xl font-bold'>{elem.title}</h3>
                <p className='mt-3  text-gray-700 font-medium'>{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className="
              w-full
              bg-red-500
              hover:bg-red-600
              transition-colors
              p-2 rounded
              font-bold text-xs text-white
              ">Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App