import {useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Box from "@mui/material/Box";

const styledbtn = {
  background: '#D0B8A8',
  fontSize: 15,
  '&:hover': {
    color: 'white',
    background: '#DFD3C3'
  }
}

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
  ))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:'black',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const FilterBar = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [filteredRegion, setFilteredRegion] = useState()

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const filterHandler = () => {
    setFilteredRegion('Kowloon')
  }

  console.log(filteredRegion);

  return (
    <div>
      <Box sx={{
            py: 3,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        sx={styledbtn}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Filter by Region
      </Button>
      </Box>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={filterHandler} disableRipple>
          Kowloon
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          New Territeries
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          HongKong Island
        </MenuItem>
      </StyledMenu>

      
    </div>
  );
}

export default FilterBar;