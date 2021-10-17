function ScheduleCard({ text, assignee, priority, dueDate }) {
    return (
        <div className="schedule_card">
            <div className="task_card-due_date">{dueDate}</div>
            <div className="task_card-text">{text}</div>
        </div>
    );
}

export default ScheduleCard;

//  <div className="task_card-assignee">{assignee}</div>
//  <div className="task_card-priority">{priority}</div>
