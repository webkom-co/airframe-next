import * as actions from './actions';
import * as selectors from './selectors';
import _reducer from './reducer';

const reducer = {
    counter: _reducer
};

export { actions, reducer, selectors };