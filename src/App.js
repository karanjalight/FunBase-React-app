import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';





import {BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import {Home} from "./pages/Home"
import {Menu} from "./pages/Menu"
import {About} from "./pages/About"
import { Navbary} from "./Navbar";
import { Catfact } from './pages/Catfact';


function App() {

 


    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
    />


  

  return (
    
    <div className="App">

  
    <Router>
      <Navbary />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/catfact" element={<Catfact/>} />
      </Routes>
    </Router>







    
      
    </div>
  );
}

export default App;
