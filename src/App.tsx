import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/presentational/Home/Home";
import Navbar from "./components/presentational/NavBar/NavBar";
import PrincipalCharacters from "./components/presentational/PrincipalCharacters/PrincipalCharacters";
import Locations from "./components/presentational/Locations/Locations";
import Episodes from "./components/presentational/Episodes/Episodes";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/protagonistas" element={<PrincipalCharacters />} />
        <Route path="/lugares" element={<Locations />} />
        <Route path="/episodios" element={<Episodes />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
