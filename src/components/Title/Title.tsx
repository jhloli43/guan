import { SxProps, Typography } from "@mui/material";
import { theme } from "../../theme";
import { TitleProps } from "./Title.intefaces";

export default function Title({
  backgroundColor = "grey.200",
  title,
  color = "grey.200",
  padding = "10px 20px",
}: TitleProps) {
  const styles: SxProps = {
    padding,
    fontWeight: 600,
    borderRadius: "8px",
    fontSize: "30px",
    backgroundColor,
    color,
    ...(backgroundColor === "inherit" ? {
      border: `2px solid ${theme.palette.grey[200]}`,
    } : {})
  }
  return <Typography sx={styles}>{title}</Typography>;
}
