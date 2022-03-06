import { useState } from 'react';
import './Task.css';
import Card from '../UI/Card';
import TaskFilter from './TaskFilter';
import TaskList from './TaskList';


const Task = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredTask = props.items.filter(task => {
    return task.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='tasks'>
        <TaskFilter
          selected={filteredYear}
          onChangeFilter={filterChangedHandler}
        />
        {/* <TaskChart tasks={filteredTask} /> */}
        <TaskList items={filteredTask} />
      </Card>
    </div>
  );
};

export default Task;