export default function Tasks(props) {
    console.log(props.todoList)
    return (
        <div>
            {props.todoList.map((t, index) =>
                <div>
                    <input type="checkbox"
                        key={index}
                        defaultChecked={t.completed}
                        onChange={() => props.changeStateofTask(t.id)}
                    />{t.title}
                
                </div>)}
        </div>
    )
}