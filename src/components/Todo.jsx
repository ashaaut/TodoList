import { useState } from "react"
export  default function Todo(props) {
    const [task,setTask]=useState("")
    console.log("bye",task);
    
    return (
        <div>
                <h2>What needs to be done?</h2>
                <div>
                    <input type="text"  onChange={e => setTask(e.target.value)} />
                    <button  onClick={e=>props.addTask(task)}>Add</button>
                </div>
        </div>
    )
}