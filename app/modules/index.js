import { combineReducers } from 'redux';

// ---- Static Reducers Imports -----
import { routerReducer } from 'react-router-redux';

// -- Static Reducers Definitions ---
const initialReducers = {
    router: routerReducer,

    // Place static reducers here!
}
  
export const buildReducers = (newReducers) => {
    Object.assign(initialReducers, newReducers)
    return combineReducers(initialReducers)
}