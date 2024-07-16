import React, { useRef, useState, useEffect } from 'react'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import TaskModal from './TaskModal'

const TodoContainer = () => {
  const [ taskModal, setTaskModal ] = useState(false);
  const [parentHeight, setParentHeight] = useState('0px');
  const rightPanelRef = useRef();


  useEffect(() => {
    if (rightPanelRef.current) {
      setParentHeight(`${rightPanelRef.current.scrollHeight}px`);
    }
  }, [taskModal]); 

  return (
    <>
      <div className=''>
        <div className='w-[57rem] mx-auto flex gap-3 transition-all duration-700 ease-in-out
     '
          style={{ maxHeight: parentHeight, minHeight: parentHeight }} 
          // style={{ height: parentHeight }}
        >
          <div ref={rightPanelRef} className='flex gap-3'>
            <LeftPanel />
            <RightPanel setTaskModal={setTaskModal} /> 
          </div>
        </div>
      </div>
      {taskModal && <TaskModal setTaskModal={setTaskModal} />}
    </>
  )
}


export default TodoContainer