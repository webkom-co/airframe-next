import "babel-core/register";
import "babel-polyfill";

import React from 'react';
import { render } from 'react-dom';

import { App } from './components';

render(
    <App.Client />,
    document.querySelector('#root')
);