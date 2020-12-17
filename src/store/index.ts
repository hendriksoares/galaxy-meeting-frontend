import { createStore } from 'redux';

export interface RootState {
    selected: string; 
}

let INITIAL_STATE: RootState = {
    selected: null,
};

export const planets = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_PLANET':
            return {
                ...state,
                selected: action.selected,
            }
        default:
            return state;
    }
}

const store = createStore<RootState,any,any,any>(planets);

export default store;