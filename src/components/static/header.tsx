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
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";

import { useState, useEffect, useRef, Ref, MutableRefObject } from "react";

import MenuIcon from "@mui/icons-material/Menu";

import Image from "next/image";
import Logo from "@/assets/img/Logo.svg";
import LogoNormal from "@/assets/img/mariposa_sin_texto.svg";
import Link from "next/link";

interface Props {
  window?: () => Window;
}


function HeaderComponent(props: Props) {

  const drawerWidth = 240;
  const navItems = ["Home", "QUIÉNES SOMOS", "APICULTURA EN CR", "SOY APICULTOR", "NOTICIAS / FAQS",  "SEAMOS VOZ PARA LAS ABEJAS", "CONTACTO"];
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const container = window !== undefined ? () => window().document.body : undefined;
  const headerElement : MutableRefObject<HTMLElement | null> = useRef(null);

  useEffect(() => {

    if(headerElement){
      const currentHeader = headerElement.current;
      const mainElement : HTMLElement | null  = document.querySelector('main');
      if(currentHeader && mainElement){
        const currentHeaderHeight = currentHeader.offsetHeight;
        mainElement.style.marginTop = `${currentHeaderHeight}px`;
      }
    }

  }, []);


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
        <AppBar component="nav" sx={{ backgroundColor: "white" }} ref={headerElement}>
          <Toolbar 
            sx={{ justifyContent: {
              xs: "space-between",
              md: "center"
            }, 
            padding: '10px 20px',
            gridGap: {
              md: "15px",
              lg: "30px"
            }
          }}
          >

            <Link className="link_escritorio" href="#"> Home </Link>
            <Link className="link_escritorio" href="#">QUIÉNES SOMOS</Link>
            <Link className="link_escritorio" href="#" >APICULTURA EN CR</Link>
            <Link className="link_escritorio" href="#">SOY APICULTOR</Link>

            <Image className="link_mobile" src={Logo.src} alt="Logo" width={100} height={100} />
            <Image className="link_escritorio" src={LogoNormal.src} alt="Logo" width={100} height={100} />

            <Link className="link_escritorio" href="#">NOTICIAS / FAQS</Link>
            <Link className="link_escritorio" href="#">SEAMOS VOZ PARA LAS ABEJAS</Link>
            <Link className="link_escritorio" href="#">CONTACTO</Link>


            <IconButton
              color="inherit"
              className={"icon_menu"}
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            
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
              display: { xs: "flex", lg: "none" },
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
