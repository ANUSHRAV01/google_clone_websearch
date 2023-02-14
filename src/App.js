import React from 'react';
import './App.css';
import Home from "./PAGES/Home";
import Story from './PAGES/Story';
import { BrowserRouter as Router ,Routes ,Route  } from "react-router-dom";
import About from './PAGES/about';
import Gmail from './PAGES/Gmail';
import Images from './PAGES/Images';


function App() {
  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route exact path='/story' element={<Story/>}  this is something/>
          <Route path='/About' element={<About/>}/>
          <Route path='/gmail' element={<Gmail/>}/>
          <Route path='/images' element={<Images/>}/>
        </Routes>
      </Router>
    </div>


  );
}

export default App;
