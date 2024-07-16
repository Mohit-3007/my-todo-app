import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SingleTodo from './SingleTodo';
import { clearAllCompletedTodos } from '../redux/slice/todoSlice';

const TodoPanel = ({setTaskModal}) => {
  const todosData = useSelector((state) => state.todoReducer);
  const [todos, setTodos] = useState([]);
  const dispatch = useDispatch();
  const [showFilterButtonIdx, setShowFilterButtonIdx] = useState(1); // use for filtering todos 
  const filterButtons = [
    {name: "Pending"},
    {name: "All"},
    {name: "Completed"},
  ]

  useEffect(() => {
    const filterData = filterButtons[showFilterButtonIdx];
    if(filterData?.name === "All") setTodos(todosData);

    else if(filterData?.name === "Completed") {
      const completedTodos = todosData.filter((each) => {
        return each?.taskStatus === "Completed"
      })
      console.log(completedTodos);
      setTodos(completedTodos);
    }

    else if(filterData?.name === "Pending"){
      const pendingTodos = todosData.filter((each) => {
        return each?.taskStatus === "Pending"
      })
      console.log(pendingTodos);
      setTodos(pendingTodos);
    }
  },[showFilterButtonIdx, todosData])

  function handleClearAllCompletedTodos(){
    dispatch(clearAllCompletedTodos());
  }
    
  return ( 
    <div className='w-full tablet:w-[40.625rem] h-fit flex flex-col gap-3 items-center'>

      {/* header */}
      <div className={'hidden mobile:flex w-full h-[3.375rem] border-b-4 bg-[#354259] border-[#44A0A0] rounded-md overflow-hidden text-base break500:text-xl ' +
       'box-border flex items-center px-5 '+(todos && todos.length>0?"justify-between":"justify-center")}>
        {/* total no. of todos */}
        {todos && todos.length>0 && (
          <div className='font-bold text-[#44A0A0]'>{`${todos.length} Tasks`}</div>
        )}
        {/* add todo button */}
        <div className='w-[125px] break500:w-[12.5rem] h-[1.875rem] bg-[#44A0A0] font-bold text-white flex justify-center
          items-center rounded-md cursor-pointer hover:scale-110 duration-300 ease-in-out' onClick={() => setTaskModal(true)}>Add new task</div>
        {/* clear completed todo button */}
        {todos && todos.length > 0 && (
          <button onClick={handleClearAllCompletedTodos}
            className='font-bold text-[#44A0A0] hover:underline cursor-pointer hover:scale-105 transition ease-in-out duration-300'
            >Clear Completed</button>
        )}
      </div>
      {/* header for mobile screens */}
      <div className='max-mobile:flex hidden w-[10rem] h-[1.875rem] border-b-4 bg-[#354259] border-[#44A0A0] rounded-md
       overflow-hidden text-base box-border items-center justify-between px-5 text-white font-semibold '>Add new task</div>

      {/* main */} 
      {todosData && todosData.length > 0 && (
        <main className='w-full min-h-[290px] max-h-[449px] bg-[#354259] border-b-4 border-[#44A0A0] rounded-md 
          overflow-hidden box-content relative'>
          {todosData && todosData.length > 0 && (
            <>
              {/* todosList container */}
              <div className='w-full h-[calc(100%-3.125rem-3.125rem)] max-h-[calc(449px-3.125rem-3.125rem)] mb-16 overflow-y-auto scrollbar-none '>
                {/*  */}
                {todos && todos.length > 0 && todos.map((todo, idx ) => {
                  return (
                    <SingleTodo key={todo.id} todo={todo} />
                  )
                })}
                {/* no completed todos or no pending todos */}
                {todos && todos.length == 0 && (
                  <div className='w-full h-full flex absolute  justify-center items-center font-semibold text-xl mobile:text-3xl duration-300 ease-in-out break500:text-4xl text-[#44A0A0]  '>
                    {showFilterButtonIdx == 2? "No Completed Todo's" : "No Pending Todo's"}</div>
                )}
              </div>
              {/* Filter todos Container */}
              <div className='w-full absolute z-10 bg-[#354259] bottom-0 h-[3.125rem] flex justify-center items-center gap-3 mobile:gap-5'>
                {filterButtons.map((button, idx) => {
                  return (
                    <div key={idx}
                      onClick={() => setShowFilterButtonIdx(idx)} 
                      className={'text-lg mobile:text-xl font-semibold cursor-pointer '+(idx === showFilterButtonIdx? "text-white" : "text-[#44A0A0] hover:underline")}>{button.name}</div>
                  )
                })}
              </div>
            
            </>
            
          )}
        </main>
      )}

      {/* if no existing todo in local storage */}
      {todosData && todosData.length == 0 && (
        <div className='w-full min-h-[290px] max-h-[449px] bg-[#354259] border-b-4 border-[#44A0A0] rounded-md 
          overflow-hidden box-content relative flex justify-center items-center font-semibold text-xl mobile:text-3xl duration-300 ease-in-out break500:text-4xl text-[#44A0A0] '>No Pending Todo's</div>
      )}
      
    </div>
  )
}

export default TodoPanel