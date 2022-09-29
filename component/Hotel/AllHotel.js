import { Fragment } from "react";
import HotelList from './HotelList';
import classes from './AllHotel.module.css'

const AllHotelPage = (props) => {
  return (
  <Fragment>
  <div className={classes.container}>
  <HotelList hotels={props.hotels} onFilter={props.onFilter}></HotelList>
  </div>
  </Fragment>)
}

export default AllHotelPage;