import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import { useRouter } from "next/router";
import Chip from "@mui/material/Chip";
import NightShelterIcon from "@mui/icons-material/NightShelter";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import CartContext from "../../store/cartContext";
import { actionType } from "../../store/actionType.js";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import classes from './CartModal.module.css'

const CartList = (props) => {
  const cartCtx = useContext(CartContext);
  const router = useRouter();
  const handleRouteChange = (post_url) => {
    router.push(post_url, undefined, { shallow: true });
  };

  const clickHandler = () => {
    handleRouteChange(`/Hotel/${props.id}`);
    console.log("OK");
  };

  const itemId = props.id
  const deleteItemHandler = () => {
    props.onTriggerSnackbar()
    cartCtx.dispatchCart({
      type: actionType.REMOVE_CART,
      payload: { itemId },
    })
  };

  const LastIndex = props.selectedDateRange.findLastIndex((ele) => ele);

  console.log(props);
  return (
    <>
      <li>
        <Box py={1}>
          <CardActionArea onClick={clickHandler}>
            <Card sx={{ pt: 3, pb: 2, px: 3, borderRadius: 0 }}>
              <Grid
                container
                sx={{ color: "#43302E", display: "flex" }}
                direction="row"
              >
                <Grid container item sx={{ display: "flex", pb: 1 }} xs={9}>
                  <Grid
                    item
                    xs={12}
                    sx={{ fontSize: "medium", pb: 1, fontWeight: "bold" }}
                  >
                    {props.hotelName}
                  </Grid>
                  {props.specialMsg.length > 0 && (
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
                  <Grid item xs={12} sx={{ fontSize: "small" }}>
                    {props.roomType}
                  </Grid>
                  <Grid item xs={12} sx={{ fontSize: "small" }}>
                    {props.beds}
                  </Grid>
                  <Grid item xs={12} sx={{ fontSize: "small" }}>
                    {props.smoking ? "Smoking Room" : "Non-smoking Room"}
                  </Grid>
                </Grid>

                <Grid
                  container
                  item
                  direction="column"
                  xs={3}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Grid container item xs={4} sx={{ justifyContent: "center" }}>
                    <Chip
                      icon={<NightShelterIcon />}
                      label={`x ${props.quantity}`}
                      sx={{
                        backgroundColor: "#D0B8A8",
                        color: "white",
                        "& .MuiChip-icon": {
                          color: "white",
                        },
                      }}
                    />
                  </Grid>
                </Grid>

                <Grid container direction="row">
                  <Grid
                    container
                    item
                    xs={2}
                    sx={{
                      alignItems: "flex-end",
                      justifyContent: "center",
                      borderTop: "1px solid grey",
                    }}
                  >
                    <DeleteIcon sx={{ mb: 2 }} onClick={deleteItemHandler} />
                  </Grid>
                  <Grid
                    container
                    item
                    direction="column"
                    sx={{
                      borderTop: "1px solid grey",
                      py: 0.5,
                      alignItems: "flex-end",
                      display: "flex",
                    }}
                    xs={9}
                  >
                    <Grid
                      item
                      sx={{
                        alignItems: "flex-end",
                        display: "flex",
                        fontSize: "x-small",
                        py: 0.5,
                      }}
                    >
                      Travel Date:
                    </Grid>
                    <Grid
                      item
                      sx={{
                        alignItems: "flex-end",
                        display: "flex",
                        fontSize: "x-small",
                        fontWeight: "bold",
                      }}
                    >
                      {props.selectedDateRange[0]} -{" "}
                      {props.selectedDateRange[LastIndex]}
                    </Grid>
                    <Grid
                      item
                      sx={{
                        alignItems: "flex-end",
                        display: "flex",
                        fontSize: "x-large",
                        fontWeight: "bold",
                        py: 0.5,
                      }}
                    >
                      ${500 * props.selectedDateRange.length}
                    </Grid>
                    <Grid
                      item
                      sx={{
                        alignItems: "flex-end",
                        display: "flex",
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: "x-small",
                          fontWeight: "light",
                          pb: 0.3,
                          pl: 0.5,
                        }}
                      >
                        ($500/day)
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </CardActionArea>
        </Box>
      </li>
    </>
  );
};

export default CartList;
