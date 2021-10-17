import { currentDate, equalDate } from '../utilities';
import ScheduleCard from './ScheduleCard';

function Schedule({ tasks }) {
    const showScheduleTask = (day) =>
        equalDate(tasks, currentDate(day)).map((task) =>
            task.status === 'inProgress' ? <ScheduleCard key={task.id} {...task} /> : null
        );

    return (
        <div className="schedule">
            <div className="schedule_column">
                {currentDate()}
                {showScheduleTask()}
            </div>
            <div className="schedule_column">
                {currentDate(1)}
                {showScheduleTask(1)}
            </div>
            <div className="schedule_column">
                {currentDate(2)}
                {showScheduleTask(2)}
            </div>
            <div className="schedule_column">
                {currentDate(3)}
                {showScheduleTask(3)}
            </div>
            <div className="schedule_column">
                {currentDate(4)}
                {showScheduleTask(4)}
            </div>
            <div className="schedule_column">
                {currentDate(5)}
                {showScheduleTask(5)}
            </div>
            <div className="schedule_column">
                {currentDate(6)}
                {showScheduleTask(6)}
            </div>
        </div>
    );
}

export default Schedule;
