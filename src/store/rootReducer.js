import * as actions from './actionsTypes';

const initialState = {
    tasks: [],
};

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case actions.TASKS_ADD:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case actions.TASKS_REMOVE:
            const { id } = action.payload;

            const doneTask = state.tasks.find((task) => task.id === id);
            const newState = state.tasks.filter((task) => task.id !== id);
            doneTask.status = 'done';

            return {
                ...state,
                tasks: [...newState, doneTask],
            };
        default:
            return state;
    }
}
