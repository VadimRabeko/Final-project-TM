export const getUniqueID = () => Math.random().toString(36).slice(-5);

export const currentDate = (addDay = 0) => {
    const date = new Date();
    date.setDate(date.getDate() + addDay);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export const equalDate = (tasks, date) => tasks.filter((task) => task.dueDate === date);
