import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import HotelIcon from "@mui/icons-material/Hotel";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Fragment } from "react";
import Link from "next/link";
import CommonButton from "../ui/CommonButton";
import { useSession, signOut } from 'next-auth/client'


const styledBtn = {
  background: '#D0B8A8',
  color: 'white',
  fontSize: 15,
  margin: 2,
  '&:hover': {
    color: '#D0B8A8',
    background: 'white'
  }
}

const MainNav = () => {
  const [session, loading] = useSession();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function logoutHandler() {
    signOut();
  }


  return (
    <Fragment>
      <AppBar position="sticky" sx={{ bgcolor: "white" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Home/AllH/AU */}
  
            <HotelIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              ></IconButton>
            </Box>
            <Box sx={{ flexGrow: 0, display: "inline-box", px: 2, color: 'black'}}>
                <Link
                  sx={{ my: 2, display: "block" }}
                  href= '/'>
                  Home
                </Link>
            </Box>

            <Box sx={{ flexGrow: 0, color: 'black', display: "inline-box", px: 2}}>
                <Link
                  sx={{ my: 2, display: "block" }}
                  href= '/Hotel/All'>
                  All Hotel
                </Link>
            </Box>

            <Box sx={{ flexGrow: 1, color: 'black', display: "inline-box", px: 2 }}>
                <Link
                  sx={{ my: 2, display: "block" }}
                  href= '/AboutUs'>
                  About Us
                </Link>
            </Box>

            {!session && !loading && 
            <Box>
              <CommonButton size='medium' sx={styledBtn} variant='contained'>
              <Link href='/SignIn'>
                Sign In / Sign Up
              </Link>
              </CommonButton>
            </Box>}

            {session && <Box color="black" sx={{px: 2}}>
              Hello, {session.user.name}
            </Box>}

            {session && <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleIcon fontSize="large" sx={{ color:"black", display: { xs: "none", md: "flex"}, mr: 1}}/>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                  <MenuItem onClick={logoutHandler}>
                  <Box sx={{display: 'block'}}>
                    <Typography textAlign="center">Logout</Typography>
                  </Box>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                  <Box sx={{display: 'block'}}>
                    <Typography textAlign="center">
                    <Link href='/Profile'>
                    Profile
                    </Link></Typography>
                  </Box>  
                  </MenuItem>
              </Menu>
            </Box>}
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  );
};

export default MainNav;
