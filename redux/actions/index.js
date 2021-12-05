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

export const setBasketItem = (id) => {
  return {
    type: "SET_ITEM",
    payload: id,
  };
};

export const removeBasketItems = () => {
  return {
    type: "REMOVE_ITEM",
  };
};
