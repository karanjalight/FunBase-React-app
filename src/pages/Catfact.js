
import Axios from 'axios'
import { useEffect, useState } from 'react';






export const Catfact = () => {
  const [catFact, setCatFact] = useState('')

  /* to READ data from an API */
  const fetchCatFact = () => {

    Axios.get('https://catfact.ninja/fact').then((res) => {
      setCatFact(res.data.fact)
      });

  }
  useEffect(() => {

    fetchCatFact();
  },  []);




  return (

    <div>
        
      <div className='catFact'>
        
        <h2 > Random Cat Facts</h2>
          <button onClick={fetchCatFact} > Generate Fact</button>
          <h2> {catFact} </h2>
    
        </div>
     
      
    </div>
  )
}