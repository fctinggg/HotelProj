import { createContext, useReducer } from "react";
import { actionType } from "./actionType";

const FavouriteContext = createContext();

const defaultState = {
  savedList: [],
  likedList: [],
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

      let updatedSavedList = state.savedList;
      let updatedLikedList = state.likedList;

      if (actionStatus.saved) {
        updatedSavedList = addFavourite(
          action.payload.selectedHotel,
          state.savedList
        );
      } else {
        updatedLikedList = addFavourite(
          action.payload.selectedHotel,
          state.likedList
        );
      }

      return {
        savedList: updatedSavedList,
        likedList: updatedLikedList,
      };
  }

  switch (action.type) {
    case actionType.REMOVE_FAVOURITE:
      const actionStatus = action.payload.status;

      let updatedSavedList = state.savedList;
      let updatedLikedList = state.likedList;

      if (actionStatus.saved) {
        updatedSavedList = removeFavourite(
          action.payload.selectedId,
          state.savedList
        );
      } else {
        updatedLikedList = removeFavourite(
          action.payload.selectedId,
          state.likedList
        );
      }

      return {
        savedList: updatedSavedList,
        likedList: updatedLikedList,
      };
  }

  switch (action.type) {
    case actionType.ADD_LIKED:
      const selectedItem = action.payload.selectedHotel;
      const updatedLikedList = state.likedList.concat(selectedItem);

      return {
        ...state,
        likedList: updatedLikedList,
      };
  }

  switch (action.type) {
    case actionType.REMOVE_LIKED:
      const updatedLikedList = state.likedList.filter(
        (item) => item.id.indexOf(action.payload.selectedId) !== 0
      );

      return {
        ...state,
        likedList: updatedLikedList,
      };
  }

  switch (action.type) {
    case actionType.DATA_INSERT:
      const updatedSavedList = action.payload.savedList;

      return {
        ...state,
        savedList: updatedSavedList,
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
