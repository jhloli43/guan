import { Box, Grid, Typography } from "@mui/material";
import BenefitsSection from "../BenefitsSection/BenefitsSection";
import QuestionsSection from "../QuestionsSection/QuestionsSection";
import InputForm from "../InputForm/InputForm";
import Title from "../../components/Title/Title";

export default function BusinessSection () {
  return (
    <Grid container sx={{ paddingTop: "80px" }}>
      <Grid item xs={12} container direction="column" sx={{ paddingBottom: "40px" }}>
        <Grid item container justifyContent="center">
          <Title backgroundColor="secondary.main" title="¿CÓMO FUNCIONA?" />
        </Grid>
        <Grid item>
          <Box component="img" src="img/G_6.png" sx={{ width: "100%", height: "100%" }} />
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        container
        direction="column"
        alignItems="flex-end"
        sx={{
          backgroundImage: "linear-gradient(to right, rgba(250,176,207,0.01), rgba(174,55,108,0.6)), url(img/breakfast_img.jpg)",
          backgroundPosition: "center center",
        }}
      >
        <Box sx={{ padding: "70px 30px" }}>
          <Typography sx={{ color: "white", fontSize: "40px", fontWeight: 600, textAlign: "center" }}>"Disfruta de</Typography>
          <Typography sx={{ color: "white", fontSize: "40px", fontWeight: 600, textAlign: "center" }}>esta nueva</Typography>
          <Typography sx={{ color: "white", fontSize: "40px", fontWeight: 600, textAlign: "center" }}>experiencia"</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <BenefitsSection />
      </Grid>
      <Grid
        item
        xs={12}
        container
        direction="column"
        alignItems="flex-start"
        sx={{
          backgroundImage: "linear-gradient(to right, rgba(174,55,108,0.6) , rgba(250,176,207,0.01)), url(img/girl_laptop_img.jpg)",
          backgroundPosition: "center center",
        }}
      >
        <Box sx={{ marginTop: "70px", marginBottom: "70px", marginLeft: "100px" }}>
          <Typography sx={{ color: "white", fontSize: "50px", fontWeight: 600, textAlign: "center" }}>Todo en</Typography>
          <Typography sx={{ color: "white", fontSize: "50px", fontWeight: 600, textAlign: "center" }}>guan</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <QuestionsSection />
      </Grid>
      <Grid item xs={12}>
        <InputForm alignment="business" />
      </Grid>
    </Grid>
  )
}