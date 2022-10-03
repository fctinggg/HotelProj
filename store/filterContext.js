import React,{useState} from "react";

const FilterContext = React.createContext({
  filteredRegion: '',
  filteredAmenities: '',
  onRegionFilter: (region) => {},
  onAmenitiesFilter: (conditionValue) => {}
});

export const FilterContextProvider = (props) => {
  const [filteredRegion, setFilteredRegion] = useState();
  const [filteredAmenities, setFilteredAmenities] = useState();

  const regionFilterHandler = (region) => {
    console.log(region);
    setFilteredRegion(region);
  };

  const amenitiesFilterHandler = (conditionValue) => {
    console.log(conditionValue);
    setFilteredAmenities(conditionValue);
  };

  return (
    <FilterContext.Provider
      value={{ filteredRegion: filteredRegion, filteredAmenities: filteredAmenities,onRegionFilter: regionFilterHandler, onAmenitiesFilter: amenitiesFilterHandler}}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
