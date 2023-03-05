import './App.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './components/presentational/Home/Home';
import Navbar from './components/presentational/NavBar/NavBar';
import PrincipalCharacters from './components/presentational/PrincipalCharacters/PrincipalCharacters';
import Locations from './components/presentational/Locations/Locations';

function App() {

  return (
    <Router>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/protagonistas" element={<PrincipalCharacters/>} />
      <Route path="/lugares" element={<Locations/>} />
            </Routes>
    </Router>
   
  )
}

export default App

