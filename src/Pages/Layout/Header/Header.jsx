import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Badge, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header() {
    const{cart}=useSelector(state=>state.Product)
    const navigate=useNavigate()
  return (
    <AppBar position="fixed">
    <Toolbar>
      <Typography
        variant="h6"
        style={{  textDecoration: "none", color: "white",marginLeft:"10px" }}
        component={Link}
        to="/"
      >
        My Store
      </Typography>
      <Typography
        variant="h6"
        style={{  textDecoration: "none", color: "white",marginLeft:"40px" }}
        component={Link}
        to="/"
      >
        Home
      </Typography>
      <Box sx={{flexGrow:3}}>
       <IconButton color="inherit" onClick={() => navigate("/addcart")} >
        <Badge badgeContent={cart.length}   color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton> 
      </Box>
    </Toolbar>
  </AppBar>

  )
}

export default Header
