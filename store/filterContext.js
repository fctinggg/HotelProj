import React,{useState} from "react";

const FilterContext = React.createContext({
  filteredRegion: '',
  onRegionFilter: (region) => {},
});

export const FilterContextProvider = (props) => {
  const [filteredCondition, setFilteredCondition] = useState();

  const filterHandler = (region) => {
    console.log(region);
    setFilteredCondition(region);
  };


  return (
    <FilterContext.Provider
      value={{ filteredRegion: filteredCondition, onRegionFilter: filterHandler }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
