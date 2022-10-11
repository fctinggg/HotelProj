import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Card from "@mui/material/Card";
import testImg from "../../img/vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg";
import classes from "./HotelRoomItem.module.css";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import SmokeFreeOutlinedIcon from "@mui/icons-material/SmokeFreeOutlined";
import SmokingRoomsOutlinedIcon from "@mui/icons-material/SmokingRoomsOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import DryCleaningOutlinedIcon from "@mui/icons-material/DryCleaningOutlined";
import SoapOutlinedIcon from "@mui/icons-material/SoapOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AlarmIcon from "@mui/icons-material/Alarm";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import Chip from "@mui/material/Chip";
import CommonButton from "../ui/CommonButton";
import { useContext } from "react";
import DatePickContext from "../../store/datePickContext";

const styledbtn = {
  borderRadius: "2",
  color: "white",
  width: "70%",
  padding: "3",
  backgroundColor: "#E78A61",
  "&:hover": {
    border: "solid 0.5px",
    borderColor: "#7D6E83",
    background: "Pearl",
    opacity: 0.6,
    color: "#E78A61",
  },
};

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      picBreakPoint: 725,
      xm: 760,
      md: 900,
      lm: 1050,
      lg: 1200,
      xl: 1536,
    },
  },
});

const HotelRoomItem = (props) => {
  const selectedCtx = useContext(DatePickContext)
  const startDate = selectedCtx.selectedStartDate
  console.log(props.stock[startDate])

  const allowSmoke = props.smoking ? 1 : 0;

  const soldOut = props.stock[startDate] == 0 ? true : false;
  const almostSoldOut =
  props.stock[startDate] > 0 && props.stock[startDate] < 10 ? true : false;
  const sufficient = props.stock[startDate] > 10 && props.stock[startDate] < 21 ? true : false;
  const many = props.stock[startDate] > 21 ? true : false;

  const specialMsg = props.specialMsg.length > 0 ? true : false;

  return (
    <li>
      <ThemeProvider theme={theme}>
        <Box py={3}>
          <Card
            sx={{
              boxShadow: 3,
              borderRadius: "0",
              pt: 3,
              pb: 2,
              justifyContent: "center",
              alignItems: "center",
              minWidth: { md: 650, xs: 300, sm: 300, lg: 970 },
              maxWidth: { md: 950, xs: 300, sm: 680, lg: 970 },
            }}
          >
            <Grid container>
              <Grid container px={3} direction="row">
                <Grid
                  item
                  sm={4}
                  xs={12}
                  lg={3.5}
                  sx={{ py: { sm: 3, picBreakPoint: 0 } }}
                >
                  <Box py={1} px={0}>
                    <Image
                      src={testImg}
                      alt="TestImage"
                      width="250px"
                      height="220px"
                      layout="intrinsic"
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  px={2}
                  xs={5}
                  sm={6.5}
                  xm={5}
                  lg={5.5}
                  sx={{ px: { xs: 2, lm: 0 } }}
                >
                  <Grid container sx={{ py: { sm: 3, picBreakPoint: 0 } }}>
                    <Grid item xs={12} py={1}>
                      <Box className={classes.title}>{props.roomName}</Box>
                    </Grid>
                    <Grid container item xs={12} py={1} pt={2}>
                      <Grid item sx={{ display: "inline" }}>
                        <BedOutlinedIcon fontSize="small" />
                      </Grid>
                      <Grid
                        className={classes.info}
                        item
                        sx={{ display: "inline", pt: 0.3, pl: 1 }}
                      >
                        {props.beds}
                      </Grid>
                    </Grid>
                    <Grid container item>
                      {allowSmoke === 0 ? (
                        <>
                          <Grid item sx={{ display: "inline" }}>
                            <SmokeFreeOutlinedIcon fontSize="small" />
                          </Grid>
                          <Grid
                            className={classes.info}
                            item
                            sx={{ display: "inline", pt: 0.3, pl: 1 }}
                          >
                            non-smoking room
                          </Grid>
                        </>
                      ) : (
                        <>
                          <Grid item sx={{ display: "inline" }} sm={1}>
                            <SmokingRoomsOutlinedIcon fontSize="small" />
                          </Grid>
                          <Grid
                            className={classes.info}
                            item
                            sx={{ display: "inline", pt: 0.3, pl: 1 }}
                          >
                            smoking room
                          </Grid>
                        </>
                      )}
                    </Grid>
                    {specialMsg &&
                     (<Grid container item xs={12} py={1} pt={1}>
                        <Chip
                          sx={{
                            backgroundColor: "#E77471",
                            color: "white",
                            "& .MuiChip-icon": {
                              color: "white",
                            },
                            width: "auto",
                            py: { sm: 2, lm: 1 },
                          }}
                          size="small"
                          label={
                            <section className={classes.chipParagraph}>
                              {props.specialMsg}
                            </section>
                          }
                          icon={<CardGiftcardIcon sx={{ color: "white" }} />}
                        />
                      </Grid>
                    )}
                    <Grid container item xs={12} py={1} pt={1}>
                      <Card
                        variant="outlined"
                        sx={{ backgroundColor: "#C48793", color: "white" }}
                      >
                        <Grid container py={1} px={1}>
                          {almostSoldOut && <AlarmIcon fontSize="small" />}
                          <Grid
                            item
                            pl={0.5}
                            pr={0.5}
                            sx={{ fontSize: { xs: "small", md: "medium" } }}
                          >
                            Room remain:
                          </Grid>
                          {soldOut && (
                            <Grid
                              sx={{ fontSize: { xs: "small", md: "medium" } }}
                            >
                              {" "}
                              Sold Out
                            </Grid>
                          )}
                          {almostSoldOut && (
                            <Grid
                              sx={{ fontSize: { xs: "small", md: "medium" } }}
                            >
                              Less than 10
                            </Grid>
                          )}
                          {sufficient && (
                            <Grid
                              sx={{ fontSize: { xs: "small", md: "medium" } }}
                            >
                              Less than 20
                            </Grid>
                          )}
                          {many && (
                            <Grid
                              sx={{ fontSize: { xs: "small", md: "medium" } }}
                            >
                              20+
                            </Grid>
                          )}
                        </Grid>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={3}
                  sm={12}
                  xm={3}
                  lg={3}
                >
                  <Grid container className={classes.amenitiesBox} direction='column'>
                  <Box px={2} py={1}>
                    <Grid container>
                      <Grid item pb={1} xs={12} display="block">
                        Room Amenities:
                      </Grid>
                      <Grid px={0.5}>
                        {props.roomAmenities.LCDTv && <TvOutlinedIcon />}
                      </Grid>
                      <Grid px={0.5}>
                        {" "}
                        {props.roomAmenities.Wi_Fi && <WifiOutlinedIcon />}
                      </Grid>
                      <Grid px={0.5}>
                        {" "}
                        {props.roomAmenities.airCondition && (
                          <AcUnitOutlinedIcon />
                        )}
                      </Grid>
                      <Grid item py={1} xs={12} display="block">
                        Basic Toiletries:
                      </Grid>
                      <Grid>
                        {" "}
                        {props.roomAmenities.basicToiletries && (
                          <>
                            <Box display="inline" px={0.5}>
                              <AirOutlinedIcon />
                            </Box>
                            <Box display="inline" px={0.5}>
                              <DryCleaningOutlinedIcon />
                            </Box>
                            <Box display="inline" px={0.5}>
                              <SoapOutlinedIcon />
                            </Box>

                            {props.roomAmenities.bathtub && (
                              <Box display="inline" px={0.5}>
                                <BathtubOutlinedIcon />
                              </Box>
                            )}

                            {props.roomAmenities.shower && (
                              <Box display="inline" px={0.5}>
                                <ShowerOutlinedIcon />
                              </Box>
                            )}
                          </>
                        )}
                      </Grid>
                    </Grid>
                  </Box>
                  <Grid item><Box py={3}></Box></Grid>
                  </Grid>
                  <Grid item xs={12} py={1} pt={3} px={1} display='flex' justifyContent='right'>
                  <CommonButton sx={styledbtn}>BOOK NOW!</CommonButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </ThemeProvider>
    </li>
  );
};

export default HotelRoomItem;
