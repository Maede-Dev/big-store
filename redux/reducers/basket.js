const basketItems = (state = [], action) => {
  switch (action.type) {
    case "SET_ITEM":
      return (state = [...state, action.payload]);
    //     case "REMOVE_ITEM":
    //       return null;
    default:
      return state;
  }
};

export default basketItems;
