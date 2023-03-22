
export const TaskCard = ({task,handleDelete,info}) => {
    
  return (
    <>
        <li className={ task.completed? "completed":"incomplete"}>
              <span>{ task.id} - { task.name} - {info}</span>
              <button onClick={()=> handleDelete( task.id)}>Delete</button>
            </li>
    </>
  )
}
