import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import FaceSharpIcon from "@mui/icons-material/FaceSharp";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useSession } from "next-auth/client";
import FavItem from "./FavItem";
import { useContext } from "react";
import FavouriteContext from "../../store/favouriteContext";
import classes from "./UserProfileLayout.module.css";

const UserProfile = () => {
  const favCtx = useContext(FavouriteContext);
  const { wishList, subscribedList } = favCtx.favouriteStatus;
  const [session, loading] = useSession();

  console.log(subscribedList);

  const changeInfoHandler = () => {
    console.log("123");
  };

  return (
    <>
      <Box
        sx={{
          py: 3,
          px: 3,
          justifyContent: "center",
          alignItems: "flex-start",
          fontFamily: "Segoe UI",
        }}
      >
        <Grid container direction="row">
          {/* User  */}
          <Grid item xs={5}>
            <Grid container direction="column">
              <Card
                sx={{
                  boxShadow: 3,
                  borderRadius: 8,
                  pt: 4,
                  pb: 1,
                  mx: 1,
                }}
              >
                <Box sx={{ px: 4 }}>
                  <Chip
                    sx={{
                      backgroundColor: "#D0B8A8",
                      color: "white",
                      "& .MuiChip-icon": {
                        color: "white",
                      },
                      width: "auto",
                      py: { sm: 2, lm: 1 },
                    }}
                    label="User Profile"
                  />
                </Box>

                <Grid container direction="row" sx={{ py: 1, px: 5 }}>
                  <Grid item xs={6}>
                    <FaceSharpIcon sx={{ fontSize: 100, color: "#E5E4E2" }} />
                  </Grid>
                  <Grid item xs={6} sx={{ color: "#A9A9A9", fontSize: 15 }}>
                    Default Billing Address:
                    <Grid container sx={{ fontSize: 10 , display:'block'}}>
                      <Box>Flat A, 22/F,</Box>
                      <Box>ABC Building,</Box>
                      <Box>Kowloon, Hong Kong</Box>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container direction="column">
                      <Grid item py={0.5}>
                        Username: {session.user.name.name}
                        <Box sx={{ display: "inline", px: 0.5 }}>
                          <ModeEditIcon
                            onClick={changeInfoHandler}
                            sx={{
                              fontSize: "small",
                              color: "#726E6D",
                              cursor: "pointer",
                            }}
                          />
                        </Box>
                      </Grid>
                      <Grid item py={0.5}>
                        Email: {session.user.email}
                      </Grid>
                      <Grid item py={0.5}>
                        Change Password
                        <Box sx={{ display: "inline", px: 0.5 }}>
                          <ModeEditIcon
                            onClick={changeInfoHandler}
                            sx={{
                              fontSize: "small",
                              color: "#726E6D",
                              cursor: "pointer",
                            }}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
              {/* Wish List */}
              <Grid item xs={12} sx={{ py: 2 }}>
                <Card
                  sx={{
                    boxShadow: 3,
                    borderRadius: 8,
                    pt: 4,
                    pb: 3,
                    mx: 1,
                  }}
                >
                  <Box sx={{ px: 5 }}>Your Wish List</Box>
                  <Grid container direction="row" sx={{ py: 1, px: 5 }}>
                    <Grid
                      item
                      xs={12}
                      sx={{ borderTop: "2px solid #D0B8A8" }}
                    ></Grid>
                    <Grid item>
                      <Grid container direction="column">
                        <Grid item>
                          <ul className={classes.list}>
                            {wishList.map((item) => (
                              <FavItem
                                key={item.id}
                                id={item.id}
                                hotelName={item.hotelName}
                                location={item.location}
                                region={item.region}
                                review={item.review}
                                totalReview={item.totalReview}
                              ></FavItem>
                            ))}
                          </ul>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          {/* Subscribed List */}
          <Grid item xs={7}>
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: 8,
                pt: 4,
                pb: 1,
                mx: 1,
              }}
            >
              <Box sx={{ px: 5 }}>Subscribed</Box>
              <Grid container direction="row" sx={{ py: 0.5, px: 5 }}>
                <Grid
                  item
                  xs={12}
                  sx={{
                    py: 0.5,
                    borderTop: "2px solid #D0B8A8",
                    fontWeight: "light",
                    fontSize: "x-small",
                  }}
                >
                  Subscribe for the up-to-date discount
                </Grid>
                <Grid item>
                  <Grid container direction="column">
                    <Grid item>
                      <ul className={classes.list}>
                        {subscribedList.map((item) => (
                          <FavItem
                            key={item.id}
                            id={item.id}
                            hotelName={item.hotelName}
                            location={item.location}
                            region={item.region}
                            review={item.review}
                            totalReview={item.totalReview}
                          ></FavItem>
                        ))}
                      </ul>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default UserProfile;
