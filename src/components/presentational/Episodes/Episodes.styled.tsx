import { ListItemText, Stack, styled } from "@mui/material";

interface Props {
  status: string;
}

export const StackStyled = styled(Stack)(() => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
}));
export const TextStyle = styled(ListItemText)((props: Props) => ({
  color: ` ${props.status === "Alive" ? "green" : "red"}`,
}));
