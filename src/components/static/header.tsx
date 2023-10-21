/**
 *
 * Header of all pages
 *
 */

"use client";

import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
} from "@mui/material";

import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";

import Image from "next/image";
import Logo from "@/assets/img/Logo.svg";

interface Props {
  window?: () => Window;
}

function HeaderComponent(props: Props) {
  const drawerWidth = 240;
  const navItems = ["Home", "About", "Contact"];
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "left" }}>
              <ListItemText className="menu_item" primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <header>
        <CssBaseline />
        <AppBar component="nav" sx={{ backgroundColor: "white" }}>
          <Toolbar sx={{ justifyContent: "space-between", padding: '10px 20px' }}>
            <Image src={Logo.src} alt="Logo" width={100} height={100} />
            <IconButton
              color="inherit"
              className={"icon_menu"}
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#fff" }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "flex", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                justifyContent: "center",
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </header>
    </>
  );
}

export default HeaderComponent;
