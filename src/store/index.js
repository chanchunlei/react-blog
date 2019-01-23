import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga'; //使用saga中间件
import sagas from './saga';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const sagaMiddleware = createSagaMiddleware();//引入saga的模块
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(reducer, enhancer);
sagaMiddleware.run(sagas);
export default store;