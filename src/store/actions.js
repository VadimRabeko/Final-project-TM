import * as actions from './actionsTypes';

export function tasksAdd({ text, assignee, priotity }) {
    return {
        type: actions.TASKS_ADD,
        payload: {
            text,
            assignee,
            priotity,
        },
    };
}
