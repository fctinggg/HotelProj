import { createContext, useState } from "react";

const HotelContext = createContext();

export const HotelContextProvider = (props) => {
  

  // const [selectedRegion, setSelectedRegion] = useState();
  // const [filteredHotels, setFilteredHotels] = useState();

  // console.log(props.hotelsData)
  // const regionFilterHandler = (region) => {
  //   setSelectedRegion(region);
  //   console.log(selectedRegion)
  //   console.log(props)
  // };

  // const applyFilter = () => {
  //   if (selectedRegion) {
  //     const result = hotelsData.filter((hotel) => {
  //       return hotel.region === selectedRegion;
  //     });
  //     setFilteredHotels(result);
  //   }
  //   if (selectedRegion === null) {
  //     const result = hotelsData.filter((hotel) => {
  //       return hotel.region !== selectedRegion;
  //     });
  //     setFilteredHotels(result);
  //   }
  // };
  

  return (<HotelContext.Provider value={{hotelsData: filteredHotels, onRegionFilter: regionFilterHandler}}>
    {props.children}
  </HotelContext.Provider>)
}


export default HotelContext;