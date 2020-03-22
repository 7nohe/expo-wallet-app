import { ticketReducer } from './ticket/reducers'
import { combineReducers, createStore } from 'redux'

const rootReducer = combineReducers({
  ticket: ticketReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(
  rootReducer,
  window['devToolsExtension'] && window['devToolsExtension']()
)
