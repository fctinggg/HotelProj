import { useContext } from "react";
import cartContext from "../../store/cartContext";
import CartItem from "./CartItem";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import classes from "./CartModal.module.css";
import { useSession } from "next-auth/client";
import Box from "@mui/material/Box";
import Link from "next/link";
import CustomizeIcon from "../ui/CustomizeIcon";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import SegmentOutlinedIcon from "@mui/icons-material/SegmentOutlined";
import FaceOutlinedIcon from "@mui/icons-material/FaceOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import FollowTheSignsOutlinedIcon from "@mui/icons-material/FollowTheSignsOutlined";
import HolidayVillageOutlinedIcon from "@mui/icons-material/HolidayVillageOutlined";
import TextField from "@mui/material/TextField";

const styledBtn = {
  color: "#D0B8A8",
  borderColor: "#D0B8A8",
  fontSize: 10,
  margin: 2,
  "&:hover": {
    color: "#D0B8A8",
    background: "white",
    borderColor: "#D0B8A8",
  },
};

const CartModalContext = (props) => {
  const [session, loading] = useSession();
  const cartCtx = useContext(cartContext);
  const { cartList } = cartCtx.cartStatus;

  const modalClose = () => {
    props.passModalClose();
  };

  return (
    <>
      {props.activeStep === 0 && cartList.length !== 0 && (
        <Box sx={{ px: 2 }}>
          <div>
            <ul className={classes.list}>
              {cartList.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  quantity={item.quantity}
                  roomType={item.roomType}
                  hotelName={item.hotelName}
                  beds={item.beds}
                  selectedDateRange={item.selectedDateRange}
                  smoking={item.smoking}
                  specialMsg={item.specialMsg}
                  onTriggerSnackbar={props.handleSnackbarOpen}
                />
              ))}
            </ul>
          </div>
        </Box>
      )}
      {props.activeStep === 0 && cartList.length === 0 && (
        <Box sx={{ padding: 3, display: "flex", justifyContent: "center" }}>
          <CustomizeIcon
            mainIcon={
              <ShoppingCartOutlinedIcon
                sx={{ fontSize: "200px", color: "#E5E4E2" }}
              />
            }
            secondIcon={
              <SegmentOutlinedIcon
                sx={{ fontSize: "90px", color: "#E5E4E2" }}
              />
            }
            thirdIcon={
              <CardGiftcardOutlinedIcon
                sx={{
                  fontSize: "90px",
                  color: "#E5E4E2",
                  transform: "rotate(320deg)",
                }}
              />
            }
            msg={"Your cart is still empty!"}
          />
        </Box>
      )}

      {props.activeStep === 1 && (
        <Box sx={{ px: 2 }}>
          {!session ? (
            <Grid
              container
              sx={{
                padding: 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CustomizeIcon
                mainIcon={
                  <FollowTheSignsOutlinedIcon
                    sx={{ fontSize: "200px", color: "#E5E4E2" }}
                  />
                }
                secondIcon={
                  <SegmentOutlinedIcon
                    sx={{ fontSize: "90px", color: "#E5E4E2" }}
                  />
                }
                thirdIcon={
                  <HolidayVillageOutlinedIcon
                    sx={{
                      fontSize: "90px",
                      color: "#E5E4E2",
                    }}
                  />
                }
              />
              <Grid>
                <Button
                  size="small"
                  sx={styledBtn}
                  variant="outlined"
                  onClick={modalClose}
                >
                  <Link href="/SignIn">sign in/sign up!</Link>
                </Button>
              </Grid>
            </Grid>
          ) : (
            <Box
              sx={{ pt: 3, pb: 0.5, display: "flex", justifyContent: "center" }}
            >
              <CustomizeIcon
                mainIcon={
                  <FaceOutlinedIcon
                    sx={{ fontSize: "200px", color: "#E5E4E2" }}
                  />
                }
                thirdIcon={
                  <CheckOutlinedIcon
                    sx={{
                      fontSize: "90px",
                      color: "#E5E4E2",
                    }}
                  />
                }
                welcomeMsg={`Account Email: ${session.user.email}`}
              />
            </Box>
          )}
          {/* {session && (
            <Box sx={{ px: 2, pt: 0.5, fontSize: "small" }}>
              Order detail will be sent to your account email, please check your
              email whether valid or not
            </Box>
          )} */}
        </Box>
      )}
      {props.activeStep === 2 && (
        <Box sx={{ px: 2 }}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "20ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <Grid Container sx={{ display: "flex" }} direction="row">
              <Grid item>
                <TextField required id="outlined-required" label="Last Name" />
              </Grid>
              <Grid item>
                <TextField required id="outlined-required" label="First Name" />
              </Grid>
            </Grid>
            <Grid Container sx={{ display: "flex" }} direction="row">
              <Grid item>
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-number"
                  label="Phone Number"
                  type="string"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
    </>
  );
};

export default CartModalContext;
