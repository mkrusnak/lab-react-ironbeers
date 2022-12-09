import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const NewBeer = () => {

    const navigate = useNavigate();

    // const [name, setName] = useState('')
    // const [tagline, setTagline] = useState('')
    // const [description, setDescription] = useState('')
    // const [firstBrew, setFirstBrew] = useState('')
    // const [attenuation, setAttenuation] = useState(0)
    // const [brewTips, setBrewTips] = useState('')
    // const [contributed, setContributed] = useState('')


    const [state, setState] = useState({
       name: "",
       tagline: "",
       description: "",
       firstBrew: "",
       attenuation: 0,
       brewTips: "",
       contributed: ""
    })


    const updateState = event => setState({
        ...state, 
        [event.target.name] : event.target.value
    })

    const handleSubmit = event => {
        event.preventDefault();
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
          name: state.name,
          tagline: state.tagline,
          attenuation_level: Number(state.attenuation),
          description: state.description,
          first_brewed: state.firstBrew,
          brewers_tips: state.brewTips,
          contributed_by: state.contributed

      })
      .then(results => {
        // console.log(results.data)
        navigate("/");
      })
      .catch(err => console.log(err))
      }
      

    return(
        <>
        <Navbar />
        <div className="AddApartmentPage">
        <h1>Add New Beer</h1>
         <form onSubmit={handleSubmit}>

             <label>Name:</label>
             <input name="name" value={state.name} onChange={updateState}/>

             <label>Tagline:</label>
             <input name="tagline" value={state.tagline} onChange={updateState}/>

             <label>Description:</label>
             <input name="description" value={state.description} onChange={updateState}/>
             
             <label>First Brewed:</label>
             <input name="firstBrew" value={state.firstBrew} onChange={updateState}/>

             <label>Brewers Tips:</label>
             <input name="brewTips" value={state.brewTips} onChange={updateState}/>

             <label>Contributed by:</label>
             <input name="contributed" value={state.contributed} onChange={updateState}/>

             <label>Attenuation level:</label>
             <input name="attenuation" type="number" value={state.attenuation} onChange={updateState}/>

            <button>Confirm</button>
         
         </form>
      </div>
        </>
    )
}

export default NewBeer;