import { currentDate, equalDate, formatDate } from '../utilities';
import ScheduleCard from './ScheduleCard';

function Schedule({ tasks }) {
    const showScheduleTask = (day) =>
        equalDate(tasks, currentDate(day)).map((task) =>
            task.status === 'inProgress' ? <ScheduleCard key={task.id} {...task} /> : null
        );

    return (
        <div className="schedule">
            <div className="schedule_column">
                <div className="schedule_date">{formatDate(currentDate())}</div> {showScheduleTask()}
            </div>
            <div className="schedule_column">
                <div className="schedule_date">{formatDate(currentDate(1))}</div>
                {showScheduleTask(1)}
            </div>
            <div className="schedule_column">
                <div className="schedule_date">{formatDate(currentDate(2))}</div>
                {showScheduleTask(2)}
            </div>
            <div className="schedule_column">
                <div className="schedule_date">{formatDate(currentDate(3))}</div>
                {showScheduleTask(3)}
            </div>
            <div className="schedule_column">
                <div className="schedule_date">{formatDate(currentDate(4))}</div>
                {showScheduleTask(4)}
            </div>
            <div className="schedule_column">
                <div className="schedule_date">{formatDate(currentDate(5))}</div>
                {showScheduleTask(5)}
            </div>
            <div className="schedule_column">
                <div className="schedule_date">{formatDate(currentDate(6))}</div>
                {showScheduleTask(6)}
            </div>
        </div>
    );
}

export default Schedule;
