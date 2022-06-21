import { Box, SxProps, Typography } from "@mui/material";
import { theme } from "../../theme";
import { QuestionProps } from "./Question.interaces";
import { get } from "lodash";

export default function Question ({
  title,
  backgroundColor = "white",
  colorTitle = "grey.200",
  description,
  padding = "50px 20px",
}: QuestionProps) {
  const border = colorTitle !== theme.palette.grey[50] ? `2px solid ${get(theme.palette, colorTitle, "white")}` : undefined;
  const stylesBox: SxProps = {
    padding: backgroundColor === "white" ? "50px 20px" : "120px 20px",
    backgroundColor: get(theme.palette, backgroundColor, "white"),
    border,
    borderRadius: "25px",
  };

  const stylesTitle: SxProps = {
    fontWeight: 600,
    borderRadius: "8px",
    fontSize: "23px",
    color: get(theme.palette, colorTitle, "white"),
    textAlign: "center",
  };

  const stylesDescription: SxProps = {
    fontSize: "16px",
    marginTop: "20px",
    textAlign: "center",
  };

  return (
    <Box sx={stylesBox}>
      <Typography sx={stylesTitle}>
        {title}
      </Typography>
      {description && <Typography sx={stylesDescription}>{description}</Typography>}
    </Box>
  )
}