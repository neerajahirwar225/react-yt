import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full rounded-4xl overflow-x-auto gap-8 flex flex-nowrap w-2/3 p-5 '>
        {props.users.map(function(elem,idx){
          return <RightCard color={elem.color} key={idx} id={idx} img={elem.img} tag={elem.tag} intro={elem.intro}/>
        })}
    </div>
    
  )
}

export default RightContent