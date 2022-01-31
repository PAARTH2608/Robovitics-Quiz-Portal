import { AuthTypes } from "../types";

export const uploadDoc = (data) => ({
  type: AuthTypes.UPLOAD_REQUEST,
  payload: data,
});
export const uploadError = () => ({
  type: AuthTypes.UPLOAD_ERROR,
});
