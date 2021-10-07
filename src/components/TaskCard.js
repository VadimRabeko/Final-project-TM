function TaskCard() {
    return (
        <div className="task_card">
            <input type="checkbox">Checkbox</input>
            <div className="task_card-text">Task Text</div>
            <div className="task_card-priority">Priority</div>
            <div className="task_card-assignee">Assignee</div>
            <div className="task_card-due_date">Due Date</div>
        </div>
    );
}

export default TaskCard;
