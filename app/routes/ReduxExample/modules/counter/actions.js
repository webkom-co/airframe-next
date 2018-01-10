import * as t from './actionTypes';

export function setValue(value) {
    return {
        type: t.SET_VALUE,
        value
    };
}

export function reset() {
    return { type: t.RESET };
}