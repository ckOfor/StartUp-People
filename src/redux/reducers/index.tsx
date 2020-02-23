import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import authReducer from './auth';

export interface ApplicationState {
  nav: any
  router: any
  auth: any
}

const createRootReducer = (history: any) => combineReducers({
  auth: authReducer,
  router: connectRouter(history),
})

export default createRootReducer
