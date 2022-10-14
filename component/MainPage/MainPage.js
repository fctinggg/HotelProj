import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Image from "next/image";
import homepic from "../../img/ilya-ilford-IghyFQxJxzA-unsplash.jpg";
import classes from "./MainPage.module.css";
import SearchBar from "./SearchBar";
import DatePicker from "../ui/DatePicker";
import discountPic from "../../img/A9363279-33AB-495F-A271-221AA5F46A3D.jpg";
import CommonButton from "../ui/CommonButton";
import Link from "next/link";

const styledBtn = {
  background: "#958a99",
  color: "white",
  fontSize: 15,
  margin: 2,
  "&:hover": {
    color: "#958a99",
    background: "white",
  },
};

const MainPage = (props) => {
  const hotelsData = props.hotelsData;

  return (
    <>
      <div className={classes.container}>
        <Box>
          <Card>
            <Grid
              direction="row"
              container
              sx={{ justifyContent: "flex-start", alignItems: "flex-start" }}
            >
              <Grid
                item
                xs={12}
                md={7}
                lg={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Grid
                    container
                    direction="column"
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                    xs={12}
                  >
                    <Grid
                      item
                      sx={{ justifyContent: "center", py: 2, pt: 3 }}
                    >
                      <div className={classes.text}>Ready for search!</div>
                    </Grid>
                    <Grid item>
                      <Card
                        sx={{
                          boxShadow: 3,
                          borderRadius: "3",
                          pt: 3,
                          pb: 2,
                          mb: 5,
                          px: {xs:2, md:1},
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Grid
                          container
                          sx={{
                            justifyContent: "center",
                            alignItems: "center",
                            minWidth: { xs: 100 },
                            maxWidth: { xs: 300, sm:500, md: 470, lg: 500 },
                          }}
                        >
                          <Grid item sx={{ pb: 2 }}>
                            <div className={classes.py}>
                              <SearchBar
                                placeholder="Enter a hotel name"
                                data={hotelsData}
                              ></SearchBar>
                            </div>
                          </Grid>
                          <Grid
                            sx={{ py: 4, borderTop: "0.2px solid #958a99" }}
                          >
                            <DatePicker />
                          </Grid>
                          <Box>
                            <CommonButton
                              size="medium"
                              sx={styledBtn}
                              variant="contained"
                            >
                              <Link href="/Hotel/All">
                                Not yet decided? Click here for all hotel
                              </Link>
                            </CommonButton>
                          </Box>
                        </Grid>
                      </Card>
                    </Grid>
                    <Grid item sx={{pt:3.8, pb: 4}}>
                      <Image
                        className={classes.imgDeco}
                        src={discountPic}
                        alt="HotelImage"
                        width="650px"
                        height="350px"
                        layout="fixed"
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={2}
                lg={6}
                sx={{
                  display: { xs: "none", md: "block" },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Image
                    src={homepic}
                    alt="HotelImage"
                    width="720px"
                    height="810px"
                    layout="fixed"
                  />
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </div>
    </>
  );
};

export default MainPage;

