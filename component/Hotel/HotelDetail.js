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
import { useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/client";
import CartContext from "../../store/cartContext";
import { actionType } from "../../store/actionType";

async function getUserDetail(userId) {
  const response = await fetch("/api/userCart", {
    method: "POST",
    body: JSON.stringify({ userId }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}

const HotelDetail = () => {
  const selectedCtx = useContext(DatePickContext);
  const [userDetail, setUserDetail] = useState();
  const [session, loading] = useSession();
  const cartCtx = useContext(CartContext);
  const { cartList } = cartCtx.cartStatus;
  const { availableRoomList, disableRoomList, originalSelectedHotelsData } =
    selectedCtx.pickedData;

  const bestSeller = false;
  const bestLocation = false;
  const considerate = false;
  const goodValue = false;
  let singleHotelData = [];

  if (originalSelectedHotelsData.length > 0) {
    singleHotelData = originalSelectedHotelsData[0];

    bestSeller = singleHotelData.totalReview >= 4;
    bestLocation = singleHotelData.review.location >= 4.5;
    considerate =
      singleHotelData.review.service >= 4 &&
      singleHotelData.review.facilities >= 4;

    goodValue =
      singleHotelData.review.location >= 4 &&
      singleHotelData.review.cleanliness >= 4;
  }

  useEffect(() => {
    async function submitUserCartHandler() {
      if (cartList.length > 0) {
        if (session) {
          console.log("update useContext list to userCart");
          const userId = session.user.name._id;
          const response = await fetch("/api/userCart", {
            method: "PATCH",
            body: JSON.stringify({ cartList, userId }),
            headers: {
              "Content-Type": "application/json",
            },
          });
        }
      }
      if (cartList.length === 0) {
        if (session) {
          console.log("get userCart insert to useContext");
          const userId = session.user.name._id;
          const result = await getUserDetail(userId);
          const userCart = result.user.cart;
          console.log(userCart);

          cartCtx.dispatchCart({
            type: actionType.DATA_INSERT,
            payload: { userCart },
          });
        }
      }
    }
    submitUserCartHandler();
  }, [cartList, session]);

  return (
    <>
      {originalSelectedHotelsData.length > 0 && (
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
                        {singleHotelData.hotelName}
                      </Box>
                    </Grid>
                    <Grid container>
                      <Box>
                        <LocationCityOutlinedIcon />
                      </Box>
                      <Grid item sx={{ pt: 0.5, pl: 0.5 }}>
                        <Box className={classes.infoFont}>
                          {singleHotelData.location}
                        </Box>
                      </Grid>
                    </Grid>
                    <Grid item py={0.5} px={0.5}>
                      <Box className={classes.infoFont}>
                        {singleHotelData.region}
                      </Box>
                    </Grid>
                    <Grid container item py={0.5} px={0.5}>
                      <Box className={classes.infoFont}>
                        Since {singleHotelData.openYear}
                      </Box>
                    </Grid>
                    <Grid container pt={10} pb={4}>
                      <Box className={classes.dummyFont}>
                        dummy test data: 5 Oct - 10 Oct
                      </Box>
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
                          rating={singleHotelData.review.cleanliness}
                        ></RatingUI>
                      </Box>
                      <Box item py={1}>
                        Location:{" "}
                        <RatingUI
                          rating={singleHotelData.review.location}
                        ></RatingUI>
                      </Box>
                      <Box item py={1}>
                        Service:{" "}
                        <RatingUI
                          rating={singleHotelData.review.service}
                        ></RatingUI>
                      </Box>
                      <Box item py={1}>
                        Facilities:{" "}
                        <RatingUI
                          rating={singleHotelData.review.facilities}
                        ></RatingUI>
                      </Box>
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box>
                    <ul className={classes.list}>
                      {availableRoomList.map((ele) =>
                        ele.map((roomType) => (
                          <HotelRoomItem
                            roomName={roomType.roomName}
                            beds={roomType.beds}
                            smoking={roomType.smoking}
                            roomAmenities={roomType.roomAmenities}
                            stock={roomType.stock}
                            specialMsg={roomType.specialMsg}
                            hotelName={roomType.roomHotel}
                            key={roomType.roomId}
                            id={roomType.roomId}
                          />
                        ))
                      )}
                    </ul>
                  </Box>
                </Grid>
                {/* disable */}
                {disableRoomList && (
                  <Grid item xs={12}>
                    <Box>
                      <ul className={classes.list}>
                        {disableRoomList.map((ele) =>
                          ele.map((roomType) => (
                            <HotelRoomItem
                              roomName={roomType.roomName}
                              beds={roomType.beds}
                              smoking={roomType.smoking}
                              roomAmenities={roomType.roomAmenities}
                              stock={0}
                              specialMsg={roomType.specialMsg}
                              key={roomType.roomName}
                              hotelName={roomType.roomHotel}
                            />
                          ))
                        )}
                      </ul>
                    </Box>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Card>
        </Box>
      )}
    </>
  );
};

export default HotelDetail;
