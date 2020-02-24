import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { message, notification } from "antd";
import * as firebase from "firebase/app";
import axios from 'axios'
import { push } from "connected-react-router";

import app from "../../config/Firebase";

import { saveUser } from "../user";
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
  SAVE_AUTH_NAME,
  SAVE_AUTH_EMAIL,
  SAVE_AUTH_PASSWORD,
  TOGGLE_AUTH_PASSWORD_MODAL,
  SAVE_AUTH_TYPE,
  SAVE_USER_TYPE,
  SAVE_PICTURE_URL,
  SEND_EMAIL_VERIFICATION_LINK,
  SEND_EMAIL_VERIFICATION_LINK_FAILURE,
  SEND_EMAIL_VERIFICATION_LINK_SUCCESS,
  EMAIL_AUTH_SIGN_IN,
  EMAIL_AUTH_SIGN_IN_SUCCESS,
  EMAIL_AUTH_SIGN_IN_FAILURE,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_SUCCESS,
  CREATE_USER,
  CREATE_USER_FAILURE,
  CREATE_USER_SUCCESS, SIGN_IN_USER, SIGN_IN_USER_FAILURE, SIGN_IN_USER_SUCCESS
} from './auth.types'

const URL = process.env.REACT_APP_DATABASE_URL

export const saveUserId = (payload: string) => ({
  type: SAVE_USER_ID,
  payload
});

export const saveAuthName = (payload: string) => ({
  type: SAVE_AUTH_NAME,
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
  dispatch(signUpWithEmail())
  
  const hide = message.loading('Loading...', 0);
  const { email, password, name, authType, userType } = data
  
  try {
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        setTimeout(hide, 1000);
        
        // @ts-ignore
        dispatch(saveUserId(result.user.uid.toString()))
        dispatch(saveAuthName(name))
        dispatch(saveAuthEmail(email))
        dispatch(saveAuthType(authType))
        dispatch(saveUserType(userType))
        
        dispatch(signUpWithEmailSuccess())
        dispatch(createUserAsync(password))
      })
      .catch(error => {
        dispatch(signUpWithEmailFailure())
        setTimeout(hide, 1000);
        console.log(error)
        showNotification("Error!", error.toString(), "error");
      });
  } catch (error) {
    console.log(error)
    dispatch(signUpWithEmailFailure())
    setTimeout(hide, 1000);
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
  dispatch(signInWithEmail())
  
  const hide = message.loading('Loading...', 0);
  const { email, password } = data
  
  try {
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        setTimeout(hide, 1000);
        
        // @ts-ignore
        dispatch(saveUserId(result.user.uid.toString()))
        dispatch(saveAuthEmail(email))
        
        dispatch(signInWithEmailSuccess())
  
        // @ts-ignore
        return result.user.emailVerified
          ? dispatch(signInUserAsync(password))
          : dispatch(sendEmailVerificationLinkAsync())
        
      })
      .catch(error => {
        dispatch(signInWithEmailFailure())
        setTimeout(hide, 1000);
        console.log(error)
        showNotification("Error!", error.toString(), "error");
      });
  } catch (error) {
    console.log(error)
    dispatch(signInWithEmailFailure())
    setTimeout(hide, 1000);
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
  dispatch(signInWithGoogle())
  
  const hide = message.loading('Loading...', 0);
  
  const provider = new firebase.auth.GoogleAuthProvider();
  
  const { userType, actionType } = data
  
  try {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(signInWithGoogleSuccess())
        setTimeout(hide, 1000);
        // @ts-ignore
        dispatch(saveUserId(result.user.uid.toString()))
        // @ts-ignore
        dispatch(saveAuthName(result.user.displayName.toString()))
        // @ts-ignore
        dispatch(saveAuthEmail(result.user.email.toString()))
        dispatch(saveAuthType('google'))
        dispatch(saveUserType(userType))
        // @ts-ignore
        dispatch(savePictureURL(result.user.photoURL.toString()))
  
        firebase.auth().signOut().then(() => {
          // Sign-out successful.
        }).catch(function(error) {
          // An error happened.
        });
        
        return actionType === "signUp" ?
          // @ts-ignore
          dispatch(createUserAsync(result.user.uid.toString())) : dispatch(signInUserAsync(result.user.uid.toString()))
        
      })
      .catch((error) => {
        dispatch(signInWithGoogleFailure())
        console.log(error)
        setTimeout(hide, 1000);
        showNotification("Error!", error.toString(), "error");
      })
  } catch (error) {
    dispatch(signInWithGoogleFailure())
    setTimeout(hide, 1000);
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
  dispatch(signInWithFacebook())
  
  const hide = message.loading('Loading...', 0);
  
  const provider = new firebase.auth.FacebookAuthProvider();
  
  const { userType, actionType } = data
  
  try {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(signInWithFacebookSuccess())
        setTimeout(hide, 1000);
        // @ts-ignore
        dispatch(saveUserId(result.user.uid.toString()))
        // @ts-ignore
        dispatch(saveAuthName(result.user.displayName.toString()))
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
  
        return actionType === "signUp" ?
          // @ts-ignore
          dispatch(createUserAsync(result.user.uid.toString())) : dispatch(signInUserAsync(result.user.uid.toString()))
      })
      .catch((error) => {
        dispatch(signInWithFacebookFailure())
        console.log(error)
        setTimeout(hide, 1000);
        showNotification("Error!", error.toString(), "error");
      })
  } catch (error) {
    dispatch(signInWithFacebookFailure())
    setTimeout(hide, 1000);
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
  
  const hide = message.loading('Sending...', 0);
  
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      user.sendEmailVerification().then((success) => {
        // Email sent.
        if(user !== null) {
          setTimeout(hide, 1000);
          dispatch(sendEmailVerificationLinkSuccess())
          showNotification("Success!", `We have sent a verification link to ${email}`, "success");
        } else {
          showNotification("Error", 'No user is signed in', "error");
        }
      }).catch((error: any) => {
        console.log(error)
        // An error happened.
        dispatch(sendEmailVerificationLinkFailure())
        setTimeout(hide, 1000);
        showNotification("Form Validation!", error.toString(), "error");
      });
    } else {
      // No user is signed in.
      console.log(user, "No User")
    }
  });
}

