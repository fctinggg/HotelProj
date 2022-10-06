import { useState, useContext} from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/material/Box";
import HotelContext from "../../store/hotelContext";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

const styledbtn = {
  background: "#D0B8A8",
  fontSize: 15,
  "&:hover": {
    color: "white",
    background: "#DFD3C3",
  },
};

const styledMenubtn = {
  borderRadius: "2",
  color: "white",
  fontSize: "3px",
  width: "80%",
  padding: "2",
  backgroundColor: '#7D6E83',
  "&:hover": {
    border: "solid 1px",
    borderColor: "#7D6E83",
    background: "Pearl",
    opacity: 0.6,
    color: "#7D6E83"
  },
};

const submitBtn = {
  borderColor: "#958a99",
  border: "solid 1px",
  borderRadius: "0",
  color: "#7D6E83",
  fontSize: "3px",
  width: "30%",
  padding: "0",
  "&:hover": {
    borderColor: "black",
    background: "Pearl",
    opacity: 0.6,
  },
};

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "black",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const FilterButton = () => {
  const ctx = useContext(HotelContext)
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <Box
        sx={{
          py: 3,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Button
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
          sx={styledbtn}
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
          startIcon={<PlaceOutlinedIcon />}
        >
          Filter by Region
        </Button>
      </Box>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
          
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
          <Box
            sx={{
              py: 1,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}>
            <Button
              sx={styledMenubtn}
              onClick={() => {
                ctx.onRegionFilter(['Kowloon']);
                handleClose();
              }}
              value='Kowloon'
            >
              Kowloon
            </Button>
          </Box>
          
          <Box
            sx={{
              py: 1,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}>

            <Button
              sx={styledMenubtn}
              onClick={() => {
                ctx.onRegionFilter(['New Territories']);
                handleClose();
              }}
            >
              New Territories
            </Button>
          </Box>

          <Box
            sx={{
              py: 1,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}>
            <Button
              sx={styledMenubtn}
              onClick={() => {
                ctx.onRegionFilter(['Hong Kong Island']);
                handleClose();
              }}
            >
              Hong Kong Island
            </Button>
          </Box>
        
          <Box
            sx={{
              py: 1,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}>
            <Button
              sx={submitBtn}
              onClick={() => {
                ctx.onRegionFilter([]);
                handleClose();
              }}
            >
              Clean
            </Button>
          </Box>
      </StyledMenu>
    </div>
  );
};

export default FilterButton;
