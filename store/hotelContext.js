import { createContext, useReducer, useState } from "react";

const HotelContext = createContext();

const filterReducer = (state, action) => {
  if (action.type === "DATA_INSERT") {
    return {
      originalData: action.val,
      updatedHotelsList: action.val,
      amenitiesCondition: [],
      regionCondition: [],
    };
  }

  if (action.type === "REGION_FILTER") {
    if (action.val) {
      const regionUpdatedHotelsList = state.originalData.filter((hotel) =>
      action.val.every((val) => hotel.region.indexOf(val) > -1)
      );  
      const updatedHotelsList = regionUpdatedHotelsList.filter((hotel) =>
        state.amenitiesCondition.every(
          (val) => hotel.popularAmenities.indexOf(val) > -1
        )
      );
      return {
        ...state,
        updatedHotelsList,
        regionCondition: action.val,
      };
    }
    // if (action.val === []) {
    //   const regionUpdatedHotelsList = state.originalData.filter((hotel) =>
    //   action.val.every((val) => hotel.region.indexOf(val) > -1)
    //   );      
    //   const updatedHotelsList = regionUpdatedHotelsList.filter((hotel) =>
    //     state.amenitiesCondition.every(
    //       (val) => hotel.popularAmenities.indexOf(val) > -1
    //     )
    //   );

    //   return {
    //     ...state,
    //     updatedHotelsList: updatedHotelsList,
    //   };
    // }
  }

  if (action.type === "AMENITIES_FILTER") {
    if (action.val) {
      const amenitiesCondition = action.val;
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
    // if (action.val === []) {
    //   const regionUpdatedHotelsList = state.originalData.filter((hotel) =>
    //     state.regionCondition.every((val) => hotel.region.indexOf(val) > -1)
    //   );
    //   const updatedHotelsList = regionUpdatedHotelsList.filter((hotel) =>
    //     action.val.every((val) => hotel.popularAmenities.indexOf(val) > -1)
    //   );
    //   console.log(state.regionCondition);
    //   return {
    //     ...state,
    //     updatedHotelsList: updatedHotelsList,
    //     amenitiesCondition: action.val
    //   };
    // }
  }
};

export const HotelContextProvider = (props) => {
  const [filteredData, dispatchFilter] = useReducer(filterReducer, {});

  const dataHandler = (hotelsDataList) => {
    dispatchFilter({ type: "DATA_INSERT", val: hotelsDataList });
  };

  const regionFilterHandler = (region) => {
    dispatchFilter({ type: "REGION_FILTER", val: region });
    console.log(region);
  };

  const amenitiesFilterHandler = (amenitiesCondition) => {
    dispatchFilter({ type: "AMENITIES_FILTER", val: amenitiesCondition });
  };

  console.log("-------------------- condition filtered");
  console.log(filteredData);

  const updatedHotelsData = filteredData.updatedHotelsList;

  //派個setHotel出去改Hotel
  return (
    <HotelContext.Provider
      value={{
        updatedHotelsData: updatedHotelsData,
        dataHandler: dataHandler,
        onRegionFilter: regionFilterHandler,
        onAmenitiesFilter: amenitiesFilterHandler,
      }}
    >
      {props.children}
    </HotelContext.Provider>
  );
};

export default HotelContext;
