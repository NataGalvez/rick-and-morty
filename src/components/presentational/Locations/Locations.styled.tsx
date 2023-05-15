import { Card, Stack,styled } from "@mui/material"

interface Props{
  gender: string
}

export const StackStyled = styled(Stack)(()=>({
 display:'flex',
 flexDirection:'row',
 flexWrap:'wrap',
 justifyContent:'center'
 
  }))
  export const CardStyle = styled(Card)((props:Props)=>({
  border: `1px solid ${props.gender === 'Female' ? '#55d33ede': 'none'}`
     }))
     