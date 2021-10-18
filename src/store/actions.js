import * as actions from './actionsTypes';
import { getUniqueID } from '../utilities';

export function getData({ data }) {
    return {
        type: actions.GET_DATA,
        payload: data,
    };
}

export function tasksAdd({ text, assignee, priority, dueDate, status }) {
    return {
        type: actions.TASKS_ADD,
        payload: {
            id: getUniqueID(),
            text,
            assignee,
            priority,
            dueDate,
            status,
        },
    };
}

export function tasksRemove({ id, status }) {
    return {
        type: actions.TASKS_REMOVE,
        payload: {
            id,
            status,
        },
    };
}
