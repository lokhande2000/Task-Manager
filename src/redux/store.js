import { createStore, legacy_createStore } from 'redux';
import { taskReducer } from './reducers';

const store = legacy_createStore(taskReducer);

export default store;