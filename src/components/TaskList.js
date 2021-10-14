import TaskCard from './TaskCard';

function TaskList({ tasks }) {
    return tasks && tasks.length ? tasks.map((task) => <TaskCard key={tasks.text} {...task} />) : 'TasksList';
}

export default TaskList;
