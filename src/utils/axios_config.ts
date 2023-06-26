// @ts-ignore
const getTokenFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : "";

export const config = {
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage.token}`,
    Accept: "application/json",
  },
};
