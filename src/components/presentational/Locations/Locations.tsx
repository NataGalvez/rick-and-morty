import { StarBorder } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import { useEffect, useState } from "react"
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { TLocations } from "../../../types/locations";

function Locations() {
  const [locations, setLocations] = useState([])
  const [citys, setCitys] =useState(0)
  const [page, setPage] = useState(1);
  const [localidades, setLocalidades] = useState<any>([])

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
  const [open, setOpen] = useState(true);

  const handleClick = (e:number) => {
    setOpen(!open);
    setCitys(e)
   };

useEffect(()=>{
 setLocalidades(indexLocations(locations))
 
},[open])

    return (
      <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
    >
       {Object.keys(localidades).map((element,index)=>{
       return (
        <>
        <ListItemButton key={index} onClick={()=>handleClick(index)}>
        <ListItemText  key={index} primary={element} />
        {open && index === citys ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
         <Collapse in={ open && index === citys} timeout="auto" unmountOnExit>
         <List component="div" disablePadding>
          {Object.entries(localidades as object)[citys][1].map((element:TLocations,index:number)=>{
            return (
          <ListItemButton sx={{ pl: 4 }}>
             <ListItemIcon>
               <StarBorder />
             </ListItemIcon>
             <ListItemText key ={index }primary={element.name} />
           </ListItemButton>
            )
          })}
         </List>
       </Collapse>
       </>
)})}
    </List>
    )
  
}
export default Locations