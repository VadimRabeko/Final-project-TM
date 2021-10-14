function TaskCard({ text, priority, assignee }) {
    return (
        <div className="task_card">
            <input type="checkbox"></input>
            <div className="task_card-text">{text}</div>
            <div className="task_card-priority">{priority}</div>
            <div className="task_card-assignee">{assignee}</div>
            <div className="task_card-due_date">Due Date</div>
        </div>
    );
}

export default TaskCard;
