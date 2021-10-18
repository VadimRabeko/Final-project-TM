import TaskCard from './TaskCard';

function ArchiveList({ tasks, data }) {
    return tasks && tasks.length
        ? tasks.map((task) => (task.status === 'done' ? <TaskCard key={task.id} {...task} data={data} /> : null))
        : null;
}

export default ArchiveList;
