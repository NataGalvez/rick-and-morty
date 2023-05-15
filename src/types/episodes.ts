export type TEpisodes = {
  id: number;
  name: string;
  episode: string;
  characters: TCharacter;
}[];
export type TCharacter = {
  id: number;
  name: string;
  image: string;
  gender: string;
  status: string;
}[];
