
import Axios from 'axios'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';



export const Home = () => {

  
  /* this is an app to query an API */
  const [name, setName] = useState("")
  const [age, setAge] = useState(null)

  const fetchAgePrediction = () =>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      console.log(res.data)
      setAge(res.data)
      
    })};
    /* end */  
  
  return (
    <div>

    <Container>

      <div className='AppAgePredictor'>

      <input placeholder='Eg. Mugwe' 
        onChange={(event) =>{
          setName(event.target.value)}
          } />


      <button onClick={fetchAgePrediction}>Predict Age</button>

      <h2> Predicted Name: {age?.name}</h2>
      <h2> Predicted Age: {age?.age}</h2>


      </div>
     
      </Container>
    </div>
  )
}