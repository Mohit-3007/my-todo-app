import React, { useEffect, useRef, useState } from 'react'
import { addTask } from '../redux/slice/todoSlice';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { IoMdClose } from "react-icons/io";

const TaskModal = ({setTaskModal}) => {
  const taskModalRef = useRef();
  const [ taskInput, setTaskInput ] = useState("");
  const dispatch = useDispatch()
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (taskModalRef.current && !taskModalRef.current.contains(event.target)) {
        setTaskModal(false);
      }
    };
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  },[])

  const categoryList = [
    {name:"Urgent", color:"FF5252"},
    {name:"Important", color:"FFC107"},
    {name:"Later", color:"9C27B0"},
    {name:"To Study", color:"26A7B8"},
  ]

  function handleSubmitTask(){
    if(taskInput.trim().length === 0) {
      alert("Task Input field cannot be empty!")
      setTaskInput("")
      return 
    }
    if(selectedCategory === null) return alert("Please Select category of task.");

    const taskObj = {
      id: uuidv4(), 
      task: taskInput,
      category: categoryList[selectedCategory]?.name,
      color: categoryList[selectedCategory]?.color,
      taskStatus: "Pending",
    }
    dispatch(addTask(taskObj));
    setTaskInput("");
    setTaskModal(false)
  }

  function handleClose(){
    setTaskModal(false);
  }

  return (
    <div className='w-screen h-screen fixed top-0 left-0 z-20 bg-black bg-opacity-50 flex justify-center items-center'>
      <div ref={taskModalRef} className='w-full break500:w-[31.25rem] h-[26.75rem] bg-[#354259] rounded-md border-2 border-white 
        py-5 text-center relative'>
        {/* heading */}
        <h3 className='text-xl tracking-wider text-white font-bold'>CREATE TASK</h3>
        {/* close button */}
        <button 
          onClick={handleClose}
          className="w-6 h-6 absolute hover:scale-110 duration-300 ease-in-out cursor-pointer top-3 right-3 text-white">
            <IoMdClose className="w-full h-full" />
        </button>
        {/* Task Input Field */}
        <input type='text'
          placeholder='Type your task here' 
          className='w-[26.25rem] h-[2.375rem] px-4 rounded-md outline-none text-base mobile:text-lg font-semibold mt-5 mb-[2.0806rem]' 
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          autoFocus
        />
        {/* Categories */}
        <div className='w-full h-[11.1762rem] px-1'>
          {/* Heading */}
          <div className='flex justify-between items-center'>
            <div className='w-[11.25rem] border-b border-[#E4E4E4]'></div>
            <div className='text-white font-semibold text-xl'>Categories</div>
            <div className='w-[11.25rem] border-b border-[#E4E4E4]'></div>
          </div>
          {/* Category Button */}
          <div className='w-full mt-[1.875rem] px-4 mobile:px-8 break500:px-11 grid grid-cols-2 gap-5'>
            {categoryList && categoryList.map((list, idx) => {
              return (
                <div key={idx} className={`max-break500:mx-auto w-[100px] mobile:w-[150px] break500:w-[11.875rem] h-[1.7813rem] rounded-md  duration-300 ease-linear ` +
               ` cursor-pointer text-center text-lg ` 
               + (selectedCategory === idx ? "text-black scale-110 -translate-y-1 outline-dashed outline-white shadow-md shadow-[#c5baba] outline-2 font-semibold"
                :"text-white hover:-translate-y-1 hover:scale-110 ")}
                onClick={() => setSelectedCategory(idx)}
                style={{background: `#${list?.color}`}}
                >{list.name}</div>
              )
            })}
            
          </div>
        </div>
        {/* Submit Button Div */}
        <div className='w-full absolute bottom-5 flex justify-center'>
          <div className='w-[11.375rem] h-[2.375rem] rounded-md border-2 border-[#44A0A0] bg-white text-[#44A0A0]
           text-xl font-semibold flex justify-center items-center hover:font-bold hover:tracking-wider hover:scale-110 
           duration-300 ease-linear cursor-pointer '
           onClick={handleSubmitTask}>Submit Task</div>
        </div>
      </div>
    </div>
  )
}

export default TaskModal