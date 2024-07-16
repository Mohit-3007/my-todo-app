import React, {  useState } from 'react'
import TodoPanel from './TodoPanel'
import TaskModal from './TaskModal'

const TodoContainer = () => {
  const [ taskModal, setTaskModal ] = useState(false);

  return (
    <>
      <div className='mb-20'>
        <div className='w-full mx-auto flex justify-center '>
          <TodoPanel setTaskModal={setTaskModal} /> 
        </div>
      </div>
      {taskModal && <TaskModal setTaskModal={setTaskModal} />}
    </>
  )
}


export default TodoContainer