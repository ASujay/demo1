import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer'
import createSagaMiddleware from 'redux-saga'
import {imageSaga} from './sagas/imageSaga'
import thunk from 'redux-thunk'

const sagaMiddleWare = createSagaMiddleware()
let middlewares = sagaMiddleWare

let store = createStore(rootReducer, applyMiddleware(middlewares))

sagaMiddleWare.run(imageSaga)

export default store