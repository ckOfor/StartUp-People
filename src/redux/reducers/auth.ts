import { AuthState, AuthTypes } from '../auth/auth.actions.d';

import {
  SOCIAL_AUTH, SOCIAL_AUTH_FAILURE, SOCIAL_AUTH_SUCCESS
} from '../auth';


const INITIAL_STATE: AuthState = {
  token: null,
  userExists: false,
  phoneNumber: "",
  countryCode: "+234",
  email: "",
  fullName: "",
  password: "",
  authType: "",
  uid: "",
  pictureURL: "",
  loading: false
};

function authReducer(state = INITIAL_STATE, action: AuthTypes): AuthState {
  switch (action.type) {
    
    case SOCIAL_AUTH:
      return {
        ...state,
        loading: true,
      };
  
    case SOCIAL_AUTH_FAILURE:
    case SOCIAL_AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    
    default:
      return state;
  }
}

export default authReducer;
