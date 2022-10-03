import { Fragment } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HotelList from "./HotelList";
import classes from "./AllHotel.module.css";
import FilterButton from "../ui/FilterButton";
import FilterCheckbox from '../ui/FilterCheckbox';

const AllHotelPage = (props) => {
  return (
    <Fragment>
      <div className={classes.container}>
        <FilterButton></FilterButton>
        <FilterCheckbox></FilterCheckbox>
        <Box
          sx={{
            py: 1,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
            <Grid item>
            <Box sx={{px: 2}}>
            <HotelList hotels={props.hotels} amenities={props.amenities}></HotelList>
            </Box>
            </Grid>
        </Box>
      </div>
    </Fragment>
  );
};

export default AllHotelPage;
