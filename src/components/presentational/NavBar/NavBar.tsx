import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material";
import { MenuItemStyled, MenuStyled } from "./NavBar.styled";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();

  const [itemSelected, setItemSelected] = useState("");

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#333334",
      },
    },
  });
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const goRoute = (url: string) => {
    navigate(`/${url}`);
    setAnchorEl(null);
    setItemSelected(url);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: "flex", cursor: "pointer" }}
            >
              <div onClick={() => goRoute("")}> Rick and Morty app </div>
              <span>
                {itemSelected.length > 0 ? " -" : ""}{" "}
                {itemSelected.length > 0 ? itemSelected : ""}
              </span>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <MenuStyled
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            height: "100vh",
            width: "20ch",
          },
        }}
      >
        <MenuItemStyled
          selected={itemSelected === "protagonistas" ? true : false}
          onClick={() => goRoute("protagonistas")}
        >
          Protagonistas
        </MenuItemStyled>
        <MenuItemStyled
          selected={itemSelected === "lugares" ? true : false}
          onClick={() => goRoute("lugares")}
        >
          Lugares
        </MenuItemStyled>
        <MenuItemStyled
          selected={itemSelected === "episodios" ? true : false}
          onClick={() => goRoute("episodios")}
        >
          Episodios
        </MenuItemStyled>
      </MenuStyled>
    </ThemeProvider>
  );
}
