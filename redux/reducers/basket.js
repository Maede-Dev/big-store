const basketItems = (state = [], action) => {
  switch (action.type) {
    case "SET_ITEM":
      return (state = [...state, action.payload]);
    case "REMOVE_ITEM":
      return (state = state.filter((node) => node.id !== action.payload));
    default:
      return state;
  }
};

export default basketItems;
