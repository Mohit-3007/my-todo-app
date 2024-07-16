import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import SingleTodo from './SingleTodo';

const RightPanel = ({setTaskModal}) => {
  const todos = useSelector((state) => state.todoReducer);
  console.log("todos ", todos);
  const [showFilterButtonIdx, setShowFilterButtonIdx] = useState(1);
  
  const filterButtons = [
    {name: "Active"},
    {name: "All"},
    {name: "Completed"},
  ]
    
  return ( 
    <div className='w-[40.625rem] h-fit flex flex-col gap-3'>
      {/* header */}
      <div className='w-full h-[3.375rem] border-b-4 bg-[#354259] border-[#44A0A0] rounded-md overflow-hidden 
        box-border flex items-center justify-between px-5'>
        <div className='font-bold text-xl text-[#44A0A0]'>{todos.length>0 ? `${todos.length} Tasks` : ""}</div>
        <div className='w-[12.5rem] h-[1.875rem] bg-[#44A0A0] text-xl font-bold text-white flex justify-center
          items-center rounded-md cursor-pointer' onClick={() => setTaskModal(true)}>Add new task</div>
        <div className='font-bold text-xl text-[#44A0A0] hover:underline cursor-pointer hover:scale-105
          transition ease-in-out duration-300'>Clear Completed</div>
      </div>
      {/* main */}
      <main className='w-full min-h-[290px] max-h-[449px] bg-[#354259] border-b-4 border-[#44A0A0] rounded-md overflow-hidden box-content relative'>
        {/* todosList container */}
        <div className='w-full h-[calc(100%-3.125rem)] max-h-[calc(449px-3.125rem)] overflow-y-auto scrollbar-none '>
          {todos && todos.length > 0 && todos.map((todo, idx ) => {
            return (
              <SingleTodo key={todo.id} todo={todo} />
            )
          })}
        </div>
        {/* Filter todos Container */}
        <div className='w-full h-[3.125rem] flex justify-center items-center gap-5'>
          {filterButtons.map((button, idx) => {
            return (
              <div key={idx}
                onClick={() => setShowFilterButtonIdx(idx)} 
                className={'text-xl font-semibold cursor-pointer '+(idx === showFilterButtonIdx? "text-white" : "text-[#44A0A0] hover:underline")}>{button.name}</div>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default RightPanel