import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Question from "../../components/Question/Question";
import Title from "../../components/Title/Title";
import { theme } from "../../theme";
import InputForm from "../InputForm/InputForm";

export default function UserSection () {
  const [way, setWay] = useState<string>("restaurant");

  const handleClick = (wayTemp: string) => {
    setWay(wayTemp);
  }

  return (
    <Grid container>
      <Grid item xs={6}>
        <Button
          fullWidth
          sx={{
            fontSize: "30px",
            color: way === "restaurant" ? theme.palette.secondary.dark : "white",
            backgroundColor: way === "restaurant" ? "white" : theme.palette.secondary.dark,
            "&:hover": {
              color: way === "restaurant" ? theme.palette.secondary.dark : "white",
              backgroundColor: way === "restaurant" ? "white" : theme.palette.secondary.dark,
            }
          }}
          onClick={() => handleClick("restaurant")}
        >
          RESTAURANTE
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          fullWidth
          sx={{
            fontSize: "30px",
            color: way === "delivery" ? theme.palette.secondary.dark : "white",
            backgroundColor: way === "delivery" ? "white" : theme.palette.secondary.dark,
            "&:hover": {
              color: way === "delivery" ? theme.palette.secondary.dark : "white",
              backgroundColor: way === "delivery" ? "white" : theme.palette.secondary.dark,
            }
          }}
          onClick={() => handleClick("delivery")}
        >
          PARA LLEVAR
        </Button>
      </Grid>
      <Grid item xs={12} container direction="column" alignItems="center" justifyContent="center" sx={{ padding: "80px 50px" }}>
        {way === "restaurant" ? (
          <React.Fragment>
            <Grid item sx={{ paddingBottom: "80px" }} container justifyContent="center">
              <Grid item sx={{ paddingBottom: "40px" }}>
                <Title title="EN MESA" backgroundColor="primary.main" />
              </Grid>
              <Grid item xs={12} container spacing={8}>
                <Grid item md={4} xs={12} container justifyContent="center">
                  <Box component="img" src="img/restaurant/R_1.png" sx={{ maxWidth: "100%", height: "auto" }} />
                </Grid>
                <Grid item md={4} xs={12} container justifyContent="center">
                  <Box component="img" src="img/restaurant/R_2.png" sx={{ maxWidth: "100%", height: "auto" }} />
                </Grid>
                <Grid item md={4} xs={12} container justifyContent="center">
                  <Box component="img" src="img/restaurant/R_3.png" sx={{ maxWidth: "100%", height: "auto" }} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ paddingBottom: "80px" }} container justifyContent="center">
              <Title title="PRE-ORDENA" backgroundColor="secondary.main" />
              <Box component="img" src="img/G_4.png" sx={{ width: "100%", height: "100%" }} />
            </Grid>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Grid item sx={{ paddingBottom: "80px" }} container justifyContent="center">
              <Grid item sx={{ paddingBottom: "40px" }}>
                <Title title="TO GO" backgroundColor="primary.main" />
              </Grid>
              <Grid item xs={12} container spacing={8}>
                <Grid item md={4} xs={12} container justifyContent="center">
                  <Box component="img" src="img/delivery/D_1.png" sx={{ maxWidth: "100%", height: "auto" }} />
                </Grid>
                <Grid item md={4} xs={12} container justifyContent="center">
                  <Box component="img" src="img/delivery/D_2.png" sx={{ maxWidth: "100%", height: "auto" }} />
                </Grid>
                <Grid item md={4} xs={12} container justifyContent="center">
                  <Box component="img" src="img/delivery/D_3.png" sx={{ maxWidth: "100%", height: "auto" }} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ paddingBottom: "80px" }} container justifyContent="center">
              <Title title="DELIVERY" backgroundColor="secondary.main" />
              <Box component="img" src="img/G_12_delivery.png" sx={{ width: "100%", height: "100%" }} />
            </Grid>
          </React.Fragment>
        )}
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="flex-start"
        sx={{
          backgroundImage: "linear-gradient(to right, rgba(234,112,96,0.6), rgba(172,82,126,0.4)), url(img/young_woman_phrase.jpg)",
          backgroundPosition: "center center",
        }}
      >
        <Box sx={{ marginTop: "70px", marginBottom: "70px", marginLeft: "40px" }}>
          <Typography sx={{ color: "white", fontSize: "25px", fontWeight: 600, textAlign: "center" }}>También puedes realizar</Typography>
          <Typography sx={{ color: "white", fontSize: "25px", fontWeight: 600, textAlign: "center" }}>tus pedidos para llevar y</Typography>
          <Typography sx={{ color: "white", fontSize: "25px", fontWeight: 600, textAlign: "center" }}>delivery, todo en ¡Guan!</Typography>
        </Box>
      </Grid>
      <Grid item container justifyContent="center" sx={{ paddingTop: "50px" }}>
        <Title title="PREGUNTAS FRECUENTES" backgroundColor="primary.main" />
      </Grid>
      <Grid item container columnSpacing={6} sx={{ padding: "80px 50px" }}>
        <Grid item md={4}>
          <Question
            title="¿Guan ya se encuentra disponible?"
            description="Actualmente estamos terminando la aplicación para móviles antes de su lanzamiento en Google Play y Apple Store"
            colorTitle="primary.main"
          />
        </Grid>
        <Grid item md={4}>
          <Question
            title="¿Guan ya se encuentra disponible?"
            description="Actualmente estamos terminando la aplicación para móviles antes de su lanzamiento en Google Play y Apple Store"
            colorTitle="secondary.dark"
          />
        </Grid>
        <Grid item md={4}>
          <Question
            title="¿Guan ya se encuentra disponible?"
            description="Actualmente estamos terminando la aplicación para móviles antes de su lanzamiento en Google Play y Apple Store"
            colorTitle="secondary.main"
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <InputForm alignment="user" />
      </Grid>
    </Grid>
  );
};
