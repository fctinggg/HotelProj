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
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import RatingUI from "../ui/Rating";
import LikeSaveIcon from "../ui/LikeSave";
import { CardActionArea, CardActions } from "@mui/material";
import { useRouter } from "next/router";

const HotelItem = (props) => {
  const router = useRouter();

  const handleRouteChange = (post_url) => {
    router.push(post_url, undefined, { shallow: true });
  };

  const clickHandler = () => {
    handleRouteChange(`/Hotel/${props.id}`);
    console.log("OK");
  };

  const popularAmenities = props.popularAmenities.map((amenities) => (
    <Grid
      container
      item
      direction="row"
      sx={{
        py: 1,
        justifyContent: {
          xs: "center",
          md: "space-between",
        },
        alignItems: { xs: "center" },
        display: { xs: "flex" },
      }}
    >
      <Grid item>
        {amenities === "parking" ? <DirectionsCarOutlinedIcon /> : ""}
        {amenities === "swimmingPool" ? <WavesOutlinedIcon /> : ""}
        {amenities === "airportService" ? <FlightLandOutlinedIcon /> : ""}
        {amenities === "smokingArea" ? <SmokingRoomsOutlinedIcon /> : ""}
      </Grid>
      <Grid item>
        <div className={classes.reviewsName}>{amenities}: </div>
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
  ));

  return (
    <>
      <li>
        <Box py={3}>
          <Card
            sx={{
              fontFamily: "Segoe UI",
              boxShadow: 3,
              borderRadius: "0",
              pt: 3,
              pb: 2,
              justifyContent: "center",
              alignItems: "center",
              minWidth: { md: 800, xs: 300, sm: 400, lg: 900, xl: 1000 },
              maxWidth: { md: 800, xs: 300, sm: 400, lg: 900, xl: 1000 },
            }}
          >
            <CardActionArea onClick={clickHandler}>
              <Grid container spacing={1} px={2} py={1}>
                <Grid
                  item
                  md={3}
                  xs={12}
                  sx={{
                    justifyContent: { xs: "center" },
                    alignItems: { xs: "center" },
                    display: { xs: "flex" },
                  }}
                >
                  <Box pt={0}>
                    <Image
                      src={testImg}
                      alt="TestImage"
                      width="280px"
                      height="260px"
                      layout="intrinsic"
                    />
                  </Box>
                </Grid>
                <Grid item sx={{ mr: 0 }} md={5} xs={12}>
                  <Box xs="2px" sx={{ pl: 2, pt: 1 }}>
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
                <Grid item md={4} xs={12}>
                  <Grid
                    item
                    container
                    direction={{ xs: "row", md: "column" }}
                    sx={{
                      justifyContent: { xs: "center", md: "flex-end" },
                      direction: "column",
                      alignItems: { xs: "center", md: "flex-end" },
                      display: { xs: "flex" },
                      mr: { xs: 0 },
                      pr: { lg: 2 },
                    }}
                  >
                    <Grid
                      item
                      sx={{
                        justifyContent: { xs: "center", md: "flex-end" },
                        alignItems: { xs: "center", md: "flex-end" },
                        display: { xs: "flex", md: "inline" },
                      }}
                      xs={12}
                      md={12}
                    >
                      {popularAmenities}
                    </Grid>
                    <Grid item xs={12}>
                      <Grid
                        container
                        direction="column"
                        xs={12}
                        md={12}
                        sx={{
                          px: 1,
                          py: 2,
                          justifyContent: "flex-end",
                          alignItems: "flex-end",
                        }}
                      >
                        <Grid item sx={{ fontSize: { md: 15, xs: 6 } }}>
                          MEGA SALE
                        </Grid>
                        <Grid item sx={{ fontSize: { md: 25, xs: 14 } }}>
                          $500
                        </Grid>
                        <Grid item sx={{ fontSize: 15 }}>
                          /per night
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardActionArea>
            <Grid
              container
              sx={{
                px: 2,
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Grid item xs={8} sm={9}>
                <Box sx={{ px: 2 }}>Ads</Box>
              </Grid>
              <Grid
                container
                item
                xs={4}
                sm={3}
                sx={{ justifyContent: "flex-end" }}
              >
                <LikeSaveIcon hotel={props}/>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </li>
    </>
  );
};

export default HotelItem;
