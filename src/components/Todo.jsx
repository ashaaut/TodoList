import { useState } from "react"
import './../assets/css/todo.css'
export  default function Todo(props) {
    const [task,setTask]=useState("")
    console.log("bye",task);
    
    return (
        <div className="todo-container">
                <h2>What needs to be done?</h2>
                <div className="form-div">
                    <input type="text" className="input-div" onChange={e => setTask(e.target.value)} />
                    <button className="addTask-btn" onClick={e=>props.addTask(task)}>Add</button>
                </div>
        </div>
    )
}