import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";




const RandomBeer = () => {

   const [beer, setBeer] = useState([])

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
    .then(results => {
        setBeer(results.data)
        // console.log(results.data)
    })
    .catch(err => console.log(err))
    }, [])
    
    return(
<>
    <Navbar />
    <h1>{beer.name}</h1>
    <img className="beer-image" src={beer.image_url} alt="beerimage" />
    <p>{beer.tagline}</p>
    <p>First brewed: {beer.first_brewed}</p>
    <p>Attenuation level: {beer.attenuation_level}</p>
    <p>{beer.description}</p>
    <p>Contributed by: {beer.contributed_by}</p>
</> 
    )
}


export default RandomBeer;