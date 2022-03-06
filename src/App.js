import './App.css';
import React, { useState } from 'react';
import Task from './components/Tasks/Task';
import NewTask from './components/NewTask/NewTask';

const DUMMY_TASKS = [
  {
    id: 'a1',
    title: 'Homework',
    date: new Date(2020, 7, 14),
  },
  { id: 'a2', 
    title: 'Doctors Appointment', 
    date: new Date(2021, 2, 12) },
  {
    id: 'a3',
    title: 'Interview',
    date: new Date(2021, 2, 28),
  },
  {
    id: 'a4',
    title: 'Sleep',
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [task, setTasks] = useState(DUMMY_TASKS);

  const addTaskHandler = task => {
    setTasks(prevTasks => {
      return [task, ...prevTasks];
    });
  }

  return (
    <div>
      <NewTask onAddTask={addTaskHandler} />
      <Task items={task} />
    </div>
  );
}

export default App;
