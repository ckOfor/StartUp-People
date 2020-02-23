export interface signUpWithEmailParams {
  fullName: string
  email: string
  password: string
  authType: string
  userType: string
}

export interface signInWithEmailParams {
  email: string
  password: string
}

export interface AuthState {
  token: null,
  userExists: boolean
  phoneNumber: string
  countryCode: string
  email: string
  fullName: string
  password: string
  passwordModal: boolean
  userType: string
  authType: string
  uid: string
  pictureURL: string
  loading: boolean
}

export interface AuthAction {
  type: string;
  payload: any;
}

export type AuthTypes = AuthAction;
