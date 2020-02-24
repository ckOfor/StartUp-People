import { UserState, UserTypes } from './user.actions.d';

import { SAVE_USER } from "./user.types";

const INITIAL_STATE: UserState = {
  data: {
    id: '',
    name: '',
    pictureURL: '',
    email: '',
    userType: '',
    status: '',
    phoneNumber: '',
    notificationID: '',
    gender: '',
    authType: '',
    companyId: '',
    subscription: '',
    subscriptionType: '',
    fields: [],
    skills: [],
    createdAt: '',
    updatedAt: '',
  },
  loading: false
};

function userReducer(state = INITIAL_STATE, action: UserTypes): UserState {
  switch (action.type) {
    
    case SAVE_USER:
      return {
        ...state,
        data: action.payload,
      };
    
    default:
      return state;
  }
}

export default userReducer;
