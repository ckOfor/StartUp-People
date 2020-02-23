import { AuthState, AuthTypes } from '../auth/auth.actions.d';

import {
  EMAIL_AUTH_SIGN_IN, EMAIL_AUTH_SIGN_IN_FAILURE, EMAIL_AUTH_SIGN_IN_SUCCESS,
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
  SAVE_AUTH_FULL_NAME,
  SAVE_AUTH_TYPE,
  SAVE_PICTURE_URL,
  SAVE_USER_ID,
  SAVE_USER_TYPE,
  SEND_EMAIL_VERIFICATION_LINK,
  SEND_EMAIL_VERIFICATION_LINK_FAILURE, SEND_EMAIL_VERIFICATION_LINK_SUCCESS
} from '../auth';


const INITIAL_STATE: AuthState = {
  token: null,
  userExists: false,
  phoneNumber: "",
  countryCode: "+234",
  email: "",
  fullName: "",
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
  
    case SAVE_AUTH_FULL_NAME:
      return {
        ...state,
        fullName: action.payload,
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
      return {
        ...state,
        loading: false,
      };
    
    default:
      return state;
  }
}

export default authReducer;
