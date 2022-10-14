import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CircleIcon from "@mui/icons-material/Circle";

const CustomizeIcon = (props) => {
  return (
    <>
      <Box>
        <Grid container>
          <Grid container item position="relative">
            <Button
              disabled
              sx={{
                backgroundColor: "#F5F5F5",
                borderRadius: 1000,
                width: 34,
                py: 18,
                px: 18,
              }}
            />
          </Grid>
          <Grid item sx={{ position: "absolute", py: 6, px: 6 }}>
            {props.mainIcon}
          </Grid>
          <Grid
            item
            sx={{ display: "flex", position: "absolute", pt: 11, px: 0 }}
          >
            {props.secondIcon}
          </Grid>
          <Grid item sx={{ display: "flex", position: "absolute", px: 24 }}>
            {props.thirdIcon}
          </Grid>

          <Grid
            item
            sx={{ display: "flex", position: "absolute", px: 6, pt: 24 }}
          >
            <CircleIcon
              sx={{
                fontSize: "20px",
                color: "#E5E4E2",
              }}
            />
          </Grid>
          <Grid
            item
            sx={{ display: "flex", position: "absolute", px: 4, pt: 24 }}
          >
            <CircleIcon
              sx={{
                fontSize: "30px",
                color: "#E5E4E2",
              }}
            />
          </Grid>
          <Grid
            item
            sx={{ display: "flex", position: "absolute", px: 2, pt: 26 }}
          >
            <CircleIcon
              sx={{
                fontSize: "15px",
                color: "#E5E4E2",
              }}
            />
          </Grid>
          <Grid
            item
            sx={{ display: "flex", position: "absolute", px: 2, pt: 24 }}
          >
            <CircleIcon
              sx={{
                fontSize: "10px",
                color: "#E5E4E2",
              }}
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            pt:1,
            textAlign: "center",
            fontFamily: "Segoe UI",
          }}
        >
          {props.welcomeMsg}
        </Box>
      </Box>
    </>
  );
};

export default CustomizeIcon;
