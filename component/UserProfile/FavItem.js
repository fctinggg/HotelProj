import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import GradeIcon from "@mui/icons-material/Grade";
import WhereToVoteOutlinedIcon from "@mui/icons-material/WhereToVoteOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import Image from "next/image";
import testImg from "../../img/vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg";

const FavItem = (props) => {
  const bestSeller = props.totalReview >= 4;
  const bestLocation = props.review.location >= 4.5;
  const considerate = props.review.service >= 4 && props.review.facilities >= 4;

  const goodValue = props.review.location >= 4 && props.review.cleanliness >= 4;

  return (
    <li>
      <Box sx={{ px: 1, py: 1.5, fontFamily: "Segoe UI" }}>
        <Grid container direction="row">
          <Grid item xs={4}>
            <Box display='flex' justifyContent='center'>
              <Image
                src={testImg}
                alt="TestImage"
                width="150px"
                height="130px"
                layout="intrinsic"
              />
            </Box>
          </Grid>

          <Grid item xs={8}>
            <Grid container direction="column">
              <Grid item sx={{ pb: 1, px: 1, fontWeight: "bold" }}>
                {props.hotelName}
              </Grid>

              <Grid item>
                <Grid container direction="row">
                  {bestSeller && (
                    <Grid item pb={0.5} px={0.5}>
                      <Chip
                        label="Best Seller"
                        size="small"
                        sx={{ backgroundColor: "#FFBF3F", fontSize: "x-small" }}
                      />
                    </Grid>
                  )}
                  {bestLocation && (
                    <Grid item display="inline" pb={0.5} px={0.5} pt={0.2}>
                      <Chip
                        icon={<WhereToVoteOutlinedIcon sx={{ px: 0.3 }} />}
                        label="Best Location"
                        size="small"
                        variant="outlined"
                        sx={{ borderColor: "#cfa1aa", fontSize: "x-small" }}
                      />
                    </Grid>
                  )}
                  {considerate && (
                    <Grid item display="inline" pb={0.5} px={0.5} pt={0.2}>
                      <Chip
                        icon={
                          <VolunteerActivismOutlinedIcon sx={{ px: 0.3 }} />
                        }
                        label="Considerate"
                        size="small"
                        variant="outlined"
                        sx={{ borderColor: "#cfa1aa", fontSize: "x-small" }}
                      />
                    </Grid>
                  )}
                  {goodValue && (
                    <Box display="inline" pb={0.5} px={0.5} pt={0.2}>
                      <Chip
                        icon={<SavingsOutlinedIcon sx={{ px: 0.3 }} />}
                        label="Good Value"
                        size="small"
                        variant="outlined"
                        sx={{ borderColor: "#cfa1aa", fontSize: "x-small" }}
                      />
                    </Box>
                  )}
                </Grid>
              </Grid>

              <Grid item>
                <Grid
                  container
                  direction="column"
                  sx={{ px: 1, fontSize: "x-small" }}
                >
                  <Grid container direction='row'>
                    <Grid item><LocationCityOutlinedIcon sx={{ fontSize: "medium" }} /></Grid>
                    <Grid item px={1}>{props.region}</Grid>
                  </Grid>

                  <Grid container direction='row'>
                  <Grid item><GradeIcon sx={{ fontSize: "medium" }} /></Grid>
                  <Grid item px={1}>{props.totalReview}</Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </li>
  );
};

export default FavItem;
