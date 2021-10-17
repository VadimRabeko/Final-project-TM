import TaskCard from './TaskCard';

function TaskList({ tasks }) {
    return tasks && tasks.length
        ? tasks.map((task) => (task.status === 'inProgress' ? <TaskCard key={task.id} {...task} /> : null))
        : 'Add the task!';
}

export default TaskList;
