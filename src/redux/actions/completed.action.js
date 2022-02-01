import { AuthTypes } from "../types";

export const completed = (data) => ({
  type: AuthTypes.COMPLETED_REQUEST,
  payload: data,
});
export const completedError = () => ({
  type: AuthTypes.COMPLETED_ERROR,
});
