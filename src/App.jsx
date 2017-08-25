import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import store from './Redux/Store/Store.jsx'
import {Provider} from 'react-redux';
import ControlPanel from './Component/ControlPanel.jsx'
import './style/common.less'
render(
    <Provider store={store}>
    <ControlPanel />
    </Provider>,
    document.body.appendChild(document.createElement('div'))
);

