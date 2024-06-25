import React, { useState } from 'react'

const InputField = ({addTask}) => {
    const [value, setValue] = useState("")
    const handleValue = (e) => {
        e.preventDefault()
        if (!value || !value.trim()) return;
        addTask(value)
        setValue("")
    }

  return (
    <div>
        <form onSubmit={handleValue}>
            <input type="text" value={value} placeholder='Type here your new todo' onChange={((e) => setValue(e.target.value))}/>
            <button type='submit'>Click to add +</button>
        </form>
    </div>
  )
}

export default InputField