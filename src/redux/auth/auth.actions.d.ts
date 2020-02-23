export interface SocialParams {
  fullName: string
  email: string
  password: string
  pictureURL?: string
  authType: string
  userType: string
}

export interface EmailParams {
  fullName: string
  email: string
  password: string
  authType: string
  userType: string
}

export interface AuthState {
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
  loading: boolean
}

export interface AuthAction {
  type: string;
  payload: any;
}

export type AuthTypes = AuthAction;
