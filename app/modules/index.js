import { 
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

// ------ Middleware Imports -------
import { 
    routerMiddleware as createRouterMiddleware, 
    push 
} from 'react-router-redux';
import thunk from 'redux-thunk';

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

export const getStore = history => {
    const routerMiddleware = createRouterMiddleware(history);
    
    const store = createStore(
        buildReducers(),
        applyMiddleware(routerMiddleware, thunk)
    );

    return store;
}