import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useEffect, useState } from "react";
import { TCharacter, TEpisodes } from "../../../types/episodes";
import { TextStyle } from "./Episodes.styled";

function Episodes() {
  const [episodes, setEpisodes] = useState<TEpisodes>([]);
  const [indexEpisode, setIndexEpisode] = useState(0);
  const [open, setOpen] = useState(false);
  const [characters, setCharacters] = useState<TCharacter>([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode`)
      .then((response) => {
        return response.json();
      })
      .then((episode) => {
        setEpisodes(episode.results);
      });
  }, []);
  const handleClick = (e: number) => {
    if (indexEpisode === e) {
      setOpen(!open);
    } else {
      setOpen(true);
    }
    setIndexEpisode(e);
    const episodeId = e;
    fetch(`https://rickandmortyapi.com/api/episode/${episodeId}`)
      .then((response) => response.json())
      .then((data) => {
        const characterIds = data.characters.map((url: string) =>
          parseInt(url?.split("/").pop() || "0")
        );
        fetch(
          `https://rickandmortyapi.com/api/character/${characterIds.toString()}`
        )
          .then((response) => response.json())
          .then((data) => {
            setCharacters(data);
          });
      });
  };

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {episodes.map((element) => {
        return (
          <>
            <ListItemButton
              key={element.id}
              onClick={() => handleClick(element.id)}
            >
              <ListItemText
                key={element.id}
                primary={`${element.episode}  ${element.name}`}
              />
              {open && element.id === indexEpisode ? (
                <ExpandLess />
              ) : (
                <ExpandMore />
              )}
            </ListItemButton>
            <Collapse
              in={open && element.id === indexEpisode}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {characters.length >= 1 &&
                  characters.map((element) => {
                    return (
                      <ListItemButton sx={{ pl: 4 }} key={element.id}>
                        <ListItemIcon>
                          <img src={element.image} height="50px" />
                        </ListItemIcon>
                        <TextStyle
                          primary={element.name}
                          status={element.status}
                        />
                      </ListItemButton>
                    );
                  })}
              </List>
            </Collapse>
          </>
        );
      })}
    </List>
  );
}
export default Episodes;
