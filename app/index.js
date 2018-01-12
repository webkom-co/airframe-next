import React from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { AppContainer } from 'react-hot-loader'

import { getStore } from './modules';
import { App } from './components';

const history = createBrowserHistory();
const store = getStore(history);

render(
    <App.Client {...{ history, store }} />,
    document.querySelector('#root')
);