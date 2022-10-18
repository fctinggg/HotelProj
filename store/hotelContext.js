import { createContext, useReducer, useState } from "react";
import { actionType } from "./actionType";

const HotelContext = createContext();

const filterReducer = (state, action) => {
  // TODO: inappropriate use and syntax of "switch", refer to "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch"
  switch (action.type) {
    case actionType.DATA_INSERT:
      return {
        originalData: action.payload.hotels,
        updatedHotelsList: action.payload.hotels,
        amenitiesCondition: [],
        regionCondition: [],
      };
  }

  switch (action.type) {
    case actionType.REGION_FILTER:
      if (action.payload.region) {
        const regionCondition = action.payload.region;
        const regionUpdatedHotelsList = state.originalData.filter((hotel) =>
          regionCondition.every((val) => hotel.region.indexOf(val) > -1)
        );
        const updatedHotelsList = regionUpdatedHotelsList.filter((hotel) =>
          state.amenitiesCondition.every(
            (val) => hotel.popularAmenities.indexOf(val) > -1
          )
        );
        return {
          ...state,
          updatedHotelsList,
          regionCondition: regionCondition,
        };
      }
  }

  switch (action.type) {
    case actionType.AMENITIES_FILTER:
      if (action.payload.amenities) {
        const amenitiesCondition = action.payload.amenities;
        const regionUpdatedHotelsList = state.originalData.filter((hotel) =>
          state.regionCondition.every((val) => hotel.region.indexOf(val) > -1)
        );
        const updatedHotelsList = regionUpdatedHotelsList.filter((hotel) =>
          amenitiesCondition.every(
            (val) => hotel.popularAmenities.indexOf(val) > -1
          )
        );

        return {
          ...state,
          updatedHotelsList,
          amenitiesCondition: amenitiesCondition,
        };
      }
  }
};

export const HotelContextProvider = (props) => {
  const [filteredData, dispatchFilter] = useReducer(filterReducer, {});

  //派個setHotel出去改Hotel
  return (
    <HotelContext.Provider
      value={{
        filteredData,
        dispatchFilter,
      }}
    >
      {props.children}
    </HotelContext.Provider>
  );
};

export default HotelContext;
