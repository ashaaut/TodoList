export default function Tasks(props) {
    console.log(props.todoList)
    return (
        <div className="task-container">
            {props.todoList.length>0?props.todoList.map((t, index) =>
                <div>
                    <input type="checkbox"
                        key={index}
                        onChange={() => props.changeStateofTask(t.id)}
                        checked={t.completed}
                    />{t.title}
                
                </div>):"No Tasks"}
        </div>
    )
}