import './App.css';
import Todo from "./components/Todo";
import Form from "./components/Forms";
import FilterButton from "./components/FilterButtons";
import React, {useState} from 'react';
import { nanoid } from "nanoid";

const App=(props)=> {
  const [tasks, setTask] = useState(props.task);
  
  const toggleTaskCompleted=(id)=> {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  const deleteTask=(id)=> {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }


  const taskList =tasks.map
  (task => 
    (<Todo
    id={task.id} 
    name={task.name}
    completed={task.completed} 
    key={task.id} 
    toggleTaskCompleted={toggleTaskCompleted} 
    deleteTask={deleteTask}

    />));
      
  const addTask =(name)=>{
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTask([...tasks, newTask])
  }  
  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;