import React from "react"
import { useTodos } from "../redux/ducks/todos"

export default function(props) {
    const { todos, remove, toggle } = useTodos()

return (
<div>
    <ul>
    {todos.map(todo => (
        <div className="formbar">
            <button className="deletetask"
                key={"todo" + todo.id}
                onClick={e => toggle(todo.id )}
            ><p>&#10004;</p>
            </button>
            <div className="formtodo">
                <li 
                className={todo.completed ? "completed" : ""}
                >
                {todo.title}
                <button 
                    className="redcheck"
                    onClick={e => remove(todo.id)}>X
                </button>
                </li>
            </div>
        </div>
    ))}
    </ul>
    <div className="itemsleft"> Items Left: {todos.length}</div>
</div>
)
}