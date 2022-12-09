import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'

const SingleBeer = () => {

const {beerId} = useParams()

const [beer, setBeer] = useState({})

console.log(beerId)

useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
.then(results => {
    setBeer(results.data)
    console.log(results.data)
})
.catch(err => console.log(err))
}, [])

    return(
<div>
<Navbar />
    <h1>{beer.name}</h1>
    <img className="beer-image" src={beer.image_url} alt="beerimage" />
    <p>{beer.tagline}</p>
    <p>First brewed: {beer.first_brewed}</p>
    <p>Attenuation level: {beer.attenuation_level}</p>
    <p>{beer.description}</p>
    <p>Contributed by: {beer.contributed_by}</p>
</div>

    )
}


export default SingleBeer;