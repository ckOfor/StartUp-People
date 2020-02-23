import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { message, notification } from "antd";
import * as firebase from "firebase/app";

import app from "../../config/Firebase";

import { ApplicationState } from "../reducers";
import {
  signUpWithEmailParams, signInWithEmailParams, socialAuthParams
} from './auth.actions.d';

import {
  EMAIL_AUTH_SIGN_UP,
  EMAIL_AUTH_SIGN_UP_FAILURE,
  EMAIL_AUTH_SIGN_UP_SUCCESS,
  GOOGLE_AUTH,
  GOOGLE_AUTH_FAILURE,
  GOOGLE_AUTH_SUCCESS,
  FACEBOOK_AUTH,
  FACEBOOK_AUTH_FAILURE,
  FACEBOOK_AUTH_SUCCESS,
  SAVE_USER_ID,
  SAVE_AUTH_FULL_NAME,
  SAVE_AUTH_EMAIL,
  SAVE_AUTH_PASSWORD,
  TOGGLE_AUTH_PASSWORD_MODAL,
  SAVE_AUTH_TYPE,
  SAVE_USER_TYPE,
  SAVE_PICTURE_URL,
  SEND_EMAIL_VERIFICATION_LINK,
  SEND_EMAIL_VERIFICATION_LINK_FAILURE,
  SEND_EMAIL_VERIFICATION_LINK_SUCCESS, EMAIL_AUTH_SIGN_IN, EMAIL_AUTH_SIGN_IN_SUCCESS, EMAIL_AUTH_SIGN_IN_FAILURE
} from './auth.types'

export const saveUserId = (payload: string) => ({
  type: SAVE_USER_ID,
  payload
});

export const saveAuthFullName = (payload: string) => ({
  type: SAVE_AUTH_FULL_NAME,
  payload
});

export const saveAuthEmail = (payload: string) => ({
  type: SAVE_AUTH_EMAIL,
  payload
});

export const saveAuthPassword = (payload: string) => ({
  type: SAVE_AUTH_PASSWORD,
  payload
});

export const toggleAuthPasswordModal = (payload: string) => ({
  type: TOGGLE_AUTH_PASSWORD_MODAL,
  payload
});

export const saveAuthType = (payload: string) => ({
  type: SAVE_AUTH_TYPE,
  payload
});

export const saveUserType = (payload: string) => ({
  type: SAVE_USER_TYPE,
  payload
});

export const savePictureURL = (payload: string) => ({
  type: SAVE_PICTURE_URL,
  payload
});

/**
 * notification
 *
 * @param heading
 * @param message
 * @param type
 */
const showNotification = (heading: any, message: any, type: any) => {
  // @ts-ignore
  notification[`${type}`]({
    message: `${heading}`,
    description: `${message}`,
    style: {
      width: '100%',
    },
  });
};

export const signUpWithEmail = () => ({
  type: EMAIL_AUTH_SIGN_UP
});

export const signUpWithEmailFailure = () => ({
  type: EMAIL_AUTH_SIGN_UP_FAILURE
});

export const signUpWithEmailSuccess = () => ({
  type: EMAIL_AUTH_SIGN_UP_SUCCESS
});

/**
 * Thunks
 */
export const createUserWithEmailAsync = (data: signUpWithEmailParams): ThunkAction<
  void,
  ApplicationState,
  null,
  Action<any>
  > => async (dispatch, getState) => {
  console.log(data)
  dispatch(signUpWithEmail())
  
  const hide = message.loading('Loading...', 0);
  const { email, password, fullName, authType, userType } = data
  
  try {
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result)
        setTimeout(hide, 2500);
        
        // @ts-ignore
        dispatch(saveUserId(result.user.uid.toString()))
        dispatch(saveAuthFullName(fullName))
        dispatch(saveAuthEmail(email))
        dispatch(saveAuthType(authType))
        dispatch(saveUserType(userType))
        
        dispatch(signUpWithEmailSuccess())
      })
      .catch(error => {
        dispatch(signUpWithEmailFailure())
        setTimeout(hide, 2500);
        console.log(error)
        showNotification("Error!", error.toString(), "error");
      });
  } catch (error) {
    console.log(error)
    dispatch(signUpWithEmailFailure())
    setTimeout(hide, 2500);
    showNotification("Error!", error.toString(), "error");
  }
}


export const signInWithEmail = () => ({
  type: EMAIL_AUTH_SIGN_IN
});

export const signInWithEmailFailure = () => ({
  type: EMAIL_AUTH_SIGN_IN_FAILURE
});

export const signInWithEmailSuccess = () => ({
  type: EMAIL_AUTH_SIGN_IN_SUCCESS
});

/**
 * Thunks
 */
export const sigInUserWithEmailAsync = (data: signInWithEmailParams): ThunkAction<
  void,
  ApplicationState,
  null,
  Action<any>
  > => async (dispatch, getState) => {
  console.log(data)
  dispatch(signInWithEmail())
  
  const hide = message.loading('Loading...', 0);
  const { email, password } = data
  
  try {
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result)
        setTimeout(hide, 2500);
        
        // @ts-ignore
        dispatch(saveUserId(result.user.uid.toString()))
        dispatch(saveAuthEmail(email))
        
        dispatch(signInWithEmailSuccess())
      })
      .catch(error => {
        dispatch(signInWithEmailFailure())
        setTimeout(hide, 2500);
        console.log(error)
        showNotification("Error!", error.toString(), "error");
      });
  } catch (error) {
    console.log(error)
    dispatch(signInWithEmailFailure())
    setTimeout(hide, 2500);
    showNotification("Error!", error.toString(), "error");
  }
}


