import React, { useState } from 'react'
import { IoMdCheckmark } from "react-icons/io";
import { markAsCompleted, markAsNotCompleted, deleteTodo } from '../redux/slice/todoSlice';
import { useDispatch } from 'react-redux';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import EditTodoModal from './EditTodoModal';


const SingleTodo = ({todo}) => {
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);

    function handleMarkAsCompleted(){
        dispatch(markAsCompleted(todo.id))
    }

    function handleMarkAsNotCompleted(){
        dispatch(markAsNotCompleted(todo.id))
    }

    function handleEditTask(){
        setIsEdit(true);
    }

    function handleDeleteTask(){
        dispatch(deleteTodo(todo.id))
    }

  return (
    <>
        <div className='w-full h-[5rem] bg-[#354259] border-b border-white box-border flex items-center px-4'>
            {/* todo completion status */}
            {todo.taskStatus === "Completed" ? (
                <div onClick={handleMarkAsNotCompleted} 
                    className='w-[1.875rem] h-[1.875rem] rounded-full flex items-center justify-center bg-[#4CAF50] '>
                    <IoMdCheckmark size={20} /> 
                </div>
                ): (
                <div onClick={handleMarkAsCompleted} 
                    className='w-[1.875rem] h-[1.875rem] rounded-full flex items-center justify-center outline outline-2 outline-[#f8f8f8]'>
    
                </div>
                )
            }
            {/* todo description */}
            <div className={'w-[26.5rem] text-xl font-medium text-white ml-3  '
                +(todo.taskStatus === "Completed"?"line-through":"")}>{todo?.task}
            </div>
            {/* todo category & edit and delete button */}
            <div className='w-[9.375rem] h-full flex flex-col justify-evenly'>
                <div className='w-full h-[1.875rem] rounded-md text-white text-xl font-medium flex items-center justify-center'
                    style={{background: `#${todo.color}`}}
                >{todo?.category}</div>
                {/* edit and delete div */}
                <div className='w-full h-5 flex items-center text-white justify-center gap-5'>
                    <span onClick={handleEditTask} 
                        className={'h-full text-xl cursor-pointer hover:scale-125 duration-300 ease-in-out hover:text-black '
                        +(todo.taskStatus === "Completed"? "invisible" : "visible")}><FaEdit /></span>
                    <span onClick={handleDeleteTask} className='h-full text-xl cursor-pointer hover:scale-125 duration-300
                    ease-in-out hover:text-black'><RiDeleteBin6Fill /></span>
                </div>
            </div>
        </div>
        {isEdit && (
            <EditTodoModal todo={todo} setIsEdit={setIsEdit} />
        )}
    </>
  )
}

export default SingleTodo