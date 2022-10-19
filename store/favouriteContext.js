import { createContext, useReducer } from "react";
import { actionType } from "./actionType";

const FavouriteContext = createContext();

const defaultState = {
  wishList: [],
  subscribedList: [],
};

const addFavourite = (selectedItem, stateList) => {
  const updatedList = stateList.concat(selectedItem);
  return updatedList;
};

const removeFavourite = (selectedId, stateList) => {
  const updatedList = stateList.filter(
    (item) => item.id.indexOf(selectedId) !== 0
  );
  return updatedList;
};

const favouriteReducer = (state, action) => {
  switch (action.type) {
    case actionType.ADD_FAVOURITE:
      const actionStatus = action.payload.status;

      let updatedWishList = state.wishList;
      let updatedSubscribedList = state.subscribedList;

      if (actionStatus.saved) {
        updatedWishList = addFavourite(
          action.payload.selectedHotel,
          state.wishList
        );
      } else {
        updatedSubscribedList = addFavourite(
          action.payload.selectedHotel,
          state.subscribedList
        );
      }

      return {
        wishList: updatedWishList,
        subscribedList: updatedSubscribedList,
      };
  }

  switch (action.type) {
    case actionType.REMOVE_FAVOURITE:
      const actionStatus = action.payload.status;

      let updatedWishList = state.wishList;
      let updatedSubscribedList = state.subscribedList;

      if (actionStatus.saved) {
        updatedWishList = removeFavourite(
          action.payload.selectedId,
          state.wishList
        );
      } else {
        updatedSubscribedList = removeFavourite(
          action.payload.selectedId,
          state.subscribedList
        );
      }

      return {
        wishList: updatedWishList,
        subscribedList: updatedSubscribedList
      };
  }

  switch (action.type) {
    case actionType.DATA_INSERT:
      const updatedWishList = action.payload.wishList;
      const updatedSubscribedList = action.payload.subscribedList;

      console.log(action.payload)

      return {
        wishList: updatedWishList,
        subscribedList: updatedSubscribedList,
      };
  }
};

export const FavouriteContextProvider = (props) => {
  const [favouriteStatus, dispatchFavourite] = useReducer(
    favouriteReducer,
    defaultState
  );

  return (
    <FavouriteContext.Provider value={{ favouriteStatus, dispatchFavourite }}>
      {props.children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContext;
