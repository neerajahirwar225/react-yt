import React from 'react'

const Card = (props) => {
  return (
    <div className="
        overflow-hidden
        rounded-xl
        hover:scale-105
        transition-all
        duration-300
        ">
        <a href={props.elem.url} target='_blank'>
            <div className='h-40 w-45  overflow-hidden rounded-xl'>
            <img loading="lazy" 
                className="
                h-full
                w-full
                object-cover
                hover:scale-110
                transition-transform
                duration-500
                " src={props.elem.download_url} alt="" />
            </div>
            <h2 className='font-bold text-lg'>{props.elem.author}</h2>
        </a>
    </div>
  )
}

export default Card