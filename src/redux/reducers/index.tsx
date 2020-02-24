import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import authReducer from '../auth/auth.reducer';
import userReducer from '../user/user.reducer';

export interface ApplicationState {
  nav: any
  router: any
  auth: any
  user: any
}

const createRootReducer = (history: any) => combineReducers({
  auth: authReducer,
  user: userReducer,
  router: connectRouter(history),
})

export default createRootReducer
