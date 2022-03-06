import './TaskFilter.css';

const TaskFilter = (props) => {
    const dropDownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className='task-filter'>
            <div className='task-filter_control'>
                <label>Filter by years</label>
                <select onChange={dropDownChangeHandler} value={props.selected}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default TaskFilter;