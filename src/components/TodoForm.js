import React, { useState } from "react"
import { useTodos } from "../redux/ducks/todos"
export default function(props) {
  const { add } = useTodos()
  const [todo, setTodo] = useState("")

function handleSubmit(e) {
    e.preventDefault()

    add(todo)
    setTodo("")
}
    return (
    <form onSubmit={handleSubmit}>
        <h1>My To-Do List</h1>
        
        <input 
        className="todo"
        placeholder="What needs to be done?"
        type="text"  
        value={todo} 
        onChange={e => setTodo(e.target.value)}
        />
    
    </form>
)
}