import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ListBeer from './pages/ListBeer';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import SingleBeer
 from './pages/SingleBeer';
function App() {
  return (
    <div className="App">
    
       <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/beers/:beerId" element={ <SingleBeer />} />
        <Route path="/beers" element={<ListBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
       </Routes>
   
    </div>
  );
}

export default App;
