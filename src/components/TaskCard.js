import { useDispatch } from 'react-redux';
import { tasksRemove } from '../store/actions';

function TaskCard({ id, text, assignee, priority, dueDate, status }) {
    const dispatch = useDispatch();

    function onChecked() {
        dispatch(
            tasksRemove({
                id,
                status,
            })
        );
    }

    return (
        <div className="task_card">
            {status === 'inProgress' ? <input type="checkbox" onClick={onChecked}></input> : null}
            <div className="task_card-text">{text}</div>
            <div className="task_card-assignee">{assignee}</div>
            <div className="task_card-priority">{priority}</div>
            <div className="task_card-due_date">{dueDate}</div>
        </div>
    );
}

export default TaskCard;
