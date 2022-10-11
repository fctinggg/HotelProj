import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Card from "@mui/material/Card";
import classes from "./HotelDetail.module.css";
import testImg from "../../img/fernando-alvarez-rodriguez-M7GddPqJowg-unsplash.jpg";
import Chip from "@mui/material/Chip";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import RatingUI from "../ui/Rating";
import WhereToVoteOutlinedIcon from "@mui/icons-material/WhereToVoteOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import HotelRoomItem from "./HotelRoomItem";
import DatePicker from "../ui/DatePicker";
import DatePickContext from "../../store/datePickContext";
import { useContext } from "react";

const HotelDetail = (props) => {
  const selectedCtx = useContext(DatePickContext);
  console.log("-----------HotelDetail Props-----------");
  console.log(selectedCtx.availableRoomList)

  const bestSeller = props.singleHotelData.totalReview >= 4 ? true : false;
  const bestLocation =
    props.singleHotelData.review.location >= 4.5 ? true : false;
  const considerate =
    props.singleHotelData.review.service >= 4 &&
    props.singleHotelData.review.facilities >= 4
      ? true
      : false;
  const goodValue =
    props.singleHotelData.review.location >= 4 &&
    props.singleHotelData.review.cleanliness >= 4
      ? true
      : false;

  return (
    <>
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
            minWidth: { md: "85%", sm: "85%", lg: 1000 },
            maxWidth: { md: "85%", sm: "85%", lg: 1000 },
          }}
        >
          <Grid container spacing={0} px={2} py={2}>
            <Grid item xs={12}>
              <Box
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Image
                  src={testImg}
                  alt="TestImage"
                  width="890px"
                  height="470px"
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            <Grid container direction="row" justifyContent="space-between">
              <Grid item xs={12} sm={8} md={7}>
                <Grid container px={2} py={1}>
                  <Grid container spacing={0} py={1}>
                    <Grid item sx={{ pt: 0.5, pr: 0.5 }}>
                      <EmojiEventsOutlinedIcon
                        className={classes.icon}
                        sx={{ color: "#FFBF3F" }}
                      />
                    </Grid>
                    {bestSeller && (
                      <Grid item>
                        <Chip
                          label="Best Seller"
                          sx={{ backgroundColor: "#FFBF3F" }}
                        />
                      </Grid>
                    )}
                  </Grid>
                  <Grid container>
                    <Grid item>
                      <Box>
                        {bestLocation && (
                          <Box display="inline" pr={1}>
                            <Chip
                              icon={
                                <WhereToVoteOutlinedIcon sx={{ px: 0.3 }} />
                              }
                              label="Best Location"
                              variant="outlined"
                              sx={{ borderColor: "#cfa1aa" }}
                            />
                          </Box>
                        )}
                        {considerate && (
                          <Box display="inline" pr={1}>
                            <Chip
                              icon={
                                <VolunteerActivismOutlinedIcon
                                  sx={{ px: 0.3 }}
                                />
                              }
                              label="Considerate"
                              variant="outlined"
                              sx={{ borderColor: "#cfa1aa" }}
                            />
                          </Box>
                        )}
                        {goodValue && (
                          <Box display="inline" pr={1}>
                            <Chip
                              icon={<SavingsOutlinedIcon sx={{ px: 0.3 }} />}
                              label="Good Value"
                              variant="outlined"
                              sx={{ borderColor: "#cfa1aa" }}
                            />
                          </Box>
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid item py={1.5} px={0.5}>
                    <Box className={classes.hotelName}>
                      {props.singleHotelData.hotelName}
                    </Box>
                  </Grid>
                  <Grid container>
                    <Box>
                      <LocationCityOutlinedIcon />
                    </Box>
                    <Grid item sx={{ pt: 0.5, pl: 0.5 }}>
                      <Box className={classes.infoFont}>
                        {props.singleHotelData.location}
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid item py={0.5} px={0.5}>
                    <Box className={classes.infoFont}>
                      {props.singleHotelData.region}
                    </Box>
                  </Grid>
                  <Grid container item py={0.5} px={0.5}>
                    <Box className={classes.infoFont}>
                      Since {props.singleHotelData.openYear}
                    </Box>
                  </Grid>
                  <Grid container pt={10} pb={4}>
                    <DatePicker />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={4} md="auto" xs={12} sx={{ pr: { md: 2 } }}>
                <Box sx={{ py: 5, px: 0.5 }}>
                  <div className={classes.reviewsFont}>
                    <Box item py={1}>
                      Cleanliness:
                      <RatingUI
                        rating={props.singleHotelData.review.cleanliness}
                      ></RatingUI>
                    </Box>
                    <Box item py={1}>
                      Location:{" "}
                      <RatingUI
                        rating={props.singleHotelData.review.location}
                      ></RatingUI>
                    </Box>
                    <Box item py={1}>
                      Service:{" "}
                      <RatingUI
                        rating={props.singleHotelData.review.service}
                      ></RatingUI>
                    </Box>
                    <Box item py={1}>
                      Facilities:{" "}
                      <RatingUI
                        rating={props.singleHotelData.review.facilities}
                      ></RatingUI>
                    </Box>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <ul className={classes.list}>
                    {selectedCtx.availableRoomList.map((ele) =>
                      ele.map((roomType) => (
                        <HotelRoomItem
                          roomName={roomType.roomName}
                          beds={roomType.beds}
                          smoking={roomType.smoking}
                          roomAmenities={roomType.roomAmenities}
                          stock={roomType.stock}
                          specialMsg={roomType.specialMsg}
                          key={roomType.roomName}
                        />
                      ))
                    )}
                  </ul>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
};

export default HotelDetail;
