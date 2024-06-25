import React from 'react'

const TodoList = ({todos, removeTask, id, changeStatus}) => {
  return (
    <div className='todo-itens' style={{textDecoration: todos.isCompleted ? "line-through" : "" }}>
        <li>{todos.label}</li>
        <button onClick={() => {removeTask(id)}}>Delete task</button>
        <button onClick={() => {changeStatus(id)}}> X / ✔ </button>
    </div>
  )
}

export default TodoList