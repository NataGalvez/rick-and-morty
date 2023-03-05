import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { TLocations } from "../../../types/locations"
import { CardStyle, StackStyled } from "./Locations.styled"


function Locations() {
  const [locations, setLocations] = useState([])
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/location`)
      .then((response) => {
        return response.json()
      })
      .then((articulos) => {
        setLocations(articulos.results)
      })
  }, [page])
  const  indexLocations = (locations:any) => {
    return locations.reduce((acc:any,act:any)=>{
      const {type} = act
      if(!acc[type]){
        acc[type]=[]
      }
      acc[type].push(act)
      return acc
    },{})
  };
  console.log(indexLocations(locations))
    return (
      <div>JSJDSLKDSLKDLK</div>
    
    )
  
}
export default Locations