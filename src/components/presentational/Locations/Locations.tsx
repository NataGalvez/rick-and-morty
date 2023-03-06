import { StarBorder } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useEffect, useState } from "react"
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { TLocations } from "../../../types/locations";

function Locations() {
  const [locations, setLocations] = useState([])
  const [citys, setCitys] =useState(0)
  const [localidades, setLocalidades] = useState<object>([])
  const [open, setOpen] = useState(false);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/location`)
      .then((response) => {
        return response.json()
      })
      .then((location) => {
        setLocations(location.results)
       
      })
  }, [])
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


  const handleClick = (e:number) => {
    setOpen(!open);
    setCitys(e)
   };

useEffect(()=>{
 setLocalidades(indexLocations(locations))
 
},[open,locations])

    return (
      <List
      sx={{ width: '100%',  bgcolor: 'background.paper' }}
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