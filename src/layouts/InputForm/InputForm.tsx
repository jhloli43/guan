import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import Title from "../../components/Title/Title";
import { theme } from "../../theme";
import { inputFormStyles } from "./InputForm.styles";

interface InputFormProps {
  alignment: string;
}

export default function InputForm ({ alignment }: InputFormProps) {
  const { control } = useForm();
  return (
    <form>
      <Grid
        container
        sx={{
          paddingTop: "40px",
          paddingLeft: "140px",
          paddingRight: "140px",
          paddingBottom: "20px",
          background: alignment === "user" ? theme.palette.secondary.dark : "linear-gradient(to left, #FC2797 , #FF6A3C)"
        }}>
        {alignment === "user" ? (
          <React.Fragment>
            <Grid item xs={12} container direction="row" justifyContent="center" sx={inputFormStyles.titleSection}>
              <Title title="REGÍSTRATE" backgroundColor="inherit" />
            </Grid>
            <Grid item xs={12} sx={inputFormStyles.titleSection}>
              <Typography sx={inputFormStyles.description}>Suscríbete y se uno de los primeros en utilizar Guan para</Typography>
              <Typography sx={inputFormStyles.description}>obtener beneficios especiales en nuestro lanzamiento</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={inputFormStyles.fieldSection}
              container
              direction="column"
              alignItems="center"
            >
              <Typography sx={inputFormStyles.label}>Nombre completo</Typography>
              <Controller
                name="fullname"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={inputFormStyles.fieldSection}
              container
              direction="column"
              alignItems="center"
            >
              <Typography sx={inputFormStyles.label}>Correo electrónico</Typography>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                  />
                )}
              />
            </Grid>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Grid item xs={12} container direction="row" justifyContent="center" sx={inputFormStyles.titleSection}>
              <Title title="REGISTRA TU EMPRESA" color="secondary.main" />
            </Grid>
            <Grid
              item
              xs={12}
              sx={inputFormStyles.fieldSection}
              container
              direction="column"
              alignItems="center"
            >
              <Typography sx={inputFormStyles.label}>Nombre del restaurante</Typography>
              <Controller
                name="restaurantName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={inputFormStyles.fieldSection}
              container
              direction="column"
              alignItems="center"
            >
              <Typography sx={inputFormStyles.label}>Nombre del contacto</Typography>
              <Controller
                name="contactName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={inputFormStyles.fieldSection}
              container
              direction="column"
              alignItems="center"
            >
              <Typography sx={inputFormStyles.label}>Correo electrónico</Typography>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={inputFormStyles.fieldSection}
              container
              direction="column"
              alignItems="center"
            >
              <Typography sx={inputFormStyles.label}>Teléfono</Typography>
              <Controller
                name="phoneNumber"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                  />
                )}
              />
            </Grid>
          </React.Fragment>
        )}
        <Grid item xs={12} container justifyContent="center" sx={inputFormStyles.fieldSection}>
          <Button sx={inputFormStyles.button}>ENVIAR</Button>
        </Grid>
      </Grid>
    </form>
  )
}