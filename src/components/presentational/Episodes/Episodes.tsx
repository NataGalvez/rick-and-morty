import { ExpandLess, ExpandMore } from "@mui/icons-material"
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material"
import { useEffect, useState } from "react"
import { TEpisodes } from "../../../types/episodes"

function Episodes() {
    const [episodes, setEpisodes] = useState<TEpisodes>([])
    const [indexEpisode, setIndexEpisode] = useState(0)
    const [open, setOpen] = useState(false)
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode`)
          .then((response) => {
            return response.json()
          })
          .then((episode) => {
            setEpisodes(episode.results)
           
          })
      }, [])
      const handleClick = (e:number) => {
        setOpen(!open);
        setIndexEpisode(e)
       };
       console.log(episodes)
    return (
        <List
        sx={{ width: '100%',  bgcolor: 'background.paper' }}
      >
         {episodes.map((element,index)=>{
         return (
          <>
          <ListItemButton key={index} onClick={()=>handleClick(index)}>
          <ListItemText  key={index} primary={`${element.episode}  ${element.name}`} />
          {open && index === indexEpisode ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
           {/* <Collapse in={ open && index === indexEpisode} timeout="auto" unmountOnExit>
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
         </Collapse> */}
         </>
  )})}
      </List>
      )
    
  }
  export default Episodes