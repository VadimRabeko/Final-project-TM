function ScheduleCard({ text, assignee, priority }) {
    const taskInfo = document.createElement('div');

    const onMouseOverHandler = (event) => {
        taskInfo.classList.add('schedule_card-info');
        taskInfo.innerHTML = `Assignee: ${assignee} Priority: ${priority}`;
        event.target.append(taskInfo);
    };

    const onMouseOutHandler = () => taskInfo.remove();

    return (
        <div className="schedule_card" onMouseOver={onMouseOverHandler} onMouseOut={onMouseOutHandler}>
            <div className="schedule_card-text">{text}</div>
        </div>
    );
}

export default ScheduleCard;
