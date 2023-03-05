import { Menu, styled } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

interface Props {
  selected:boolean
}

export const MenuStyled = styled(Menu)({
    top:'5%',
  });
  export const MenuItemStyled = styled(MenuItem)((props:Props)=>({
    '&..Mui-selected': {
     backgroundColor: 'green'
    },
    
  }));