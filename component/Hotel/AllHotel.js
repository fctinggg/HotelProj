import { Fragment } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HotelList from "./HotelList";
import classes from "./AllHotel.module.css";
import AmenitiesModal from "./AmenitiesModal";
import FilterBar from "../ui/FilterBar";

const AllHotelPage = (props) => {
  return (
    <Fragment>
      <div className={classes.container}>
        <FilterBar filterFunc={props.filterFunc}></FilterBar>
        <Box
          sx={{
            py: 1,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          {/* <Grid container spacing={1} pt={2} pb={2} px={2} py={2} direction="row"> */}
            <Grid item>
            <Box sx={{px: 2}}>
            <HotelList hotels={props.hotels} amenities={props.amenities}></HotelList>
            </Box>
            </Grid>
            {/* <Grid item sx={{ mr: 2 }} >
            <Box sx={{px: 2}}>
            <AmenitiesModal amenities={props.amenities}></AmenitiesModal>
            </Box>
            </Grid> */}
          {/* </Grid> */}
        </Box>
      </div>
    </Fragment>
  );
};

export default AllHotelPage;
