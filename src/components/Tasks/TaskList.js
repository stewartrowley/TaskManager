import './TaskList.css';
import TaskItem from './TaskItem';

const TaskList = props => {
  if (props.items.length === 0) {
    return <h2 className='tasks-list_fallback'>No expense found!</h2>;
  }

  return <ul className='tasks-list'>
      {props.items.map((task) => (
        <TaskItem 
          key={task.id} 
          title={task.title} 
          date={task.date} 
        />
      ))}
    </ul>
};

export default TaskList;
