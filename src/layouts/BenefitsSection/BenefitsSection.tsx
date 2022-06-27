import { Box, Grid } from "@mui/material";
import React from "react";
import Title from "../../components/Title/Title";

export default function BenefitsSection() {
  return (
    <Grid container spacing={2} sx={{ padding: "60px 50px" }}>
      <Grid container item xs={12} justifyContent="center" sx={{ paddingBottom: "50px" }}>
        <Title backgroundColor="primary.main" title="BENEFICIOS" />
      </Grid>
      <Grid item md={12} container spacing={8}>
        <Grid item md={6} xs={12} container justifyContent="center">
          <Box component="img" src="img/benefits/B_1.png" sx={{ maxWidth: "100%", height: "auto" }} />
        </Grid>
        <Grid item md={6} xs={12} container justifyContent="center">
          <Box component="img" src="img/benefits/B_2.png" sx={{ maxWidth: "100%", height: "auto" }} />
        </Grid>
        <Grid item md={6} xs={12} container justifyContent="center">
          <Box component="img" src="img/benefits/B_3.png" sx={{ maxWidth: "100%", height: "auto" }} />
        </Grid>
        <Grid item md={6} xs={12} container justifyContent="center">
          <Box component="img" src="img/benefits/B_4.png" sx={{ maxWidth: "100%", height: "auto" }} />
        </Grid>
      </Grid>
    </Grid>
  )
}