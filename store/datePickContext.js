import { createContext, useReducer, useState } from "react";
import { actionType } from "./actionType";

const DatePickContext = createContext();

const defaultState = {
  originalSelectedHotelsData: [],
  availableRoomList: [],
  selectedStartDate: "Wed Oct 05 2022"
};

const datePickReducer = (state, action) => {
  switch (action.type) {
    case actionType.DATA_INSERT:
      const roomList = action.payload.singleHotel;
      const availableRoomList = roomList.map((hotel) =>
        hotel.roomTypes.map((roomType) => roomType)
      );

      return {
        selectedStartDate: "Wed Oct 05 2022",
        originalSelectedHotelsData: action.payload.singleHotel,
        availableRoomList: availableRoomList
      };
  }

  switch (action.type) {
    case actionType.DATEPICKER_FILTER:
      if (action.payload.dateRange) {
        //dedault select
        let selectedDateRange = ["Wed Oct 05 2022", "Thu Oct 06 2022"];

        if (action.payload.dateRange.length > 1) {
          selectedDateRange = action.payload.dateRange.map((date) => {
            return date.toDateString();
          });
        }

        const getSelectedDate = state.originalSelectedHotelsData.map((hotel) =>
          hotel.roomTypes.filter((roomType) => {
            return selectedDateRange.every(
              (date) => Object.keys(roomType.stock).indexOf(date) > -1
            );
          })
        );

        const getDateWithQuantity = state.originalSelectedHotelsData.map(
          (hotel) =>
            hotel.roomTypes.filter((roomType) => {
              return selectedDateRange.every(
                (date) => roomType.stock[date] > 0
              );
            })
        );

        const getDateWithNotAvailable = state.originalSelectedHotelsData.map(
          (hotel) =>
            hotel.roomTypes.filter((roomType) => {
              return selectedDateRange.find(
                (date) => roomType.stock[date] <= 0
              );
            })
        );

        return {
          ...state,
          availableRoomList: getDateWithQuantity,
          selectedStartDate: selectedDateRange[0],
          disableRoomList: getDateWithNotAvailable,
          selectedDateRange: selectedDateRange,
        };
      }
  }
};

export const DatePickContextProvider = (props) => {
  const [pickedData, dispatchPickup] = useReducer(
    datePickReducer,
    defaultState
  );

  return (
    <DatePickContext.Provider
      value={{
        pickedData,
        dispatchPickup,
      }}
    >
      {props.children}
    </DatePickContext.Provider>
  );
};

export default DatePickContext;
