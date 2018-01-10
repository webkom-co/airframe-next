import ReduxExample from './ReduxExample';
import { reducer as counterReducer } from './modules/counter';

const reducers = {
    ...counterReducer
}

export { reducers };
export default ReduxExample;