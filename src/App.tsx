import { ThemeProvider } from "@emotion/react";
import MainPage from "./layouts/MainPage/MainPage";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
