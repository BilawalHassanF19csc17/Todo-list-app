import './App.css';
import ToDoItems from './components/ToDoItems';
import { useState, useEffect} from 'react';

function App() {
const [tasks, setTasks] = useState(()=>{
  const savedTasks = localStorage.getItem('tasks');
  if(savedTasks){
    return JSON.parse(savedTasks);
  } else{
    return [];
  }
});
const [newTask, setNewTask] = useState('');

useEffect(()=>{
  localStorage.setItem('tasks',JSON.stringify(tasks))
},[tasks]);

const addTask = () =>{
  if(newTask.trim() !== ''){

    const newTaskObj = {
      id: tasks.length + 1,
      name: newTask,
      deadline: null,
    }
    setTasks([...tasks,newTaskObj]);
    setNewTask('');
  }

}

const addDeadline = (id,newDate) =>{
  const updateTask = tasks.map(task => {
    if(task.id === id){
      return{...task, deadline: newDate};
    }
    return task;
  });
  setTasks(updateTask);
}

const editTask = (id, newTaskName) =>{
  const updateTask = tasks.map(task => {
    if(task.id === id){
      return {...task, newTaskName};
    }
    return task; 
  });
  setTasks(updateTask);
}

const removeTask = (TaskID) =>{
  const newTasks = tasks.filter(task => task.id !== TaskID);
  setTasks(newTasks);
}
  return (
    <div className="body">
      <div className="main-container">
       <h1>To-do List</h1>
        <div className="input-form">
         <input type="text" 
         placeholder='Enter your task' 
         value={newTask} 
         onChange={(e) => setNewTask(e.target.value)}/>
         <br></br>
         <button className="submit-btn" onClick={addTask}>
          Add task
         </button>
       </div>
       <div className="tasks">
        {tasks.map((task,index) => (
          <div key={index}>
            <ToDoItems id={task.id} text={task.name} dlt={() => removeTask(task.id)} onEdit={editTask} setDeadline={addDeadline} deadline={task.deadline}/>
          </div>
        ))}
       </div>
     </div>
    </div>
  );
}

export default App;
