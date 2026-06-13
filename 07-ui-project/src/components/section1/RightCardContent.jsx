import { MoveRight } from 'lucide-react';

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-2xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-lg text-shadow-2xs text-white mb-12 leading-normal'>{props.intro}</p>
                <div className="flex items-center justify-between">
                    <button style={{backgroundColor:props.color}} className=' text-white font-medium rounded-full px-6 py-2'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className=' text-white font-medium rounded-full px-3 py-2'><MoveRight /></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent