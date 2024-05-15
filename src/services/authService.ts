import { authKey } from "@/constant/authKey";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, removeFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";

export const storeUserInfo = (token: string) => {
  return setToLocalStorage(authKey, token);
};
export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  //   console.log(authToken)
  if (authToken) {
    const decoded: any = decodedToken(authToken);
    console.log(decoded);
    return {
      ...decoded,
      role: decoded?.role.toLowerCase(),
    };
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    return !!authToken;
  }
};
export const removedUser = () => {
  return removeFromLocalStorage(authKey)
};
