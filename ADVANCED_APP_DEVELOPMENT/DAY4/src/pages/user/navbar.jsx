import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider, Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const theme = createTheme({
  palette: {
    primary: {
      main: "#F3F6F7",
    },
    secondary: {
      main: "#031D44",
    },
  },
});

export default function ButtonAppBar() {
  
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => navigate("/about")}>About</MenuItem>
              <MenuItem onClick={() => navigate("/contact")}>Contact</MenuItem>
            </Menu>
            <Typography
              variant="h3"
              noWrap
              component="a"
              href="/"
              sx={{
                ml: 2,
                fontSize: 50,
                display: { md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              <img src="/src/assets/images/CLERA.png" width={"33%"} alt="Logo"></img>
            </Typography>
            <div style={{ display: 'flex' , marginLeft: 'auto' }}>
              <div>
                <Button
                  key="Login"
                  sx={{
                    fontFamily: "Baskervville', serif",
                    marginRight: "10px",
                  }}
                  color="primary"
                  variant="contained"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              </div>
              <div style={{marginLeft:'25px'}}>
                <Button
                  key="Signup"
                  sx={{
                    fontFamily: "Baskervville', serif",
                    marginLeft: "10px",
                  }}
                  color="primary"
                  variant="contained"
                  onClick={() => navigate("/register")}
                >
                  Signup
                </Button>
              </div>
              <Link to="/profile" style={{ textDecoration: 'none' }}>
              <Avatar
  alt="User Avatar" 
  src="src/assets/images/user3.png" // Replace with the local file path
  sx={{ marginLeft: '25px', cursor: 'pointer'}} // Adjust styling as needed
/>

              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
