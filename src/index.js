import React from 'react';
import ReactDOM from 'react-dom';
import App from './module/todo/view';
import Bzujian from './module/edit_people/view';
import store from './redux/store'
import {
    Provider,
} from 'react-redux'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Provider store={store}>
    <App/>
    <Bzujian/>
</Provider>, document.getElementById('root'));
serviceWorker.unregister();
