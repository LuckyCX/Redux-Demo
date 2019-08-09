import { createStore,combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers'

const logger = store => next => action => {
    if (typeof action === 'function') console.log('dispatching a function');
    else console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
};

const exceptionMiddleware = store =>next => action => {
    try {
        next(action);
    } catch (err) {
        console.error('错误报告: ', err)
    }
}

const middlewares = [exceptionMiddleware,thunk, logger,];

const createSoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const reducer = combineReducers(reducers);
const store = createSoreWithMiddleware(reducer, {});
export default store
