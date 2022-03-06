import React, { useState } from 'react';
import './TaskForm.css'

const TaskForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const taskData = {
      title: enteredTitle,
      date: new Date(enteredDate),
    };

    props.onSaveTaskData(taskData);
    setEnteredTitle('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-task_controls'>
        <div className='new-task_control'>
          <label>Task Name</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-task_control'>
          <label>Date</label>
          <input
            type='date'
            value={enteredDate}
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-task_actions'>
        <button type='submit'>Add Task</button>
        <button type='button' onClick={props.onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default TaskForm;
