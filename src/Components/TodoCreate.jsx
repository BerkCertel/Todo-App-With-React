import React, { useState } from 'react'
import '../App.css'

function TodoCreate({ onCreateTodo }) {

    const [newTodo, setNewTodo] = useState("");

    const createTodo = () => {
        if (!newTodo) return;

        const request = {
            id: Math.floor(Math.random() * 9999999999),
            content: newTodo
        }

        onCreateTodo(request)
        setNewTodo("");
    }


    return (
        <div className='todo-create'>
            <input
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                className='todo-input' type="text" placeholder='To-Do Giriniz' />
            <button onClick={createTodo} className='btn'>To-Do Oluştur</button>
        </div>
    )
}

export default TodoCreate