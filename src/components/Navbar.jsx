import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/shoppingCartRounded";
import logo from "../assets/Logo.svg";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Contact",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Support",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={logo} alt="image is not showing" />
      </div>
      <div className="navbar-links-container">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
        <a href="">
          <BsCart3 className="navbar-cart-icon" />
        </a>
        <button className="primary-button">Booking Now</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setNavbarOpen(true)} />
      </div>

      <Drawer
        anchor="right"
        open={navbarOpen}
        onClose={() => setNavbarOpen(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setNavbarOpen(false)}
          onKeyDown={() => setNavbarOpen(false)}
        >
          {menuOptions.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
