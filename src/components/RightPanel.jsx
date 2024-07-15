import React, { useState } from 'react'

const RightPanel = () => {
    const [ taskModal, setTaskModal ] = useState();
    
  return (
    <div className='w-[40.625rem] h-full flex flex-col gap-3'>
        <div className='w-full h-[3.375rem] border-b-4 bg-[#354259] border-[#44A0A0] rounded-md overflow-hidden 
            box-border flex items-center justify-between px-5'>
            <div className='font-bold text-xl text-[#44A0A0]'>5 Tasks</div>
            <div className='w-[12.5rem] h-[1.875rem] bg-[#44A0A0] text-xl font-bold text-white flex justify-center
             items-center rounded-md cursor-pointer'>Add new task</div>
            <div className='font-bold text-xl text-[#44A0A0] hover:underline cursor-pointer hover:scale-105
               transition ease-in-out duration-300'>Clear Completed</div>
        </div>
        <div className='w-full h-[28.0625rem] bg-[#354259] border-b-4 border-[#44A0A0] rounded-md overflow-hidden box-content'></div>
    </div>
  )
}

export default RightPanel