export const signInWithGoogle = () => ({
  type: GOOGLE_AUTH
});

export const signInWithGoogleFailure = () => ({
  type: GOOGLE_AUTH_FAILURE
});

export const signInWithGoogleSuccess = () => ({
  type: GOOGLE_AUTH_SUCCESS
});

/**
 * Thunks
 */
export const googleAuthAsync = (data: socialAuthParams): ThunkAction<
  void,
  ApplicationState,
  null,
  Action<any>
  > => async (dispatch, getState) => {
  console.log('called')
  dispatch(signInWithGoogle())
  
  const hide = message.loading('Loading...', 0);
  
  const provider = new firebase.auth.GoogleAuthProvider();
  
  const { userType } = data
  
  try {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(signInWithGoogleSuccess())
        setTimeout(hide, 2500);
        console.log(result.user)
        // @ts-ignore
        dispatch(saveUserId(result.user.uid.toString()))
        // @ts-ignore
        dispatch(saveAuthFullName(result.user.displayName.toString()))
        // @ts-ignore
        dispatch(saveAuthEmail(result.user.email.toString()))
        dispatch(saveAuthType('google'))
        dispatch(saveUserType(userType))
        // @ts-ignore
        dispatch(savePictureURL(result.user.photoURL.toString()))
        
        // console.log(result.user.uid)
        firebase.auth().signOut().then(() => {
          // Sign-out successful.
        }).catch(function(error) {
          // An error happened.
        });
        
      })
      .catch((error) => {
        dispatch(signInWithGoogleFailure())
        console.log(error)
        setTimeout(hide, 2500);
        showNotification("Error!", error.toString(), "error");
      })
  } catch (error) {
    dispatch(signInWithGoogleFailure())
    setTimeout(hide, 2500);
    showNotification("Form Validation!", error.toString(), "error");
  }
}

export const signInWithFacebook = () => ({
  type: FACEBOOK_AUTH
});

export const signInWithFacebookFailure = () => ({
  type: FACEBOOK_AUTH_FAILURE
});

export const signInWithFacebookSuccess = () => ({
  type: FACEBOOK_AUTH_SUCCESS
});

/**
 * Thunks
 */
export const facebookAuthAsync = (data: socialAuthParams): ThunkAction<
  void,
  ApplicationState,
  null,
  Action<any>
  > => async (dispatch, getState) => {
  console.log('called')
  dispatch(signInWithFacebook())
  
  const hide = message.loading('Loading...', 0);
  
  const provider = new firebase.auth.FacebookAuthProvider();
  
  const { userType } = data
  
  try {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(signInWithFacebookSuccess())
        setTimeout(hide, 2500);
        console.log(result.user)
        // @ts-ignore
        dispatch(saveUserId(result.user.uid.toString()))
        // @ts-ignore
        dispatch(saveAuthFullName(result.user.displayName.toString()))
        // @ts-ignore
        dispatch(saveAuthEmail(result.user.email.toString()))
        dispatch(saveAuthType('facebook'))
        dispatch(saveUserType(userType))
        // @ts-ignore
        dispatch(savePictureURL(result.user.photoURL.toString()))
        
        // console.log(result.user.uid)
        firebase.auth().signOut().then(() => {
          // Sign-out successful.
        }).catch(function(error) {
          // An error happened.
        });
        
      })
      .catch((error) => {
        dispatch(signInWithFacebookFailure())
        console.log(error)
        setTimeout(hide, 2500);
        showNotification("Error!", error.toString(), "error");
      })
  } catch (error) {
    dispatch(signInWithFacebookFailure())
    setTimeout(hide, 2500);
    showNotification("Form Validation!", error.toString(), "error");
  }
}

export const sendEmailVerificationLink = () => ({
  type: SEND_EMAIL_VERIFICATION_LINK
});

export const sendEmailVerificationLinkFailure = () => ({
  type: SEND_EMAIL_VERIFICATION_LINK_FAILURE
});

export const sendEmailVerificationLinkSuccess = () => ({
  type: SEND_EMAIL_VERIFICATION_LINK_SUCCESS
});

/**
 * Thunks
 */
export const sendEmailVerificationLinkAsync = (): ThunkAction<
  void,
  ApplicationState,
  null,
  Action<any>
  > => async (dispatch, getState) => {
  const email = getState().auth.email
  
  dispatch(sendEmailVerificationLink())
  
  const hide = message.loading('Loading...', 0);
  
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log(user)
      user.sendEmailVerification().then((success) => {
        // Email sent.
        if(user !== null) {
          setTimeout(hide, 1000);
          dispatch(sendEmailVerificationLinkSuccess())
          showNotification("Success!", `We have also sent a verification link to ${email}`, "success");
        } else {
          showNotification("Error", 'No user is signed in', "error");
        }
      }).catch((error: any) => {
        console.log(error)
        // An error happened.
        dispatch(sendEmailVerificationLinkFailure())
        setTimeout(hide, 2500);
        showNotification("Form Validation!", error.toString(), "error");
      });
    } else {
      // No user is signed in.
      console.log(user)
    }
  });
  
}
