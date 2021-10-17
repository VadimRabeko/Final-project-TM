import { currentDate, equalDate } from '../utilities';
import ScheduleCard from './ScheduleCard';

function Schedule({ tasks }) {
    const showScheduleTask = (day) =>
        equalDate(tasks, currentDate(day)).map((task) =>
            task.status === 'inProgress' ? <ScheduleCard key={task.id} {...task} /> : null
        );

    return (
        <div className="schedule">
            <div className="schedule_column">{showScheduleTask()}</div>
            <div className="schedule_column">{showScheduleTask(1)}</div>
            <div className="schedule_column">{showScheduleTask(2)}</div>
            <div className="schedule_column">{showScheduleTask(3)}</div>
            <div className="schedule_column">{showScheduleTask(4)}</div>
            <div className="schedule_column">{showScheduleTask(5)}</div>
            <div className="schedule_column">{showScheduleTask(6)}</div>
        </div>
    );
}

export default Schedule;
