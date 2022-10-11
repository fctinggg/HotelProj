import classes from './HotelList.module.css';
import { Fragment, useContext } from "react";
import HotelContext from '../../store/hotelContext';
import HotelItem from './HotelItem';

const HotelList = () => {
  const ctx = useContext(HotelContext);
  const hotels = ctx.updatedHotelsData

  console.log(hotels)

  return (
  <Fragment>
    {ctx.updatedHotelsData && <ul className={classes.list}>
    {hotels.map((hotel) => (
      <HotelItem
        key={hotel._id}
        id={hotel._id}
        hotelName={hotel.hotelName}
        location={hotel.location}
        region={hotel.region}
        openYear={hotel.openYear}
        totalReview={hotel.totalReview}
        popularAmenities={hotel.popularAmenities}
      />
      ))
      }
  </ul>}
  </Fragment>)
}

export default HotelList;

