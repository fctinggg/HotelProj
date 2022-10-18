import classes from './UserProfileLayout.module.css';
import Grid from "@mui/material/Grid";

const UserProfileLayout = (props) => {
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
  )
};

export default UserProfileLayout;