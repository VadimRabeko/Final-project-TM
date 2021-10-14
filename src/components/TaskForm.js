import { useDispatch } from 'react-redux';
import { tasksAdd } from '../store/actions';

function TaskForm() {
    const dispatch = useDispatch();

    function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        if (!(formData.get('text') && formData.get('assignee') && formData.get('priority'))) return;
        dispatch(
            tasksAdd({
                text: formData.get('text'),
                priotity: formData.get('priority'),
                assignee: formData.get('assignee'),
            })
        );
        event.target.reset();
    }

    return (
        <form className="task_adder" onSubmit={onSubmit}>
            <input type="text" name="text"></input>
            <select name="assignee">
                <option>Red Ranger</option>
                <option>Blue Ranger</option>
                <option>Green Ranger</option>
                <option>Black Ranger</option>
                <option>White Ranger</option>
            </select>
            <select name="priority">
                <option>Low Priority</option>
                <option>Middle Priority</option>
                <option>High Priority</option>
            </select>

            <button type="submit">Add</button>
        </form>
    );
}

export default TaskForm;
