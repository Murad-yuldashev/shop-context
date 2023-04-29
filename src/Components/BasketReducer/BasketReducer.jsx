export const initialState = {
  basket: [],
  addLogin: [],
};

const BasketReducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        basket: [...state.basket, action.payload],
      };
    case "REMOVE_PRODUCT":
      return {
        basket: state.basket.filter((element) => element.data.id !== action.payload),
      };
    case "CHANGE_PLYUS":
      return {
        basket: state.basket.filter((element) => element.data.id === action.payload.id ? element.count = action.payload.reply : action.payload.reply),
      };
    case "CHANGE_MINUS":
      return {
        basket: state.basket.filter((element) => element.data.id === action.payload.id ? element.count = action.payload.reply : action.payload.reply),
      };
    case "ADD_LOGIN":
      return {
        addLogin: [...state.addLogin , action.payload],
      };
    default:
      return state;
  }
};

export default BasketReducer;
