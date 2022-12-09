import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const ListBeer = () => {

const { beerId } = useParams();
// console.log(myParam)


const [beers, setBeers] = useState([])

useEffect(() => {
     axios.get('https://ih-beers-api2.herokuapp.com/beers')
     .then(results => {
        setBeers(results.data);
        console.log(results.data)
     })
     .catch(err => (console.log(err)))
    }, [])

return(

<>
<Navbar />
<h1>List of Beers</h1>
<div className="listBeerCards">
{beers.map((beer) => (
    <div className="beerCard" key={beer._id}>
     <img className="beer-image" src={beer.image_url} alt="beerImage"/>
     <h3>Name: {beer.name}</h3>
     <p>{beer.tagline}</p>
     <p>Created by: {beer.contributed_by}</p>
     <NavLink to={`/beers/${beer._id}`}>
        <button>Details</button>
     </NavLink>
 </div>
))}
</div>

</>

)}

export default ListBeer;