import RightCardContent from './RightCardContent';

const RightCard = (props) => {
  return (
    <div className='h-full w-60 shrink-0 overflow-hidden relative bg-red-500 rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <RightCardContent color={props.color} id={props.id} tag={props.tag} intro={props.intro}/>
    </div>
  )
}

export default RightCard