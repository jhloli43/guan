import { Grid, SxProps, Typography } from "@mui/material";
import React from "react";
import Title from "../../components/Title/Title";
import { theme } from "../../theme";
import CircleIcon from "@mui/icons-material/Circle";

export default function BenefitsSection() {
  const styleDescription: SxProps = {
    fontSize: "28px",
    fontWeight: 600,
    color: theme.palette.secondary.dark,
    textAlign: "right",
    marginRight: "25px",
  };

  return (
    <Grid container spacing={2} sx={{ padding: "60px 50px" }}>
      <Grid container item xs={12} justifyContent="center" sx={{ paddingBottom: "50px" }}>
        <Title backgroundColor="primary.main" title="BENEFICIOS" />
      </Grid>
      <Grid item md={7}>
        Acá va la imagen
      </Grid>
      <Grid item md={5}>
        <Grid container direction="row" alignItems="center" justifyContent="flex-end" sx={{ paddingBottom: "20px" }}>
          <Grid item md>
            <Typography sx={styleDescription}>
              Mejora la experiencia de tus clientes
            </Typography>
          </Grid>
          <Grid item>
            <CircleIcon color="secondary" />
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" justifyContent="flex-end" sx={{ paddingBottom: "20px" }}>
          <Grid item md>
            <Typography sx={styleDescription}>
              Agiliza tu proceso de atención
            </Typography>
          </Grid>
          <Grid item>
            <CircleIcon color="primary" />
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" justifyContent="flex-end" sx={{ paddingBottom: "20px" }}>
          <Grid item md>
            <Typography sx={styleDescription}>
              Aprovecha los datos para optimizar tu negocio
            </Typography>
          </Grid>
          <Grid item>
            <CircleIcon color="secondary" />
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" justifyContent="flex-end">
          <Grid item md>
            <Typography sx={styleDescription}>
              Integra todos los pagos en línea (pronto)
            </Typography>
          </Grid>
          <Grid item>
            <CircleIcon color="primary" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}