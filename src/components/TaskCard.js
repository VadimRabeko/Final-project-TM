import { useDispatch } from 'react-redux';
import { tasksRemove } from '../store/actions';
import { getSrc, formatDate } from '../utilities';

function TaskCard({ id, text, assignee, priority, dueDate, status, data }) {
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
            <img className="task_card-img" alt={assignee} src={getSrc(data, assignee)}></img>
            <div className="task_card-priority">{priority}</div>
            <div className="task_card-due_date">{formatDate(dueDate)}</div>
        </div>
    );
}

export default TaskCard;
