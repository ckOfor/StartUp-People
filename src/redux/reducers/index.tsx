import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

export interface ApplicationState {
  nav: any
  router: any
}

const createRootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
})
export default createRootReducer
