import { Fragment } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import classes from "./HotelDetailLayout.module.css";


const HotelDetailLayout = (props) => {
  return (
    <Fragment>
      <div className={classes.container}>
        <Grid
          container
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <div>
          </div>
          {props.children}
        </Grid>
      </div>
    </Fragment>
  );
};

export default HotelDetailLayout;
