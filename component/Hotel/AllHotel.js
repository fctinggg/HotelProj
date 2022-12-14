import { Fragment } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HotelList from "./HotelList";
import classes from "./AllHotel.module.css";
import FilterButton from "../ui/FilterButton";
import FilterCheckbox from "../ui/FilterCheckbox";

const AllHotelPage = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <Grid container sx={{ justifyContent: "center", alignItems: "center" }}>
          <Grid
            item
            sx={{
              px: 2,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <FilterButton></FilterButton>
          </Grid>
          <Grid
            item
            sx={{
              px: 2,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <FilterCheckbox></FilterCheckbox>
          </Grid>
        </Grid>
        <Box
          sx={{
            py: 1,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Grid item>
            <Box sx={{ px: 2 }}>
              <HotelList></HotelList>
            </Box>
          </Grid>
        </Box>
      </div>
    </Fragment>
  );
};

export default AllHotelPage;
