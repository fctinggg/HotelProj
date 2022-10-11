import { ReportProblem } from "@mui/icons-material";
import { createContext, useReducer, useState } from "react";

const DatePickContext = createContext();

const defaultState = {
  originalSelectedHotelsData: [],
  updatedSelectedHotelsList: [],
  availableRoomList: [],
  selectedStartDate: 'Wed Oct 05 2022'
};

const datePickReducer = (state, action) => {
  if (action.type === "DATA_INSERT") {
    const roomList = action.val
    const availableRoomList = roomList.map((hotel) => hotel.roomTypes.map((roomType) => roomType))

    return {
      selectedStartDate: 'Wed Oct 05 2022',
      originalSelectedHotelsData: action.val,
      updatedSelectedHotelsList: action.val,
      availableRoomList: availableRoomList
    };
  }

  if (action.type === "DATEPICKER_FILTER") {
    if (action.val) {
      const selectedDateRange = action.val.map((date) => {
        return date.toDateString();
      });

      const availableRoomList = state.originalSelectedHotelsData.map((hotel) =>
        hotel.roomTypes.filter((roomType) =>
          selectedDateRange.every(
            (val) => roomType.availableDate.indexOf(val) > -1
          )
        )
      );

      const disableRoomList = state.originalSelectedHotelsData.map((hotel) =>
        hotel.roomTypes.filter((roomType) =>
          selectedDateRange.find(
            (val) => roomType.notAvailableDate.indexOf(val) > -1
          )
        )
      );

      return {
        ...state,
        availableRoomList:availableRoomList,
        selectedStartDate:selectedDateRange[0],
        disableRoomList:disableRoomList
      };
    }
  }
};

export const DatePickContextProvider = (props) => {
  const [pickedData, dispatchPickup] = useReducer(datePickReducer, defaultState);

  const dataHandler = (selectedHotelsDataList) => {
    dispatchPickup({ type: "DATA_INSERT", val: selectedHotelsDataList });
  };

  const datePickerHandler = (dateRange) => {
    dispatchPickup({ type: "DATEPICKER_FILTER", val: dateRange });
  };

  const availableRoomList = pickedData.availableRoomList
  const selectedStartDate = pickedData.selectedStartDate
  const disableRoomList = pickedData.disableRoomList

  return (
    <DatePickContext.Provider
      value={{
        selectedHotelDataHandler: dataHandler,
        onDatePick: datePickerHandler,
        availableRoomList: availableRoomList,
        selectedStartDate: selectedStartDate,
        disableRoomList: disableRoomList,
      }}
    >
      {props.children}
    </DatePickContext.Provider>
  );
};

export default DatePickContext;
