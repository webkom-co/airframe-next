import { render } from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import AppFactory from './app';

const history = createBrowserHistory();

const appComponent = AppFactory.createClient(history);

render(appComponent, document.querySelector('#root'));