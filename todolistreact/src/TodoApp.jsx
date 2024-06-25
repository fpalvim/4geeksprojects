import React, { useState } from 'react'
import TodoList from './TodoList'
import InputField from './InputField'

const TodoApp = () => {
  
    const [todo, setTodo] = useState([
        {
            label: "Wake up",
            id: 1 ,
            isCompleted: false
        },
        {
            label: "Sleep again",
            id: 2 ,
            isCompleted: false
        },        
    ])

    const addTask = (label) => {
        const newTodos = [
         ...todo,
            {
            label,
            id: Math.floor(Math.random() * 100000),
            isCompleted: false
            }
        ]
        console.log(todo);
        setTodo(newTodos)
    }

    const removeTask = (id) => {
        const newTodos = [...todo]
        const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null)
        setTodo(filteredTodos)
    }

    const changeStatus = (id) => {
        const newTodos = [...todo]
        newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
        setTodo(newTodos)
    }
  
    return (
    <div className="container">
        <h1>To Do list</h1>
        <div className='todo'>
            <div className="inputfield">
                <InputField addTask={addTask} label={todo.label} todo={todo}/>
            </div>
            <div className="todolist">
                <ul>
                    {todo.map((todos)=>(
                    <TodoList key={todos.id} todos={todos} id={todos.id} removeTask={removeTask} changeStatus={changeStatus}/> 
                    ))}
                </ul>
            </div>
            <span className='number-tasks'>{todo.length} tasks</span>
        </div>
    </div>
  )
}

export default TodoApp