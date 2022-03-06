import TaskDate from "./TaskDate";
import Card from "../UI/Card";
import "./TaskItem.css";

const TaskItem = (props) => {
    return (
        <li>
            <Card className="task-item">
                <TaskDate date = {props.date}/>
                <div className="task-item_description ">
                    <h2>{props.title}</h2>
                </div>
            </Card>
        </li>
    );
}

export default TaskItem;