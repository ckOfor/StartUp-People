export interface IUser {
  id: string
  name: string
  pictureURL: string
  email: string
  userType: string
  status: string
  phoneNumber: string
  notificationID: string
  gender: string
  authType: string
  companyId: string
  subscription: string
  subscriptionType: string
  fields: Array
  skills: Array
  createdAt: string
  updatedAt: string
}

export interface UserState {
  data: IUser,
  loading: boolean
}


export interface UserAction {
  type: string;
  payload: any;
}

export type UserTypes = UserAction;
