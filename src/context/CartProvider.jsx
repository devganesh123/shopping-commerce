import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = { items: [] };

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // console.log(state);

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    // console.log(existingItemIndex);

    const existingItem = state.items[existingItemIndex];

    let updatedItems;
    let updatedItem;
    // let updatedTotalAmount;

    if (existingItem) {
      updatedItem = {
        ...existingItem,
        quantity: action.item.quantity,
      };

      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;

      //! check if the previous item quantity is same
      // if (state.items[existingItemIndex].quantity == action.item.quantity) {
      //   console.log("item is not changed");
      // } else {
      //   updatedTotalAmount =
      //     state.totalAmount + existingItem.price * existingItem.quantity;
      // }
    } else {
      updatedItems = state.items.concat(action.item);
      // updatedTotalAmount =
      //   state.totalAmount + action.item.price * action.item.quantity;
    }
    return {
      items: updatedItems,
    };
  }

  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex((item) => {
      return item.id == action.id;
    });
    const existingItem = state.items[existingItemIndex];
    console.log(existingItem);

    let updatedItems;
    updatedItems = state.items.filter((item) => {
      return item.id !== action.id;
    });

    return {
      items: updatedItems,
    };
  }
};

const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    dispatch({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    console.log("item is removed");
    dispatch({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
