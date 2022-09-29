import HotelItem from './HotelItem';
import classes from './HotelList.module.css';
import FilterBar from "../ui/FilterBar";
import { Fragment } from "react";

const HotelList = (props) => {
  return (
  <Fragment>
    <FilterBar onFilter={props.onFilter}></FilterBar>
    <ul className={classes.list}>
    {props.hotels.map((hotel) => (
      <HotelItem
        key={hotel.id}
        id={hotel.id}
        hotelName={hotel.hotelName}
        location={hotel.location}
        region={hotel.region}
        openYear={hotel.openYear}
        totalReview={hotel.totalReview}
      />
    ))
    }
  </ul>
  </Fragment>)
}

export default HotelList;