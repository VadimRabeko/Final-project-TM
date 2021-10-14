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
        default:
            return state;
    }
}
