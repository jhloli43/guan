import { Grid } from "@mui/material";
import Question from "../../components/Question/Question";
import Title from "../../components/Title/Title";

export default function QuestionsSection () {
  return (
    <Grid container columnSpacing={6} sx={{ padding: "80px 50px" }}>
      <Grid container item xs={12} justifyContent="center" sx={{ paddingBottom: "50px" }}>
        <Title backgroundColor="primary.main" title="PREGUNTAS FRECUENTES" />
      </Grid>
      <Grid item md={4} container direction="column" spacing={3}>
        <Grid item>
          <Question title="¿Cuánto cuesta?" description="¡Guan es gratis!" colorTitle="primary.main" />
        </Grid>
        <Grid item>
          <Question title="¿Cómo realizan los pedidos, mis clientes?" backgroundColor="primary.main" />
        </Grid>
        <Grid item>
          <Question
            title="¿Qué necesito para usar Guan en mi negocio?"
            description="Llena el formulario y en menos de 48 horas recibirás los accesos para unirte a Guan y empezarás tu viaje con nosotros"
            colorTitle="secondary.main"
          />
        </Grid>
      </Grid>

      <Grid item md={4} container direction="column" spacing={3}>
        <Grid item>
          <Question title="¿Seguirá siendo gratis?" backgroundColor="secondary.dark" />
        </Grid>
        <Grid item>
          <Question
            title="¿Cómo recibo los pedidos?"
            description="Cada vez que un cliente realiza un pedido recibes una notificación en nuestra aplicación móvil para meseros, donde pueden gestionar el estado del pedido"
            colorTitle="secondary.dark"
          />
        </Grid>
        <Grid item>
          <Question title="¿Guan ya se encuentra disponible?" backgroundColor="secondary.dark" />
        </Grid>
      </Grid>

      <Grid item md={4} container direction="column" spacing={3}>
        <Grid item>
          <Question
            title="¿Cómo le cobro a mis clientes?"
            description="Puedes seguir usando tus medios de pago habituales, pero próximamente podrás optar por pagos integrales con Tarjetas de Crédito"
            colorTitle="secondary.main"
          />
        </Grid>
        <Grid item>
          <Question title="¿Qué pasa si el cliente quiere hacer cambios al pedido?" backgroundColor="secondary.main" />
        </Grid>
        <Grid item>
          <Question
            title="¿Guan ya se encuentra disponible?"
            description="Actualmente estamos terminando la aplicación para móviles antes de su lanzamiento en Google Play y Apple Store"
            colorTitle="primary.main"
          />
        </Grid>
      </Grid>
    </Grid>
  )
}