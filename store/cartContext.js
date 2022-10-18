import { createContext, useReducer } from "react";
import { actionType } from "./actionType";

const CartContext = createContext();

const defaultState = {
  cartList: [],
  totalQuantity: 0,
};

const calculateQuantity = (cartList) => {
  const initialValue = 0;
  const sumOfTotalQuantity = cartList
    .map((item) => item.quantity)
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
  return sumOfTotalQuantity;
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case actionType.DATA_INSERT:
      const updatedCartList = action.payload.userCart;

      const sumOfTotalQuantity = calculateQuantity(updatedCartList);
      return {
        cartList: updatedCartList,
        totalQuantity: sumOfTotalQuantity,
      };
  }

  switch (action.type) {
    case actionType.ADD_CART:
      const selectedItem = action.payload.selectedItem;
      let updatedCartList = [];
      if (
        state.cartList
          .map((cartItem) => cartItem.id.indexOf(selectedItem.id) < 0)
          .every((cur) => cur === true)
      ) {
        const selectedItemWithQuantity = { ...selectedItem, quantity: 1 };
        updatedCartList = state.cartList.concat(selectedItemWithQuantity);
      } else {
        const existedItem = state.cartList.filter(
          (item) => item.id.indexOf(selectedItem.id) > -1
        );
        const updatedItem = {
          ...existedItem[0],
          quantity: existedItem[0].quantity + 1,
        };

        updatedCartList = state.cartList.map((cartItem) =>
          cartItem.id.indexOf(updatedItem.id) > -1
            ? (cartItem = updatedItem)
            : cartItem
        );
      }

      const sumOfTotalQuantity = calculateQuantity(updatedCartList);

      return {
        cartList: updatedCartList,
        totalQuantity: sumOfTotalQuantity,
      };
  }

  switch (action.type) {
    case actionType.REMOVE_CART:
      console.log(action.payload.itemId);

      const existedItem = state.cartList.filter(
        (item) => item.id.indexOf(action.payload.itemId) > -1
      );

      let updatedCartList = [];
      if (existedItem[0].quantity > 1) {
        const updatedItem = {
          ...existedItem[0],
          quantity: existedItem[0].quantity - 1,
        };
        updatedCartList = state.cartList.map((cartItem) =>
          cartItem.id.indexOf(action.payload.itemId) > -1
            ? (cartItem = updatedItem)
            : cartItem
        );
      }

      if (existedItem[0].quantity === 1) {
        updatedCartList = state.cartList.filter(
          (item) => item.id.indexOf(action.payload.itemId) !== 0
        );
      }

      const sumOfTotalQuantity = calculateQuantity(updatedCartList);

      return {
        cartList: updatedCartList,
        totalQuantity: sumOfTotalQuantity,
      };
  }
};

export const CartContextProvider = (props) => {
  const [cartStatus, dispatchCart] = useReducer(cartReducer, defaultState);

  return (
    <CartContext.Provider value={{ cartStatus, dispatchCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
