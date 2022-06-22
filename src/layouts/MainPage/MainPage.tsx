import { AppBar, Box, Button, Grid, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Title from "../../components/Title/Title";
import UserSection from "../UserSection/UserSection";
import BusinessSection from "../BusinessSection/BusinessSection";
import Footer from "../Footer/Footer";

export default function MainPage() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [alignment, setAlignment] = useState("user");

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleChange = (newAlignment: string) => {
    setAlignment(newAlignment);
  };

  const pages = ["inicio", "cómo funciona", `${alignment === "user" ? "pre-ordena" : "beneficios"}`, "preguntas", "regístrate"];

  const backgroundImage = alignment === "user" ? "url(img/home_bar_user_img.jpg)" : "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(img/home_bar_company_img.jpg)";

  return (
    <Grid container direction="column">
      <Grid
        item
        xs={12}
        container
        sx={{
          backgroundImage,
          backgroundPosition: "center",
          padding: "60px",
          opacity: 0.9
        }}>
        <AppBar position="static" elevation={0} sx={{ backgroundColor: "transparent" }}>
          <Toolbar disableGutters>
            <Box component="img" src={alignment === "user" ? "img/logo_guan.png" : "img/logo_guan_grey.png"} width="90px" sx={{ display: { xs: "none", md: "flex" } }} />
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton sx={{ color: "white" }} onClick={handleOpenNavMenu}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box component="img" src="img/logo_guan.svg" width="90px" height="30px" sx={{ display: { xs: "flex", md: "none" } }} />
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "flex-end" }}>
              {pages.map((page) => (
                <Button key={page} onClick={handleCloseNavMenu} sx={{ color: alignment === "user" ? "secondary.dark" : "grey.200", display: "block" }}>
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Grid item xs={12} container alignItems="center" justifyContent="center" sx={{ paddingTop: "80px" }}>
          <Button variant="contained" color="primary" onClick={() => handleChange("user")}>Usuario</Button>
          <Button variant="contained" color="primary" onClick={() => handleChange("business")}>Negocio</Button>
        </Grid>
        <Grid item xs={12} container direction="column" justifyContent="center" alignItems="center" sx={{ paddingTop: "300px" }}>
          <Grid item>
            <Title backgroundColor="primary.main" title="¿Hambre? !Pide lo que quieras de" padding="7px" />
          </Grid>
          <Grid item sx={{ paddingTop: "10px" }}>
            <Title backgroundColor="secondary.main" title="tu restaurante favorito en #Guan" padding="7px" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {alignment === "user" ? <UserSection /> : <BusinessSection />}
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}
