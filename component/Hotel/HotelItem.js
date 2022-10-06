import { Fragment } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import classes from "./HotelItem.module.css";
import Image from "next/image";
import Card from "@mui/material/Card";
import testImg from "../../img/vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import WavesOutlinedIcon from "@mui/icons-material/WavesOutlined";
import FlightLandOutlinedIcon from "@mui/icons-material/FlightLandOutlined";
import SmokingRoomsOutlinedIcon from "@mui/icons-material/SmokingRoomsOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import RatingUI from "../ui/Rating";
import LikeSaveIcon from "../ui/LikeSave";

const HotelItem = (props) => {

  const airportService = props.popularAmenities.indexOf("airportService") > -1 ? true : false;
  const swimmingPool = props.popularAmenities.indexOf("swimmingPool") > -1 ? true : false;
  const parking = props.popularAmenities.indexOf("parking") > -1 ? true : false;
  const smokingArea = props.popularAmenities.indexOf("smokingArea") > -1 ? true : false;

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
              pt: 4,
              pb: 1,
              minWidth: { md: "95%", sm: 400, lg: 900 },
              maxWidth: { md: "95%", sm: 400, lg: 900 },
            }}
          >
            <Grid container spacing={1} pt={4} pb={4} px={2} py={2}>
              <Grid item>
                <Box pt={0}>
                  <div className={classes.imgDiv}>
                    <Image
                      src={testImg}
                      alt="TestImage"
                      width="240px"
                      height="210px"
                      layout="intrinsic"
                    />
                  </div>
                </Box>
              </Grid>
              <Grid item sx={{ mr: 0 }}>
                <Box xs="2px" sx={{ pl: 2 }}>
                  <div>
                    <div className={classes.nameFont}>{props.hotelName}</div>
                    <div className={classes.infoFont}>
                      Open year: {props.openYear}
                    </div>
                    <div className={classes.textbox}>
                      <div className={classes.infoFont}>
                        Location: {props.location}
                      </div>
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
                <Box sx={{ px: 2 }}>
                  {parking && (
                    <Grid container sx={{ py: 1 }}>
                      <Grid
                        item
                        sx={{
                          justifyContent: "left",
                          alignItems: "left",
                          display: "flex",
                        }}
                      >
                        <DirectionsCarOutlinedIcon />
                      </Grid>
                      <Grid item sx={{ pt: 0.5 }}>
                        Free Parking:{" "}
                      </Grid>
                      <Grid
                        item
                        sx={{
                          justifyContent: "left",
                          alignItems: "left",
                          display: "flex",
                          pt: 0.1,
                          px: 1,
                        }}
                      >
                        <DoneOutlinedIcon />
                      </Grid>
                    </Grid>
                  )}

                  {smokingArea && (
                    <Grid container sx={{ py: 1 }}>
                      <Grid
                        item
                        sx={{
                          justifyContent: "left",
                          alignItems: "left",
                          display: "flex",
                        }}
                      >
                        <SmokingRoomsOutlinedIcon />
                      </Grid>
                      <Grid item sx={{ pt: 0.5 }}>
                        Smoking Area:{" "}
                      </Grid>
                      <Grid
                        item
                        sx={{
                          justifyContent: "left",
                          alignItems: "left",
                          display: "flex",
                          pt: 0.1,
                          px: 1,
                        }}
                      >
                        <DoneOutlinedIcon />
                      </Grid>
                    </Grid>
                  )}

                  {swimmingPool && (
                    <Grid container sx={{ py: 1 }}>
                      <Grid
                        item
                        sx={{
                          justifyContent: "left",
                          alignItems: "left",
                          display: "flex",
                        }}
                      >
                        <WavesOutlinedIcon />
                      </Grid>
                      <Grid item sx={{ pt: 0.5 }}>
                        Swimming Pool:{" "}
                      </Grid>
                      <Grid
                        item
                        sx={{
                          justifyContent: "left",
                          alignItems: "left",
                          display: "flex",
                          pt: 0.1,
                          px: 1,
                        }}
                      >
                        <DoneOutlinedIcon />
                      </Grid>
                    </Grid>
                  )}

                  {airportService && (
                    <Grid container sx={{ py: 1 }}>
                      <Grid
                        item
                        sx={{
                          justifyContent: "left",
                          alignItems: "left",
                          display: "flex",
                        }}
                      >
                        <FlightLandOutlinedIcon />
                      </Grid>
                      <Grid item sx={{ pt: 0.5 }}>
                        Airport Pickup:{" "}
                      </Grid>
                      <Grid
                        item
                        sx={{
                          justifyContent: "left",
                          alignItems: "left",
                          display: "flex",
                          pt: 0.1,
                          px: 1,
                        }}
                      >
                        <DoneOutlinedIcon />
                      </Grid>
                    </Grid>
                  )}
                  <Grid
                    container
                    sx={{
                      px: 0,
                      py: 2,
                      justifyContent: "right",
                      alignItems: "right",
                      display: "flex",
                    }}
                  >
                    <LikeSaveIcon />
                  </Grid>
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
