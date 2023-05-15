import { Menu, styled } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

export const MenuStyled = styled(Menu)({
  top: "5%",
});
export const MenuItemStyled = styled(MenuItem)(() => ({
  "&.Mui-selected": {
    backgroundColor: "#43FF2D",
  },
}));
