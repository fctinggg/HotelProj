import HotelItem from './HotelItem';
import classes from './HotelList.module.css';
import { Fragment } from "react";

const HotelList = (props) => {
  const hotels = props.hotels;
  const hotelamenities = props.amenities;

  const formattedHotels = (hotels, hotelamenities) => hotels.map((obj, i) => (
    {
      ...obj,
      hotels: hotelamenities[i]
    }
  ))
  
  const hotelsWithAmen = formattedHotels(hotels, hotelamenities);


  return (
  <Fragment>
    <ul className={classes.list}>
    {hotelsWithAmen.map((hotel) => (
      <HotelItem
        key={hotel.id}
        id={hotel.id}
        hotelName={hotel.hotelName}
        location={hotel.location}
        region={hotel.region}
        openYear={hotel.openYear}
        totalReview={hotel.totalReview}
        popularAmenities={hotel.hotels}
      />
      ))
      }
  </ul>
  </Fragment>)
}

export default HotelList;



{/* {props.amenities.map((hotelamenities) => (
      <HotelItem
        parking={hotelamenities.parking}
        airportService={hotelamenities.airportService}
        swimmingPool={hotelamenities.swimmingPool}
        smokeArea={hotelamenities.smokeArea}
      />
    ))
    } */}