import Grid from "@mui/material/Grid";
import classes from "./HotelDetailLayout.module.css";


const HotelDetailLayout = (props) => {
  return (
    <>
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
    </>
  );
};

export default HotelDetailLayout;
