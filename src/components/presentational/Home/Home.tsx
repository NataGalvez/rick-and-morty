import { useState, useEffect } from "react";
import { ItemStyled } from "./Home.styled";

import { Carousel } from "antd";
import { TCharacters } from "../../../types/home";
function Home() {
  const [articulos, setArticulos] = useState<any>([]);
  const [characters, setCharacters] = useState<TCharacters>([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?species=Human")
      .then((response) => {
        return response.json();
      })
      .then((articulos) => {
        setArticulos(articulos);
        setCharacters(articulos.results);
      });
  }, []);
  const getMoreCharacter = async () => {
    await fetch(
      articulos?.info.next === "null"
        ? "https://rickandmortyapi.com/api/character/?species=Human"
        : articulos?.info.next
    )
      .then((response) => {
        return response.json();
      })
      .then((articulos) => {
        setArticulos(articulos);
        setCharacters(articulos.results);
      });
  };
  setTimeout(() => {
    getMoreCharacter();
  }, 11800);

  return (
    <Carousel autoplay slidesToShow={3} dots={false} autoplaySpeed={500}>
      {characters.map((element, index) => {
        return (
          <ItemStyled status={element.status} key={index}>
            <img src={element.image} width="100%" />
          </ItemStyled>
        );
      })}
    </Carousel>
  );
}
export default Home;
