import { SAVE_USER } from "./user.types";
import { IUser } from "./user.actions.d";

export const saveUser = (payload: IUser) => ({
  type: SAVE_USER,
  payload
})
