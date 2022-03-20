import './../assets/css/app.css';
import Todo from './Todo'
import Tasks from './Tasks'
function App() {
  return (
    <div className="App">
      <h1>TodoMatic</h1>
      <div className='todo'>
        <Todo/>
      </div>
      <div className='state-tasks'>
        <button type='button'>All tasks</button>
        <button type='button'>Active tasks</button>
        <button type='button'>Completed tasks</button>
      </div>
      <div className='tasks'>
        <Tasks/>
      </div>
      {/* <div className='list-tasks'>
        <ul
          role="list"
        >
          <li >
            <div >
              <input type="checkbox" defaultChecked={true} />
              <label >
                Eat
              </label>
            </div>
            <div >
              <button type="button">
                Edit
              </button>
              <button type="button" >
                Delete
              </button>
            </div>
          </li>
          <li >
            <div >
              <input type="checkbox" />
              <label>
                Sleep
              </label>
            </div>
            <div >
              <button type="button" >
                Edit
              </button>
              <button type="button" className="btn btn__danger">
                Delete
              </button>
            </div>
          </li>
          <li >
            <div >
              <input id="todo-2" type="checkbox" />
              <label >
                Repeat
              </label>
            </div>
            <div>
              <button type="button" >
                Edit
              </button>
              <button type="button" >
                Delete
              </button>
            </div>
          </li>
        </ul> */}

      {/* </div> */}
    </div>
  );
}

export default App;
