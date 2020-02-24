import { AuthState, AuthTypes } from '../auth/auth.actions.d';

import {
  CREATE_USER,
  CREATE_USER_FAILURE,
  CREATE_USER_SUCCESS,
  EMAIL_AUTH_SIGN_IN,
  EMAIL_AUTH_SIGN_IN_FAILURE,
  EMAIL_AUTH_SIGN_IN_SUCCESS,
  EMAIL_AUTH_SIGN_UP,
  EMAIL_AUTH_SIGN_UP_FAILURE,
  EMAIL_AUTH_SIGN_UP_SUCCESS,
  FACEBOOK_AUTH,
  FACEBOOK_AUTH_FAILURE,
  FACEBOOK_AUTH_SUCCESS,
  GOOGLE_AUTH,
  GOOGLE_AUTH_FAILURE,
  GOOGLE_AUTH_SUCCESS,
  SAVE_AUTH_EMAIL,
  SAVE_AUTH_NAME,
  SAVE_AUTH_TYPE,
  SAVE_PICTURE_URL,
  SAVE_USER_ID,
  SAVE_USER_TYPE,
  SEND_EMAIL_VERIFICATION_LINK,
  SEND_EMAIL_VERIFICATION_LINK_FAILURE,
  SEND_EMAIL_VERIFICATION_LINK_SUCCESS,
  SIGN_IN_USER,
  SIGN_IN_USER_FAILURE,
  SIGN_IN_USER_SUCCESS
} from '../auth';

const INITIAL_STATE: AuthState = {
  token: null,
  userExists: false,
  phoneNumber: "",
  countryCode: "+234",
  email: "",
  name: "",
  password: "",
  passwordModal: false,
  userType: '',
  authType: "",
  uid: "",
  pictureURL: "",
  loading: false
};

function authReducer(state = INITIAL_STATE, action: AuthTypes): AuthState {
  switch (action.type) {
  
    case SAVE_USER_ID:
      return {
        ...state,
        uid: action.payload,
      };
  
    case SAVE_AUTH_NAME:
      return {
        ...state,
        name: action.payload,
      };
  
    case SAVE_AUTH_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
  
    case SAVE_AUTH_TYPE:
      return {
        ...state,
        authType: action.payload,
      };
  
    case SAVE_USER_TYPE:
      return {
        ...state,
        userType: action.payload,
      };
    
    case SAVE_PICTURE_URL:
      return {
        ...state,
        pictureURL: action.payload,
      };
    
    case EMAIL_AUTH_SIGN_UP:
    case EMAIL_AUTH_SIGN_IN:
    case FACEBOOK_AUTH:
    case GOOGLE_AUTH:
    case SEND_EMAIL_VERIFICATION_LINK:
    case CREATE_USER:
    case SIGN_IN_USER:
      return {
        ...state,
        loading: true,
      };
  
    case EMAIL_AUTH_SIGN_UP_FAILURE:
    case EMAIL_AUTH_SIGN_UP_SUCCESS:
    case EMAIL_AUTH_SIGN_IN_FAILURE:
    case EMAIL_AUTH_SIGN_IN_SUCCESS:
    case FACEBOOK_AUTH_FAILURE:
    case FACEBOOK_AUTH_SUCCESS:
    case GOOGLE_AUTH_FAILURE:
    case GOOGLE_AUTH_SUCCESS:
    case SEND_EMAIL_VERIFICATION_LINK_FAILURE:
    case SEND_EMAIL_VERIFICATION_LINK_SUCCESS:
    case CREATE_USER_FAILURE:
    case CREATE_USER_SUCCESS:
    case SIGN_IN_USER_FAILURE:
    case SIGN_IN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    
    default:
      return state;
  }
}

export default authReducer;
