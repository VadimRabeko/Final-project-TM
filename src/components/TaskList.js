import TaskCard from './TaskCard';

function TaskList({ tasks, data }) {
    return tasks && tasks.length
        ? tasks.map((task) => (task.status === 'inProgress' ? <TaskCard key={task.id} {...task} data={data} /> : null))
        : 'Add the task!';
}

export default TaskList;
