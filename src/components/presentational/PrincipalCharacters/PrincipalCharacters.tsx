import { CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { TPrincipalCharacter } from "../../../types/principalCharacter";
import { CardStyle, StackStyled } from "./PrincipalCharacters.styled";
import Pagination from "@mui/material/Pagination";

function PrincipalCharacters() {
  const [characters, setCharacters] = useState<TPrincipalCharacter>([]);
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => {
        return response.json();
      })
      .then((articulos) => {
        setCharacters(articulos.results);
      });
  }, [page]);
  return (
    <>
      <StackStyled>
        {characters.map((element) => {
          return (
            <CardStyle
              gender={element.gender}
              sx={{
                width: { xs: "100%", md: "17%", lg: "20%" },
                margin: { xs: 10, md: "10px 25px" },
              }}
              key={element.id}
            >
              <CardMedia
                sx={{ height: 250, width: 200, margin: "auto" }}
                image={element.image}
                title="green iguana"
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography gutterBottom variant="h5" component="div">
                  {element.name}
                </Typography>
              </CardContent>
            </CardStyle>
          );
        })}
      </StackStyled>
      <Stack
        spacing={2}
        display="flex"
        justifyContent="center"
        flexDirection="row"
      >
        <Pagination count={10} page={page} onChange={handleChange} />
      </Stack>
    </>
  );
}
export default PrincipalCharacters;
