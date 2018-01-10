import * as t from './actionTypes';

const initialState = {
    counterValue: 0
}

const ACTION_HANDLERS = {
    [t.SET_VALUE]: (state, action) => ({ ...state, counterValue: action.value }),
    [t.RESET]: (state, action) => ({ ...state, counterValue: initialState.counterValue })
}

export default function(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}