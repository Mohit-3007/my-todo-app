import React from 'react'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'

const DisplayTodo = () => {
  return (
    <div className=''>
        <div className='w-[57rem] h-[418px] mx-auto flex gap-3'>
            <LeftPanel />
            <RightPanel />
        </div>
    </div>
  )
}

export default DisplayTodo