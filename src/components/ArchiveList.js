import TaskCard from './TaskCard';

function ArchiveList({ tasks }) {
    return tasks && tasks.length
        ? tasks.map((task) => (task.status === 'done' ? <TaskCard key={task.id} {...task} /> : null))
        : null;
}

export default ArchiveList;
