export const setLogIn = (userInformation) => {
  return {
    type: "LOG_IN",
    payload: userInformation,
  };
};
export const setLogOut = () => {
  return {
    type: "LOG_OUT",
  };
};
