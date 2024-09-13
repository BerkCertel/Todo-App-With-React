import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../Css/todo.css'
import { FaCheck } from "react-icons/fa";


function Todo({ todo, onRemoveTodo, onUpdateTodo }) {

    const [editable, setEditable] = useState(false)

    const [updatedTodo, setUpdatedTodo] = useState(todo.content)

    const { id, content } = todo;

    const removeTodo = () => {
        onRemoveTodo(id)
    }


    const updateTodo = () => {
        const request = {
            id: id,
            content: updatedTodo
        }
        onUpdateTodo(request);
        setEditable(false);
    }


    return (
        <div className='todo-css'>
            <div>
                {
                    editable ? <input
                        style={{ width: "380px" }}
                        value={updatedTodo}
                        onChange={(e) => setUpdatedTodo(e.target.value)}
                        className='todo-input' type="text" placeholder='To-Do Giriniz' />
                        :
                        content
                }
            </div>
            <div>
                <IoIosRemoveCircle className='todo-icon'
                    onClick={removeTodo} />
                {
                    editable ?
                        <FaCheck className='todo-icon' onClick={updateTodo} />
                        :
                        <FaEdit className='todo-icon'
                            onClick={() => setEditable(true)} />
                }

            </div>
        </div>
    )
}

export default Todo