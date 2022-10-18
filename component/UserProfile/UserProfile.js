import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import FaceSharpIcon from '@mui/icons-material/FaceSharp';
import Image from "next/image";
import testImg from "../../img/vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg";
import { useSession } from "next-auth/client";

const UserProfile = () => {
  const [session, loading] = useSession();
  // console.log(session.user)
  return (
    <>
      <Box
        sx={{
          py: 3,
          justifyContent: "center",
          alignItems: "flex-start",
          display: "flex",
          fontFamily: "Segoe UI"
        }}
      >
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
            <Grid item xs={12}>
              <FaceSharpIcon sx={{ fontSize: 100, color: '#E5E4E2' }} />
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item>Username: {session.user.name.name}</Grid>
                <Grid item>Default Email: {session.user.email}</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
        <Card
          sx={{
            boxShadow: 3,
            borderRadius: 8,
            pt: 4,
            pb: 1,
            mx: 1
          }}
        >
          <Box sx={{ px: 5 }}>Saved Hotel</Box>
          <Grid container direction="row" sx={{ py: 1, px: 5 }}>
            <Grid item xs={12}>
              <FaceSharpIcon sx={{ fontSize: 100, color: "grey" }} />
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item>Username: dummy Bill</Grid>
                <Grid item>Default Email: billy@gmail.com</Grid>
                <Grid item>Default Email: billy@gmail.com</Grid>
                <Grid item>Default Email: billy@gmail.com</Grid>
                <Grid item>Default Email: billy@gmail.com</Grid>
                <Grid item>Default Email: billy@gmail.com</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
};

export default UserProfile;
