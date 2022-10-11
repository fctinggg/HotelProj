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
import { CardActionArea } from "@mui/material";
import { useRouter } from "next/router";

const HotelItem = (props) => {
  const router = useRouter();

  const airportService =
    props.popularAmenities.indexOf("airportService") > -1 ? true : false;
  const swimmingPool =
    props.popularAmenities.indexOf("swimmingPool") > -1 ? true : false;
  const parking = props.popularAmenities.indexOf("parking") > -1 ? true : false;
  const smokingArea =
    props.popularAmenities.indexOf("smokingArea") > -1 ? true : false;

  const handleRouteChange = (post_url) => {
    router.push(post_url, undefined, { shallow: true });
  };

  const clickHandler = () => {
    handleRouteChange(`/Hotel/${props.id}`);
    console.log("OK");
  };

  return (
    <>
      <li>
        <Box py={3}>
          <CardActionArea onClick={clickHandler}>
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: "0",
                pt: 3,
                pb: 2,
                justifyContent: "center",
                alignItems: "center",
                minWidth: { md: 800, xs: 300, sm: 400, lg: 1000 },
                maxWidth: { md: 800, xs: 300, sm: 400, lg: 1000 },
              }}
            >
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
                  <Box xs="2px" sx={{ pl: 2 ,pt: 1}}>
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
                <Grid
                  item
                  sx={{
                    justifyContent: { xs: "center", md: "flex-end"},
                    alignItems: { xs: "center" },
                    display: { xs: "flex" },
                    mr: { xs: 0 },
                    pr: {lg: 2}
                  }}
                  md={4}
                  xs={12}
                >
                  <Box
                    sx={{
                      px: 2,
                      justifyContent: { xs: "center" },
                      alignItems: { xs: "center" },
                      display: { xs: "flex", md: "inline" },
                    }}
                  >
                    {parking && (
                      <Grid
                        container
                        item
                        direction="row"
                        sx={{
                          py: 1,
                          justifyContent: { xs: "center", md: "flex-start" },
                          alignItems: { xs: "center" },
                          display: { xs: "flex" },
                        }}
                      >
                        <Grid item>
                          <DirectionsCarOutlinedIcon />
                        </Grid>
                        <Grid item sx={{ pt: 0.5 }}>
                          <div className={classes.reviewsName}>
                            Free Parking:{" "}
                          </div>
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
                      <Grid
                        container
                        item
                        sx={{
                          py: 1,
                          justifyContent: { xs: "center", md: "flex-start" },
                          alignItems: { xs: "center" },
                          display: { xs: "flex" },
                        }}
                      >
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
                          <div className={classes.reviewsName}>
                            Smoking Area:{" "}
                          </div>
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
                      <Grid
                        container
                        item
                        sx={{
                          py: 1,
                          justifyContent: { xs: "center", md: "flex-start" },
                          alignItems: { xs: "center" },
                          display: { xs: "flex" },
                        }}
                      >
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
                          <div className={classes.reviewsName}>
                            Swimming Pool:{" "}
                          </div>
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
                      <Grid
                        container
                        item
                        sx={{
                          py: 1,
                          justifyContent: { xs: "center", md: "flex-start" },
                          alignItems: { xs: "center" },
                          display: { xs: "flex" },
                        }}
                      >
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
                          <div className={classes.reviewsName}>
                            Airport Pickup:{" "}
                          </div>
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
                      item
                      xs={2}
                      md={12}
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
          </CardActionArea>
        </Box>
      </li>
    </>
  );
};

export default HotelItem;
