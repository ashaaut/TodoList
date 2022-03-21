import './../assets/css/app.css';
import Todo from './Todo'
import Tasks from './Tasks'
import { useState } from 'react'
function App() {
  const [todoList, setTodoList] = useState([])
  const [id,setId]=useState(0)
  const [filterAction,setFilterAction]=useState("all")
  const applyFilter = (isCompleted) => {
    return todoList.filter(t => t["completed"] == isCompleted)
  }

  const addTask = (task) => {
    setId(id+1)
    const newTasks = [...todoList, { id:id,title: task, completed: false }]
    setTodoList(newTasks)
  }

  const getFilteredTasks = (filter) => {
    return { "all": todoList, activeTasks: applyFilter(false), "completedTasks": applyFilter(true) }[filter]
  }
  const changeStateofTask = index => {
    const newTasks = [...todoList];
    console.log("gii",todoList[index]);
    const updatedtask = newTasks.map(obj =>
      obj.id === index ? { ...obj, completed: !obj.completed } : obj
  );
    setTodoList(updatedtask);
};
  return (
    <div className="App">
      <h1>TodoMatic</h1>
      <div className='todo'>
        <Todo addTask={e => addTask(e)} />
      </div>
      <div className='state-tasks'>
        <button className='action-btn' type='button' onClick={e => setFilterAction("all")}>All tasks</button>
        <button className='action-btn' type='button' onClick={e => setFilterAction("activeTasks")}>Active tasks</button>
        <button className='action-btn' type='button' onClick={e => setFilterAction("completedTasks")}>Completed tasks</button>
      </div>
      <div className='tasks'>
        <Tasks todoList={getFilteredTasks(filterAction)}  changeStateofTask={changeStateofTask}/>
      </div>

    </div>
  );
}

export default App;
