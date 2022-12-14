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
import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import DatePickContext from "../../store/datePickContext";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import CartContext from "../../store/cartContext";
import { actionType } from "../../store/actionType";
import AlertModal from "../ui/AlertModal";
import CustomizeSnackbar from "../ui/Snackbar";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const styledbtn = {
  borderRadius: "2",
  color: "white",
  width: "100%",
  padding: "3",
  backgroundColor: "#E78A61",
  "&:hover": {
    background: "#cf6f46",
    color: "white",
  },
  "&:disabled": {
    border: "solid 0.5px",
    borderColor: "#D3D3D3",
    background: "#D3D3D3",
    opacity: 0.6,
    color: "#8D918D",
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
  const [selectAlert, setSelectAlert] = useState(false);
  const [open, setOpen] = useState(false);
  const cartCtx = useContext(CartContext);
  const selectedCtx = useContext(DatePickContext);
  const { selectedStartDate, selectedDateRange } = selectedCtx.pickedData;

  const specialMsg = props.specialMsg.length > 0;

  let soldOut = false;
  const soldOutStyle = soldOut
    ? { borderColor: "#D3D3D3", backgroundColor: "#D3D3D3", color: "white" }
    : { backgroundColor: "#C48793", color: "white" };

  const stockStatus = [];

  const stock = (startDateStock, dateStock) => {
    if (dateStock == 0) {
      stockStatus.push("Sold out");
      return (soldOut = true);
    }
    if (startDateStock > 0 && startDateStock < 10) {
      stockStatus.push("Less than 10");
    }
    if (startDateStock > 10 && startDateStock < 21) {
      stockStatus.push("Less than 20");
    }
    if (startDateStock > 21) {
      stockStatus.push("20+");
    }
  };

  stock(props.stock[selectedStartDate], props.stock);

  const showStock = stockStatus.map((status) => (
    <>
      <Grid
        item
        pl={0.5}
        pr={0.5}
        sx={{ fontSize: { xs: "small", md: "medium" } }}
      >
        Room remain:
      </Grid>
      <Grid sx={{ fontSize: { xs: "small", md: "medium" } }}>{status}</Grid>
    </>
  ));

  const cartDataPassHandler = () => {
    if (selectedDateRange === undefined) {
      return setSelectAlert(true);
    } else {
      setOpen(true),
        cartCtx.dispatchCart({
          type: actionType.ADD_CART,
          payload: {
            selectedItem: {
              hotelName: props.hotelName,
              roomType: props.roomName,
              beds: props.beds,
              smoking: props.smoking,
              specialMsg: props.specialMsg,
              key: props.id,
              id: props.id,
              selectedDateRange: selectedDateRange,
            },
          },
        });
    }
  };

  const handleClose = () => setSelectAlert(false);

  const handleSnackbarClose = () => setOpen(false);

  return (
    <li>
      <ThemeProvider theme={theme}>
        <Box py={3}>
          <Card
            sx={{
              boxShadow: 0,
              borderRadius: 0,
              borderBottom: "1px dotted grey",
              pt: 2,
              pb: 2,
              justifyContent: "center",
              alignItems: "center",
              minWidth: { md: 650, xs: 300, sm: 300, lg: 970 },
              maxWidth: { md: 950, xs: 500, sm: 680, lg: 970 },
            }}
          >
            {/* alert modal */}
            <AlertModal
              selectAlert={selectAlert}
              onHandleModalClose={handleClose}
            />
            <CustomizeSnackbar
              icon={<AddShoppingCartIcon sx={{ color: "white" }} />}
              message="Added To Cart"
              SnackbarOpen={open}
              onHandleSnackbarClose={handleSnackbarClose}
            />
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
                  xs={12}
                  sm={6.5}
                  xm={5}
                  lg={5.5}
                  sx={{ px: { xs: 2, lm: 0 } }}
                >
                  <Grid
                    container
                    direction="column"
                    sx={{
                      py: { sm: 3, picBreakPoint: 0 },
                    }}
                  >
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
                      {!props.smoking ? (
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
                    {specialMsg && (
                      <Grid container item xs={12} py={1} pt={1}>
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
                    {soldOut && (
                      <Grid container item xs={12} py={1} pt={1}>
                        <Chip
                          sx={{
                            backgroundColor: "#8D918D",
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
                              Sold out? Let's select another day!
                            </section>
                          }
                          icon={
                            <NotificationImportantIcon
                              sx={{ color: "white" }}
                            />
                          }
                        />
                      </Grid>
                    )}
                    <Grid container item xs={12} py={1} pt={1}>
                      <Card variant="outlined" sx={soldOutStyle}>
                        <Grid container py={1} px={1} pr={1.2} pb={1.2}>
                          {stockStatus.indexOf("Less than 10") > -1 ? (
                            <AlarmIcon fontSize="small" />
                          ) : (
                            ""
                          )}
                          {showStock}
                        </Grid>
                      </Card>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid
                        container
                        direction="column"
                        xs={12}
                        md={12}
                        sx={{
                          px: 1,
                          py: 1,
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

                <Grid
                  item
                  xs={3}
                  sm={12}
                  xm={3}
                  lg={3}
                  container
                  direction="column"
                  justifyContent="space-between"
                >
                  <Box px={2} py={1} className={classes.amenitiesBox}>
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
                  <Grid item>
                    <Box py={1}></Box>
                  </Grid>

                  <Grid
                    container
                    direction="column"
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      pb: 1,
                    }}
                  >
                    <Grid sx={{ width: "70%", pt: 2 }}>
                      {soldOut ? (
                        <Button sx={styledbtn} disabled>
                          BOOK NOW!
                        </Button>
                      ) : (
                        <Button
                          sx={styledbtn}
                          onClick={() => {
                            cartDataPassHandler();
                          }}
                        >
                          BOOK NOW!
                        </Button>
                      )}
                    </Grid>
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