export const forgotPassword = () => ({
  type: FORGOT_PASSWORD
});

export const forgotPasswordFailure = () => ({
  type: FORGOT_PASSWORD_FAILURE
});

export const forgotPasswordSuccess = () => ({
  type: FORGOT_PASSWORD_SUCCESS
});

/**
 * Thunks
 */
export const forgotPasswordAsync = (email: string): ThunkAction<
  void,
  ApplicationState,
  null,
  Action<any>
  > => async (dispatch, getState) => {
  dispatch(forgotPassword())
  
  const hide = message.loading('Loading...', 0);
  
  try {
    // console.log('got here')
    const user = await app
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        dispatch(forgotPasswordSuccess())
        setTimeout(hide, 1000);
        showNotification("Success!", 'Woohoo! check your mail', "success");
      })
      .catch((error) => {
        dispatch(forgotPasswordFailure())
        setTimeout(hide, 1000);
        showNotification("Error", error.toString(), "error");
      })
  } catch (error) {
    dispatch(forgotPasswordFailure())
    setTimeout(hide, 1000);
    showNotification("Error", error.toString(), "error");
  }
}


export const createUser = () => ({
  type: CREATE_USER
});

export const createUserFailure = () => ({
  type: CREATE_USER_FAILURE
});

export const createUserSuccess = () => ({
  type: CREATE_USER_SUCCESS
});

/**
 * Thunks
 */
export const createUserAsync = (password: string): ThunkAction<
  void,
  ApplicationState,
  null,
  Action<any>
  > => async (dispatch, getState) => {
  dispatch(createUser())
  
  const state = getState()
  const name = state.auth.name
  const pictureURL = state.auth.pictureURL
  const email = state.auth.email
  const authType = state.auth.authType
  const userType = state.auth.userType
  
  axios.post(`${URL}/users`,
    {
      name,
      pictureURL,
      email,
      password,
      userType,
      authType,
    })
    .then((response) => {
      console.log(response)
      showNotification("Error", `${response.data.message}`, "success");
      dispatch(createUserSuccess())
      dispatch(saveUser(response.data.data))
  
      if (authType === "email") {
        dispatch(push(`/success`))
      } else {
        dispatch(push(`/dashboard`))
      }
  
      setTimeout(() => window.location.reload(), 1000)
      
      
    })
    .catch((error) => {
      dispatch(createUserFailure())
      console.log(error)
      if (error.response === undefined) {
        showNotification("Error", `${error.message}`, "error");
      } else {
        showNotification("Error", `${error.response.data.message}`, "error");
      }
    });
}

export const signInUser = () => ({
  type: SIGN_IN_USER
});

export const signInUserFailure = () => ({
  type: SIGN_IN_USER_FAILURE
});

export const signInUserSuccess = () => ({
  type: SIGN_IN_USER_SUCCESS
});


/**
 * Thunks
 */
export const signInUserAsync = (password: string): ThunkAction<
  void,
  ApplicationState,
  null,
  Action<any>
  > => async (dispatch, getState) => {
  dispatch(signInUser())
  
  const hide = message.loading('Loading...', 0);
  
  const state = getState()
  const email = state.auth.email
  
  axios.post(`${URL}/users/retrieve`,
    {
      email,
      password,
    })
    .then((response) => {
      setTimeout(hide, 1000);
      showNotification("Success", `${response.data.message}`, "success");
      dispatch(signInUserSuccess())
      dispatch(saveUser(response.data.data))
      dispatch(push(`/dashboard`))
      setTimeout(() => window.location.reload(), 1000)
    })
    .catch((error) => {
      setTimeout(hide, 1000);
      dispatch(signInUserFailure())
      console.log(error)
      if (error.response === undefined) {
        showNotification("Error", `${error.message}`, "error");
      } else {
        showNotification("Error", `${error.response.data.message}`, "error");
      }
    });
}

