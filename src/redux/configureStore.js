import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import photosReducer from "./ducks/photos";
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({ photos: photosReducer });

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;
