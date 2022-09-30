import { Fragment } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import classes from "./HotelItem.module.css";
import Image from "next/image";
import Card from "@mui/material/Card";
import testImg from "../../img/vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg";
import RatingUI from "../ui/Rating";

const HotelItem = (props) => {

  return (
    <Fragment>
      <li>
        <Box
          sx={{
            py: 3,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Card
            sx={{
              boxShadow: 3,
              borderRadius: "0",
              py: 4,
              minWidth: {md: "95%", sm: 400, lg: 900},
              maxWidth: {md: "95%", sm: 400, lg: 900}
            }}
          >
            <Grid container spacing={3} pt={4} pb={4} px={2} py={2}>
              <Grid item>
                <Box>
                  <div className={classes.imgDiv}>
                    <Image
                      src={testImg}
                      alt="TestImage"
                      width="250px"
                      height="200px"
                      layout="intrinsic"
                    />
                  </div>
                </Box>
              </Grid>
              <Grid item sx={{ mr: 0 }}>
                <Box xs="2px" sx={{px: 2}}>
                  <div>
                    <div className={classes.nameFont}>{props.hotelName}</div>
                    <div className={classes.infoFont}>
                      Open year: {props.openYear}
                    </div>
                    <div className={classes.infoFont}>
                      Location: {props.location}
                    </div>
                    <div className={classes.infoFont}>
                      Region: {props.region}
                    </div>
                    <br></br>
                    <div className={classes.infoFont}>
                      Guest Overall Review:
                      <RatingUI rating={props.totalReview}></RatingUI>
                    </div>
                  </div>
                </Box>
              </Grid>
              <Grid item sx={{ mr: 3 }}>
                <Box sx={{px: 2}}>
                  Hi {props.popularAmenities}
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </li>
    </Fragment>
  );
};

export default HotelItem;
