import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Container,
  Menu,
  MenuItem,
  Tooltip,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";

const pages = [
  { name: "Eventos", path: "/events" },
  // { name: 'Sobre Nosotros', path: '/about-us' },
  { name: "Registrarme", path: "/register" },
  { name: "Blog", path: "" },
  { name: "Tienda", path: "" },
  { name: "Contacto", path: "" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavbarMenu() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickItemMenu = (path) => {
    navigate(path);
  };

  return (
    <AppBar position="sticky" className="bg-black/50 py-3">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobile Navbar */}
          {/* Menu mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={`page-item-${page.name}`}
                  onClick={handleCloseNavMenu}
                >
                  <Typography
                    sx={{ textAlign: "center" }}
                    onClick={() => handleClickItemMenu(page.path)}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Title mobile navbar */}
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to={"/"}>EVENTOS</Link>
          </Typography>

          {/* Desktop Navbar */}
          {/* Title navbar */}
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            className="text-3xl"
          >
            <Link to={"/"}> EVENTOS</Link>
          </Typography>

          {/* Menu desktop */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-evenly",
            }}
          >
            {pages.map((page) => (
              <Typography
                key={`page-item-${page.name}`}
                component="a"
                className="transition-all duration-300 text-white hover:text-itemsMenu hover:shadow-none hover:[text-shadow:_0px_0px_10px_#00ff00] focus:text-itemsMenu focus:[text-shadow:_0px_0px_10px_#00ff00] cursor-pointer mx-4"
                onClick={() => handleClickItemMenu(page.path)}
              >
                {page.name}
              </Typography>
            ))}
          </Box>

          {/* Get Ticket Button */}
          <div className="hidden lg:block">
            <PrimaryButton />
          </div>

          {/* MENU DEL USER
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavbarMenu;
