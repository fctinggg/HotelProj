import { useState, useContext } from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/material/Box";
import FilterContext from "../../store/filterContext";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";

const styledbtn = {
  background: "#D0B8A8",
  fontSize: 15,
  "&:hover": {
    color: "white",
    background: "#DFD3C3",
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

const FilterCheckbox = () => {
  const ctx = useContext(FilterContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [savedCondition, setSavedCondition] = useState([]);

  const handleChange1 = (event) => {
    setChecked1(event.target.checked, checked1);
    if (checked1 === false) {
      setSavedCondition((prevState) => [...prevState, "airportService"]);
    }
    if (checked1 === true) {
      setSavedCondition((prevState) =>
        prevState.filter((condition) => condition !== "airportService")
      );
    }
  };

  const handleChange2 = (event) => {
    setChecked2(event.target.checked, checked2);
    if (checked2 === false) {
      setSavedCondition((prevState) => [...prevState, "smokingArea"]);
    }
    if (checked2 === true) {
      setSavedCondition((prevState) =>
        prevState.filter((condition) => condition !== "smokingArea")
      );
    }
  };

  const handleChange3 = (event) => {
    setChecked3(event.target.checked, checked3);
    if (checked3 === false) {
      setSavedCondition((prevState) => [...prevState, "swimmingPool"]);
    }
    if (checked3 === true) {
      setSavedCondition((prevState) =>
        prevState.filter((condition) => condition !== "swimmingPool")
      );
    }
  };

  const handleChange4 = (event) => {
    setChecked4(event.target.checked, checked4);
    if (checked4 === false) {
      setSavedCondition((prevState) => [...prevState, "parking"]);
    }
    if (checked4 === true) {
      setSavedCondition((prevState) =>
        prevState.filter((condition) => condition !== "parking")
      );
    }
  };

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
            px: 2,
            justifyContent: "left",
            alignItems: "left",
            display: "flex",
          }}
        >
          <FormControlLabel
            label="Airport Service"
            control={
              <Checkbox
                checked={checked1}
                onClick={handleChange1}
                inputProps={{ "aria-label": "controlled" }}
                sx={{
                  color: "#7D6E83",
                  "&.Mui-checked": {
                    color: "#7D6E83",
                  },
                }}
              />
            }
          />
        </Box>

        <Box
          sx={{
            py: 1,
            px: 2,
            justifyContent: "left",
            alignItems: "left",
            display: "flex",
          }}
        >
          <FormControlLabel
            label="Smoking Area"
            control={
              <Checkbox
                checked={checked2}
                onClick={handleChange2}
                inputProps={{ "aria-label": "controlled" }}
                sx={{
                  color: "#7D6E83",
                  "&.Mui-checked": {
                    color: "#7D6E83",
                  },
                }}
              />
            }
          />
        </Box>

        <Box
          sx={{
            py: 1,
            px: 2,
            justifyContent: "left",
            alignItems: "left",
            display: "flex",
          }}
        >
          <FormControlLabel
            label="Swimming Pool"
            control={
              <Checkbox
                checked={checked3}
                onClick={handleChange3}
                inputProps={{ "aria-label": "controlled" }}
                sx={{
                  color: "#7D6E83",
                  "&.Mui-checked": {
                    color: "#7D6E83",
                  },
                }}
              />
            }
          />
        </Box>

        <Box
          sx={{
            py: 1,
            px: 2,
            justifyContent: "left",
            alignItems: "left",
            display: "flex",
          }}
        >
          <FormControlLabel
            label="Parking"
            control={
              <Checkbox
                checked={checked4}
                onClick={handleChange4}
                inputProps={{ "aria-label": "controlled" }}
                sx={{
                  color: "#7D6E83",
                  "&.Mui-checked": {
                    color: "#7D6E83",
                  },
                }}
              />
            }
          />
        </Box>
        
        <Box
          sx={{
            py: 1,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Button
            sx={submitBtn}
            onClick={() => {
              ctx.onAmenitiesFilter(savedCondition);
              handleClose();
            }}
          >
            Submit
          </Button>
        </Box>
      </StyledMenu>
    </div>
  );
};

export default FilterCheckbox;
