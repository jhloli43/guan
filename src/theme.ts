import { createTheme } from "@mui/material";

const customPalette = {
  primary: {
    main: "#FF6A3C",
  },
  secondary: {
    main: "#E20E88",
    dark: "#41274D",
  },
  grey: {
    50: "#FFFFFF",
    100: "#EAF4F9",
    200: "#f9e9e4",
  },
};

export const theme = createTheme({
  palette: customPalette,
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          padding: "10px 20px",
          fontSize: "15px",
          fontWeight: 600,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: "Roboto",
          fontSize: "14px",
          cursor: "pointer",
          color: "rgba(0, 0, 0, 0.87)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: `3px solid ${customPalette.grey[200]}`,
              borderRadius: "10px",
            },
            "&:hover fieldset": {
              border: `3px solid ${customPalette.grey[200]}`,
              borderRadius: "10px",
            },
            "&.Mui-focused fieldset": {
              border: `3px solid ${customPalette.grey[200]}`,
              borderRadius: "10px",
            },
            color: customPalette.grey[200],
          },
        }
      }
    }
  },
  typography: {
    fontFamily: "Open Sans",
  },
});
