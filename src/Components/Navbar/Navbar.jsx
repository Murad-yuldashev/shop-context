import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
} from "@mui/material";
import {Link} from 'react-router-dom';

import "./Navbar.css";
import Basket from "../Basket/Basket";
import { Contexts } from "../Context/Context";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbars() {

  const {show, setShow, state} = React.useContext(Contexts);

  return (
    <Box className="menu" sx={{ flexGrow: 1, background: "black" }}>
      <AppBar sx={{ background: "black" }} position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box> 
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <Link to='/'>Shop</Link>
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}> 
            <Link to='/about'>About</Link>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}> 
            <Link to='/contact'>Contact</Link>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}> 
            <Link to='/register'>Register</Link>
          </Box>
          <Search sx={{width: '700px !importent'}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ display: { xs: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              {/* <Badge badgeContent={state.basket?.length } color="error">
                <ShoppingCartIcon onClick={() => setShow(true)} />
              </Badge> */}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {
        <div className={show ? 'showBasketActive' : 'basketBox'}>
          <Basket />
        </div>
      }
    </Box>
  );
}
