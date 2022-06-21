import { Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import AppleIcon from "@mui/icons-material/Apple";
import AdbIcon from "@mui/icons-material/Adb";

export default function Footer () {
  return (
    <Grid container>
      <Grid item xs={12} container sx={{ padding: "60px" }}>
        <Grid item xs={4} container direction="column" alignItems="center">
          <Typography color="secondary.dark" sx={{ marginBottom: "15px", fontSize: "16px", fontWeight: 600 }}>POLÍTICAS</Typography>
          <Typography color="secondary.dark" sx={{ fontSize: "13px" }}>Términos y condiciones</Typography>
          <Typography color="secondary.dark" sx={{ fontSize: "13px" }}>Políticas de privacidad</Typography>
        </Grid>
        <Grid item xs={4} container direction="column" alignItems="center">
          <Typography color="secondary.dark" sx={{ marginBottom: "15px", fontSize: "16px", fontWeight: 600 }}>CONTACTO</Typography>
          <Typography color="secondary.dark" sx={{ fontSize: "13px" }}>Contacto</Typography>
          <Typography color="secondary.dark" sx={{ fontSize: "13px" }}>Libro de reclamaciones</Typography>
        </Grid>
        <Grid item xs={4} container direction="column" alignItems="center">
          <Typography color="secondary.dark" sx={{ marginBottom: "15px", fontSize: "16px", fontWeight: 600 }}>guan</Typography>
          <Typography color="secondary.dark" sx={{ fontSize: "13px" }}>Trabaja con nosotros</Typography>
          <Typography color="secondary.dark" sx={{ fontSize: "13px" }}>Aliados</Typography>
          <Typography color="secondary.dark" sx={{ fontSize: "13px" }}>Usuarios</Typography>
          <Typography color="secondary.dark" sx={{ fontSize: "13px" }}>Prensa</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ paddingLeft: "40px", paddingRight: "40px", paddingBottom: "40px" }} container>
        <Grid item xs={6} container alignItems="center" justifyContent="center">
          <Typography color="secondary.dark" sx={{ fontSize: "16px", fontWeight: 600 }}>SÍGUENOS EN</Typography>
          <FacebookIcon sx={{ marginLeft: "40px", marginRight: "20px" }} fontSize="large" color="primary" />
          <InstagramIcon fontSize="large" color="primary" />
        </Grid>
        <Grid item xs={6} container alignItems="center" justifyContent="center">
          <Typography color="secondary.dark" sx={{ fontSize: "16px", fontWeight: 600 }}>DESCARGA</Typography>
          <AdbIcon sx={{ marginLeft: "40px", marginRight: "20px" }} fontSize="large" color="primary" />
          <AppleIcon fontSize="large" color="primary" />
        </Grid>
      </Grid>
    </Grid>
  )
}