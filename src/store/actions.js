import * as actions from './actionsTypes';
import { getUniqueID } from '../utilities';

export function tasksAdd({ text, assignee, priority, status }) {
    return {
        type: actions.TASKS_ADD,
        payload: {
            id: getUniqueID(),
            text,
            assignee,
            priority,
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
