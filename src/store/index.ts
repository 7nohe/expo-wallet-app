import { ticketReducer } from './ticket/reducers'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../sagas';

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  ticket: ticketReducer
})

export type RootState = ReturnType<typeof rootReducer>

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) ||
  compose;

  
export const store = createStore(
  rootReducer,
  {},
  composeEnhancer(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga);
