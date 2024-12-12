import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Abstract from './Pages/Abstract';
import Nature from './Pages/Nature';
import City from './Pages/City';
import 'bootstrap/dist/css/bootstrap.min.css';
import HaloEffect from './Components/VantaBackground';


const App = () => {
  return (
    <Router> 
      <HaloEffect />
      <div>
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/abstract" element={<Abstract />} />  
          <Route path="/nature" element={<Nature />} />  
          <Route path="/city" element={<City />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
