import beers from "../assets/beers.png"
import randomBeer from "../assets/random-beer.png"
import newBeer from "../assets/new-beer.png"
import { NavLink } from "react-router-dom";

const HomePage = () => {

return (
<div className="cards"> 

  <div className="card">
  <NavLink to="/beers">
    <img src={beers} alt="beerimage" />
    </NavLink>
    <h3>All Beers</h3>
    <p>Go here and you will find all the beers that you ever wanted, the perfect beer is just behind the corner</p>
  </div>

  <div className="card">
  <NavLink to="/random-beer">
    <img src={randomBeer} alt="beerimage" />
    </NavLink>
    <h3>Random Beer</h3>
    <p>Try a random beer. You might like it you might not. No moneyback, needs waiver signed.</p>
  </div>

  <div className="card">
  <NavLink to="/new-beer">
    <img src={newBeer} alt="beerimage" />
    </NavLink>
    <h3>New Beer</h3>
    <p>Add new beer to the collection if you feel like you have something worthy to share</p>
  </div>


</div>
)}


export default HomePage;