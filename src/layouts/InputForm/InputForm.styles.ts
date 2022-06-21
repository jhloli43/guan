import { SxProps } from "@mui/material";

export const inputFormStyles: Record<string, SxProps> = {
  titleSection: {
    paddingBottom: "30px",
  },
  label: {
    fontSize: "20px",
    textAlign: "center",
    color: "grey.200",
  },
  fieldSection: {
    paddingBottom: "20px",
  },
  button: {
    backgroundColor: "grey.200",
    color: "secondary.dark",
    padding: "7px 50px",
    fontSize: "20px",
    marginTop: "20px",
    "&:hover": {
      backgroundColor: "grey.200",
      color: "secondary.dark",
    },
  },
  description: {
    color: "grey.200",
    textAlign: "center",
    fontSize: "22px",
  }
}