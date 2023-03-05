import { CardMedia,styled } from "@mui/material"


interface Props {
  status:string
}

export const ItemStyled = styled(CardMedia)((props:Props)=>({
border:`3px solid ${props.status === 'Alive' ? 'green':'red'}`,
margin:10,
}))
